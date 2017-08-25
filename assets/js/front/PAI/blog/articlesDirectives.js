angular.module('pai-blog')
  .directive('articles', function(articleService){

    'use strict';

    return {
      
      	scope: {
      		articlesList:'=',
      	},
		replace: true,
		templateUrl: 'js/front/PAI/blog/blog.html',
		controller :function($scope,$state){
			$scope.fetching=false;
			$scope.fin=false;
			$scope.page=1;
			console.log('HEREEEEEE');
			console.log($scope.articlesList);

			$scope.articlesList.push({'contentType':'pub'})

			$scope.myPagingFunction = function(){
				
				if($scope.fetching == false && !$scope.fin){
					$scope.fetching = true;
					$scope.page = $scope.page + 1;
					console.log('PAGIN, '+$scope.page);
					articleService.fetch($scope.page).then(function(data){
						console.log('FETCH');
						// console.log(data);
						if(data.length)
							$scope.articlesList = _.concat($scope.articlesList,data)
						$scope.articlesList.push({'contentType':'pub'})
						if(!data.length)
							$scope.fin =true;
						$scope.fetching = false;
						$scope.$broadcast('masonry.reload');
					})

				}


			}
			
			// $scope.startSlide = function(){
				
			// 	console.log('STARTSLIDE');



			// }

			
		},
		link:function(scope,element,attrs){

			console.log('LINKKKKKKKKKKKK');
			// jQuery(window).load(function(){

				// var $container = $('#posts');

				// $container.infinitescroll({
				// 	loading: {
				// 		finishedMsg: '<i class="icon-line-check"></i>',
				// 		msgText: '<i class="icon-line-loader icon-spin"></i>',
				// 		img: "images/front/preloader-dark.gif",
				// 		speed: 'normal'
				// 	},
				// 	state: {
				// 		isDone: false
				// 	},
				// 	nextSelector: "#load-next-posts a",
				// 	navSelector: "#load-next-posts",
				// 	itemSelector: "div.entry"
				// },
				// function( newElements ) {
				// 	$container.isotope( 'appended', $( newElements ) );
				// 	var t = setTimeout( function(){ $container.isotope('layout'); }, 2000 );
				// 	SEMICOLON.initialize.resizeVideos();
				// 	SEMICOLON.widget.loadFlexSlider();
				// 	SEMICOLON.widget.masonryThumbs();
				// });

			// });
			
		}
    };

});

 