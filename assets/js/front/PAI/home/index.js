angular.module('pai-home', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
    
      $stateProvider
	    .state('/', {
	        url : '/',
	     //    params:{
	     //    	sort:'date DESC',
	     //    	page:1,
	     //    	nbPerPage : 10
	    	// },
	        views:{
	        	'main' : {
	        		template: '<home-pai></home-pai>',
	        		controller:function($scope){
	        			// $scope.itemList = itemList;
	        		},
	        		// resolve:{
	          //           itemList :  function(fabricantService, $stateParams){
	          //               console.log('RESOLVE');

	          //               return fabricantService.fetch()
	          //           }
	          //       }
	        	}
 
	        }
       	})
       	.state('profile', {
        url : '/profile',
        views:{
            'main': {
                template: '<profile-page profile-infos="profileInfos"></profile-page>',
                controller:function($scope, profileInfos){
                        $scope.profileInfos = profileInfos;
                    	console.log('profileInfos2');
                },
                resolve:{
                    profileInfos :  function(userService, $stateParams,$auth){
                    	console.log('profileInfos');
                        
                        return userService.selfProfile($auth.getPayload().sub)
                    }
                }
        	}

        }
       })
      

});