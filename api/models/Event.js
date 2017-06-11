/**
 * Event.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  	schema: true,
    attributes: {
		lang : {type:'string',defaultsTo:'fr'},
		title : {type:'string'},
      	content : {type:'text',defaultsTo:''},
		dateStart : {type:'datetime',required:true},
		dateEnd : {type:'datetime',required:true},
		nbView : {type:'integer',defaultsTo:0},
        status : {type:'string',required:true},
        contentType : {type:'string'},
      	isPaiContent : {type:'boolean',defaultsTo:false},
        link : {type:'string'},
        nbPoints : {type:'integer',defaultsTo:0},
  		solded : {type:'boolean',defaultsTo:false},
        privateContent:{type:'boolean',defaultsTo:false},
        collabsPoints:{collection:'collabsPoints', via: 'event',dominant:true},
        categories:{collection:'category', via: 'events',dominant:true},
        tags:{collection:'tag', via: 'events',dominant:true},
        images:{collection:'image',defaultsTo:[]},
  		authors:{collection:'user',defaultsTo:[]},
        
    },
    
    afterDestroy: function (value, callback){
        es.delete('event',value[0]).then(function(){
            return callback()
        }).catch(function(err){
               console.log(err);
        })
    },
    beforeDestroy: function (value, callback){
        var id = value.where.id
        Event.findOne(id).populateAll().then(function(data){
            var imgsToDestroy = data.images.map(function(img) {
                return Image.destroy(img.id);
            });
            var TagsUpdate = data.tags.map(function(tag) {
                if(tag.total-1 <=0){
                    return Tag.destroy(tag.id).then(function(data){
                    });
                }else{
                    return Tag.update(tag.id,{nbArticles:tag.nbArticles-1,total:tag.total-1});
                }
            });
            var CategoriesUpdate = data.categories.map(function(cat) {
               if(cat.total-1 <=0){
                    return Category.destroy(cat.id).then(function(data){
                    });
                }else{
                    return Category.update(cat.id,{nbArticles:cat.nbArticles-1,total:cat.total-1});
                }
            });

            return Promise.all(imgsToDestroy)
              .then(function() {
                return Promise.all(docsToDestroy)
                  .then(function() {
                       
                    return Promise.all(TagsUpdate)
                      .then(function() {
                           return Promise.all(CategoriesUpdate)
                      .then(function() {
                            callback()
                    })
                })
            })
        })
        });
        
    }
};

