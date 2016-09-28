angular.module('PAI').filter('projectType', function() {
    return function(items,filter) {

    	console.log('projectType');
    	console.log(items);
    	console.log(filter);


        if (filter.contentType =='*') return items;
        else{

		   	var filtered = [];
		    angular.forEach(items, function(item) {
		      if(filter.contentType == item.contentType) {
		        filtered.push(item);
		      }
		    });
		    return filtered;
        }
	  };
});