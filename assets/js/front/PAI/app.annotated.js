	  

(function(orig) {
  angular.modules = [];
  angular.module = function() {
    if (arguments.length > 1) {
      angular.modules.push(arguments[0]);
    }
    return orig.apply(null, arguments);
  }
})(angular.module);


var listWidgetDirectivesApp = function listWidgetDirectivesApp() {
  var listDirectives = function listDirectives(name) {
    return angular.module(name)._invokeQueue.filter(function (item) {
      return 'directive' === item[1] && item[2][0].match('Widget$');
    }).map(function (item) {
      return item[2][0];
    });
  };
  return angular.modules.map(listDirectives).reduce(function (acc, l) {
    return acc.concat(l);
  }, []);
};

 






angular.module('PAI', ['wu.masonry','infinite-scroll','ui.select','ui.bootstrap','ngFlash','ngMap','mgo-angular-wizard','ngLetterAvatar','sails.io','satellizer','angular-flexslider','infinite-scroll','ui.sortable','ngTagsInput','ngFileUpload','ui.router','ngSanitize','ngMaterial','ngAnimate','ui.tinymce','angularMoment','ui.bootstrap.datetimepicker','angularSpinner',
  'pai-blog','pai-marketplace','pai-ingredient','pai-fabricant','pai-home','pai-agenda','pai-search','mwl.calendar','720kb.socialshare'])
.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){

    // $stateProvider
    //   .state('/', {
    //     url : '/',
    //     // requiredLogin: true,

    //     views:{
    //         'main': {
    //           template: 'HOMMMMMMME',
    //           controller:function($scope){  
                
    //             console.log('HOME CTRL');
    //           }
    //         //   ,
    //         //   resolve:{
    //         //           newFabricant :  function(fabricantService){
                          
    //         //               return fabricantService.createBlank()
    //         //           }
    //         //       }
    //         }
    //     }
      
    //    }) 
      $stateProvider
      .state('toto', {
        url : '/toto1',
        // requiredLogin: true,

        views:{
            'main':{
                template:'TOTOTO',
                controller:["$scope", function($scope){
                    // $scope.widgetlist = widgetlist;
                }],
                // resolve:{
                //     widgetlist:  function(widgetService){
                //        return widgetService.restoreDash();
                //     },
                // },

            }
        }
      
       })

    

      $urlRouterProvider.otherwise('/');

}]).run(['$state', function ($state) {}])

.run(["amMoment", function(amMoment) {
    amMoment.changeLocale('fr');
}])
.config(["$sailsSocketProvider", function($sailsSocketProvider) {

    $sailsSocketProvider.interceptors.push(function($q,$state,$rootScope) { return { 
          'responseError': function(rejection) {
            // do something on error
            console.log('ERRRRRRRRRRRRRRRRRRRERRRRRRRRRRRRRRRRRRRRRRREEEEEEEEEEEERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR');
            
            console.log(rejection);
            if(rejection.status == '401' || rejection.status == '402' || rejection.status == '403'){

                // $('.pageDash').addClass('pageVisible').removeClass('pageAfter pageBefore');
                // $('.page1').addClass('pageAfter').removeClass('pageVisible pageBefore');
                // $('.page2').addClass('pageAfter').removeClass('pageVisible pageBefore');
                // $rootScope.stopSpin()
                $state.go('logout')
            }
            // if (canRecover(rejection)) {
            //   return responseOrNewPromise
            // }
            return $q.reject(rejection);
          }
    };
    });


  



}]);
angular.module('PAI').controller('appController',["$scope", "$rootScope", "$auth", "$state", "$sailsSocket", "paramsService", "userService", "usSpinnerService", function ($scope,$rootScope,$auth,$state, $sailsSocket,paramsService, userService,usSpinnerService){


  
        $rootScope.startSpin = function(){
            usSpinnerService.spin('mainSpinner');
        }
        $rootScope.stopSpin = function(){
            setTimeout(function(){
                
            usSpinnerService.stop('mainSpinner');
            },500)
        }

        $scope.menuTest =function(page){
          
          // console.log('MENU TEST');
          // console.log(page);
          // console.log($state);
          switch(page){

            case 'ingredient':
              if($state.current.name == 'ingredient' || $state.current.name == 'addIngredient' )
                return true;
              else
                return false;
            break;

            case 'marketplace':
              if($state.current.name == 'marketplace' || $state.current.name == 'addMarketplace' )
                return true;
              else
                return false;
            break;

            case 'blog':
              if($state.current.name == 'blog' || $state.current.name == 'addArticle')
                return true;
              else
                return false;
            break;
          }

        }
   
  if($auth.getToken()){
    $sailsSocket.defaults.headers.common.Authorization = 'Bearer '+ $auth.getToken();
    userService.selfProfile($auth.getPayload().sub).then(function(data){
        console.log(data);
        console.log(userService.me);
      console.log('cool');
    })
  }

   $rootScope.$on('$stateChangeStart',function (e,toState,toParams,fromState,fromParams){

            // if (toState.name == 'login' && $auth.isAuthenticated()){
            //     // requiredLogin = false;
            //     e.preventDefault();
            //     $state.go('/') 
            // }
            $(window).resize()

            if ($auth.isAuthenticated() && toState.name == 'logout') {
                
            }
            // else
            // if (!$auth.isAuthenticated() && toState.name != 'login'  && toState.name != 'firstconnexion') {
            //     e.preventDefault();
            //     $state.go('login');
                
            // }

   });
   $rootScope.$on('$stateChangeSuccess',function (e,toState,toParams,fromState,fromParams){
            // // if (toState.name == 'login' && $auth.isAuthenticated()){
            // //     // requiredLogin = false;
            // //     e.preventDefault();
            // //     $state.go('/')
            // // }

            // if ($auth.isAuthenticated() && toState.name == 'logout') {
                
            // }
            // else
            // if (!$auth.isAuthenticated() && toState.name != 'login'  && toState.name != 'firstconnexion') {
            //     e.preventDefault();
            //     $state.go('login');

            // }

   });
   // $(window).resize(function() {
   //  var mywidth = $(window).width()
   //  console.log('RESIZE INSIDE APPCTRL');
   //  }).resize()

}])


