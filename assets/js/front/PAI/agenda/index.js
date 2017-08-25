angular.module('pai-agenda', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){

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
                controller:function($scope, itemsList){
                        $scope.itemsList = itemsList;
                },
                resolve:{
                    itemsList :  function( $stateParams, eventService){

                        console.log('RESOLVE EVENT');
                        return eventService.fetch();
                       
                        
                    }
                }
            }

        }
    })
    .state('addEvent', {
        url : '/agenda/add',
        views:{
            'main': {
                template: '<add-event new-event="newEvent"></add-event>',
                controller:function($scope,newEvent){  
                    $scope.newEvent = newEvent;
                    console.log('ADD CTRL');
                },
                resolve:{
                    newEvent :  function(eventService){
                        
                        return eventService.createBlank()
                    }
                }
            }

        }
    })
    .state('event', {
        url : '/event/:id',
        views:{
            'main': {
                template: '<single-event item="curentEvent"></single-event>',
                controller:function($scope,curentEvent){
                    console.log('CONTROLLER SINGLE');
                    console.log(curentEvent);
                    $scope.curentEvent = curentEvent;
                },
                resolve:{
                    curentEvent :  function(eventService,$stateParams){
                        console.log('resolve curentEvent');
                        
                        return eventService.fetchOne($stateParams.id)
                    }
                }
            }

        }
    })
      

});

