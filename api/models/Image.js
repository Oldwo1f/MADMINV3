/**
 * Image.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var Promise = require('bluebird');
var fs = require('fs'), Writable = require('stream').Writable;
module.exports = {

  	schema: true,
  	attributes: {
  		filename:{type:'string',required:true},
  		name:{type:'string',required:true},
  		alt:{type:'text',defaultsTo:''},
  		rank:{type:'int'},
  		size:{type:'int'},
  		width:{type:'int'},
  		height:{type:'int'},
  		paysage:{type:'boolean',defaultsTo:true},
  		type:{type:'string'},
        selfUpdate:function(options,cb,res){
        var childID = this.id
        if(options.parentType == 'article')
        {

        	//find article
        	Article.findOne(options.parentId).populate('images').then(function(article){
        		
        		if(options.verb == 'add'){

	               Image.findOne(childID).then(function(data){
	                    return Image.update(data.id ,
	                    {
	                        rank : article.images.length
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
	            		return Image.findOne(childID)
	            	})
	            	.then(function(data){
	            		this.imgToremove = data
	                    return Promise.map(article.images,function(img){
	                    	if(img.rank > data.rank)
	                    	{
	                    		Image.findOne(img.id).then(function(data1){
				                    return Image.update(data1.id ,
				                    {
				                        rank : data1.rank-1
				                    }).then(function(result){
				                        return
				                    })
				                   
				                })

	                    	}
	                    	else{
	                    		return;
	                    	} 
	                    		
	                    })
	                   
	                }).then(function(){
	                	
	                	// if()
	                	return Image.destroy(this.imgToremove.id).then(function(data){
                            cb(null,data);
		                })


	                	// return data.images.map
	                }).catch(function (err) {
	                    cb(err,null);
	                });

	            }	










        	}).catch(function(err){
        		console.log(err);
        	})
        }
        if(options.parentType == 'fabricant')
        {

        	//find fabricant
        	Fabricant.findOne(options.parentId).populate('images').then(function(fabricant){
        		
        		if(options.verb == 'add'){

	               Image.findOne(childID).then(function(data){
	                    return Image.update(data.id ,
	                    {
	                        rank : fabricant.images.length
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
	            		return Image.findOne(childID)
	            	})
	            	.then(function(data){
	            		this.imgToremove = data
	                    return Promise.map(fabricant.images,function(img){
	                    	if(img.rank > data.rank)
	                    	{
	                    		Image.findOne(img.id).then(function(data1){
				                    return Image.update(data1.id ,
				                    {
				                        rank : data1.rank-1
				                    }).then(function(result){
				                        return
				                    })
				                   
				                })

	                    	}
	                    	else{
	                    		return;
	                    	} 
	                    		
	                    })
	                   
	                }).then(function(){
	                	
	                	// if()
	                	return Image.destroy(this.imgToremove.id).then(function(data){
                            cb(null,data);
		                })


	                	// return data.images.map
	                }).catch(function (err) {
	                    cb(err,null);
	                });

	            }	










        	}).catch(function(err){
        		console.log(err);
        	})
        }
        if(options.parentType == 'project')
        {

        	//find project
        	Project.findOne(options.parentId).populate('images').then(function(project){
        		


        		if(options.verb == 'add'){

	               Image.findOne(childID).then(function(data){
	                    
	                    return Image.update(data.id ,
	                    {
	                        // nbProjects : data.nbProjects,
	                        rank : project.images.length
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
	            		return Image.findOne(childID)
	            	})
	            	.then(function(data){
	            		this.imgToremove = data
	                    return Promise.map(project.images,function(img){
	                    	if(img.rank > data.rank)
	                    	{
	                    		Image.findOne(img.id).then(function(data1){
				                    return Image.update(data1.id ,
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
	                	
	                	return Image.destroy(this.imgToremove.id).then(function(data){
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
        if(options.parentType == 'ingrediant')
        {

        	//find ingrediant
        	Ingrediant.findOne(options.parentId).populate('images').then(function(ingrediant){
        		


        		if(options.verb == 'add'){

	               Image.findOne(childID).then(function(data){
	                    
	                    return Image.update(data.id ,
	                    {
	                        // nbIngrediants : data.nbIngrediants,
	                        rank : ingrediant.images.length
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
	            		return Image.findOne(childID)
	            	})
	            	.then(function(data){
	            		this.imgToremove = data
	                    return Promise.map(ingrediant.images,function(img){
	                    	if(img.rank > data.rank)
	                    	{
	                    		Image.findOne(img.id).then(function(data1){
				                    return Image.update(data1.id ,
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
	                	
	                	return Image.destroy(this.imgToremove.id).then(function(data){
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
        if(options.parentType == 'event')
        {
        	//find project
        	Events.findOne(options.parentId).populate('images').then(function(event){
        		if(options.verb == 'add'){

	               Image.findOne(childID).then(function(data){
	                    
	                    return Image.update(data.id ,
	                    {
	                        // nbEventss : data.nbEventss,
	                        rank : event.images.length
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
	            		return Image.findOne(childID)
	            	})
	            	.then(function(data){
	            		this.imgToremove = data
	                    return Promise.map(event.images,function(img){
	                    	if(img.rank > data.rank)
	                    	{
	                    		Image.findOne(img.id).then(function(data1){
				                    return Image.update(data1.id ,
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
	                	
	                	return Image.destroy(this.imgToremove.id).then(function(data){
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
        if(options.parentType == 'category')
        {

        	Category.findOne(options.parentId).populate('images').then(function(category){
        		


        		if(options.verb == 'add'){

	               Image.findOne(childID).then(function(data){
	                    
	                    return Image.update(data.id ,
	                    {
	                        // nbFabricants : data.nbFabricants,
	                        rank : category.images.length
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
	            		return Image.findOne(childID)
	            	})
	            	.then(function(data){
	            		this.imgToremove = data
	                    return Promise.map(category.images,function(img){
	                    	if(img.rank > data.rank)
	                    	{
	                    		Image.findOne(img.id).then(function(data1){
				                    return Image.update(data1.id ,
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
	                	return Image.destroy(this.imgToremove.id).then(function(data){
                            cb(null,data);
		                })


	                	// return data.images.map
	                }).catch(function (err) {
	                    cb(err,null);
	                });

	            }	










        	}).catch(function(err){
        		console.log(err);
        	})
        }if(options.parentType == 'slide')
        {

        	Slide.findOne(options.parentId).populate('images').then(function(slide){
        		
        		if(options.verb == 'add'){
	               Image.findOne(childID).then(function(data){
	                    return Image.update(data.id ,
	                    {
	                        rank : slide.images.length
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
	            		return Image.findOne(childID)
	            	})
	            	.then(function(data){
	            		this.imgToremove = data
	                    return Promise.map(slide.images,function(img){
	                    	if(img.rank > data.rank)
	                    	{
	                    		Image.findOne(img.id).then(function(data1){
				                    return Image.update(data1.id ,
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
	                	
	                	// if()
	                	return Image.destroy(this.imgToremove.id).then(function(data){
                            cb(null,data);
		                })


	                	// return data.images.map
	                }).catch(function (err) {
	                    cb(err,null);
	                });

	            }	










        	}).catch(function(err){
        		console.log(err);
        	})
        }
        if(options.parentType == 'user')
        {

        	User.findOne(options.parentId).populate('images').then(function(user){
        		
        		if(options.verb == 'add'){

	               Image.findOne(childID).then(function(data){
	                    
	                    return Image.update(data.id ,
	                    {
	                        // nbArticles : data.nbArticles,
	                        rank : user.images.length
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
	            		return Image.findOne(childID)
	            	})
	            	.then(function(data){
	            		this.imgToremove = data
	                    return Promise.map(user.images,function(img){
	                    	if(img.rank > data.rank)
	                    	{
	                    		Image.findOne(img.id).then(function(data1){
				                    return Image.update(data1.id ,
				                    {
				                        rank : data1.rank-1
				                    }).then(function(result){
				                        return
				                    })
				                   
				                })

	                    	}
	                    	else{
	                    		return;
	                    	} 
	                    })
	                }).then(function(){
	                	return Image.destroy(this.imgToremove.id).then(function(data){
                            cb(null,data);
		                })
	                	// return data.images.map
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
    afterCreate: function (value, callback){
        es.create('image',value).then(function(){
            return callback()
        }).catch(function(err){
               console.log(err);
        })
 
    },
    afterUpdate: function (value, callback){
        es.update('image',value).then(function(){
            return callback()
        }).catch(function(err){
               console.log(err);
        })
    },
    afterDestroy: function (value, callback){
        
        fs.unlink('uploads/images/originalSize/'+value[0].filename,function(err){
        	console.log(err);
        	
        })
        fs.unlink('uploads/images/adminThumbs/'+value[0].filename,function(err){
        	console.log(err);
        	
        })
        fs.unlink('uploads/images/resized/'+value[0].filename,function(err){
        	console.log(err);
        	
        })
        fs.unlink('uploads/images/profile/'+value[0].filename,function(err){
        	console.log(err);
        	
        })


    	console.log('WE ARE HERE');
        fs.unlink('uploads/images/resized2/'+value[0].filename,function(err){
        	console.log(err);
        	
        })
	   



        es.delete('image',value[0]).then(function(){
            return callback()
        }).catch(function(err){
        	return callback()
               console.log(err);
        })
    },
};