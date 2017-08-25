/**
 * Comment.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

	schema: true,
  	attributes: {
  		authorName:{type:'string',required:true},
  		email:{type:'string',required:true,email:true},
  		content:{type:'text',required:true},
  		status:{type:'string',defaultsTo:'new'},
  		imgAuthor:{type:'string'},
  		articleName:{type:'string'},
  		admin:{type:'boolean',defaultsTo:false},
  		imgpath:{type:'text'},
  		user: {
			model: 'user',
		},
  		article: {
			model: 'article',
		},
		project:{ 
			model:'project'
		},
		responses: {
			collection: 'comment',
		},
		selfUpdate:function(options,cb){
			console.log('SELFUPDATE'); 
	        cb(null, this)
	        if(options.parentType == 'article')
	        {
	            if(options.verb == 'add'){ 

	                // Category.findOne(this.id).then(function(data){
	                // console.log(data);
	                // console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<);");
	                //     data.nbArticles= Number(data.nbArticles)+1;
	                //     data.total= Number(data.total)+1;
	                //     console.log(data);
	                //     return Category.update(data.id ,
	                //     {
	                //         nbArticles : data.nbArticles,
	                //         total : data.total
	                //     }).then(function(result){
	                //         console.log(result[0]);
	                //         cb(null,result[0]);
	                //         Category.publishUpdate( data.id , {
	                //                 nbArticles : data.nbArticles,
	                //                 total : data.total
	                //         } )
	                //     })
	                   
	                // }).catch(function (err) {
	                //     cb(err,null);
	                // });
	            }
	  
	            if(options.verb == 'remove'){

	              // Category.findOne(this.id).then(function(data){
	              //       data.nbArticles= Number(data.nbArticles) -1;
	              //       data.total= Number(data.total) -1;
	              //       if(data.total<=0){
	              //        //&& data.nbArticles<=0 && data.nbArticles<=0 &&
	              //           return Category.destroy(data.id).then(function(result){
	              //               cb(null,result[0]);
	              //               Category.publishDestroy( data.id )
	              //           })  
	              //       }else{
	              //           return Category.update(data.id ,
	              //           {
	              //               nbArticles : data.nbArticles,
	              //               total : data.total
	              //           }).then(function(result){
	              //               cb(null,result[0]);
	              //               Category.publishUpdate( data.id , {
	              //                   nbArticles : data.nbArticles,
	              //                   total : data.total
	              //               } )
	              //           })

	              //       }
	                   
	                // }).catch(function (err) {
	                //     cb(err,null);
	                // });
	            }
	        }
      	}
	},
	afterUpdate:function(value, callback){

		Notification.find({itemid:value.id}).then(function(data){
			if(data[0]){
				data = data[0]
				Notification.update(data.id,{status:'actif'}).then(function(da){
					
				})
				Notification.publishUpdate(data.id,{status:'actif'})
				 es.update('comment',value).then(function(){
		            return callback(null)
		        }).catch(function(err){
		               console.log(err);
		        })
				
			}else
			{
				callback(null)
			}

			
		})



	},
	beforeCreate:function(value, callback){
		console.log('BEFORECREATE');
		console.log(value);
	            return callback(null,value)
	     
	},

	afterCreate:function(value, callback){

		console.log('aftercreate');
		console.log(value);
		if(value.admin){
			es.create('comment',value).then(function(){
	            return callback(null,value)
	        }).catch(function(err){
	               console.log(err);
	        })
		}else{
			var notif={};
				notif.status = 'new';
			if(value.project){
				notif.itemid2=value.project;
				notif.type='commentProject'
			}
			if(value.article){
				notif.type='commentArticle'
				notif.itemid2=value.article;
			}
				notif.itemid=value.id;
				notif.info1='<small>par</small> '+ value.authorName;
				notif.info2='<small>sur</small> <i>'+ value.articleName +'</i>';
			console.log(notif);
			Notification.create(notif)
			.then(function(data){
				Notification.publishCreate(data)
				es.create('comment',value).then(function(){
						
		            return callback(null,data)
		        }).catch(function(err){
		               console.log(err);
		               return callback(null,data)
		        })
				
			})
		}


	},
    afterDestroy: function (value, callback){
    	value = value[0];
    	Notification.find({itemid:value.id}).then(function(data){
			if(data[0]){
				data = data[0]
				Notification.update(data.id,{status:'actif'}).then(function(da){
					
				})
				Notification.publishUpdate(data.id,{status:'actif'})
				 es.delete('comment',value).then(function(){
		            return callback()
		        }).catch(function(err){
		        })
				
			}else
			{
				callback(null)
			}

			
		})
    },
};

