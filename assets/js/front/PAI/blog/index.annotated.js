angular.module('pai-blog', ['ui.router'])
.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){
    
      $stateProvider
	    .state('blog', {
	        url : '/blog',
	     //    params:{
	     //    	sort:'date DESC',
	     //    	page:1,
	     //    	nbPerPage : 10
	    	// },
	        views:{
	        	'main' : {
	        		template: '<articles articles-list="articlesList"></articles>',
	        		controller:["$scope", "articlesList", function($scope, articlesList){
	        			$scope.articlesList = articlesList;
	        		}],
	        		resolve:{
	                    articlesList :  ["articleService", "$stateParams", function(articleService, $stateParams){
	                        

	                        return articleService.fetch('date DESC',1,10)
	                    }]
	                }
	        	}
 
	        }
       	})
      	.state('addArticle', {
	        url : '/blog/add',
	        views:{
	        	'main': {
	        		template: '<add-article new-article="newArticle"></add-article>',
	        		controller:["$scope", "newArticle", function($scope,newArticle){  
	        			$scope.newArticle = newArticle;
	        			console.log('ADD CTRL');
	        		}],
	        		resolve:{
	                    newArticle :  ["articleService", function(articleService){
	                        
	                        return articleService.createBlank()
	                    }]
	                }
	        	}

	        }
       	})
      	.state('article', {
	        url : '/article/:id',
	        views:{
	        	'main': {
	        		template: '<single-article item="curentArticle"></single-article>',
	        		controller:["$scope", "curentArticle", function($scope,curentArticle){
	        			console.log('CONTROLLER SINGLE');
	        			console.log(curentArticle);
	        			$scope.curentArticle = curentArticle;
	        		}],
	        		resolve:{
	                    curentArticle :  ["articleService", "$stateParams", function(articleService,$stateParams){
	                    	console.log('resolve curentArticle');
	                        
	                        return articleService.fetchOne($stateParams.id)
	                    }]
	                }
	        	}

	        }
       	})

}]);