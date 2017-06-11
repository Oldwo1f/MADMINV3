angular.module('pai-ingredient', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
    
      $stateProvider
	    .state('ingredient', {
	        url : '/ingredient',
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
      	// .state('blog.edit', {
	      //   url : '/edit/:id',
	      //   parent:'blog',
	      //   views:{
	      //   	'page2@dashboard': {
	      //   		template: '<add-article new-article="newArticle"></add-article>',
	      //   		controller:function($scope, newArticle){
	      //   			$scope.newArticle = newArticle;
	      //   		},
	      //   		resolve:{
	      //               newArticle :  function(articleService,$stateParams){
	                        
	      //                   return articleService.fetchOne($stateParams.id)
	      //               }
	      //           }
	      //   	}

	      //   }
       // 	})

});