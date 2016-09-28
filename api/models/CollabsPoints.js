/**
 * CollabsPoints.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  	attributes: {

      status:{type:'string',defaultsTo:'waiting'},
  		title:{type:'string',defaultsTo:null},

      score:{type:'integer',defaultsTo:0},
  		counterOffer:{type:'integer',defaultsTo:0},
  		bonus:{type:'integer',defaultsTo:0},
      total:{type:'integer',defaultsTo:0},
  		dateValidation:{type:'date',defaultsTo:null},
      admin:{type:'boolean',defaultsTo:false},

      payment:{type:'boolean',required:false},
  		



      contentModel:{type:'string',required:true},
      contentType:{type:'string',required:true},
  		contentID:{type:'string',required:true},

        user:{collection:'user', via: 'collabsPoints'},
        article:{collection:'article', via: 'collabsPoints'},
        project:{collection:'project', via: 'collabsPoints'},
        event:{collection:'event', via: 'collabsPoints'},

        selfUpdate:function(options,cb){

          console.log('SELFUPDATE COLLBABSPOINTS');
        	console.log(options.parentType);
	        if(options.parentType == 'user')
	        {
	            
	        }

	        CollabsPoints.findOne(this.id).then(function(data){
	        	cb(null,data)
	        })


	        // cb(null)

      	}
  	},
    afterCreate: function (value, callback){


        console.log('collabsPoints');
        console.log(value);
        if(value.admin){
              es.create('collabsPoints',value).then(function(){
                  return callback(null,value)
              }).catch(function(err){
                     console.log(err);
              })
        }else{
            var notif={};
            notif.status = 'new';
            notif.itemid2=value.contentID;
            notif.type='validate-'+ value.contentType
          
            notif.itemid=value.id;
            if(!value.payment){
              notif.info1='<small>pour</small> <i>'+ value.score +'</i><small> points collabs</small>';
              notif.info2=value.title;
            }else if(value.payment== true){
              notif.info1='<small>contenus à valeur de</small> <i>'+ value.initialPrice +' €</i> ';
              notif.info2=value.title;
            }
            console.log(notif);

            Notification.create(notif)
            .then(function(data){
                Notification.publishCreate(data)

                es.create('collabsPoints',value).then(function(){
                    return callback(null,data)
                }).catch(function(err){
                       console.log(err);
                })
                
            })
        }


    },
    afterUpdate:function(value, callback){

        Notification.find({itemid:value.id}).then(function(data){
            if(data[0]){
                data = data[0]
                Notification.update(data.id,{status:'actif'}).then(function(da){
                    Notification.publishUpdate(data.id,{status:'actif'})
                    es.update('collabsPoints',value).then(function(){
                        return callback(null)
                    }).catch(function(err){
                           console.log(err);
                    })
                })
                
                
            }else
            {
                callback(null)
            }

            
        })


    },
    afterDestroy: function (value, callback){
        es.delete('collabsPoints',value[0]).then(function(){
            return callback()
        }).catch(function(err){
               console.log(err);
        })
    },
};

