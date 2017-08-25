angular.module('pai-blog')
  .directive('singleArticle', ["articleService", function(articleService){

    'use strict';

    return {
      
      	scope: {
      		article:'=item',
      	},
		replace: true,
		templateUrl: 'js/front/PAI/blog/singleArticle.html',
		controller :["$scope", "userService", "articleService", "Flash", "$window", function($scope,userService,articleService,Flash,$window){
			
			console.log('singlearticle');
			console.log($scope.article);


			$scope.commentaire='';


			if(userService.me)
			{
				console.log(userService.me);
			}
			// $scope.articlesList.push({'contentType':'pub'})

			$scope.addComment = function(){
				var imgAuthor = userService.me.images[0].filename ? userService.me.images[0].filename : '';
				var comment={
				'imgAuthor':imgAuthor,
				'authorName':userService.me.firstname + ' ' + userService.me.name,
				'email':userService.me.email,
				'content':$scope.commentaire,
				'articleName':$scope.article.title,
				'user':userService.me.id
				};
				articleService.addComment($scope.article.id,comment).then(function(data){

					if(data =='OK'){
						console.log('data = ok');
						$window.scrollTo(0, 0);
						$scope.commentaire="";
						var message = 'Votre article a été posté';
		        		Flash.create('success', message, 5000);
					}
					else{
						var message = 'Une erreur est survenus';
		        		Flash.create('warning', message, 5000);

					}

					console.log(data);
				})
			}
			$scope.addReponse = function(id,commentaire){
				var imgAuthor = userService.me.images[0].filename ? userService.me.images[0].filename : '';
				console.log('add response');
				console.log(commentaire);
				var comment={
				'imgAuthor':imgAuthor,
				'authorName':userService.me.firstname + ' ' + userService.me.name,
				'email':userService.me.email,
				'content':commentaire,
				'articleName':$scope.article.title,
				};
				// 'user':userService.me.id
				articleService.addReponse(id,comment).then(function(data){

					if(data =='OK'){
						console.log('data = ok');
						$window.scrollTo(0, 0);
						$scope.commentaire="";
						var message = 'Votre article a été posté';
		        		Flash.create('success', message, 5000);
					}
					else{
						var message = 'Une erreur est survenus';
		        		Flash.create('warning', message, 5000);

					}

					console.log(data);
				})
			}
			// $scope.commentreply = function(id, $event){

			// 	var html=''
			// 	console.log($event.currentTarget);
			// 	$($event.currentTarget).parent().after(html);
			// }
			// $scope.myPagingFunction = function(){
				
			// 	if($scope.fetching == false && !$scope.fin){
			// 		$scope.fetching = true;
			// 		$scope.page = $scope.page + 1;
			// 		console.log('PAGIN, '+$scope.page);
			// 		articleService.fetch($scope.page).then(function(data){
			// 			console.log('FETCH');
			// 			// console.log(data);
			// 			if(data.length)
			// 				$scope.articlesList = _.concat($scope.articlesList,data)
			// 			$scope.articlesList.push({'contentType':'pub'})
			// 			if(!data.length)
			// 				$scope.fin =true;
			// 			$scope.fetching = false;
			// 			$scope.$broadcast('masonry.reload');
			// 		})

			// 	}


			// }
			// $scope.startSlide = function(){
				
			// 	console.log('STARTSLIDE');
				


			// }

			
		}],
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

}]);