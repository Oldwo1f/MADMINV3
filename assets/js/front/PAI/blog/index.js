angular.module('pai-blog', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
    
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
	        		controller:function($scope, articlesList){
	        			$scope.articlesList = articlesList;
	        		},
	        		resolve:{
	                    articlesList :  function(articleService, $stateParams){
	                        

	                        return articleService.fetch('date DESC',1,10)
	                    }
	                }
	        	}
 
	        }
       	})
      	.state('addArticle', {
	        url : '/blog/add',
	        views:{
	        	'main': {
	        		template: '<add-article new-article="newArticle"></add-article>',
	        		controller:function($scope,newArticle){  
	        			$scope.newArticle = newArticle;
	        			console.log('ADD CTRL');
	        		},
	        		resolve:{
	                    newArticle :  function(articleService){
	                        
	                        return articleService.createBlank()
	                    }
	                }
	        	}

	        }
       	})
      	.state('article', {
	        url : '/article/:id',
	        views:{
	        	'main': {
	        		template: '<single-article item="curentArticle"></single-article>',
	        		controller:function($scope,curentArticle){
	        			console.log('CONTROLLER SINGLE');
	        			console.log(curentArticle);
	        			$scope.curentArticle = curentArticle;
	        		},
	        		resolve:{
	                    curentArticle :  function(articleService,$stateParams){
	                    	console.log('resolve curentArticle');
	                        
	                        return articleService.fetchOne($stateParams.id)
	                    }
	                }
	        	}

	        }
       	})

});