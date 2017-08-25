angular.module('pai-ingredient')
  .directive('singleIngredient', ["ingredientService", function(ingredientService){

    'use strict';

    return {
      
      	scope: {
      		ingredient:'=item',
      	},
		replace: true,
		templateUrl: 'js/front/PAI/ingredient/singleIngredient.html',
		controller :["$scope", "userService", "ingredientService", "Flash", "$window", "$state", function($scope,userService,ingredientService,Flash,$window,$state){
			
			console.log('singleingredient');
			console.log($scope.ingredient);


			$scope.commentaire='';


			if(userService.me)
			{
				console.log(userService.me);
			}

			$scope.goToFabricant = function(id){

				$state.go('fabricant',{'id':id})
				
			}
		

			
		}],
		link:function(scope,element,attrs){

			console.log('LINKKKKKKKKKKKK');
			
			
		}
    };

}]);