/**
 * ArticleController
 *
 * @description :: Server-side logic for managing articles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var Promise = require('bluebird');
var fs = require('fs'), Writable = require('stream').Writable;
var sid = require('shortid');
var easyimg = require('easyimage');
var IsThere = require("is-there");
module.exports = {
		fetch:function(req,res,next){
			
			var articlesPromise = Article.find().sort(req.params.sort)
		    .skip(req.params.page).limit(req.params.limit).populateAll();

			articlesPromise
		    .then(function(articles) {   
		        var articlesWithAuthorsPromises = articles.map(function(article) {
		            var authorsPromises = article.authors.map(function(author) {
		                return User.findOne(author.id).populateAll();
		            });

		            return Promise.all(authorsPromises)
		                  .then(function(fullfilledAuthors) {
		                  	  article = article.toObject()
		                      article.authors = fullfilledAuthors;
		                      return article;
		                   })
		        })

		        return Promise.all(articlesWithAuthorsPromises)
		    })
		   .then(function(fullData) {
		   	var ids = _.map(fullData,'id')
		   		Article.subscribe(req,ids)
		   		Article.watch(req)
		        res.send(fullData)
		    })
		    .catch(function(e){
		    })


			
		},

		fetchFront:function(req,res,next){
			var nbPerPage = 10 ;
			var page = req.params.page -1
			var limit=10;
			// var articlesPromise = Article.find({status:'actif'}).sort('date DESC')
		 //    .skip(page * nbPerPage).limit(nbPerPage).populateAll();
		    var articlesPromise = Article.find({status:'actif'}).sort('date DESC')
		    .skip(page*limit).limit(limit).populateAll();

			articlesPromise
		    .then(function(articles) {   
		        var articlesWithAuthorsPromises = articles.map(function(article) {
		            var authorsPromises = article.authors.map(function(author) {
		                return User.findOne(author.id).populateAll();
		            });

		            return Promise.all(authorsPromises)
		                  .then(function(fullfilledAuthors) {
		                  	  article = article.toObject()
		                      article.authors = fullfilledAuthors;
		                      return article;
		                   })
		        })

		        return Promise.all(articlesWithAuthorsPromises)
		    })
		   .then(function(fullData) {
		   	var ids = _.map(fullData,'id')
		   		Article.subscribe(req,ids)
		   		Article.watch(req)
		        res.send(fullData)
		    })
		    .catch(function(e){
		    	console.log(e);
		    })


			
		},
		fetchActive:function(req,res,next){
			
			var articlesPromise = Article.find({status:'actif'}).sort(req.params.sort)
		    .skip((req.params.page-1)*req.params.limit).limit(req.params.limit).populateAll();

			articlesPromise
		    .then(function(articles) {   
		        var articlesWithAuthorsPromises = articles.map(function(article) {
		            var authorsPromises = article.authors.map(function(author) {
		                return User.findOne(author.id).populateAll();
		            });

		            return Promise.all(authorsPromises)
		                  .then(function(fullfilledAuthors) {
		                  	  article = article.toObject()
		                      article.authors = fullfilledAuthors;
		                      return article;
		                   })
		        })

		        return Promise.all(articlesWithAuthorsPromises)
		    })
		   .then(function(fullData) {
		        res.send(fullData)
		        var ids = _.map(fullData,'id')
		   		Article.subscribe(req,ids)
		    })
		    .catch(function(e){
		    })


			
		},
		fetchOne:function(req,res,next){

			console.log('FETCHONE ARTICLE');
			
			var result ;
			var idsCom ;
			Article.findOne(req.params.id).populateAll().then(function(article){
				var art=_.cloneDeep(article);
				return new Promise(function(resolve,reject){
					
						if(typeof(article.authors) != 'undefined'){

							return Promise.map(article.authors,function(author){

								return User.findOne(author.id).populateAll()
								
							}).then(function(t){
								art.authors = t;
								resolve(art)
							})
							// 
						}else
						{
							resolve(article)
						}
				}).then(function(){
					
					idsCom = _.map(art.comments,function(o){return o.id})
					return Comment.find(idsCom).populate('responses')
					
					
				})
				// .then(function(CommentsFullFilled){
				// 	console.log('-----------------------------------------');
				// 	 var CommentsWithAuthorsPromises = CommentsFullFilled.map(function(comment) {

				// 		return new Promise(function(resolve,reject){
				// 	 	// console.log(comment);
				//             return User.findOne(comment.user.id).populate('images').then(function(data){

				//             	delete data.dashboard;
				//             	console.log(data);
				//             	comment.user.imgPath = data.images[0].filename;
				            	
				            		
				//             	resolve(comment)
				//             });

		  //       		})
			          
		  //       	})
				// 	 return Promise.all(CommentsWithAuthorsPromises)
					
					
				// })
				.then(function(CommentsFullFilled){

					console.log('FIN');
					console.log(CommentsFullFilled);
					
					art.comments = CommentsFullFilled;
					var idsToAdd = _.map(CommentsFullFilled,function(com){
						return _.map(com.responses,function(o){
							idsCom.push(o.id)
						return o.id
						})
					})

					// var idsCom = _.map(art.comments,function(o){return o.id})
					Comment.subscribe(req,idsCom);
				 	Article.subscribe(req, art.id);

				 	console.log('fini');
					res.send(art)
				})
			})
		},
		validatePai:function(req,res,next){
			
			
			console.log('VALIDATE PAI');
			console.log(req.body.bonus);
			var total = 0;

			Article.findOne(req.params.id).populate('collabsPoints').then(function(article){
				console.log(article);
				if(article.solded){
					res.status(404).end()
				}else{
					return CollabsPoints.findOne(article.collabsPoints[0].id).populate('user').then(function(collabs){
						console.log(collabs);
						total = Number(collabs.score) + Number(req.body.bonus);
						var attrToUpdate={
							bonus : Number(req.body.bonus),
							total : total,
							status : 'accepted',
							dateValidation : new Date()
						}

						return CollabsPoints.update(article.collabsPoints[0].id,attrToUpdate).then(function(){
						
							return User.findOne(collabs.user[0].id).then(function(user){
								user.nbCollabsPoints  = user.nbCollabsPoints ? user.nbCollabsPoints : 0;
								var NewnbCollabsPoints = Number(user.nbCollabsPoints) + Number(total);
								console.log(NewnbCollabsPoints);
								

								return User.update(collabs.user[0].id,{nbCollabsPoints : NewnbCollabsPoints}).then(function(){
									console.log(user);
									return Article.update(req.params.id,{validate:true,nbPoints : total,solded:true,status:'actif'}).then(function(articledata){
										
										var mydata = {};

										mydata.title = article.title;
										mydata.name = user.name;
										mydata.firstname = user.firstname;
										mydata.nbCollabsPoints = user.nbCollabsPoints;
										mydata.score = collabs.score;
										mydata.bonus = attrToUpdate['bonus'];


										//SEND VALIDATION MAIL
										mail.sendEmail({
								             from: '"'+sails.config.company+'" <'+sails.config.mainEmail+'>', // sender address 
								             to: user.email, // list of receivers 
								             subject: sails.config.company+' - Contenus validé', // Subject line 
								        },'validateContent',{data:mydata, URL_HOME:sails.config.URL_HOME  }).then(function(data){
								        });





										res.send({data:articledata})
									})

								})
							})

							// 

						})
					})
				}
				



			})

			


		},
		unvalidatePai:function(req,res,next){
			
			
			console.log('UNVALIDATE PAI');
			console.log(req.body.raison);
			var total = 0;

			Article.findOne(req.params.id).populate('collabsPoints').then(function(article){
				console.log(article);
				// if(article.solded){
				// 	res.status(404).end()
				// }else{
					return CollabsPoints.findOne(article.collabsPoints[0].id).populate('user').then(function(collabs){
						console.log(collabs);
						total = Number(collabs.score) + Number(req.body.bonus);
						var attrToUpdate={
							bonus : 0,
							total : 0,
							status : 'rejected',
							dateValidation : new Date()
						}

						return CollabsPoints.update(article.collabsPoints[0].id,attrToUpdate).then(function(){
						
							return User.findOne(collabs.user[0].id).then(function(user){
								user.nbCollabsPoints  = user.nbCollabsPoints ? user.nbCollabsPoints : 0;
								var NewnbCollabsPoints = Number(user.nbCollabsPoints) + Number(total);
								console.log(NewnbCollabsPoints);
								

								
									return Article.update(req.params.id,{validate:false,solded:true,status:'inactif'}).then(function(articledata){
										
										var mydata = {};

										mydata.title = article.title;
										mydata.raison = req.body.raison;
										if(req.body.raison != 'noEmail'){

											//SEND VALIDATION MAIL
											mail.sendEmail({
									             from: '"'+sails.config.company+'" <'+sails.config.mainEmail+'>', // sender address 
									             to: user.email, // list of receivers 
									             subject: sails.config.company+' - Contenus rejeté', // Subject line 
									        },'unvalidateContent',{data:mydata, URL_HOME:sails.config.URL_HOME , }).then(function(data){
									        });

										}

										res.send({data:articledata})
									})

							})

						})
					})
				// }
				



			})

			


		},
		uploadDocument:function(req,res,next) {

		res.setTimeout(0);
		sid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');
		sid.seed(10);
		// var stuff = JSON.parse(req.body.resizeStuff);

		var reciever = new Writable({objectMode: true});
		reciever._write = function(file, enc, cb) {
			file.filename=safeFilename(sid.generate()+'-'+file.filename)
			var output = require('fs').createWriteStream('.tmp/uploads/'+file.filename);

			var transfert = file.pipe(output);
			transfert.on('finish', function () {
				cb();
			});
		};
		var pat= /\w+\/[-+.\w]+/g

		req.file('files').upload(reciever,function (err, files) {
	      if (err) return res.serverError(err);


	      if(pat.test(files[0].type))
	      {
			    try{
	      			fs.mkdirSync('uploads/files');
      			}
      			catch(e){
      			}

			    		var file = files[0];
			    		var ext = file.filename.substring(file.filename.lastIndexOf('.'),file.filename.length)
			    		file.name = file.filename.substring(file.filename.indexOf('-')+1,file.filename.lastIndexOf('.'))
			    		// file.description = file.filename.substring(file.filename.indexOf('-')+1,file.filename.lastIndexOf('.'))
			    		var nameOk=true
						var index=0;
						var suffix='';
						var goodname='';
						while(nameOk)
						{
							suffix='('+index+')';
							if(index==0)
								suffix='';
							var exists = IsThere('uploads/files/'+file.name+suffix+ext)
							if (exists) {
							    index++
							} else {
								nameOk=false;
							    goodname=file.name+suffix+ext;
							}
						}
			    		
			    		var tmpname =file.filename;
			    		goodname = safeFilename(goodname);
			    		fs.writeFileSync('uploads/files/'+goodname,fs.readFileSync('.tmp/uploads/'+tmpname));
			    		
			    		file.filename = goodname;
			    		// file.description = '';
			    		file.nbDowload = 0
			    		file.date = new Date();

			    		Document.create(file).exec(function(err,doc) {
					   					
					   		req.secondid = doc.id		
					   		req.params.toto = doc.id		
					   		req.params.tata = 'doc.id'	
	
			    			next();
			    		});

				    	fs.unlinkSync('.tmp/uploads/'+tmpname)

	      }else
	      {
	      	//NOT an IMAGE
	      	return res.json({
		        message: 'Ce fichier n\'est pas une image',
		        files: files
		      });
	      }
	    });




		function safeFilename(name) {
			name = name.replace(/[éè]/g, 'e');
			name = name.replace(/à/g, 'a');
			name = name.replace(/[îï]/g, 'i');
			name = name.replace(/[ûüù]/g, 'u');
			name = name.replace(/[ôö]/g, 'o');
			name = name.replace(/[ç]/g, 'c');
			name = name.replace(/ /g, '-');
			name = name.replace(/[^A-Za-z0-9-_\.()]/g, '');
			name = name.replace(/\.+/g, '.');
			name = name.replace(/-+/g, '-');
			name = name.replace(/_+/g, '_');
			return name;
		}

	},
	uploadImage:function(req,res,next) {

var cropOptions = req.body
		res.setTimeout(0);
		sid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');
		sid.seed(10);
		// var stuff = JSON.parse(req.body.resizeStuff);

		var reciever = new Writable({objectMode: true});
		reciever._write = function(file, enc, cb) {
			file.filename=safeFilename(sid.generate()+'-'+file.filename)
			var output = require('fs').createWriteStream('.tmp/uploads/'+file.filename);

			var transfert = file.pipe(output);
			transfert.on('finish', function () {
				cb();
			});
		};
		var pat= /(gif|jpg|jpeg|tiff|png)$/i

		req.file('file').upload(reciever,function (err, files) {
	      if (err) return res.serverError(err);


	    if(pat.test(files[0].type)) 
	    {

	

			    		var file = files[0];
			    		var ext = file.filename.substring(file.filename.lastIndexOf('.'),file.filename.length)
			    		file.name = file.filename.substring(file.filename.indexOf('-')+1,file.filename.lastIndexOf('.'))
			    		// file.description = file.filename.substring(file.filename.indexOf('-')+1,file.filename.lastIndexOf('.'))
			    		var nameOk=true
						var index=0;
						var suffix='';
						var goodname='';
						while(nameOk)
						{
							suffix='('+index+')';
							if(index==0)
								suffix='';
							var exists = IsThere('uploads/images/originalSize/'+file.name+suffix+ext)
							if (exists) {
							    index++
							} else {
								nameOk=false;
							    goodname=file.name+suffix+ext;
							}
						}
			    		
			    		var tmpname =file.filename;
			    		goodname = safeFilename(goodname);
			    		fs.writeFileSync('uploads/images/originalSize/'+goodname,fs.readFileSync('.tmp/uploads/'+tmpname));
			    		
			    		file.filename = goodname;
			    		// file.description = '';
			    		file.nbDowload = Math.round(Math.random()*100)
			    		file.date = new Date();

			    		easyimg.thumbnail({
						     src:'.tmp/uploads/'+tmpname, dst:'uploads/images/adminThumbs/'+goodname,
						     width:400, height:400,
						     // cropwidth:128, cropheight:128,
						     // x:0, y:0
						  }).then(function(image){
						  	

						  		Image.create(file).exec(function(err,img) {
							   					
							   		req.secondid = img.id		
						    		fs.unlinkSync('.tmp/uploads/'+tmpname)
					    			next();
					    		});
						  },function(err){
						  })


			    		


	      }else
	      {
	      	//NOT an IMAGE
	      	return res.json({
		        message: 'Ce fichier n\'est pas une image',
		        files: files
		      });
	      }
	    });




		function safeFilename(name) {
			name = name.replace(/[éè]/g, 'e');
			name = name.replace(/à/g, 'a');
			name = name.replace(/[îï]/g, 'i');
			name = name.replace(/[ûüù]/g, 'u');
			name = name.replace(/[ôö]/g, 'o');
			name = name.replace(/[ç]/g, 'c');
			name = name.replace(/ /g, '-');
			name = name.replace(/[^A-Za-z0-9-_\.()]/g, '');
			name = name.replace(/\.+/g, '.');
			name = name.replace(/-+/g, '-');
			name = name.replace(/_+/g, '_');
			return name;
		}

	},
	search:function(req,res,next){

		es.search(req.params.slug,'article').then(function(data){
			var datas = _.map(data.hits.hits, '_source');
			var datasIds = _.map(datas, 'id');
			new Promise.map(datasIds, function(id){
				return Article.findOne(id).populateAll().then(function(article){
					Article.subscribe(req,id)
					var authorsPromises = article.authors.map(function(author) {
		                return User.findOne(author.id).populateAll();
		            });

		            return Promise.all(authorsPromises)
                  	.then(function(fullfilledAuthors) {
                  	  article = article.toObject()
                      article.authors = fullfilledAuthors;
                      return article;
                   	})
				})
			}).then(function(finaldata){
				res.send(finaldata)
				
			





			});

			
			// res.send(datas)

            // return callback()
        }).catch(function(err){
        })


		
	},
	addComment:function(req,res,next){

		console.log('addCommentArticle');
		console.log(req.params.itemid);

		console.log(req.body);
		// var commentToCreate =req.body;

		Article.findOne(req.params.itemid)
		.then(function(article){
			
			article.comments.add(req.body)
			return article.save()	

		}).then(function(d){

			console.log('THEN');
			console.log(d);


				res.status(200).send('OK')
			
		})
		
	},
	addReponse:function(req,res,next){

		console.log('addReponse Article');

		console.log(req.body);
		// var commentToCreate =req.body;

		Comment.findOne(req.params.itemid)
		.then(function(comment){
			console.log(comment);
			
			comment.responses.add(req.body)
			return comment.save()	

		}).then(function(d){

			console.log('THEN');
			console.log(d);


				res.status(200).send('OK')
			
		})
		
	},
};

