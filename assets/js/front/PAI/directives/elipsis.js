angular.module('PAI').directive('htmlEllipsis', ['$timeout', function($timeout) {
        return {
            restrict: 'A',
            scope:{parentId:'=parentId'},
            link: function(scope, element, attrs) {
              console.log("HEHE");
                $timeout(function() {
                    angular.element(element).ellipsis();
                }, 0);
                scope.$on('ellipsContent-'+scope.parentId,function(){
                  console.log('ellipsContent ellipsContent ellipsContent');
                  
                  console.log(element);
                   $timeout(function() {
                    angular.element(element).ellipsis();
                  }, 1000);
                })
            }
        };
    }]);