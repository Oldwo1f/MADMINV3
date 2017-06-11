/**
 * FabricantController
 *
 * @description :: Server-side logic for managing fabricants
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var Promise = require('bluebird');
var fs = require('fs'), Writable = require('stream').Writable;
var sid = require('shortid');
var easyimg = require('easyimage');
var IsThere = require("is-there");
var moment = require("moment");

module.exports = {
		searchAutocomplete:function(req,res,next){


			es.client().search({
			  index: sails.config.esName,
			  type: 'fabricant',
			  // id: value.id,
			  body: {
				    "query": {
				        "match_phrase_prefix" : { "name" :""+req.params.searchText }
				    }
				}
			}, function (error, response) {
	            return res.send(response);
			});



		},
		getFabList:function(req,res,next){

			console.log('getFabList');
			var t ={};
			Fabricant.find().sort('name DESC').exec(function(err,data){
				var resData=[];
				
				resData = _.map(data, function(d){
					var t = {};
					t.id = d.id;
					t.name = d.name;
					return t;
				})


				res.send(resData)
			})



		},
		searchCountries:function(req,res,next){
			
			var countriesArray = ["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegowina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, the Democratic Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait", "Kyrgyzstan", "Lao, People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia, The Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe"];
			
			var  c = _.filter(countriesArray,function(o){
				var regex = new RegExp('^'+req.params.slug, "gi");
				return regex.test(o)
				
			})

			res.send(c)

		},
		fetch:function(req,res,next){
			
			var fabricantsPromise = Fabricant.find().sort(req.params.sort)
		    .skip(req.params.page).limit(req.params.limit).populateAll();

			fabricantsPromise
		    .then(function(fabricants) {   
		        var fabricantsWithAuthorsPromises = fabricants.map(function(fabricant) {
		            var authorsPromises = fabricant.authors.map(function(author) {
		                return User.findOne(author.id).populateAll();
		            });

		            return Promise.all(authorsPromises)
		                  .then(function(fullfilledAuthors) {
		                  	  fabricant = fabricant.toObject()
		                      fabricant.authors = fullfilledAuthors;
		                      return fabricant;
		                   })
		        })

		        return Promise.all(fabricantsWithAuthorsPromises)
		    })
		   .then(function(fullData) {
		   	var ids = _.map(fullData,'id')
		   		Fabricant.subscribe(req,ids)
		   		Fabricant.watch(req)
		        res.send(fullData)
		    })
		    .catch(function(e){
		    	console.log(e);
		    })


			
		},
		fetchFront:function(req,res,next){
			var nbPerPage = 5 ;
			var page = req.params.page -1
			var fabricantsPromise = Fabricant.find({status:'actif'}).sort('name ASC')
		    .skip(page * nbPerPage).limit(nbPerPage).populateAll();

			fabricantsPromise
		    .then(function(fabricants) {   
		        var fabricantsWithAuthorsPromises = fabricants.map(function(fabricant) {
		            var authorsPromises = fabricant.authors.map(function(author) {
		                return User.findOne(author.id).populateAll();
		            });

		            return Promise.all(authorsPromises)
		                  .then(function(fullfilledAuthors) {
		                  	  fabricant = fabricant.toObject()
		                      fabricant.authors = fullfilledAuthors;
		                      return fabricant;
		                   })
		        })

		        return Promise.all(fabricantsWithAuthorsPromises)
		    })
		   .then(function(fullData) {
		   	var ids = _.map(fullData,'id')
		   		Fabricant.subscribe(req,ids)
		   		Fabricant.watch(req)
		        res.send(fullData)
		    })
		    .catch(function(e){
		    	console.log(e);
		    })


			
		},
		validatePai2:function(req,res,next){
			
			var calcprice = function(price){

				var iprice = price;
				var partClub = 0.3;
				var calculatePrices = {};
				var tmpNumber = 0;


				calculatePrices.m0 = {};
				calculatePrices.m0.sellprice = Math.round(iprice);
				calculatePrices.m0.benefvendeur =  Math.round(iprice-(iprice * partClub));

				calculatePrices.m6 = {};
				tmpNumber = iprice - (25 * iprice / 100);
				calculatePrices.m6.sellprice = Math.round(tmpNumber);
				calculatePrices.m6.benefvendeur =  Math.round(tmpNumber-(tmpNumber * partClub));

				calculatePrices.m12 = {}
				tmpNumber = iprice - (50*iprice/100);
				calculatePrices.m12.sellprice = Math.round(tmpNumber);
				calculatePrices.m12.benefvendeur =  Math.round(tmpNumber-(tmpNumber * partClub));

				calculatePrices.m18 = {}
				tmpNumber = iprice - (75*iprice/100);
				calculatePrices.m18.sellprice = Math.round(tmpNumber);
				calculatePrices.m18.benefvendeur =  Math.round(tmpNumber-(tmpNumber * partClub));

				return calculatePrices;

			};
			
			var total = 0;

			Fabricant.findOne(req.params.id).populate('collabsPoints').then(function(fabricant){
				if(fabricant.solded){
					res.status(404).end()
				}else{
					return CollabsPoints.findOne(fabricant.collabsPoints[0].id).populate('user').then(function(collabs){
						total = Number(collabs.score) ;
						var attrToUpdate={
							bonus : 0,
							total : total,
							status : 'accepted',
							dateValidation : new Date()
						}

						return CollabsPoints.update(fabricant.collabsPoints[0].id,attrToUpdate).then(function(){
						
							return User.findOne(collabs.user[0].id).then(function(user){
								user.nbCollabsPoints  = user.nbCollabsPoints ? user.nbCollabsPoints : 0;
								var NewnbCollabsPoints = Number(user.nbCollabsPoints) + Number(total);
								

								return User.update(collabs.user[0].id,{nbCollabsPoints : NewnbCollabsPoints}).then(function(){
									
									return Fabricant.update(req.params.id,{validate:true,nbPoints : total,solded:true,status:'actif'}).then(function(fabricantdata){
										
										//SEND VALIDATION MAIL

										var mydata = {};

										mydata.name = user.name;
										mydata.title = fabricant.title;
										mydata.firstname = user.firstname;
										mydata.nbCollabsPoints = user.nbCollabsPoints;
										mydata.score = collabs.score;
										mydata.bonus = attrToUpdate['bonus'];
										

										if(mydata.initialPrice == 0){

											//SEND VALIDATION MAIL
											mail.sendEmail({
									             from: '"'+sails.config.company+'" <'+sails.config.mainEmail+'>', // sender address 
									             to: user.email, // list of receivers 
									             subject: sails.config.company+' - Contenus validé', // Subject line 
									        },'validateContent',{data:mydata, URL_HOME:sails.config.URL_HOME  }).then(function(data){
									        });

										}else{

											mydata.payment = fabricant.payment;
											mydata.initialPrice = fabricant.initialPrice;

											//SEND VALIDATION MAIL
											mail.sendEmail({
									             from: '"'+sails.config.company+'" <'+sails.config.mainEmail+'>', // sender address 
									             to: user.email, // list of receivers 
									             subject: sails.config.company+' - Contenus validé', // Subject line 
									        },'validateContentPayment',{calculatePrices: calcprice(mydata.initialPrice),data:mydata, URL_HOME:sails.config.URL_HOME ,moment:moment }).then(function(data){
									        });

										}

										res.send({data:fabricantdata})
									})

								})
							})

						})
					})
				}
			})
		},
		unvalidatePai2:function(req,res,next){
			
			
			
			var total = 0;
			var counterOffer = req.body.counterOffer ? req.body.counterOffer : 0;;

			Fabricant.findOne(req.params.id).populate('collabsPoints').then(function(fabricant){
				if(fabricant.solded){
					res.status(404).end()
				}else{
					return CollabsPoints.findOne(fabricant.collabsPoints[0].id).populate('user').then(function(collabs){
						total = Number(collabs.score) + Number(req.body.bonus);
						var attrToUpdate={
							counterOffer : counterOffer,
							bonus : 0,
							total : 0,
							status : 'rejected',
							dateValidation : new Date()
						}
							return CollabsPoints.update(fabricant.collabsPoints[0].id,attrToUpdate).then(function(){
								return User.findOne(collabs.user[0].id).then(function(user){
									user.nbCollabsPoints  = user.nbCollabsPoints ? user.nbCollabsPoints : 0;
									var NewnbCollabsPoints = Number(user.nbCollabsPoints) + Number(total);
									

									
										return Fabricant.update(req.params.id,{validate:false,solded:true,status:'inactif'}).then(function(fabricantdata){
											
											var mydata = {};

											mydata.title = fabricant.title;
											mydata.projid = fabricant.id;
											mydata.raison = req.body.raison;
											mydata.score = collabs.score;

											if(req.body.raison == 'abus'){

												var newyellowCards = Number(user.yellowCards) + 1;
												var newredCards = 0;
												if(newyellowCards == 3 )
													newredCards=1;

												return User.update(fabricant.collabsPoints[0].id,{yellowCards : newyellowCards,redCards:newredCards}).then(function(){
													mail.sendEmail({
											             from: '"'+sails.config.company+'" <'+sails.config.mainEmail+'>', // sender address 
											             to: user.email, // list of receivers 
											             subject: sails.config.company+' - Carton jaune', // Subject line 
											        	},'unvalidateContent',{data:mydata, URL_HOME:sails.config.URL_HOME }).then(function(data){
											        });
												})
											}
											else
											if(req.body.raison == 'counterOffer' && counterOffer){

													mydata.counterOffer = counterOffer;
													var linkValid = sails.config.URL_HOME +'/validcontreoffre/'+ mydata.projid;
													var linkRefus = sails.config.URL_HOME +'/refuscontreoffre/'+ mydata.projid;
													mail.sendEmail({
											             from: '"'+sails.config.company+'" <'+sails.config.mainEmail+'>', // sender address 
											             to: user.email, // list of receivers 
											             subject: sails.config.company+' - Contre proposition', // Subject line 
											        	},'unvalidateContent',{data:mydata, linkValid:linkValid, linkRefus:linkRefus, URL_HOME:sails.config.URL_HOME }).then(function(data){
											        });
												
											}
											else
											if(req.body.raison != 'noEmail'){

												//SEND VALIDATION MAIL
												mail.sendEmail({
										             from: '"'+sails.config.company+'" <'+sails.config.mainEmail+'>', // sender address 
										             to: user.email, // list of receivers 
										             subject: sails.config.company+' - Contenus rejeté', // Subject line 
										        },'unvalidateContent',{data:mydata, URL_HOME:sails.config.URL_HOME , ipport:sails.config.URL_HOME+':'+ sails.config.port +'/' }).then(function(data){
										        });

											}

											res.send({data:fabricantdata})
										})

								})

							})
						
					})
				}
				



			})

			


		},
		validcontreoffre:function(req,res,next){

			Fabricant.findOne(req.params.id).populate('collabsPoints').then(function(fabricant){
				if(fabricant.solded){
					res.redirect(sails.config.URL_HOME+'/club');
				}else{
				return CollabsPoints.findOne(fabricant.collabsPoints[0].id).populate('user').then(function(collabs){
						total = Number(collabs.counterOffer);
						var attrToUpdate={
							score : collabs.counterOffer,
							bonus : 0,
							total : collabs.counterOffer,
							status : 'accepted',
							dateValidation : new Date()
						}
							return CollabsPoints.update(fabricant.collabsPoints[0].id,attrToUpdate).then(function(){
								return User.findOne(collabs.user[0].id).then(function(user){
									user.nbCollabsPoints  = user.nbCollabsPoints ? user.nbCollabsPoints : 0;
									var NewnbCollabsPoints = Number(user.nbCollabsPoints) + Number(collabs.counterOffer);
									return User.update(collabs.user[0].id,{nbCollabsPoints : NewnbCollabsPoints}).then(function(){
										
											return Fabricant.update(req.params.id,{nbPoints: collabs.counterOffer, validate:true,solded:true,status:'actif', }).then(function(fabricantdata){
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

			Fabricant.findOne(req.params.id).populate('collabsPoints').then(function(fabricant){
				if(fabricant.solded){
					res.redirect(sails.config.URL_HOME+'/club');
				}else{
				return CollabsPoints.findOne(fabricant.collabsPoints[0].id).populate('user').then(function(collabs){
						total = Number(collabs.counterOffer);
						var attrToUpdate={
							score : collabs.counterOffer,
							bonus : 0,
							total : 0,
							status : 'rejected',
							dateValidation : new Date()
						}
							return CollabsPoints.update(fabricant.collabsPoints[0].id,attrToUpdate).then(function(){

										return Fabricant.destroy(req.params.id).then(function(fabricantdata){
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
			
			var fabricantsPromise = Fabricant.find({status:'actif'}).sort(req.params.sort)
		    .skip((req.params.page-1)*req.params.limit).limit(req.params.limit).populateAll();

			fabricantsPromise
		    .then(function(fabricants) {   
		        var fabricantsWithAuthorsPromises = fabricants.map(function(fabricant) {
		            var authorsPromises = fabricant.authors.map(function(author) {
		                return User.findOne(author.id).populateAll();
		            });

		            return Promise.all(authorsPromises)
		                  .then(function(fullfilledAuthors) {
		                  	  fabricant = fabricant.toObject()
		                      fabricant.authors = fullfilledAuthors;
		                      return fabricant;
		                   })
		        })

		        return Promise.all(fabricantsWithAuthorsPromises)
		    })
		   .then(function(fullData) {
		        res.send(fullData)
		        var ids = _.map(fullData,'id')
		   		Fabricant.subscribe(req,ids)
		    })
		    .catch(function(e){
		    	console.log(e);
		    })


			
		},
		fetchOne:function(req,res,next){
			
			var result ;
			var idsCom ;
			Fabricant.findOne(req.params.id).populateAll().then(function(fabricant){
				var art=_.cloneDeep(fabricant);
				return new Promise(function(resolve,reject){
					
						if(typeof(fabricant.authors) != 'undefined'){

							return Promise.map(fabricant.authors,function(author){

								return User.findOne(author.id).populateAll()
								
							}).then(function(t){
								art.authors = t;
								resolve(art)
							})
							// 
						}else
						{
							resolve(fabricant)
						}
				}).then(function(){
					
					idsCom = _.map(art.comments,function(o){return o.id})
					return Comment.find(idsCom).populate('responses')
					
					
				})
				.then(function(CommentsFullFilled){
					
					art.comments = CommentsFullFilled;
					var idsToAdd = _.map(CommentsFullFilled,function(com){
						return _.map(com.responses,function(o){
							idsCom.push(o.id)
						return o.id
						})
					})
					// var idsCom = _.map(art.comments,function(o){return o.id})
					Comment.subscribe(req,idsCom);
				 	Fabricant.subscribe(req, art.id);
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



		es.search(req.params.slug,'fabricant').then(function(data){
			var datas = _.map(data.hits.hits, '_source');
			var datasIds = _.map(datas, 'id');
			new Promise.map(datasIds, function(id){
				// return id
				return Fabricant.findOne(id).populateAll().then(function(fabricant){
					Fabricant.subscribe(req,id)
					var authorsPromises = fabricant.authors.map(function(author) {
		                return User.findOne(author.id).populateAll();
		            });

		            return Promise.all(authorsPromises)
                  	.then(function(fullfilledAuthors) {
                  	  fabricant = fabricant.toObject()
                      fabricant.authors = fullfilledAuthors;
                      return fabricant;
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

