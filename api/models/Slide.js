/**
 * Slide.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var Promise = require('bluebird');
var fs = require('fs'), Writable = require('stream').Writable;

module.exports = {
// schema: true,
  	attributes: {
  		title : {type:'string',defaultsTo:null},
    	link1 : {type:'string',defaultsTo:null}, 
    	link2 : {type:'string',defaultsTo:null},
    	content : {type:'text',defaultsTo:null},
    	btn : {type:'string',defaultsTo:null},
    	rank:{type:'int'},
    	images:{collection:'image',defaultsTo:[]},
    	documents:{collection:'document',defaultsTo:[]},
    	// image:{model:'image'},
    	slideshow : {
          model: 'slideshow',
        },
        selfUpdate:function(options,cb){
	       var slideID =this.id 
	        if(options.parentType == 'slideshow')
	        {
		        Slideshow.findOne(options.parentId).populate('slides').then(function(slideshow){
	        		if(options.verb == 'add'){

		               Slide.findOne(options.childId).then(function(data){
		                    return Slide.update(data.id ,
		                    {
		                        // nbArticles : data.nbArticles,
		                        rank : slideshow.slides.length
		                    }).then(function(result){
		                        cb(null,data);
		                        
		                    })
		                   
		                }).catch(function (err) {
		                    cb(err,null);
		                });
		            }
		  
		            if(options.verb == 'remove'){
		            	return Promise.bind({})
		            	.then(function(){
		            		return Slide.findOne(slideID)
		            	})
		            	.then(function(data){
		            		this.slideToremove = data

		                    return Promise.map(slideshow.slides,function(slid){
		                    	if(slid.rank > data.rank)
		                    	{
		                    		Slide.findOne(slid.id).then(function(data1){
					                    return Slide.update(data1.id ,
					                    {
					                        rank : data1.rank-1
					                    }).then(function(result){
					                        // cb(null,data);
					                        return
					                    })
					                   
					                })

		                    	}
		                    	else{
		                    		return;
		                    	} 
		                    		
		                    })
		                   
		                }).then(function(){
		                	return Slide.destroy(this.slideToremove.id).then(function(data){
	                            cb(null,data);
			                })
		                }).catch(function (err) {
		                    cb(err,null);
		                });

		            }	

	        	}).catch(function(err){
	        		console.log(err);
	        	})
	        }

	        
	    }
		
	},
	beforeDestroy: function (value, callback){
        var id = value.where.id
        Slide.findOne(id).populateAll().then(function(data){
        	var imgsToDestroy = data.images.map(function(img) {
                return Image.destroy(img.id);
            });

            var docsToDestroy = data.documents.map(function(img) {
                return Document.destroy(img.id);
            });

            return Promise.all(imgsToDestroy)
              .then(function() {
                return Promise.all(docsToDestroy)
                  .then(function() {
                        callback()
                      // return article;
                })
            })
        	
        })
    },
    afterCreate: function (value, callback){
        es.create('slide',value).then(function(){
            return callback()
        }).catch(function(err){
               console.log(err);
        })
 
    },
    afterUpdate: function (value, callback){
        es.update('slide',value).then(function(){
            return callback()
        }).catch(function(err){
               console.log(err);
        })
    },
  	afterDestroy: function (value, callback){
        es.delete('slide',value[0]).then(function(){
            return callback()
        }).catch(function(err){
               console.log(err);
        })
    }
};

