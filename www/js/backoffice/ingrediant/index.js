angular.module('momi-pai', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
    
      $stateProvider
	    .state('ingrediants', {
	        url : '/ingrediants',
	        params:{
	        	sort:'date DESC',
	        	page:1,
	        	nbPerPage : 10
	    	},
	        parent:'dashboard',
	        views:{
	        	'page1': {
	        		template: '<ingrediants ingrediants-list="ingrediantsList"></ingrediants>',
	        		controller:function($scope, ingrediantsList){
	        			$scope.ingrediantsList = ingrediantsList;
	        		},
	        		resolve:{
	                    ingrediantsList :  function(ingrediantService, $stateParams){
	                        

	                        return ingrediantService.fetch($stateParams.sort,$stateParams.page,$stateParams.nbPerPage)
	                    }
	                }
	        	}

	        }
       	})
      	.state('ingrediants.add', {
	        url : '/add',
	        parent:'ingrediants',
	        views:{
	        	'page2@dashboard': {
	        		template: '<add-ingrediant new-ingrediant="newIngrediant"></add-ingrediant>',
	        		controller:function($scope, newIngrediant){
	        			$scope.newIngrediant = newIngrediant;
	        		},
	        		resolve:{
	                    newIngrediant :  function(ingrediantService){
	                        
	                        return ingrediantService.createBlank()
	                    }
	                }
	        	}

	        }
       	})
      	.state('ingrediants.edit', {
	        url : '/edit/:id',
	        parent:'ingrediants',
	        views:{
	        	'page2@dashboard': {
	        		template: '<add-ingrediant new-ingrediant="newIngrediant"></add-ingrediant>',
	        		controller:function($scope, newIngrediant){
	        			$scope.newIngrediant = newIngrediant;
	        		},
	        		resolve:{
	                    newIngrediant :  function(ingrediantService,$stateParams){
	                        
	                        return ingrediantService.fetchOne($stateParams.id)
	                    }
	                }
	        	}

	        }
       	})

});
