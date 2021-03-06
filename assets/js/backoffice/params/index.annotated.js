angular.module('momi-params', ['ui.router','monospaced.elastic'])
.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){
    
      $stateProvider
	    .state('params', {
	        url : '/params',
	     //    params:{
	     //    	sort:'date DESC',
	     //    	page:1,
	     //    	nbPerPage : 10
	    	// },
	        parent:'dashboard',
	        views:{
	        	'page1': {
	        		template: '<params-list stockage="stockage" version="version" dbstats="dbstats"></params-list>',
	        		controller:["$scope", "stockage", "version", "dbstats", function($scope,stockage,version,dbstats){
	        			$scope.stockage = stockage;
	        			$scope.version = version;
	        			$scope.dbstats = dbstats;
	        		}],
	        		resolve:{
	        			stockage: ["paramsService", "$stateParams", function(paramsService,$stateParams) {
							return paramsService.getUploadsSize();
						}],
						version:["paramsService", "$stateParams", function(paramsService,$stateParams) {
							return paramsService.getVersion();
						}],
						dbstats:["paramsService", "$stateParams", function(paramsService,$stateParams) {

							return paramsService.getDbStats();
						}]
                    }
	        		// resolve:{
	                    // articlesList :  function(articleService, $stateParams){
	                        

	                    //     return articleService.fetch($stateParams.sort,$stateParams.page,$stateParams.nbPerPage)
	                    // }
	                // }
	        	}

	        }
       	})
      	.state('params.traductions', {
	        url : '/traductions/:lang',
	        parent:'params',
	        views:{
	        	'page2@dashboard': {
	        		template: '<traductions traduction="traduction"></traductions>',
	        		controller:["$scope", "traduction", function($scope, traduction){
	        			$scope.traduction = traduction;
	        		}],
	        		resolve:{
	                    traduction :  ["paramsService", "$stateParams", function(paramsService,$stateParams){
	                        
	                    	console.log($stateParams);

	                        return paramsService.getTraductions($stateParams.lang);
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