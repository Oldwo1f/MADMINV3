angular.module('core')
.directive('urlprefixer', ["$compile", function($compile) {
    return {

      restrict: 'A',
      scope: false,

      link:function(scope, element, attrs) {
        scope.focused=false;
        $input = $(element)
        scope.urlprefixer = attrs.urlprefixer;
        scope.urlprefixerwidth = attrs.urlprefixerwidth;
        $input.after($compile('<div class="urlprefix" >{{urlprefixer}}</div>')(scope));
        $input.css('text-indent', scope.urlprefixerwidth)
      }
    };
  }]);