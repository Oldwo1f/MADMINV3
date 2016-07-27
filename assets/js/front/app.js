	  

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

 






angular.module('lfbk', ['sails.io','ngFileUpload','lfbk-inscription'])


angular.module('lfbk').controller('appController',function ($scope,$rootScope, $sailsSocket,inscriptionService){

    console.log('APP CONTROLLER');
        $scope.formData = 'toto'
        $scope.finishedAreronef = true;

    $scope.addNew =function(){
        var newItem = {}
        newItem.email = $scope.NewEmail;
        newItem.password = $scope.NewPassword;

        inscriptionService.create(newItem).then(function(data){
            console.log('OK');
            console.log(data);
            $scope.formData = data;
            $('.formError').removeClass('formError')
        }).catch(function(err){
            console.log('err');
            console.log(err);
            if(err.code =='E_VALIDATION'){
                var key = _.keys(err.invalidAttributes)
                for(var i in key){
                    $('#register-form input[name="'+key[i]+'"]').addClass('formError')
                }
            }
        })

    }


   

})


// $(window).resize(function() {
//   height = $(window).height()
//   $('.containerLogin').css({'height':height+'px'});

//   console.log('RESIZEEEEEEEEEEEEEEEEEEEEEEEEe------------------------------');


// }).resize()



// }]);