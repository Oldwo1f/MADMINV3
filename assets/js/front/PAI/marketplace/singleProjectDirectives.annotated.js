angular.module('pai-marketplace')
  .directive('singleProject', ["projectService", function(projectService){

    'use strict';

    return {
      
      	scope: {
      		project:'=item',
      	},
		replace: true,
		templateUrl: 'js/front/PAI/marketplace/singleProject.html',
		controller :["$scope", "userService", "projectService", "Flash", "$window", function($scope,userService,projectService,Flash,$window){
			
			console.log('singleproject');
			console.log($scope.project);
			$scope.calculatePrices={}

			
			$scope.commentaire='';


			if(userService.me)
			{
				console.log(userService.me);
			}
			// $scope.projectsList.push({'contentType':'pub'})
			$scope.calculatePrice=function(project){
				console.log('calculatePrices');

				var iprice = project.initialPrice;
				var initialdate = moment(project.createdAt);
				var date = initialdate,
					d1 = moment(initialdate).add(6, 'months'),
					d2 = moment(initialdate).add(12, 'months'),
					d3 = moment(initialdate).add(18, 'months'),
					d4 = moment(initialdate).add(24, 'months');

					console.log(date.format('DD MMMM YYYY'));
					console.log(d1.format('DD MMMM YYYY'));
					console.log(d2.format('DD MMMM YYYY'));
					console.log(d3.format('DD MMMM YYYY'));
					console.log(d4.format('DD MMMM YYYY'));

				var partClub = 0.3;
				var tmpNumber=0;
				var now = moment();

				$scope.calculatePrices.m0 = {};
				$scope.calculatePrices.m0.sellprice = Math.round(iprice);
				$scope.calculatePrices.m0.date = date
				$scope.calculatePrices.m0.active = now.isBetween(initialdate,d1);

				$scope.calculatePrices.m6 = {};
				tmpNumber = iprice - (25 * iprice / 100);
				$scope.calculatePrices.m6.sellprice = Math.round(tmpNumber);
				$scope.calculatePrices.m6.active = now.isBetween(d1,d2);
				
				if(d1.isBefore(now)){
					$scope.calculatePrices.m6.date = 'depuis le ' + d1.format('DD MMMM YYYY');

				}else{
					$scope.calculatePrices.m6.date = 'à partir du ' + d1.format('DD MMMM YYYY');

				}






				console.log($scope.calculatePrices);

				$scope.calculatePrices.m12 = {}
				tmpNumber = iprice - (50*iprice/100);
				$scope.calculatePrices.m12.sellprice = Math.round(tmpNumber);
				$scope.calculatePrices.m12.active = now.isBetween(d2,d3);
				// date =  moment(initialdate).add(12, 'months');console.log(date.format('DD MMMM YYYY'));
				if(d2.isBefore(now)){
					$scope.calculatePrices.m12.date = 'depuis le ' + d2.format('DD MMMM YYYY');

				}else{
					$scope.calculatePrices.m12.date = 'à partir du ' + d2.format('DD MMMM YYYY');

				}

				$scope.calculatePrices.m18 = {}
				tmpNumber = iprice - (75*iprice/100);
				$scope.calculatePrices.m18.sellprice = Math.round(tmpNumber);
				$scope.calculatePrices.m18.active = now.isBetween(d3,d4);
				// date =  moment(initialdate).add(18, 'months');console.log(date.format('DD MMMM YYYY'));
				if(d3.isBefore(now)){
					$scope.calculatePrices.m18.date = 'depuis le ' + d3.format('DD MMMM YYYY');

				}else{
					$scope.calculatePrices.m18.date = 'à partir du ' + d3.format('DD MMMM YYYY');

				}

				$scope.calculatePrices.m18 = {}
				tmpNumber = iprice - (75*iprice/100);
				$scope.calculatePrices.m18.sellprice = Math.round(tmpNumber);
				$scope.calculatePrices.m18.active = now.isAfter(d4);
				// date =  moment(initialdate).add(24, 'months');console.log(date.format('DD MMMM YYYY'));
				if(d4.isBefore(now)){
					$scope.calculatePrices.m18.date = 'depuis le ' + d4.format('DD MMMM YYYY');

				}else{
					$scope.calculatePrices.m18.date = 'à partir du ' + d4.format('DD MMMM YYYY');

				}

			};
			$scope.calculatePrice($scope.project)

			$scope.addComment = function(){
				var imgAuthor = userService.me.images[0].filename ? userService.me.images[0].filename : '';
				var comment={
				'imgAuthor':imgAuthor,
				'authorName':userService.me.firstname + ' ' + userService.me.name,
				'email':userService.me.email,
				'content':$scope.commentaire,
				'articleName':$scope.project.title,
				'user':userService.me.id
				};
				projectService.addComment($scope.project.id,comment).then(function(data){

					if(data =='OK'){
						console.log('data = ok');
						$window.scrollTo(0, 0);
						$scope.commentaire="";
						var message = 'Votre project a été posté';
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
				'projectName':$scope.project.title,
				};
				// 'user':userService.me.id
				projectService.addReponse(id,comment).then(function(data){

					if(data =='OK'){
						console.log('data = ok');
						$window.scrollTo(0, 0);
						$scope.commentaire="";
						var message = 'Votre project a été posté';
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
			// 		projectService.fetch($scope.page).then(function(data){
			// 			console.log('FETCH');
			// 			// console.log(data);
			// 			if(data.length)
			// 				$scope.projectsList = _.concat($scope.projectsList,data)
			// 			$scope.projectsList.push({'contentType':'pub'})
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