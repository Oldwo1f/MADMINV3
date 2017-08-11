angular.module('pai-home')
  .directive('homePai', function (){

    'use strict';

    return {
      
      	// scope: {
      	// 	newFabricant:'=',
      	// },
		replace: true,
		templateUrl: 'js/front/PAI/home/home.html',
		controller :function(Flash,$window,$state,imageService,tagService,categoryService,userService,fabricantService, $scope, $rootScope, $q, Upload,$sailsSocket,$timeout){

			console.log('home CRTL');

		},
		link:function(scope,element,attrs){

			console.log('LINKKKKKKKKKKKK  HOME');
		
			
		}
    };

});
