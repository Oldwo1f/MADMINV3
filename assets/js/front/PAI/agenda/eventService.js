angular.module('PAI')
.factory('eventService', function ($http,$q,$sailsSocket,$state,$auth) {
    var service = {};
    service.items=[];  

    service.filter={slug:'',page:1,order:'createdAt DESC',perPage:10};

    service.fetch= function(sort,page,nbPerPage) {

        console.log('FETCH');
        var deferred = $q.defer();
        // sort = sort? sort : 'date DESC'
        // nbPerPage = nbPerPage ? nbPerPage : 3
        // page = page ? page : 1;

        // console.log('nbPerPage '+ nbPerPage);
        // console.log('page '+ page);
        // console.log('/event/'+sort+'/'+nbPerPage+'/'+nbPerPage*(page-1));


        $sailsSocket.get('/api/event').success(function (data,status) {
            console.log(data);
            service.items =data;
            deferred.resolve(data);
        }).error(function (data,status) {
            // if(status == '401')
            //     $state.go('login')

            deferred.reject(status);
        })

        return deferred.promise;
    };
    service.fetchLast= function() {
        var deferred = $q.defer();

        $sailsSocket.get('/api/eventActif/date DESC/1/1').success(function (data,status) {
            deferred.resolve(data[0]);
        }).error(function (data,status) {
            // if(status == '401')
            //     $state.go('login')
            deferred.reject(status);
        })

        return deferred.promise;
    };
    service.search= function(slug,sort) {
        var deferred = $q.defer();
        sort = sort? sort : 'date DESC'
       
        $sailsSocket.get('/api/event/search/'+sort+'/'+slug).success(function (data,status) {
            service.items =data;
            deferred.resolve(data);
        }).error(function (data,status) {
            // if(status == '401')
            //     $state.go('login')
            deferred.reject(status);
        })

        return deferred.promise;
    };

    

    service.removeImage=function(id,imgID){

        var deferred = $q.defer();
        if(imgID){
            $sailsSocket.delete('/api/event/'+id+'/images/'+imgID).success(function (data,status) {
                deferred.resolve(data);
            }).error(function (data,status) {
                if(status == '401')
                    $state.go('login')
                deferred.reject(data);
            })
        }
        
        return deferred.promise;      
    }
    service.removeDocument=function(id,docID){

        var deferred = $q.defer();
        if(docID){
            $sailsSocket.delete('/api/event/'+id+'/documents/'+docID).success(function (data,status) {
                deferred.resolve(data);
            }).error(function (data,status) {
                if(status == '401')
                $state.go('login')
                deferred.reject(data);
            })
        }
        
        return deferred.promise;      
    }


    service.addCategory=function(id,newCategory){

        var deferred = $q.defer();
        if(newCategory.id){
            $sailsSocket.post('/api/event/'+id+'/categories/'+newCategory.id).success(function (data,status) {
                deferred.resolve(data);
            }).error(function (data,status) {
                if(status == '401')
                $state.go('login')
                deferred.reject(data);
            })
        }else{
            $sailsSocket.post('/api/event/'+id+'/categories/',newCategory).success(function (data,status) {
                deferred.resolve(data);
            }).error(function (data,status) {
                if(status == '401')
                $state.go('login')
                deferred.reject(data);
            })
        }
        return deferred.promise;      
    }

    service.removeCategory=function(id,newCategory){

        var deferred = $q.defer();
        if(newCategory.id){
            // TAG dejà existant
            $sailsSocket.delete('/api/event/'+id+'/categories/'+newCategory.id).success(function (data,status) {
                deferred.resolve(data);
            }).error(function (data,status) {
                if(status == '401')
                $state.go('login')
                deferred.reject(data);
            })
        }
        
        return deferred.promise;      
    }

    service.addAuthor=function(id,newAuthor){

        var deferred = $q.defer();
        if(newAuthor.id){
            $sailsSocket.post('/api/event/'+id+'/authors/'+newAuthor.id).success(function (data,status) {
                deferred.resolve({data:data, addedAuthorId: newAuthor.id});
            }).error(function (data,status) {
                if(status == '401')
                $state.go('login')
                deferred.reject(data);
            })
        }else{
            $sailsSocket.post('/api/event/'+id+'/authors/',newAuthor).success(function (data,status) {
                deferred.resolve({data:data, addedAuthorId: newAuthor.id});
            }).error(function (data,status) {
                if(status == '401')
                $state.go('login')
                deferred.reject(data);
            })
        }
        return deferred.promise;      
    }

    service.removeAuthor=function(id,newAuthor){

        var deferred = $q.defer();
        if(newAuthor.id){
            // TAG dejà existant
            $sailsSocket.delete('/api/event/'+id+'/authors/'+newAuthor.id).success(function (data,status) {
                deferred.resolve({data:data, removedAuthorId: newAuthor.id});
            }).error(function (data,status) {
                if(status == '401')
                $state.go('login')
                deferred.reject(data);
            })
        }
        
        return deferred.promise;      
    }
    service.addTag=function(id,newTag){

        // var tag = {text : newTag};
        var deferred = $q.defer();
        if(newTag.id){
            // TAG dejà existant
            $sailsSocket.post('/api/event/'+id+'/tags/'+newTag.id).success(function (data,status) {
                deferred.resolve(data);
            }).error(function (data,status) {
                if(status == '401')
                $state.go('login')
                deferred.reject(data);
            })
        }else{
            // TAG à créer
            $sailsSocket.post('/api/event/'+id+'/tags/',newTag).success(function (data,status) {
                deferred.resolve(data);
            }).error(function (data,status) {
                if(status == '401')
                $state.go('login')
                deferred.reject(data);
            })
        }
        
        return deferred.promise;      
    }

    service.removeTag=function(id,newTag){

        // var tag = {text : newTag};
        var deferred = $q.defer();
        if(newTag.id){
            // TAG dejà existant
            $sailsSocket.delete('/api/event/'+id+'/tags/'+newTag.id).success(function (data,status) {
                deferred.resolve(data);
            }).error(function (data,status) {
                if(status == '401')
                $state.go('login')
                deferred.reject(data);
            })
        }
        
        return deferred.promise;      
    }

    service.createBlank=function(e){

        var authorId = $auth.getPayload().sub
        console.log(authorId);
        e = {startsAt : new Date(),endsAt : new Date(),status:'draft',contentType:'eventpai',isPaiContent:true};
        var deferred = $q.defer();
        $sailsSocket.post('/api/event',e).success(function (data,status) {
            

            $sailsSocket.post('/api/event/'+data.id+'/authors/'+authorId).success(function (data2,status) {
                console.log('HEHEHEHEHHEHEHEHEHE');
                // console.log(data2);
                // if(typeof(data2.tags) != 'array')
                // data2.content='';
                // data2.tags=[];
                // deferred.resolve(data2);
                 $sailsSocket.get('/api/event/'+data.id).success(function (data3,status) {
                    console.log('HEHEHEHEHHEHEHEHEHE');
                    console.log(data3);
                    if(typeof(data3.tags) != 'array')
                    // data2.content='';
                    data3.tags=[];
                    deferred.resolve(data3);


                }).error(function (data,status) {
                    if(status == '401')
                    $state.go('login')
                    deferred.reject(data);
                })


            }).error(function (data,status) {
                if(status == '401')
                $state.go('login')
                deferred.reject(data);
            })


            // deferred.resolve(data);
        }).error(function (data,status) {
            if(status == '401')
                $state.go('login')
            deferred.reject(data);
        })
        return deferred.promise;      
    }
    service.addEvent=function(event){
        var deferred = $q.defer();
        // var myevent = {};

        // myevent.title = event.title ? event.title : 'No title';
        // myevent.link = event.link ? event.link : 'No title';
        // myevent.dateStart = event.dateStart ? event.dateStart : new Date();
        // myevent.dateEnd = event.dateEnd ? event.dateEnd : new Date();

        $sailsSocket.post('/api/event',event).success(function (data,status) {
            

            deferred.resolve(data);
        }).error(function (data,status) {
            if(status == '401')
                $state.go('login')
            deferred.reject(data);
        })
        return deferred.promise;      
    }
    service.fetchOne=function(id){

        // event = {date : new Date(),status:'draft'};
        var deferred = $q.defer();
        $sailsSocket.get('/api/event/'+id).success(function (data,status) {
            deferred.resolve(data);
        }).error(function (data,status) {
            if(status == '401')
                $state.go('login')
            deferred.reject(data);
        })
        return deferred.promise;      
    }
    service.fetchOneComment=function(id){

        // event = {date : new Date(),status:'draft'};
        var deferred = $q.defer();
        $sailsSocket.get('/api/comment/'+id).success(function (data,status) {
            deferred.resolve(data);
        }).error(function (data,status) {
            if(status == '401')
                $state.go('login')
            deferred.reject(data);
        })
        return deferred.promise;      
    }
    service.update=function(id, values){

        var deferred = $q.defer();
        $sailsSocket.put('/api/event/'+id,values).success(function (data,status) {
            deferred.resolve(data);
        }).error(function (data,status) {
            // if(status == '401')
            //     $state.go('login')
            deferred.reject(data);
        })
        return deferred.promise;      
    }
    service.validatePai=function(id, bonus){

        var deferred = $q.defer();
        $sailsSocket.post('/validatePaiEvent/'+id,{bonus:bonus}).success(function (data,status) {
            deferred.resolve(data);
        }).error(function (data,status) {
            // if(status == '401')
            //     $state.go('login')
            deferred.reject(data);
        })
        return deferred.promise;      
    }
    service.unvalidatePai=function(id, raison){

        var deferred = $q.defer();
        $sailsSocket.post('/unvalidatePaiEvent/'+id,{raison:raison}).success(function (data,status) {
            deferred.resolve(data);
        }).error(function (data,status) {
            // if(status == '401')
            //     $state.go('login')
            deferred.reject(data);
        })
        return deferred.promise;      
    }
    service.updateComment=function(id, values){

        var deferred = $q.defer();
        $sailsSocket.put('/api/comment/'+id,values).success(function (data,status) {
            deferred.resolve(data);
        }).error(function (data,status) {
            // if(status == '401')
            //     $state.go('login')
            deferred.reject(data);
        })
        return deferred.promise;      
    }
    service.addReponse=function(id, values){

        var deferred = $q.defer();
        $sailsSocket.post('/api/comment/'+id+'/responses',values).success(function (data,status) {
            deferred.resolve(data);
        }).error(function (data,status) {
            // if(status == '401')
            //     $state.go('login')
            deferred.reject(data);
        })
        return deferred.promise;      
    }
    service.deleteComment=function(id, values){

        var deferred = $q.defer();
        $sailsSocket.delete('/api/comment/'+id).success(function (data,status) {
            deferred.resolve(data);
        }).error(function (data,status) {
            // if(status == '401')
            //     $state.go('login')
            deferred.reject(data);
        })
        return deferred.promise;      
    }
    service.remove=function(id){
        console.log('REMOVE',id);

        var deferred = $q.defer();
        $sailsSocket.delete('/api/event/'+id).success(function (data,status) {
            deferred.resolve(data);
        }).error(function (data,status) {
            if(status == '401')
                $state.go('login')
            deferred.reject(data);
        })
        return deferred.promise;      
    }
    service.removeSyncro=function(id){
        // var deferred = $q.defer();
        $.ajax({
            method:'delete',
            url:'/api/event/'+id,
            cache: false,
            async: false
        }).done(function() {
            return;
        });
    }
    


    return service;
});