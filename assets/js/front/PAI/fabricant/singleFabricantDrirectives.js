angular.module('pai-fabricant')
  .directive('singleFabricant', function(fabricantService){

    'use strict';

    return {
      
      	scope: {
      		fabricant:'=item',
      	},
		replace: true,
		templateUrl: 'js/front/PAI/fabricant/singleFabricant.html',
		controller :function($scope,userService,fabricantService,Flash,$window,$state){
			
			console.log('singlefabricant');
			console.log($scope.fabricant);


			$scope.commentaire='';


			if(userService.me)
			{
				console.log(userService.me);
			}
			$scope.goToingredient = function(id){
				console.log('goToingredient');

				$state.go('ingredient',{'id':id})
				
			}
		

			
		},
		link:function(scope,element,attrs){

			console.log('LINKKKKKKKKKKKK');
			
			
		}
    };

});