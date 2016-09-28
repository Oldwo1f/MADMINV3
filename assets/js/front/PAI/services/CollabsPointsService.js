angular.module('PAI')
.factory('collabsPointsService', ["$http", "$q", "$sailsSocket", "$state", "$auth", function ($http,$q,$sailsSocket,$state,$auth) {
    var service = {};
    service.items=[];  

    service.filter={slug:'',page:1,order:'createdAt DESC',perPage:10};

    service.fetch= function(sort,page,nbPerPage) {

        console.log('FETCH');
        var deferred = $q.defer();
        sort = sort? sort : 'date DESC'
        nbPerPage = nbPerPage ? nbPerPage : 3
        page = page ? page : 1;

        console.log('nbPerPage '+ nbPerPage);
        console.log('page '+ page);
        console.log('/collabsPoints/'+sort+'/'+nbPerPage+'/'+nbPerPage*(page-1));
        $sailsSocket.get('/api/collabsPoints/'+sort+'/'+nbPerPage+'/'+nbPerPage*(page-1)).success(function (data,status) {
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

        $sailsSocket.get('/api/collabsPointsActif/date DESC/1/1').success(function (data,status) {
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
       
        $sailsSocket.get('/api/collabsPoints/search/'+sort+'/'+slug).success(function (data,status) {
            service.items =data;
            deferred.resolve(data);
        }).error(function (data,status) {
            // if(status == '401')
            //     $state.go('login')
            deferred.reject(status);
        })

        return deferred.promise;
    };



    service.fetchOne=function(id){

        // collabsPoints = {date : new Date(),status:'draft'};
        var deferred = $q.defer();
        $sailsSocket.get('/api/collabsPoints/'+id).success(function (data,status) {
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
        $sailsSocket.put('/api/collabsPoints/'+id,values).success(function (data,status) {
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
        $sailsSocket.delete('/api/collabsPoints/'+id).success(function (data,status) {
            deferred.resolve(data);
        }).error(function (data,status) {
            if(status == '401')
                $state.go('login')
            deferred.reject(data);
        })
        return deferred.promise;      
    }

    


    return service;
}]);