$(window).resize(function() {
  height = $(window).height()

  console.log('RESIZEEEEEEEEEEEEEEEEEEEEEEEEe------------------------------');


}).resize()

$(window).load(function(){
	$('#loading').fadeOut(1000);
  
  
})

angular.module('PAI').config(['tagsInputConfigProvider', function(tagsInputConfigProvider) {
  tagsInputConfigProvider
    .setDefaults('tagsInput', {
      placeholder: 'Ajouter un tag',
      minLength: 2,
      addOnEnter: false,
      replaceSpacesWithDashes:false
    })
    .setDefaults('autoComplete', {
      debounceDelay: 200,
      loadOnDownArrow: true,
      loadOnEmpty: true,
      minLength:1
    })
}])
.config(['usSpinnerConfigProvider', function(usSpinnerConfigProvider) {
  var opts = {
  lines: 7 // The number of lines to draw
, length: 0 // The length of each line
, width: 20 // The line thickness
, radius: 20 // The radius of the inner circle
, scale: 0.5 // Scales overall size of the spinner
, corners: 1 // Corner roundness (0..1)
, color: '#52d669' // #rgb or #rrggbb or array of colors
, opacity: 0.02 // Opacity of the lines
, rotate: 0 // The rotation offset
, direction: 1 // 1: clockwise, -1: counterclockwise
, speed: 0.9 // Rounds per second
, trail: 59 // Afterglow percentage
, fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
, zIndex: 2e9 // The z-index (defaults to 2000000000)
, className: 'myMainSpinner' // The CSS class to assign to the spinner
, top: '53px' // Top position relative to parent
, left: 'auto' // Left position relative to parent
, shadow: false // Whether to render a shadow
, hwaccel: false // Whether to use hardware acceleration
, position: 'fixed' // Element positioning
};
usSpinnerConfigProvider.setDefaults(opts);

}])
.config(["calendarConfig", function(calendarConfig) {

    console.log(calendarConfig); //view all available config

    // calendarConfig.templates.calendarMonthView = 'path/to/custom/template.html'; //change the month view template globally to a custom template

    calendarConfig.dateFormatter = 'moment'; //use either moment or angular to format dates on the calendar. Default angular. Setting this will override any date formats you have already set.

    calendarConfig.allDateFormats.moment.date.hour = 'HH:mm'; //this will configure times on the day view to display in 24 hour format rather than the default of 12 hour

    calendarConfig.allDateFormats.moment.title.day = 'D ddd MMM'; //this will configure the day view title to be shorter
    calendarConfig.allDateFormats.moment.title.week = 'Semaine {week}'; //this will configure the day view title to be shorter

    calendarConfig.allDateFormats.moment.date.year = 'D ddd MMM';

    calendarConfig.i18nStrings.weekNumber = '{week}'; //This will set the week number hover label on the month view

    calendarConfig.displayAllMonthEvents = true; //This will display all events on a month view even if they're not in the current month. Default false.

    calendarConfig.showTimesOnWeekView = true; //Make the week view more like the day view, with the caveat that event end times are ignored.

    calendarConfig.showWeekBox = false;


    // calendarConfig.dayViewStart = '06:00';
    // calendarConfig.dayViewEnd = '23:00';
}]);