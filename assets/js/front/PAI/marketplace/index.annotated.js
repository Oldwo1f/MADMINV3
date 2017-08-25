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
      	
      	.state('project', {
	        url : '/marketplaceitem/:id',
	        views:{
	        	'main': {
	        		template: '<single-project item="curentProject"></single-project>',
	        		controller:["$scope", "curentProject", function($scope,curentProject){
	        			console.log('CONTROLLER SINGLE');
	        			console.log(curentProject);
	        			$scope.curentProject = curentProject;
	        		}],
	        		resolve:{
	                    curentProject :  ["projectService", "$stateParams", function(projectService,$stateParams){
	                    	console.log('resolve curentProject');
	                        
	                        return projectService.fetchOne($stateParams.id)
	                    }]
	                }
	        	}

	        }
       	})

}]);