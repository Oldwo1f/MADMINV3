angular.module('pai-agenda', ['ui.router'])
.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){

    $stateProvider
    .state('agenda', {
        url : '/agenda',
        params:{
                type:'YEARS',
                date: new Date(),
        },
        views:{
            'main': {
                template: '<agenda items-list="itemsList"></agenda>',
                controller:["$scope", "itemsList", function($scope, itemsList){
                        $scope.itemsList = itemsList;
                }],
                resolve:{
                    itemsList :  ["$stateParams", "eventService", function( $stateParams, eventService){

                        console.log('RESOLVE EVENT');
                        return eventService.fetch();
                       
                        
                    }]
                }
            }

        }
    })
    .state('addEvent', {
        url : '/agenda/add',
        views:{
            'main': {
                template: '<add-event new-event="newEvent"></add-event>',
                controller:["$scope", "newEvent", function($scope,newEvent){  
                    $scope.newEvent = newEvent;
                    console.log('ADD CTRL');
                }],
                resolve:{
                    newEvent :  ["eventService", function(eventService){
                        
                        return eventService.createBlank()
                    }]
                }
            }

        }
    })
      

}]);

