/**
 * eventController
 *
 * @description :: Server-side logic for managing events
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var Promise = require('bluebird');
var fs = require('fs'), Writable = require('stream').Writable;
var sid = require('shortid');
var easyimg = require('easyimage');
var IsThere = require("is-there");
var moment = require("moment");

module.exports = {
		fetch:function(req,res,next){
			
			var eventsPromise = Event.find().sort(req.params.sort)
		    .skip(req.params.page).limit(req.params.limit).populateAll();

			eventsPromise
		    .then(function(events) {   
		        var eventsWithAuthorsPromises = events.map(function(eevent) {
		            var authorsPromises = eevent.authors.map(function(author) {
		                return User.findOne(author.id).populateAll();
		            });

		            return Promise.all(authorsPromises)
		                  .then(function(fullfilledAuthors) {
		                  	  eevent = eevent.toObject()
		                      eevent.authors = fullfilledAuthors;
		                      return eevent;
		                   })
		        })

		        return Promise.all(eventsWithAuthorsPromises)
		    })
		   .then(function(fullData) {
		   	var ids = _.map(fullData,'id')
		   		Event.subscribe(req,ids)
		   		Event.watch(req)
		        res.send(fullData)
		    })
		    .catch(function(e){
		    	console.log(e);
		    })


			
		},
		fetchActive:function(req,res,next){
			var nbPerPage = 5 ;
			var page = req.params.page -1
			var eventsPromise = Event.find({status:'actif'}).sort('date DESC')
		    .skip(page * nbPerPage).limit(nbPerPage).populateAll();

			eventsPromise
		    .then(function(events) {   
		        var eventsWithAuthorsPromises = events.map(function(eevent) {
		            var authorsPromises = eevent.authors.map(function(author) {
		                return User.findOne(author.id).populateAll();
		            });

		            return Promise.all(authorsPromises)
		                  .then(function(fullfilledAuthors) {
		                  	  eevent = eevent.toObject()
		                      eevent.authors = fullfilledAuthors;
		                      return eevent;
		                   })
		        })

		        return Promise.all(eventsWithAuthorsPromises)
		    })
		   .then(function(fullData) {
		   	var ids = _.map(fullData,'id')
		   		Event.subscribe(req,ids)
		   		Event.watch(req)
		        res.send(fullData)
		    })
		    .catch(function(e){
		    	console.log(e);
		    })


			
		},
		validatePai:function(req,res,next){
			
			
			console.log('VALIDATE PAI');
			console.log(req.body.bonus);
			var total = 0;

			Event.findOne(req.params.id).populate('collabsPoints').then(function(eevent){
				console.log(eevent);
				if(eevent.solded){
					res.status(404).end()
				}else{
					return CollabsPoints.findOne(eevent.collabsPoints[0].id).populate('user').then(function(collabs){
						console.log(collabs);
						total = Number(collabs.score) + Number(req.body.bonus);
						var attrToUpdate={
							bonus : Number(req.body.bonus),
							total : total,
							status : 'accepted',
							dateValidation : new Date()
						}

						return CollabsPoints.update(eevent.collabsPoints[0].id,attrToUpdate).then(function(){
						
							return User.findOne(collabs.user[0].id).then(function(user){
								user.nbCollabsPoints  = user.nbCollabsPoints ? user.nbCollabsPoints : 0;
								var NewnbCollabsPoints = Number(user.nbCollabsPoints) + Number(total);
								console.log(NewnbCollabsPoints);
								
 
								return User.update(collabs.user[0].id,{nbCollabsPoints : NewnbCollabsPoints}).then(function(){
									console.log(user);
									return Event.update(req.params.id,{validate:true,nbPoints : total,solded:true,status:'actif'}).then(function(Eventdata){
										
										var mydata = {};

										mydata.title = eevent.title;
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





										res.send({data:Eventdata})
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

			Event.findOne(req.params.id).populate('collabsPoints').then(function(eevent){
				console.log(eevent);
				// if(Event.solded){
				// 	res.status(404).end()
				// }else{
					return CollabsPoints.findOne(eevent.collabsPoints[0].id).populate('user').then(function(collabs){
						console.log(collabs);
						total = Number(collabs.score) + Number(req.body.bonus);
						var attrToUpdate={
							bonus : 0,
							total : 0,
							status : 'rejected',
							dateValidation : new Date()
						}

						return CollabsPoints.update(eevent.collabsPoints[0].id,attrToUpdate).then(function(){
						
							return User.findOne(collabs.user[0].id).then(function(user){
								user.nbCollabsPoints  = user.nbCollabsPoints ? user.nbCollabsPoints : 0;
								var NewnbCollabsPoints = Number(user.nbCollabsPoints) + Number(total);
								console.log(NewnbCollabsPoints);
								

								
									return Event.update(req.params.id,{validate:false,solded:true,status:'inactif'}).then(function(Eventdata){
										
										var mydata = {};

										mydata.title = Event.title;
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

										res.send({data:Eventdata})
									})

							})

						})
					})
				// }
				



			})
			
		},
		validcontreoffre:function(req,res,next){

			event.findOne(req.params.id).populate('collabsPoints').then(function(event){
				if(event.solded){
					res.redirect(sails.config.URL_HOME+'/club');
				}else{
				return CollabsPoints.findOne(event.collabsPoints[0].id).populate('user').then(function(collabs){
						total = Number(collabs.counterOffer);
						var attrToUpdate={
							score : collabs.counterOffer,
							bonus : 0,
							total : collabs.counterOffer,
							status : 'accepted',
							dateValidation : new Date()
						}
							return CollabsPoints.update(event.collabsPoints[0].id,attrToUpdate).then(function(){
								return User.findOne(collabs.user[0].id).then(function(user){
									user.nbCollabsPoints  = user.nbCollabsPoints ? user.nbCollabsPoints : 0;
									var NewnbCollabsPoints = Number(user.nbCollabsPoints) + Number(collabs.counterOffer);
									return User.update(collabs.user[0].id,{nbCollabsPoints : NewnbCollabsPoints}).then(function(){
										
											return event.update(req.params.id,{nbPoints: collabs.counterOffer, validate:true,solded:true,status:'actif', }).then(function(eventdata){
												res.send('projet valider')
											})

									})
								})

							})
						
					})
				}
			})

			
		},
		refuscontreoffre:function(req,res,next){

			event.findOne(req.params.id).populate('collabsPoints').then(function(event){
				if(event.solded){
					res.redirect(sails.config.URL_HOME+'/club');
				}else{
				return CollabsPoints.findOne(event.collabsPoints[0].id).populate('user').then(function(collabs){
						total = Number(collabs.counterOffer);
						var attrToUpdate={
							score : collabs.counterOffer,
							bonus : 0,
							total : 0,
							status : 'rejected',
							dateValidation : new Date()
						}
							return CollabsPoints.update(event.collabsPoints[0].id,attrToUpdate).then(function(){

										return event.destroy(req.params.id).then(function(eventdata){
											res.send('projet detruit')
										})
							})
						
					})
				}
			}).catch(function(e){
				res.redirect(sails.config.URL_HOME+'/club');
			})


			
		},
		fetchActive:function(req,res,next){
			
			var eventsPromise = Event.find({status:'actif'}).sort(req.params.sort)
		    .skip((req.params.page-1)*req.params.limit).limit(req.params.limit).populateAll();

			eventsPromise
		    .then(function(events) {   
		        var eventsWithAuthorsPromises = events.map(function(eevent) {
		            var authorsPromises = eevent.authors.map(function(author) {
		                return User.findOne(author.id).populateAll();
		            });

		            return Promise.all(authorsPromises)
		                  .then(function(fullfilledAuthors) {
		                  	  eevent = eevent.toObject()
		                      eevent.authors = fullfilledAuthors;
		                      return eevent;
		                   })
		        })

		        return Promise.all(eventsWithAuthorsPromises)
		    })
		   .then(function(fullData) {
		        res.send(fullData)
		        var ids = _.map(fullData,'id')
		   		Event.subscribe(req,ids)
		    })
		    .catch(function(e){
		    	console.log(e);
		    })


			
		},
		fetchOne:function(req,res,next){
			
			var result ;
			var idsCom ;
			Event.findOne(req.params.id).populateAll().then(function(eevent){
				var art=_.cloneDeep(eevent);
				return new Promise(function(resolve,reject){
					
						if(typeof(eevent.authors) != 'undefined'){

							return Promise.map(eevent.authors,function(author){

								return User.findOne(author.id).populateAll()
								
							}).then(function(t){
								art.authors = t;
								resolve(art)
							})
							// 
						}else
						{
							resolve(eevent)
						}
				}).then(function(){
					
				// 	idsCom = _.map(art.comments,function(o){return o.id})
				// 	return Comment.find(idsCom).populate('responses')
					
					
				// })
				// .then(function(CommentsFullFilled){
					
					// art.comments = CommentsFullFilled;
					// var idsToAdd = _.map(CommentsFullFilled,function(com){
					// 	return _.map(com.responses,function(o){
					// 		idsCom.push(o.id)
					// 	return o.id
					// 	})
					// })
					// var idsCom = _.map(art.comments,function(o){return o.id})
					// Comment.subscribe(req,idsCom);
				 	Event.subscribe(req, art.id);
					res.send(art)
				})
			})
		},
		uploadDocument:function(req,res,next) {

			console.log('UPLOAD DOCUMENT');
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
			console.log('UPLOAD DOCUMENT2');
			   

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
			    		file.nbDowload = Math.round(Math.random()*100)
			    		file.date = new Date();

			    		console.log('UPLOAD DOCUMENT3');

			    		Document.create(file).exec(function(err,doc) {

			    			console.log(err);
			    			
					   		console.log(doc);
					   		console.log('next');
					   					
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
						  		console.log(err);
						  })


				    		// console.log(results[0]);
			    		


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



		es.search(req.params.slug,'event').then(function(data){
			var datas = _.map(data.hits.hits, '_source');
			var datasIds = _.map(datas, 'id');
			new Promise.map(datasIds, function(id){
				// return id
				return eevent.findOne(id).populateAll().then(function(eevent){
					eevent.subscribe(req,id)
					var authorsPromises = eevent.authors.map(function(author) {
		                return User.findOne(author.id).populateAll();
		            });

		            return Promise.all(authorsPromises)
                  	.then(function(fullfilledAuthors) {
                  	  eevent = eevent.toObject()
                      eevent.authors = fullfilledAuthors;
                      return eevent;
                   	})
				})
			}).then(function(finaldata){
				res.send(finaldata)
				
			





			});

			
			// res.send(datas)

            // return callback()
        }).catch(function(err){
               console.log(err);
        })


		
	}
};

