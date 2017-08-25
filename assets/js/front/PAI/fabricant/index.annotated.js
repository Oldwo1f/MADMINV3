angular.module('pai-fabricant', ['ui.router'])
.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){
    
      $stateProvider
	    .state('fabricants', {
	        url : '/fabricants',
	     //    params:{
	     //    	sort:'date DESC',
	     //    	page:1,
	     //    	nbPerPage : 10
	    	// },
	        views:{
	        	'main' : {
	        		template: '<fabricant item-list="itemList"></fabricant>',
	        		controller:["$scope", "itemList", function($scope, itemList){
	        			$scope.itemList = itemList;
	        		}],
	        		resolve:{
	                    itemList :  ["fabricantService", "$stateParams", function(fabricantService, $stateParams){
	                        console.log('RESOLVE');

	                        return fabricantService.fetch()
	                    }]
	                }
	        	}
 
	        }
       	})
      	.state('addFabricant', {
	        url : '/fabricant/add',
	        views:{
	        	'main': {
	        		template: '<add-fabricant new-fabricant="newFabricant"></add-fabricant>',
	        		controller:["$scope", "newFabricant", function($scope,newFabricant){  
	        			$scope.newFabricant = newFabricant;
	        			console.log('ADD CTRL');
	        		}],
	        		resolve:{
	                    newFabricant :  ["fabricantService", function(fabricantService){
	                        
	                        return fabricantService.createBlank()
	                    }]
	                }
	        	}

	        }
       	})
      	      	
      	.state('fabricant', {
	        url : '/fabricant/:id',
	        views:{
	        	'main': {
	        		template: '<single-fabricant item="curentFabricant"></single-fabricant>',
	        		controller:["$scope", "curentFabricant", function($scope,curentFabricant){
	        			console.log('CONTROLLER SINGLE');
	        			console.log(curentFabricant);
	        			$scope.curentFabricant = curentFabricant;
	        		}],
	        		resolve:{
	                    curentFabricant :  ["fabricantService", "$stateParams", function(fabricantService,$stateParams){
	                    	console.log('resolve curentFabricant');
	                        
	                        return fabricantService.fetchOne($stateParams.id)
	                    }]
	                }
	        	}

	        }
       	})

}]);