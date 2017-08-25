angular.module('pai-agenda')
  .directive('agenda', function(){

    'use strict';

    return {
      	scope: {
      		itemsList:'=',
      	},
		replace: true,
      	templateUrl: 'js/front/PAI/agenda/partials/agenda.html',
      	controller:["$mdDialog", "$scope", "$rootScope", "userService", "tagService", "categoryService", "imageService", "documentService", "$sailsSocket", "$stateParams", "$state", "usSpinnerService", function($mdDialog,$scope,$rootScope,userService,tagService,categoryService,imageService,documentService,$sailsSocket,$stateParams,$state,usSpinnerService){
			console.log($scope.itemsList);
			$scope.events = $scope.itemsList;
			var colorSet = [
			{'primary':'#E9408F','secondary':'#ED88B7'},
			{'primary':'#FFFFFF','secondary':'rgba(255,255,255,0.7)'},
			{'primary':'#1c7dfa','secondary':'#368EFF'},
			{'primary':'#989cff','secondary':'#B1B5FF'},
			{'primary':'#ff9c4b','secondary':'rgba(255, 156, 75, 0.7)'},

			]

			$scope.dayViewStart = '06:00';
			$scope.dayViewEnd = '23:00';
			$scope.calendarView = 'year';
			$scope.calendarDate = new Date();

			for(var i in $scope.events){
				$scope.events[i].endsAt = new Date($scope.events[i].endsAt)
				$scope.events[i].startsAt = new Date($scope.events[i].startsAt)
				if($scope.events[i].contentType =='conf'){ $scope.events[i].color = colorSet[0]}
				if($scope.events[i].contentType =='colloque'){ $scope.events[i].color = colorSet[1]}
				if($scope.events[i].contentType =='lunch'){ $scope.events[i].color = colorSet[2]}
				if($scope.events[i].contentType =='sallon'){ $scope.events[i].color = colorSet[3]}
				if($scope.events[i].contentType =='other'){ $scope.events[i].color = colorSet[4]}
			}

		

			$scope.eventClicked=function(myevent){

					console.log('CLICKED');
					console.log(myevent);

					$state.go('event',{id:myevent.id})
				
			}


		}],
		link:function(scope,element,attrs){
			
		}
    };

});