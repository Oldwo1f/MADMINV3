angular.module('pai-home')
  .directive('homePai', function (tagService,categoryService){

    'use strict';

    return {
      
      	// scope: {
      	// 	newFabricant:'=',
      	// },
		replace: true,
		templateUrl: 'js/front/PAI/home/home.html',
		controller :function(Flash,$window,$state,imageService,userService,fabricantService, $scope, $rootScope, $q, Upload,$sailsSocket,$timeout){



			console.log(userService.me);
			$scope.user = userService.me
			$scope.dateToGo = moment().add($scope.user.nbCollabsPoints,'d').format('DD MMMM YYYY')




			console.log('home CRTL');
			$scope.cloudTagOpts = {
	            steps: 10,
	            autoResize:true,
	            delay:100,
	            // colors:['#00CCFF','#03C3FE','#06BAFD','#09B1FD','#0CA8FC','#0FA0FC','#1297FB','#158EFB','#1885FA','#1C7DFA'],
	            // removeOverflowing:false,
	            afterCloudRender:function(){
	            }
	        }
	        $scope.cloudCatOpts = {
	            steps: 10,
	            autoResize:true,
	            delay:100,
	            // removeOverflowing:false,
	            afterCloudRender:function(){
	            }
        	}

		},
		link:function(scope,element,attrs){

			console.log('LINKKKKKKKKKKKK  HOME');
		
			 	tagService.fetchAll().then(function(data){

		           data = _.map(data,function(c){

			            return {'text':c.text,'myid':c.id,'weight':c.total,
			                html:{
			                  'title': c.total,
			                  'class': 'TagInCloud',
			                }
			            }
		            
		          	})

		          
		            scope.tagsCloud =data

		            $('#cloudTag').jQCloud(scope.tagsCloud, scope.cloudTagOpts);


		          // scope.$applyAsync()
		        }).catch(function(e){

		        })

		         categoryService.fetchAll().then(function(data){
		          data = _.map(data,function(c){

		            return {'text':c.name,'myid':c.id,'weight':c.total,

		                  'savedcolor':c.color,
		                  'savedtextColor':c.textColor,
		                html:{
		                  'title': c.total,
		                  'style': 'background:'+c.color+';'+'color:'+c.textColor+';',
		                  'class': 'CatInCloud',
		                }
		            }
		            
		          })
		          
		            scope.categoriesCloud =data;
		            $('#cloudCat').jQCloud(scope.categoriesCloud, scope.cloudCatOpts);

		            setTimeout(function(){
		            	$(window).trigger('resize');
		            	
		            },0)

		          // scope.$applyAsync()
		        }).catch(function(e){
		        })
		}
    };

});
