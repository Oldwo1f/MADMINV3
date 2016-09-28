var Promise = require('bluebird');

module.exports = {
	schema: true,
    attributes: {
    		lang : {type:'string',defaultsTo:'fr'},
    		title : {type:'string'},
      	content : {type:'text',defaultsTo:''},
      	shortcontent : {type:'text',defaultsTo:null},
      	description : {type:'text',defaultTso:null},
      	rewriteurl : {type:'string',defaultsTo:null},
      	keyword : {type:'string',defaultsTo:null},
    		date : {type:'datetime',required:true},
    		nbView : {type:'integer',defaultsTo:0},
        status : {type:'string',required:true},
        contentType : {type:'string'},
        link : {type:'string'},
        isPaiContent : {type:'boolean',defaultsTo:false},
        nbPoints : {type:'integer',defaultsTo:0},
  		  solded : {type:'boolean',defaultsTo:false},
        activeComent:{type:'boolean',defaultsTo:true},
        privateContent:{type:'boolean',defaultsTo:false},
        videoUrl:{type:'text',defaultsTo:null},
        videoHost:{type:'text',defaultsTo:null},
        collabsPoints:{collection:'collabsPoints', via: 'article',dominant:true},
        categories:{collection:'category', via: 'articles',dominant:true},

        // categorie: {collection: 'categoryArticle',defaultsTo:[]},
        tags:{collection:'tag', via: 'articles',dominant:true},
        documents:{collection:'document',defaultsTo:[]},
        images:{collection:'image',defaultsTo:[]},
  		  authors:{collection:'user',defaultsTo:[]},
        comments: {
          collection: 'comment',
          via:'article'
        },
    },
    
    afterDestroy: function (value, callback){
        es.delete('article',value[0]).then(function(){
            return callback()
        }).catch(function(err){
               console.log(err);
        })
    },
    beforeDestroy: function (value, callback){
        var id = value.where.id
        Article.findOne(id).populateAll().then(function(data){
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
            
        })
    }
};

