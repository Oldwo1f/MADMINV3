angular.module('pai-home', ['ui.router'])
.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){
    
      $stateProvider
	    .state('/', {
	        url : '/',
	     //    params:{
	     //    	sort:'date DESC',
	     //    	page:1,
	     //    	nbPerPage : 10
	    	// },
	        views:{
	        	'main' : {
	        		template: '<home-pai></home-pai>',
	        		controller:["$scope", function($scope){
	        			// $scope.itemList = itemList;
	        		}],
	        		// resolve:{
	          //           itemList :  function(fabricantService, $stateParams){
	          //               console.log('RESOLVE');

	          //               return fabricantService.fetch()
	          //           }
	          //       }
	        	}
 
	        }
       	})
      

}]);