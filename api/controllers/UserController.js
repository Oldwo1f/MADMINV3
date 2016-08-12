var jwt = require('jwt-simple');
var moment = require('moment');
var fs = require('fs'), Writable = require('stream').Writable;
var sid = require('shortid');
var easyimg = require('easyimage');    
var IsThere = require("is-there");
 var Promise = require('bluebird');
 


module.exports = {
	
	addFirstAdmin:function(req,res,next){
		var user = {};
		user.name = 'Momcilovic';
		user.firstname = 'Alexis';
		user.role = 'admin';
		user.password ='a';
		user.email ='alexismomcilovic@gmail.com';

		User.create(user, function(err, user) {
			console.log(err);
			if (!user) {
				return res.status(401).send({ message: 'Invalid email and/or password' });
			}
			else{
				res.send(user);
			}

		});
	},
	login:function(req,res,next){
		function createJWT(user) {
			var role = user.role ? user.role : 'user'
			var payload = {
				iss: req.hostname,
				data: {role:role},
				sub: user.id,
				iat: moment().valueOf(),
				exp: moment().add(14, 'days').valueOf()
			};
			return jwt.encode(payload, sails.config.secret);
		}

		User.findOne({ email: req.body.email }, function(err, user) {

			if (!user) {
				return res.status(401).send({ message: 'Invalid email and/or password' });
			}
			var encrypted = crypto.encrypt(req.body.password);
			if(user.password == encrypted){
				res.send({ token: createJWT( user) });
			}else{
				return res.status(401).send({ message: 'Invalid  password' });
			}

		});
	},
	verifyUniqueEmail:function(req,res,next) {

		User.findOne({email: req.params.email }).exec(function (err,user){
			if(err){
				res.status(404).send({exist:false})
			}
			if(typeof(user) !='undefined')
			{	
				res.status(200).send()
			}else{

				res.status(410).send({exist2:false})
			}

		});
	},
	firstConnexion:function(req,res,next) {

		User.findOne({newuserhash: req.body.idfirst }).exec(function (err,user){
			
			var encrypted = crypto.encrypt(req.body.password);
			if(err){
				console.log(err);
			}
			else{
				User.update(user.id,{password:encrypted,newuserhash:null,lastActivity:new Date()}).then(function(d){
					res.send(d)
				}).catch(function(err){
					res.status(400).send(err)
				})
			}

		});
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
						  		User.findOne(req.params.id).populateAll().then(function(data){
						  			if(data.images.length > 0){
						  				_.map(data.images,function(img){
						  					Image.destroy(img.id).then(function(){
						  						return true
						  					}).then(function(){
						  						return false
						  					})

						  				})
						  				
						  			}

						  			Image.create(file).exec(function(err,img) {
							   					
								   		req.secondid = img.id		
							    		fs.unlinkSync('.tmp/uploads/'+tmpname)
						    			next();
						    		});

						  		}).catch(function(err){
						  			console.log(err);
						  			
						  		})


						  		
						  },function(err){
						  		console.log(err);
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


		es.search(req.params.slug,'user').then(function(data){
			var datas = _.map(data.hits.hits, '_source');
			var datasIds = _.map(datas, 'id');
			new Promise.map(datasIds, function(id){
				return User.findOne(id).populateAll().then(function(d){
					User.subscribe(req,id)
					// res.send(d)
					return d
				})
			}).then(function(finaldata){
				res.send(finaldata)
				
			});

			
			// res.send(datas)

            // return callback()
        }).catch(function(err){
               console.log(err);
        })


		
	},
	searchAutocomplete:function(req,res,next){


		es.client().search({
		  index: sails.config.esName,
		  type: 'user',
		  // id: value.id,
		  body: {
			    "query": {
			    	bool:{
			    		should:[
			    			{
			    				"match_phrase_prefix" : { "name" :{ query : ""+req.params.searchText}}	
			    			},
			    			{
			    				"match_phrase_prefix" : { "firstname" :{ query : ""+req.params.searchText}}	
			    			}
			    		]
			    	}
			    }
			}
		}, function (error, response) {
            return res.send(response);
		});
	},
	saveDash:function(req,res,next){

		var item ={};
		if(req.body.dashboard)
			item.dashboard = req.body.dashboard
		if(req.body.dashboardmd)
			item.dashboardmd = req.body.dashboardmd
		if(req.body.dashboardsm)
			item.dashboardsm = req.body.dashboardsm
		if(req.body.theme)
			item.theme = req.body.theme
		User.update(req.params.id,req.body).then(function(data){
			res.send(data)

		}).catch(function(err){

			console.log(err);
			res.status('500').send(err)
			
		})
		


	},
};

