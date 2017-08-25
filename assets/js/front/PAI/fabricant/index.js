angular.module('pai-fabricant', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
    
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
	        		controller:function($scope, itemList){
	        			$scope.itemList = itemList;
	        		},
	        		resolve:{
	                    itemList :  function(fabricantService, $stateParams){
	                        console.log('RESOLVE');

	                        return fabricantService.fetch()
	                    }
	                }
	        	}
 
	        }
       	})
      	.state('addFabricant', {
	        url : '/fabricant/add',
	        views:{
	        	'main': {
	        		template: '<add-fabricant new-fabricant="newFabricant"></add-fabricant>',
	        		controller:function($scope,newFabricant){  
	        			$scope.newFabricant = newFabricant;
	        			console.log('ADD CTRL');
	        		},
	        		resolve:{
	                    newFabricant :  function(fabricantService){
	                        
	                        return fabricantService.createBlank()
	                    }
	                }
	        	}

	        }
       	})
      	      	
      	.state('fabricant', {
	        url : '/fabricant/:id',
	        views:{
	        	'main': {
	        		template: '<single-fabricant item="curentFabricant"></single-fabricant>',
	        		controller:function($scope,curentFabricant){
	        			console.log('CONTROLLER SINGLE');
	        			console.log(curentFabricant);
	        			$scope.curentFabricant = curentFabricant;
	        		},
	        		resolve:{
	                    curentFabricant :  function(fabricantService,$stateParams){
	                    	console.log('resolve curentFabricant');
	                        
	                        return fabricantService.fetchOne($stateParams.id)
	                    }
	                }
	        	}

	        }
       	})

});