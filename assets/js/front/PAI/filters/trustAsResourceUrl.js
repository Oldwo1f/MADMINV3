angular.module('PAI').filter('trustAsResourceUrl',function($sce) {
    return function(val) {
        return $sce.trustAsResourceUrl(val);
    };
})