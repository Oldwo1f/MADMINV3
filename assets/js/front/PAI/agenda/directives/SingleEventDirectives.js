angular.module('pai-blog')
  .directive('singleEvent', function(articleService){

    'use strict';

    return {
      
      	scope: {
      		eevent:'=item',
      	},
		replace: true,
		templateUrl: 'js/front/PAI/agenda/partials/singleEvent.html',
		controller :function($scope,userService,eventService,Flash,$window){
			
			console.log('singlearticle');
			console.log($scope.eevent);


			$scope.commentaire='';


			if(userService.me)
			{
				console.log(userService.me);
			}


			
		},
		link:function(scope,element,attrs){

			console.log('LINKKKKKKKKKKKK');
	
			
		}
    };

});
