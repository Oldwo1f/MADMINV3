var moment = require('moment');
var http = require('http');
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require("fs"));
var request = require('request');
var google = require('googleapis'), 

analytics = google.analytics({ version: 'v3'})


// var GA = require('googleanalytics'),
// config = {
//         "user": "alexismomcilovic@gmail.com",
//         "password": "Alexis09"
//     },
// ga = new GA.GA(config);

module.exports={

	analytics:function(req,res) { 
		if(!req.params.metrics || !sails.config.GOOGLE_ANALYTICS_ID)
		{
			return res.status(400).send('error')
		}else{

			var dateStart = '',dateEnd='';
			switch(req.params.period){
				case 'month':
					dateStart= moment().startOf(req.params.period).format('YYYY-MM-DD')
					dateEnd= moment().format('YYYY-MM-DD')
				break;
				case 'lastmonth':
					dateStart= moment().subtract(1,'M').startOf('month').format('YYYY-MM-DD')
					dateEnd= moment().subtract(1,'month').endOf('month').format('YYYY-MM-DD')

				break;
				case 'year':
					dateStart= moment().startOf(req.params.period).format('YYYY-MM-DD')
					dateEnd= moment().format('YYYY-MM-DD')
				break;
				case 'week':
					dateStart= moment().startOf(req.params.period).format('YYYY-MM-DD')
					dateEnd= moment().format('YYYY-MM-DD')
				break;
				case 'lastweek':
					dateStart= moment().subtract(1,'weeks').startOf('week').format('YYYY-MM-DD')
					dateEnd= moment().subtract(1,'weeks').endOf('week').format('YYYY-MM-DD')

				break;
			}

			var jwtClient = new google.auth.JWT(
		    sails.config.key.client_email,
		    null,
		    sails.config.key.private_key,
		    ['https://www.googleapis.com/auth/analytics.readonly'],
		    null)

		

				async.parallel({
					count:function (cb) {
						analytics.data.ga.get({
						  'ids': 'ga:'+sails.config.GOOGLE_ANALYTICS_ID,
						  'start-date': dateStart,
						  'end-date': dateEnd,
						  'metrics': 'ga:sessions,ga:pageviews,ga:users,ga:percentNewSessions,ga:avgSessionDuration,ga:bounceRate,ga:pageviewsPerSession',
						  auth: jwtClient
						}, function (err, resp) {

						    cb(null,resp.totalsForAllResults)
					    })
					
					},
					graph:function (cb) {
						var	dimention = 'ga:date';
						if(req.params.period=='year')
							dimention = 'ga:month';
						   
						analytics.data.ga.get({
						  'ids': 'ga:'+sails.config.GOOGLE_ANALYTICS_ID,
						  'start-date': dateStart,
						  'end-date': dateEnd,
						  'dimensions': dimention,
						  'metrics': req.params.metrics,
						  auth: jwtClient
						}, function (err, resp) {

						    cb(null,resp.rows)
					    })
					}
				},function  (err, results) {
					res.send(results)
				})

	
		}
		
	},
	countAll:function(req,res) {
		return Promise.bind({})
			.then(function (){
				this.results={};
			    return Article.count()
			})
			.then(function (previousCount){
				this.results.articles=previousCount
			    return Project.count()
			})
			.then(function (previousCount){
				this.results.projects=previousCount
			    return Document.count()
			})
			.then(function (previousCount){
				this.results.documents=previousCount
			    return Comment.count()
			})
			.then(function (previousCount){
				this.results.comments=previousCount
			    return Reponse.count()
			})
			.then(function (previousCount){
				this.results.comments= this.results.comments + previousCount
			    return Tag.count()
			})
			.then(function (previousCount){
				this.results.tags=previousCount
			    return Image.count()
			})
			.done(function (previousCount) {
				this.results.images=previousCount
				res.status(200).send(this.results)
			},function(e) {
				res.status(400).send(e)
			});
	},
	getBestBlogger:function(req,res) {
		
			Article.native(function(err,collection) {

			    collection.aggregate(
			        [
			        	
			            { "$group": {
			                "_id": "$author",
			                "count": { "$sum": 1 },
			            	}
			        	}
			        ],
			        function(err,results) {
			        	async.map(results,function (item,cb) {
			        	
			        		User.findOne(String(item._id)).exec(function (err,data) {
			        			if(err || typeof(data)==="undefined"){

			        				cb(err)
			        			}
			        			else{

				            	item.label = data.pseudo;
				            	item.value = item.count;
				            	delete item.count;
				            	delete item._id;
				            	cb(null,item)
			        			}
			            	})
			        	},function (err,results2) {
			            	res.send(JSON.stringify(results2))
			        	})
			            
			            
					}
				)

		    })




	},
	getNewComments:function(req,res) {
			            
			async.parallel({
				count:function (cb) {
				   	Comment.count({status:'new'},function(err,results) {
			        	
					   	Reponse.count({status:'new'},function(err,results2) {
				            cb(null,results+results2)
						})
					})
				},
				lastitem:function (cb) {
					Comment.find({status:'new'}).sort('createdAt ASC').limit(1).populateAll().exec(function(err,results) {
			            Reponse.find({status:'new'}).sort('createdAt ASC').limit(1).populateAll().exec(function(err,results2) {
				        	if(results.length && results2.length)
				        	{
				        		if(results[0].createdAt < results2[0].createdAt){
				            		cb(null,results[0])
				        		}else {
				            		cb(null,results2[0])
				        		}
				        	}
				        	if(results.length && !results2.length)
				        	{
				            		cb(null,results[0])
				        	}
				        	if(!results.length && results2.length)
				        	{
				            		cb(null,results2[0])
				        	}
				        	if(!results.length && !results2.length)
				        	{
				            		cb(null,null)
				        	}
						})
					})
				}
			},function  (err, results) {
				res.send(results)
			})            


	},
	getSocials:function(req,res) {
			async.parallel({
				tw:function (cb) {
				   	
				 //   	http.get('http://urls.api.twitter.com/1/urls/count.json?url='+sails.config.URL_HOME, function(resp) {
					//    var str='';
					// 	resp.on('data', function (chunk) {
				 //              str += chunk;
				 //        });
				 //        resp.on('end', function () {
				 //           var obj = JSON.parse(str)
				 //        	if(typeof(obj.count!='undefined'))
				 //            	cb(null,JSON.parse(str).count)
				 //        	else
				 //            	cb(null,0)
				 //        });
					// })
				cb(null, 'deprecated by twitter')
					
				},
				fb:function (cb) {
					
				    http.get('http://graph.facebook.com/?id='+sails.config.URL_HOME, function(resp) {

					   var str='';
						resp.on('data', function (chunk) {
				              str += chunk;
				        });
				        resp.on('end', function () {
				        	var obj = JSON.parse(str)
				        	if(typeof(obj.shares!='undefined'))
				            	cb(null,JSON.parse(str).shares)
				        	else
				            	cb(null,0)
				        });
					})
				   
				},
				gplus:function (cb) {
				   
					var rem = request('https://plusone.google.com/_/+1/fastbutton?url='+sails.config.URL_HOME);
					var str='';
				   	rem.on('data', function(chunk) {
					    str += chunk;
					  });
					  rem.on('end', function() {

					  	if(new RegExp('window\.__SSR').test(str)){
					  		
					  		var cutstring = str.substr(str.indexOf('window\.__SSR')+19,100)
					  		cutstring = cutstring.substring(0,cutstring.indexOf(',')-1)
					  		if(new RegExp('[\d.]+').test(cutstring)){
					  			cb(null,Number(cutstring))
					  		}
					  		else{
					  			cb(null,0)
					  		}
					  	}else{

					  		cb(null,Number(0))
					  	}
					  });
				},
				
			},function  (err, results) {

				res.send(results)
			})            


	},
	serveApp:function(req,res){
		// console.log('COME HERE');
 
		return res.render('homepage');
	}
};