angular.module('pai-search')
  .directive('searchPai', function(articleService){

    'use strict';

    return {
      
      	// scope: {
      	// 	articlesList:'=',
      	// },
		replace: true,
		templateUrl: 'js/front/PAI/search/search.html',
		controller :function($scope,$state,searchService){
			// $scope.fetching=false;
			// $scope.fin=false;
			// $scope.page=1;
			console.log('HEREEEEEE SEARCH CONTROLLER');
			$scope.slug = '';
			$scope.noresult = false;
			$scope.results=[];
			
			$scope.search = function(){
				console.log('search');
				searchService.sendSearch($scope.slug).then(function(data){
					console.log('then');
						console.log(data);
						$scope.results=data.hits.hits


						
				})



			}

			
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

 