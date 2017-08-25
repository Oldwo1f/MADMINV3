angular.module('core').filter('lastmonth', function (moment) {
    return function(list,e) {
        

       console.log('FILTER lastMONTH');

       console.log(list);
       console.log(e);

       var startDate = moment()
      , endDate   =moment().subtract(1,'days')
      
      return list.map(function(obj) {
        return obj
            // if(moment(obj.createdAt).isBetween(endDate,startDate)){
            // return obj
            // }else{
            //     return false
            // }

      });



    }
});