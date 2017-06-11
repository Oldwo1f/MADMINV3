angular.module('momi-agenda', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){

    $stateProvider
      .state('agenda', {
        url : '/agenda',
        parent:'dashboard',
        params:{
                type:'MONTH',
                date: new Date(),
        },
        views:{
            'page1': {
                template: '<agenda items-list="itemsList"></agenda>',
                controller:function($scope, itemsList){
                        $scope.itemsList = itemsList;
                },
                resolve:{
                    itemsList :  function( $stateParams){
                        

                        console.log('RESOLVE');
                        console.log($stateParams);
                        return true;
                    }
                }
            }

        }
       })
      

});

