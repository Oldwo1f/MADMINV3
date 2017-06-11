/**
 * Category.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  	schema: true,
  	attributes: {
  		name:{type:'string',required:true},
  		textColor:{type:'string',defaultsTo:'red'},
  		color:{type:'string',defaultsTo:'green'},
  		nbArticles:{type:'int',defaultsTo:0},
        nbProjects:{type:'int',defaultsTo:0},
        nbEvents:{type:'int',defaultsTo:0},
        nbFabricants:{type:'int',defaultsTo:0},
        nbIngrediants:{type:'int',defaultsTo:0},
  		total:{type:'int',defaultsTo:0},
        images:{collection:'image',defaultsTo:[]},
        articles:{collection:'article', via: 'categories'},
        projects:{collection:'project', via: 'categories'},
        ingrediants:{collection:'ingrediant', via: 'categories'},
        fabricants:{collection:'fabricant', via: 'categories'},
        events:{collection:'event', via: 'categories'}, 
  		selfUpdate:function(options,cb){

        if(options.parentType == 'article')
        {
            if(options.verb == 'add'){

                Category.findOne(this.id).then(function(data){
                    data.nbArticles= Number(data.nbArticles)+1;
                    data.total= Number(data.total)+1;
                    return Category.update(data.id ,
                    {
                        nbArticles : data.nbArticles,
                        total : data.total
                    }).then(function(result){
                        cb(null,result[0]);
                        Category.publishUpdate( data.id , {
                                nbArticles : data.nbArticles,
                                total : data.total
                        } )
                    })
                   
                }).catch(function (err) {
                    cb(err,null);
                });
            }
  
            if(options.verb == 'remove'){

              Category.findOne(this.id).then(function(data){
                    data.nbArticles= Number(data.nbArticles) -1;
                    data.total= Number(data.total) -1;
                    if(data.total<=0){
                     //&& data.nbArticles<=0 && data.nbArticles<=0 &&
                        return Category.destroy(data.id).then(function(result){
                            cb(null,result[0]);
                            Category.publishDestroy( data.id )
                        })  
                    }else{
                        return Category.update(data.id ,
                        {
                            nbArticles : data.nbArticles,
                            total : data.total
                        }).then(function(result){
                            cb(null,result[0]);
                            Category.publishUpdate( data.id , {
                                nbArticles : data.nbArticles,
                                total : data.total
                            } )
                        })

                    }
                   
                }).catch(function (err) {
                    cb(err,null);
                });
            }
        }else
        if(options.parentType == 'project')
        {
            if(options.verb == 'add'){

                Category.findOne(this.id).then(function(data){
                    data.nbProjects= Number(data.nbProjects)+1;
                    data.total= Number(data.total)+1;
                    return Category.update(data.id ,
                    {
                        nbProjects : data.nbProjects,
                        total : data.total
                    }).then(function(result){
                        cb(null,result[0]);
                        Category.publishUpdate( data.id , {
                                nbProjects : data.nbProjects,
                                total : data.total
                        } )
                    })
                   
                }).catch(function (err) {
                    cb(err,null);
                });
            }
  
            if(options.verb == 'remove'){

              Category.findOne(this.id).then(function(data){
                    data.nbProjects= Number(data.nbProjects) -1;
                    data.total= Number(data.total) -1;
                    if(data.total<=0){
                     //&& data.nbProjects<=0 && data.nbProjects<=0 &&
                        return Category.destroy(data.id).then(function(result){
                            cb(null,result[0]);
                            Category.publishDestroy( data.id )
                        })  
                    }else{
                        return Category.update(data.id ,
                        {
                            nbProjects : data.nbProjects,
                            total : data.total
                        }).then(function(result){
                            cb(null,result[0]);
                            Category.publishUpdate( data.id , {
                                nbProjects : data.nbProjects,
                                total : data.total
                            } )
                        })

                    }
                   
                }).catch(function (err) {
                    cb(err,null);
                });
            }
        }else
        if(options.parentType == 'ingrediant')
        {
            if(options.verb == 'add'){


                Category.findOne(this.id).then(function(data){
                    data.nbIngrediants= Number(data.nbIngrediants)+1;
                    data.total= Number(data.total)+1;
                    return Category.update(data.id ,
                    {
                        nbIngrediants : data.nbIngrediants,
                        total : data.total,
                    }).then(function(result){
                        console.log('CAT + selfUpdate');
                        console.log(result);
                        cb(null,result[0]);
                        Category.publishUpdate( data.id , {
                                nbIngrediants : data.nbIngrediants,
                                total : data.total
                        } )
                    })
                   
                }).catch(function (err) {
                    cb(err,null);
                });
            }
  
            if(options.verb == 'remove'){

              Category.findOne(this.id).then(function(data){
                    data.nbIngrediants= Number(data.nbIngrediants) -1;
                    data.total= Number(data.total) -1;
                    if(data.total<=0){
                     //&& data.nbIngrediants<=0 && data.nbIngrediants<=0 &&
                        return Category.destroy(data.id).then(function(result){
                            cb(null,result[0]);
                            Category.publishDestroy( data.id )
                        })  
                    }else{
                        return Category.update(data.id ,
                        {
                            nbIngrediants : data.nbIngrediants,
                            total : data.total
                        }).then(function(result){
                            cb(null,result[0]);
                            Category.publishUpdate( data.id , {
                                nbIngrediants : data.nbIngrediants,
                                total : data.total
                            } )
                        })

                    }
                   
                }).catch(function (err) {
                    cb(err,null);
                });
            }
        }else
        if(options.parentType == 'event')
        {
            if(options.verb == 'add'){

                Category.findOne(this.id).then(function(data){
                    data.nbEvents= Number(data.nbEvents)+1;
                    data.total= Number(data.total)+1;
                    return Category.update(data.id ,
                    {
                        nbEvents : data.nbEvents,
                        total : data.total
                    }).then(function(result){
                        cb(null,result[0]);
                        Category.publishUpdate( data.id , {
                                nbEvents : data.nbEvents,
                                total : data.total
                        } )
                    })
                   
                }).catch(function (err) {
                    cb(err,null);
                });
            }
  
            if(options.verb == 'remove'){

              Category.findOne(this.id).then(function(data){
                    data.nbEvents= Number(data.nbEvents) -1;
                    data.total= Number(data.total) -1;
                    if(data.total<=0){
                     //&& data.nbEvents<=0 && data.nbEvents<=0 &&
                        return Category.destroy(data.id).then(function(result){
                            cb(null,result[0]);
                            Category.publishDestroy( data.id )
                        })  
                    }else{
                        return Category.update(data.id ,
                        {
                            nbEvents : data.nbEvents,
                            total : data.total
                        }).then(function(result){
                            cb(null,result[0]);
                            Category.publishUpdate( data.id , {
                                nbEvents : data.nbEvents,
                                total : data.total
                            } )
                        })

                    }
                   
                }).catch(function (err) {
                    cb(err,null);
                });
            }
        }
        else if(options.parentType == 'fabricant'){


            if(options.verb == 'add'){

                Category.findOne(this.id).then(function(data){
                    data.nbFabricants= Number(data.nbFabricants)+1;
                    data.total= Number(data.total)+1;
                    console.log('on est la');
                    console.log(data);
                    return Category.update(data.id ,
                    {
                        nbFabricants : data.nbFabricants,
                        total : data.total,
                    }).then(function(result){
                        cb(null,result[0]);
                        Category.publishUpdate( data.id , {
                                nbFabricants : data.nbFabricants,
                                total : data.total
                        } )
                    })
                   
                }).catch(function (err) {
                    console.log(err);
                    cb(err,null);
                });
            }
  
            if(options.verb == 'remove'){

              Category.findOne(this.id).then(function(data){
                    data.nbFabricants= Number(data.nbFabricants) -1;
                    data.total= Number(data.total) -1;
                    if(data.total<=0){
                     //&& data.nbFabricants<=0 && data.nbFabricants<=0 &&
                        return Category.destroy(data.id).then(function(result){
                            cb(null,result[0]);
                            Category.publishDestroy( data.id )
                        })  
                    }else{
                        return Category.update(data.id ,
                        {
                            nbFabricants : data.nbFabricants,
                            total : data.total
                        }).then(function(result){
                            cb(null,result[0]);
                            Category.publishUpdate( data.id , {
                                nbFabricants : data.nbFabricants,
                                total : data.total
                            } )
                        })

                    }
                   
                }).catch(function (err) {
                    cb(err,null);
                });
            }
        }
      }
	},
	afterCreate: function (value, callback){

        es.create('category',value).then(function(){
            return callback()
        }).catch(function(err){
               console.log(err);
        })
 
    },
    afterUpdate: function (value, callback){
        console.log('after UPDATE category');

        es.update('category',value).then(function(){
            return callback()
        }).catch(function(err){
               console.log(err);
        })
    },
    afterDestroy: function (value, callback){
        es.delete('category',value[0]).then(function(){
            return callback()
        }).catch(function(err){
               console.log(err);
        })
    },
    beforeDestroy: function (value, callback){
        var id = value.where.id
        Category.findOne(id).populateAll().then(function(data){
            var imgsToDestroy = data.images.map(function(img) {
                return Image.destroy(img.id);
            });
            return Promise.all(imgsToDestroy)
              .then(function() {
                        callback()
            })
            
        })
    }
};
