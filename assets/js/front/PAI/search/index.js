console.log('searchFiles');
angular.module('pai-search', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
    
      $stateProvider
	    .state('search', {
	        url : '/search',
	     //    params:{
	     //    	sort:'date DESC',
	     //    	page:1,
	     //    	nbPerPage : 10
	    	// },
	        views:{
	        	'main' : {
	        		template: '<search-pai></search-pai>',
	        		controller:function($scope){
	        			// $scope.itemList = itemList;
	        		},
	        		// resolve:{
	          //           itemList :  function(fabricantService, $stateParams){
	          //               console.log('RESOLVE');

	          //               return fabricantService.fetch()
	          //           }
	          //       }
	        	}
 
	        }
       	})
       

});