/**
 * Player.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
schema: true,
  	attributes: {
  		name:{type:'string',defaultsTo:''},
  		rank:{type:'int'},
        poste:{type:'string',defaultsTo:''},
        content:{type:'text'},
  		dateofbirth:{type:'int',defaultsTo:0},
        projects:{collection:'project', via: 'players'},
        images:{collection:'image',defaultsTo:[]},
        taille:{type:'int',defaultsTo:0},
        detente:{type:'int',defaultsTo:0},
        attaque:{type:'int',defaultsTo:0},
        contre:{type:'int',defaultsTo:0},
        defence:{type:'int',defaultsTo:0},
        recep:{type:'int',defaultsTo:0},
        passe:{type:'int',defaultsTo:0},
        plongeon:{type:'int',defaultsTo:0},
        service:{type:'int',defaultsTo:0},
        vision:{type:'int',defaultsTo:0},
        mail:{type:'string',defaultsTo:null},
        facebook:{type:'string',defaultsTo:null},
        twitter:{type:'string',defaultsTo:null},
        instagram:{type:'string',defaultsTo:null},
        snapchat:{type:'string',defaultsTo:null},
        selfUpdate:function(options,cb){
            console.log('SELFUPDATE PLAYERS');
            console.log(options);
            console.log(this.id);
            var thisID = this.id
            if(options.parentType == 'project')
            {
                if(options.verb == 'add'){
                    Project.findOne(options.parentId).then(function(project){

                        console.log(project);
                        console.log(this.id);
                        Player.findOne(thisID).then(function(data){
                           console.log(data);
                            return Player.update(data.id ,
                            {
                                // nbArticles : data.nbArticles,
                                rank : project.players.length
                            }).then(function(result){
                                cb(null,data);
                                
                            })
                           
                        }).catch(function (err) {
                            cb(err,null);
                        });
                    }).catch(function (err) {
                        cb(err,null);
                    });
                }
            
                if(options.verb == 'remove'){

                  Player.findOne(this.id).then(function(data){
                       
                                cb(null,data);
                          
                       
                    }).catch(function (err) {
                        cb(err,null);
                    });
                }
            }




        // cb();
      }
	},
    afterCreate: function (value, callback){
        es.create('player',value).then(function(){
            return callback()
        }).catch(function(err){
               console.log(err);
        })
 
    },
    afterUpdate: function (value, callback){
        es.update('player',value).then(function(){
            return callback()
        }).catch(function(err){
               console.log(err);
        })
    },
    afterDestroy: function (value, callback){
        es.delete('player',value[0]).then(function(){
            return callback()
        }).catch(function(err){
               console.log(err);
        })
    },
};


