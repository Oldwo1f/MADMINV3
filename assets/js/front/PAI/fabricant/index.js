angular.module('pai-fabricant', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
    
      $stateProvider
	    .state('fabricant', {
	        url : '/fabricant',
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