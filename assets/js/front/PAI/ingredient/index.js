angular.module('pai-ingredient', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
    
      $stateProvider
	    .state('ingredients', {
	        url : '/ingredients',
	     //    params:{
	     //    	sort:'date DESC',
	     //    	page:1,
	     //    	nbPerPage : 10
	    	// },
	        views:{
	        	'main' : {
	        		template: '<ingredient item-list="itemList"></ingredient>',
	        		controller:function($scope, itemList){
	        			$scope.itemList = itemList;
	        		},
	        		resolve:{
	                    itemList :  function(ingredientService, $stateParams){
	                        console.log('RESOLVE');

	                        return ingredientService.fetch(1)
	                    }
	                }
	        	}
 
	        }
       	})
      	.state('addIngredient', {
	        url : '/ingredient/add',
	        views:{
	        	'main': {
	        		template: '<add-ingredient new-ingredient="newIngredient"></add-ingredient>',
	        		controller:function($scope,newIngredient){  
	        			$scope.newIngredient = newIngredient;
	        			console.log('ADD CTRL');
	        		},
	        		resolve:{
	                    newIngredient :  function(ingredientService){
	                        
	                        return ingredientService.createBlank()
	                    }
	                }
	        	}

	        }
       	})      	      	
      	.state('ingredient', {
	        url : '/ingredient/:id',
	        views:{
	        	'main': {
	        		template: '<single-ingredient item="curentIngredient"></single-ingredient>',
	        		controller:function($scope,curentIngredient){
	        			console.log('CONTROLLER SINGLE');
	        			console.log(curentIngredient);
	        			$scope.curentIngredient = curentIngredient;
	        		},
	        		resolve:{
	                    curentIngredient :  function(ingredientService,$stateParams){
	                    	console.log('resolve curentIngredient');
	                        
	                        return ingredientService.fetchOne($stateParams.id)
	                    }
	                }
	        	}

	        }
       	})

});