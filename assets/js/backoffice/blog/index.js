 console.log('TIIIIIIIIIIIIIIgregreIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII');

angular.module('momi-articles', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
    

    console.log('TIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII');
      $stateProvider
	    .state('blog', {
	        url : '/blog',
	        params:{
	        	sort:'date DESC',
	        	page:1,
	        	nbPerPage : 10
	    	},
	        parent:'dashboard',
	        views:{
	        	'page1': {
	        		template: '<blog articles-list="articlesList"></blog>',
	        		controller:function($scope, articlesList){
	        			console.log('CRTL ARTICLE');
	        			$scope.articlesList = articlesList;
	        		},
	        		resolve:{
	                    articlesList :  function(articleService, $stateParams){

	                    	console.log('RESOLVE');
	                    	
	                        

	                        return articleService.fetch($stateParams.sort,$stateParams.page,$stateParams.nbPerPage)
	                    }
	                }
	        	}

	        }
       	})
      	.state('blog.add', {
	        url : '/add',
	        parent:'blog',
	        views:{
	        	'page2@dashboard': {
	        		template: '<add-article new-article="newArticle"></add-article>',
	        		controller:function($scope, newArticle){
	        			$scope.newArticle = newArticle;
	        		},
	        		resolve:{
	                    newArticle :  function(articleService){
	                        
	                        return articleService.createBlank()
	                    }
	                }
	        	}

	        }
       	})
      	.state('blog.edit', {
	        url : '/edit/:id',
	        parent:'blog',
	        views:{
	        	'page2@dashboard': {
	        		template: '<add-article new-article="newArticle"></add-article>',
	        		controller:function($scope, newArticle){
	        			$scope.newArticle = newArticle;
	        		},
	        		resolve:{
	                    newArticle :  function(articleService,$stateParams){
	                        
	                        return articleService.fetchOne($stateParams.id)
	                    }
	                }
	        	}

	        }
       	})

});
