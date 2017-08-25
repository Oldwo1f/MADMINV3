angular.module('PAI')
.directive('response', function(){
    return {
        restrict: 'E',
        // transclude: true,
        scope: { action:'=action',itemid:'=itemid'},
        // template: '<a class="comment-reply-link" ><i class="icon-reply"></i></a>'
        templateUrl: 'js/front/PAI/directives/templateResponse.html'
        ,
        link:function(scope, element, attrs) {

        		scope.show=false

        		scope.commentaire="";
        		scope.addReponse=function(){
        			console.log('addrep');
        			scope.action(scope.itemid,scope.commentaire);
        		}
	        	// scope.clickedOnce = false;
	        	// $(element).find('a.comment-reply-link').click(function() {
	        	// 	var t = $(this);
	        	// 	if(!scope.clickedOnce)
	        	// 	{
	        	// 		t.addClass('expand')
	        	// 		scope.clickedOnce = true;
	        	// 		t.html('<i class="glyphicon glyphicon-trash"></i> définitivement')
	        	// 		var timeout = setTimeout(function() {
	        	// 			t.removeClass('expand')
	        	// 			scope.clickedOnce = false;
	        	// 			t.html('<i class="glyphicon glyphicon-trash"></i> ')
	        	// 		},5000)
	        	// 	}else
	        	// 	{
	        	// 		// scope.click(); 
	        	// 		t.removeClass('expand')
	        	// 		scope.clickedOnce = false;
	        	// 		t.html('<i class="glyphicon glyphicon-trash"></i> ')
	        			
	        	// 			if(scope.image)
					     //    {
					     //    		scope.action(scope.image);
					     //    }else{
					     //    	if(scope.itemid)
					     //    		scope.action(scope.itemid);
					     //    	else
					     //    		scope.action();
					        	
					     //    }
	        	// 	}
	        	// })

      	}
     }
  })