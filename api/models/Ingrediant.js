/**
 * Ingrediant.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var Promise = require('bluebird');

module.exports = {
    schema: true,
    attributes: {
        lang : {type:'string',defaultsTo:'fr'},
        name : {type:'string'},
        content : {type:'text',defaultsTo:''},
        shortcontent : {type:'text',defaultsTo:null},
        date : {type:'datetime',required:true},
        nbView : {type:'integer',defaultsTo:0},
        validate : {type:'boolean',defaultsTo:null},
        isPaiContent : {type:'boolean',defaultsTo:false},
        status : {type:'string',required:true},
        nbPoints : {type:'integer',defaultsTo:0},
        solded : {type:'boolean',defaultsTo:false},
        collabsPoints:{collection:'collabsPoints', via: 'ingrediant',dominant:true},
        videoUrl:{type:'text',defaultsTo:null},
        videoHost:{type:'text',defaultsTo:null},
        categories:{collection:'category', via: 'ingrediants',dominant:true},
        tags:{collection:'tag', via: 'ingrediants',dominant:true},
        documents:{collection:'document',defaultsTo:[]},
        images:{collection:'image',defaultsTo:[]},
        authors:{collection:'user',defaultsTo:[]},
        fabricant:{model:'fabricant'}
    },
    
    afterDestroy: function (value, callback){
        es.delete('ingrediant',value[0]).then(function(){
            return callback()
        }).catch(function(err){
               console.log(err);
        })
    },
    beforeDestroy: function (value, callback){
        var id = value.where.id
        Ingrediant.findOne(id).populateAll().then(function(data){
            var imgsToDestroy = data.images.map(function(img) {
                return Image.destroy(img.id);
            });
            var docsToDestroy = data.documents.map(function(img) {
                return Document.destroy(img.id);
            });
            var TagsUpdate = data.tags.map(function(tag) {
                if(tag.total-1 <=0){
                    return Tag.destroy(tag.id).then(function(data){
                    });
                }else{
                    return Tag.update(tag.id,{nbIngrediants:tag.nbIngrediants-1,total:tag.total-1});
                }
            });
            var CategoriesUpdate = data.categories.map(function(cat) {
               if(cat.total-1 <=0){
                    return Category.destroy(cat.id).then(function(data){
                    });
                }else{
                    return Category.update(cat.id,{nbIngrediants:cat.nbIngrediants-1,total:cat.total-1});
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
            
        })
    }
};


