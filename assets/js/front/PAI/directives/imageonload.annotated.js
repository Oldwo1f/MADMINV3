angular.module('PAI').directive('imageonload', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('load', function() {
                $(window).resize()
            });
            element.bind('error', function(){
                // alert('image could not be loaded');
            });
        }
    };
});