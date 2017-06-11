angular.module('pai-marketplace', ['ui.router'])
.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){
    
      $stateProvider
	    .state('marketplace', {
	        url : '/marketplace',
	     //    params:{
	     //    	sort:'date DESC',
	     //    	page:1,
	     //    	nbPerPage : 10
	    	// },
	        views:{
	        	'main' : {
	        		template: '<marketplace item-list="itemList"></marketplace>',
	        		controller:["$scope", "itemList", function($scope, itemList){
	        			$scope.itemList = itemList;
	        		}],
	        		resolve:{
	                    itemList :  ["projectService", "$stateParams", function(projectService, $stateParams){
	                        

	                        return projectService.fetch(1)
	                    }]
	                }
	        	}
 
	        }
       	})
      	.state('addMarketplace', {
	        url : '/marketplace/add',
	        views:{
	        	'main': {
	        		template: '<add-project new-project="newProject"></add-project>',
	        		controller:["$scope", "newProject", function($scope,newProject){  
	        			$scope.newProject = newProject;
	        			console.log('ADD CTRL');
	        		}],
	        		resolve:{
	                    newProject :  ["projectService", function(projectService){
	                        
	                        return projectService.createBlank()
	                    }]
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

}]);