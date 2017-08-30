angular.module('PAI').factory('searchService',function ($compile,$sailsSocket,$q,$http,$state) {
	
	var service = {};
	

   
	service.sendSearch=function(searchText){
        var deferred = $q.defer();
        $sailsSocket.post('/search/global',{slug:searchText}).success(function (data,status) {
        	console.log(data);
            // var resultArray =[];
            // if(data.hits.total > 0){
            // 	for(var i in data.hits.hits){
            // 		resultArray.push(data.hits.hits[i]._source);
            // 	}
            // }
            // console.log(resultArray);
            deferred.resolve(data);
        }).error(function (data,status) {
            
            console.log(data);
            deferred.reject(data);
        })
        return deferred.promise;      
    }


	return service;
});