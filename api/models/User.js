/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var sid = require('shortid');

module.exports = {
	attributes: {
		role: {type:'string'},
	    civ: {type:'string'},
	    name: {type:'string'},
	    firstname: {type:'string'},
	    email: {type:'string',required:true,unique:true,email:true},
	    phone: {type:'string'},
	    company: {type:'string'},
	    description: {type:'string'},
	    fonction: {type:'string'},
	    usename: {type:'boolean'},
	    password:{type:'string',required:true},
	    changepasswordcomfirm : {type:'string'},
	    newuserhash : {type:'string'},
	    dateMember : {type:'date'},
	    lastActivity : {type:'date'},

  		// dashboard:{type:'json'},
  		theme:{type:'string',defaultsTo:'bg1'},
  		nbArticles:{type:'int',defaultsTo:0},
        nbProjects:{type:'int',defaultsTo:0},
  		total:{type:'int',defaultsTo:0},

	    images:{collection:'image',defaultsTo:[]},
	    selfUpdate:function(options,cb){

	        if(options.parentType == 'article')
	        {
	            if(options.verb == 'add'){

	                User.findOne(this.id).then(function(data){
	                    data.nbArticles= Number(data.nbArticles)+1;
	                    data.total= Number(data.total)+1;
	                    return User.update(data.id ,
	                    {
	                        nbArticles : data.nbArticles,
	                        total : data.total
	                    }).then(function(result){
	                        cb(null,result[0]); 
	                        User.publishUpdate( data.id , {
	                                nbArticles : data.nbArticles,
	                                total : data.total
	                        } )
	                    })
	                   
	                }).catch(function (err) {
	                    cb(err,null);
	                });
	            }
	  
	            if(options.verb == 'remove'){

	              User.findOne(this.id).then(function(data){
	                    data.nbArticles= Number(data.nbArticles) -1;
	                    data.total= Number(data.total) -1;
	                    
	                        return User.update(data.id ,
	                        {
	                            nbArticles : data.nbArticles,
	                            total : data.total
	                        }).then(function(result){
	                            User.publishUpdate( data.id , {
	                                nbArticles : data.nbArticles,
	                                total : data.total
	                            } )
	                            cb(null,result[0]);
	                        })

	                   
	                }).catch(function (err) {
	                    cb(err,null);
	                });
	            }
	        }
	        if(options.parentType == 'project')
	        {
	            if(options.verb == 'add'){

	                User.findOne(this.id).then(function(data){
	                    data.nbProjects= Number(data.nbProjects)+1;
	                    data.total= Number(data.total)+1;
	                    return User.update(data.id ,
	                    {
	                        nbProjects : data.nbProjects,
	                        total : data.total
	                    }).then(function(result){
	                        cb(null,result[0]); 
	                        User.publishUpdate( data.id , {
	                                nbProjects : data.nbProjects,
	                                total : data.total
	                        } )
	                    })
	                   
	                }).catch(function (err) {
	                    cb(err,null);
	                });
	            }
	  
	            if(options.verb == 'remove'){

	              User.findOne(this.id).then(function(data){
	                    data.nbProjects= Number(data.nbProjects) -1;
	                    data.total= Number(data.total) -1;
	                    
	                        return User.update(data.id ,
	                        {
	                            nbProjects : data.nbProjects,
	                            total : data.total
	                        }).then(function(result){
	                            User.publishUpdate( data.id , {
	                                nbProjects : data.nbProjects,
	                                total : data.total
	                            } )
	                            cb(null,result[0]);
	                        })

	                   
	                }).catch(function (err) {
	                    cb(err,null);
	                });
	            }
	        }
	    }
		
	},

	beforeCreate: function (value, callback){
	  	sid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');
		sid.seed(20);
		var myuniquevalue = sid.generate()
	  	var link = sails.config.URL_HOME+"admin#/firstconnexion/"+myuniquevalue+"/"+value.email;
	  	value.newuserhash = myuniquevalue;
	  	var encrypted = crypto.encrypt(myuniquevalue);
	  	value.password= encrypted;
	  	var company = sails.config.company
	  	var role = value.role
	  	mail.sendEmail({
             from: '"'+sails.config.company+'" <'+sails.config.mainEmail+'>', // sender address 
             to: value.email, // list of receivers 
             subject: sails.config.company+' - Creation de compte', // Subject line 
         },'newUser',{link:link,company: company,role:role , URL_HOME:sails.config.URL_HOME , ipport:'http://92.243.9.205:'+ sails.config.port +'/' }).then(function(data){
         });
	    return callback()
	    

	},

	beforeDestroy: function (value, callback){
        var id = value.where.id
        User.findOne(id).populateAll().then(function(data){
        	var imgsToDestroy = data.images.map(function(img) {
                return Image.destroy(img.id);
            });
            return Promise.all(imgsToDestroy)
	          .then(function() {
		          		callback()
	        })
        	
        })
    },
    afterDestroy: function (value, callback){
        es.delete('user',value[0]).then(function(){
            return callback()
        }).catch(function(err){
               console.log(err);
        })
    }
};

