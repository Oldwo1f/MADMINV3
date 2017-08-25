angular.module('momi-pai2', ['ui.router'])
.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){
    
      $stateProvider
	    .state('fabricants', {
	        url : '/fabricants',
	        params:{
	        	sort:'date DESC',
	        	page:1,
	        	nbPerPage : 10
	    	},
	        parent:'dashboard',
	        views:{
	        	'page1': {
	        		template: '<fabricants fabricants-list="fabricantsList"></fabricants>',
	        		controller:["$scope", "fabricantsList", function($scope, fabricantsList){
	        			$scope.fabricantsList = fabricantsList;
	        		}],
	        		resolve:{
	                    fabricantsList :  ["fabricantService", "$stateParams", function(fabricantService, $stateParams){
	                        

	                        return fabricantService.fetch($stateParams.sort,$stateParams.page,$stateParams.nbPerPage)
	                    }]
	                }
	        	}

	        }
       	})
      	.state('fabricants.add', {
	        url : '/add',
	        parent:'fabricants',
	        views:{
	        	'page2@dashboard': {
	        		template: '<add-fabricant new-fabricant="newFabricant"></add-fabricant>',
	        		controller:["$scope", "newFabricant", function($scope, newFabricant){
	        			$scope.newFabricant = newFabricant;
	        		}],
	        		resolve:{
	                    newFabricant :  ["fabricantService", function(fabricantService){
	                        
	                        return fabricantService.createBlank()
	                    }]
	                }
	        	}

	        }
       	})
      	.state('fabricants.edit', {
	        url : '/edit/:id',
	        parent:'fabricants',
	        views:{
	        	'page2@dashboard': {
	        		template: '<add-fabricant new-fabricant="newFabricant"></add-fabricant>',
	        		controller:["$scope", "newFabricant", function($scope, newFabricant){
	        			$scope.newFabricant = newFabricant;
	        		}],
	        		resolve:{
	                    newFabricant :  ["fabricantService", "$stateParams", function(fabricantService,$stateParams){
	                        
	                        return fabricantService.fetchOne($stateParams.id)
	                    }]
	                }
	        	}

	        }
       	})

}]);
