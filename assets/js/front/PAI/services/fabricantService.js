angular.module('PAI')
.factory('fabricantService', function ($http,$q,$sailsSocket,$state,$auth) {
    var service = {};
    service.items=[];  

    service.filter={slug:'',page:1,order:'createdAt DESC',perPage:10};

    service.fetch= function(page) {

        console.log('FETCH   page = ' +page);
        var deferred = $q.defer();
        
        $sailsSocket.get('/fabricant/fetchItem/'+page).success(function (data,status) {
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

    service.getFabList=function(searchText){
        console.log('service.getFabList');
        var deferred = $q.defer();
        $sailsSocket.get('/api/fabricant/getFabList').success(function (data,status) {

            console.log(data);
            deferred.resolve(data);
        }).error(function (data,status) {
            console.log('ERROR');
            deferred.reject(data);
        })
        return deferred.promise;      
    }
    service.searchFabricants=function(searchText){
        console.log('service.searchFabricants');
        var deferred = $q.defer();
        $sailsSocket.get('/api/fabricant/searchAutocomplete/'+searchText).success(function (data,status) {

            console.log(data);
            var resultArray =[];
            if(data.hits.total > 0){

                for(var i in data.hits.hits){
                    resultArray.push(data.hits.hits[i]._source);
                }
            }
            console.log(resultArray);
            // service.list = data ;
            deferred.resolve(resultArray);
        }).error(function (data,status) {
            console.log('ERROR');
            deferred.reject(data);
        })
        return deferred.promise;      
    }
    service.fetchLast= function() {
        var deferred = $q.defer();

        $sailsSocket.get('/api/fabricantActif/date DESC/1/1').success(function (data,status) {
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
       
        $sailsSocket.get('/api/fabricant/search/'+sort+'/'+slug).success(function (data,status) {
            service.items =data;
            deferred.resolve(data);
        }).error(function (data,status) {
            // if(status == '401')
            //     $state.go('login')
            deferred.reject(status);
        })

        return deferred.promise;
    };


    // service.autocomplete= function(query) {
    //     var deferred = $q.defer();

    //     $http.get('/fabricant/list/'+query).success(function (data,status) {
    //         // service.items=data
    //         deferred.resolve(data);
    //     }).error(function (data,status) {
    //         // messageCenterService.add('danger', 'Erreur dans la récupération de l\'utilisateur', { status: messageCenterService.status.unseen, timeout: 4000 });
    //         deferred.reject('error perso');
    //     })

    //     return deferred.promise;
    // };

    // service.fetch= function(id) {
    //     var deferred = $q.defer();

    //     $http.get('/fabricant/'+id).success(function (data,status) {
    //         service.items=data
    //         deferred.resolve(data);
    //     }).error(function (data,status) {
    //         // messageCenterService.add('danger', 'Erreur dans la récupération de l\'utilisateur', { status: messageCenterService.status.unseen, timeout: 4000 });
    //         deferred.reject('error perso');
    //     })

    //     return deferred.promise;
    // };

    // service.loadGraph= function(mode) {
    //     var deferred = $q.defer();
    //     // var period= 'month';
    //     $http.get('/fabricant/graph/'+mode).success(function (data,status) {
    //         console.log('resolveGRAPH');
    //         console.log(data);
    //         deferred.resolve(data);
    //     // }).error(function (data,status) {
    //         deferred.reject('error perso');
    //     })

    //     return deferred.promise;
    // };
    // service.loadGraph2= function(mode) {
    //     var deferred = $q.defer();
    //     // var period= 'month';
    //     $http.get('/fabricant/graph2/'+mode).success(function (data,status) {
    //         console.log('resolveGRAPH');
    //         console.log(data);
    //         deferred.resolve(data);
    //     }).error(function (data,status) {
    //         deferred.reject('error perso');
    //     })

    //     return deferred.promise;
    // };
    
    service.addCollabsPoints=function(id, idCollabs){

        var deferred = $q.defer();
        $sailsSocket.post('/api/fabricant/'+id+'/collabsPoints/'+idCollabs).success(function (data,status) {
            deferred.resolve(data);
        }).error(function (data,status) {
            // if(status == '401')
            //     $state.go('login')
            deferred.reject(data);
        })
        return deferred.promise;      
    }

    service.removeImage=function(id,imgID){

        var deferred = $q.defer();
        if(imgID){
            $sailsSocket.delete('/api/fabricant/'+id+'/images/'+imgID).success(function (data,status) {
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
            $sailsSocket.delete('/api/fabricant/'+id+'/documents/'+docID).success(function (data,status) {
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
            $sailsSocket.post('/api/fabricant/'+id+'/categories/'+newCategory.id).success(function (data,status) {
                deferred.resolve(data);
            }).error(function (data,status) {
                if(status == '401')
                $state.go('login')
                deferred.reject(data);
            })
        }else{
            $sailsSocket.post('/api/fabricant/'+id+'/categories/',newCategory).success(function (data,status) {
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
            $sailsSocket.delete('/api/fabricant/'+id+'/categories/'+newCategory.id).success(function (data,status) {
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
            $sailsSocket.post('/api/fabricant/'+id+'/authors/'+newAuthor.id).success(function (data,status) {
                deferred.resolve({data:data, addedAuthorId: newAuthor.id});
            }).error(function (data,status) {
                if(status == '401')
                $state.go('login')
                deferred.reject(data);
            })
        }else{
            $sailsSocket.post('/api/fabricant/'+id+'/authors/',newAuthor).success(function (data,status) {
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
            $sailsSocket.delete('/api/fabricant/'+id+'/authors/'+newAuthor.id).success(function (data,status) {
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
            $sailsSocket.post('/api/fabricant/'+id+'/tags/'+newTag.id).success(function (data,status) {
                deferred.resolve(data);
            }).error(function (data,status) {
                if(status == '401')
                $state.go('login')
                deferred.reject(data);
            })
        }else{
            // TAG à créer
            $sailsSocket.post('/api/fabricant/'+id+'/tags/',newTag).success(function (data,status) {
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
            $sailsSocket.delete('/api/fabricant/'+id+'/tags/'+newTag.id).success(function (data,status) {
                deferred.resolve(data);
            }).error(function (data,status) {
                if(status == '401')
                $state.go('login')
                deferred.reject(data);
            })
        }
        
        return deferred.promise;      
    }

    service.createBlank=function(fabricant){

        var authorId = $auth.getPayload().sub
        console.log(authorId);
        fabricant = {date : new Date(),status:'draft',contentType:'autre',isPaiContent:false};
        var deferred = $q.defer();
        $sailsSocket.post('/api/fabricant',fabricant).success(function (data,status) {
            

            console.log(data);

            $sailsSocket.post('/api/fabricant/'+data.id+'/authors/'+authorId).success(function (data2,status) {
                console.log('HEHEHEHEHHEHEHEHEHE');
                console.log(data2);
                // if(typeof(data2.tags) != 'array')
                // data2.content='';
                // data2.tags=[];
                // deferred.resolve(data2);
                 $sailsSocket.get('/api/fabricant/'+data.id).success(function (data3,status) {
                    console.log('HEHEHEHEHHEHEHEHEHE');
                    console.log(data3);
                    if(typeof(data3.tags) != 'array')
                    // data2.content='';
                    data3.tags=[];
                    deferred.resolve(data3);


                }).error(function (data,status) {
                    console.log('ERROR');
                    console.log(status);
                    console.log(data);
                    if(status == '401')
                    $state.go('login')
                    deferred.reject(data);
                })


            }).error(function (data,status) {
                console.log('ERROR');
                console.log(status);
                console.log(data);
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

    service.validatePai=function(id){

        var deferred = $q.defer();
        $sailsSocket.post('/validatePaiFabricant/'+id).success(function (data,status) {
            deferred.resolve(data);
        }).error(function (data,status) {
            // if(status == '401')
            //     $state.go('login')
            deferred.reject(data);
        })
        return deferred.promise;      
    }
    service.unvalidatePai=function(id, raison,counterOffer){

        var deferred = $q.defer();
        $sailsSocket.post('/unvalidatePaiFabricant/'+id,{raison:raison,counterOffer:counterOffer}).success(function (data,status) {
            deferred.resolve(data);
        }).error(function (data,status) {
            // if(status == '401')
            //     $state.go('login')
            deferred.reject(data);
        })
        return deferred.promise;      
    }

    service.fetchOne=function(id){

        // fabricant = {date : new Date(),status:'draft'};
        console.log('FETCHONEFAB');
        var deferred = $q.defer();
        $sailsSocket.get('/fabricant/fetchOne/'+id).success(function (data,status) {
            deferred.resolve(data);
        }).error(function (data,status) {
            if(status == '401')
                $state.go('login')
            deferred.reject(data);
        })
        return deferred.promise;      
    }
    service.fetchOneComment=function(id){

        // fabricant = {date : new Date(),status:'draft'};
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
        $sailsSocket.put('/api/fabricant/'+id,values).success(function (data,status) {
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

        var deferred = $q.defer();
        $sailsSocket.delete('/api/fabricant/'+id).success(function (data,status) {
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
            url:'/api/fabricant/'+id,
            cache: false,
            async: false
        }).done(function() {
            return;
        });
    }

    


    return service;
});