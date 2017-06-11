angular.module('momi-pai')
  .directive('ingrediants', function(ingrediantService){

    'use strict';

    return {
      
      	scope: {
      		ingrediantsList:'=',
      	},
		replace: true,
		templateUrl: 'js/backoffice/ingrediant/partials/ingrediants.html',
		controller:function($scope,$rootScope,userService,ingrediantService,tagService,imageService,documentService,$sailsSocket,$stateParams,$state,usSpinnerService){
			console.log($scope.ingrediantsList);

			$scope.returnParentState=function(){
				// console.log('returnParentState BLOG');
				$state.go('^')
			}
			$scope.returnDashboardState=function(){
				// console.log('returnDashboardState BLOG');
				$state.go('dashboard')
			}
			$scope.goCategoriesState=function(){
				// console.log('returnDashboardState BLOG');
				$state.go('categories')
			}
			
			$scope.returnPreviousState=function(){
				if($rootScope.previousState){
					$state.go($rootScope.previousState.name, $rootScope.previousStateParams)
				}else{
					$state.go('^')
				}
			}

			$scope.sort=$stateParams.sort ? $stateParams.sort : 'date DESC' ;
			$scope.page=$stateParams.page ? $stateParams.page : 1 ;
			$scope.nbPerPage=$stateParams.nbPerPage ? $stateParams.nbPerPage : 10 ;
			$scope.fin = false;
			$scope.spinneropts = {
			  lines: 7 // The number of lines to draw
			, length: 0 // The length of each line
			, width: 20 // The line thickness
			, radius: 20 // The radius of the inner circle
			, scale: 0.5 // Scales overall size of the spinner
			, corners: 1 // Corner roundness (0..1)
			, color: '#1c7dfa' // #rgb or #rrggbb or array of colors
			, opacity: 0.02 // Opacity of the lines
			, rotate: 0 // The rotation offset
			, direction: 1 // 1: clockwise, -1: counterclockwise
			, speed: 0.9 // Rounds per second
			, trail: 59 // Afterglow percentage
			, fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
			, zIndex: 2e9 // The z-index (defaults to 2000000000)
			, className: 'myIngrediantSpinner' // The CSS class to assign to the spinner
			, top: 'auto' // Top position relative to parent
			, left: 'auto' // Left position relative to parent
			, shadow: false // Whether to render a shadow
			, hwaccel: false // Whether to use hardware acceleration
			, position: 'relative' // Element positioning
			};
			$scope.startSpin = function(){
				console.log('STARTSPIN');
            	usSpinnerService.spin('ingrediantSpinner');
	        }
	        $scope.stopSpin = function(){
	                
	            usSpinnerService.stop('ingrediantSpinner');
	        }



			$scope.fetchIngrediants=function(){
				console.log('fetchIngrediants');
				ingrediantService.fetch($scope.sort,$scope.page,$scope.nbPerPage).then(function(data){
					$scope.ingrediantsList = data;
				})
			}
			$scope.pagin=1;

			$scope.myPagingFunction=function(){
				if(!$scope.searchSlug && !$scope.fin){
					$scope.startSpin();
					$scope.pagin++;
					console.log('myPagingFunction');
					ingrediantService.fetch($scope.sort,$scope.pagin,10).then(function(data){
						console.log(data);
						if(data.length==0)
						{
							$scope.fin = true
						}else{
							$scope.ingrediantsList = _.union($scope.ingrediantsList , data);

						}
						$scope.stopSpin()
					})
				}
			}
				$scope.blurSearch= 0;
			$scope.searchIngrediant=function(){
				console.log('SEARCHARTICLE');
				if($scope.searchSlug){
					if($scope.blurSearch== 0){
						console.log('$scope.searchSlug');
						console.log($scope.searchSlug);
						ingrediantService.search($scope.searchSlug,$scope.sort).then(function(data){
							console.log(data);
							$scope.ingrediantsList = data;
						}).catch(function(e){
							console.log('err');
							console.log(e);
						})
					}else if($scope.blurSearch== 1){
						console.log('$scope.searchSlug');
						console.log($scope.searchSlug);
						ingrediantService.search($scope.searchSlug,$scope.sort).then(function(data){
							console.log(data);
							$scope.ingrediantsList = data;
							$scope.blurSearch = 2;
						}).catch(function(e){
							console.log('err');
							console.log(e);
						})
					}else if($scope.blurSearch== 2){
						console.log('$scope.searchSlug');
						$scope.blurSearch = 0;
					}
				}else{
					ingrediantService.fetch($scope.sort,0,10).then(function(data){
						console.log(data);
						if(data.length==0)
						{
							$scope.fin = true
						}else{
							$scope.ingrediantsList = data;
						}
						$scope.stopSpin()
					})
				}
			}

			$scope.blurOnEnter=function($event,$element) {
				if($event.keyCode == 13){
					// $event.currentTarget.blur()
					console.log('ON ENTER');
					$scope.blurSearch = 1;	
					$scope.searchIngrediant();
				}else{
					$scope.blurSearch = 0;
				}
				
			}
			$scope.changeSort=function(type){
				switch(type)
				{
					case 'date':
						if($scope.sort == 'date DESC'){
							$scope.sort =	'date ASC'
						}else{
						 	$scope.sort =	'date DESC'
						}
					break;
					case 'status':
						if($scope.sort == 'status DESC'){
							$scope.sort =	'status ASC'
						}else{
						 	$scope.sort =	'status DESC'
						}
					break;
					case 'contentType':
						if($scope.sort == 'contentType DESC'){
							$scope.sort =	'contentType ASC'
						}else{
						 	$scope.sort =	'contentType DESC'
						}
					break;
					case 'name':
						if($scope.sort == 'name DESC'){
							$scope.sort =	'name ASC'
						}else{
						 	$scope.sort =	'name DESC'
						}
					break;
					case 'nbView':
						if($scope.sort == 'nbView DESC'){
							$scope.sort =	'nbView ASC'
						}else{
						 	$scope.sort =	'nbView DESC'
						}
					break;
				}
				// $stateParams.sort = $scope.sort;
				console.log($scope.sort);
				$state.transitionTo('ingrediants', { sort: $scope.sort,page:$scope.page,nbPerPage:$scope.nbPerPage}, {location:true});
				console.log('fetchIngrediants');
				// $scope.fetchIngrediants()
				
			}	
			$scope.update=function(ingrediantid,attribute,value){
				console.log(ingrediantid);
				$rootScope.startSpin();
				var attrToUpdate = {};
				attrToUpdate[attribute] = value;
				ingrediantService.update(ingrediantid,attrToUpdate).then(function(data){
					console.log('----------------------------------------------------------');
					console.log(data);
					// console.log($scope.$parent);
					// $rootScope.$broadcast('ingrediantSelfChange',data);

        			$rootScope.stopSpin();
				},function(d){
					console.log('EROOR');
				})
			}	
			$rootScope.$on('ingrediantSelfChange',function(e,data){
				console.log(data);
					var index = _.findIndex($scope.ingrediantsList, function(o) { return o.id == data.id; });
					if( index !== -1) {
						$scope.ingrediantsList[index] = data;
					}
			})		
			$rootScope.$on('ingrediantSelfAdd',function(e,data){
				// console.log(id);
				console.log('ingrediantSelfAdd');
					$scope.ingrediantsList.unshift(data)
			})			
			$rootScope.$on('ingrediantSelfRemove',function(e,id){
				console.log(id);
				console.log('ingrediantSelfRemove');
					var index = _.findIndex($scope.ingrediantsList, function(o) { return o.id == id; });

					console.log($scope.ingrediantsList);
					console.log(index);
					if( index !== -1) {
						console.log('index !== -1');
						$scope.ingrediantsList.splice(index,1)
						console.log($scope.ingrediantsList);
					}
			})	
			$rootScope.$on('ingrediantSelfChangeImg',function(e,data){
				console.log(data);
					var index = _.findIndex($scope.ingrediantsList, function(o) { return o.id == data.id; });
					if( index !== -1) {
						$scope.ingrediantsList[index].images = data.images;
					}
			})	
			$rootScope.$on('ingrediantSelfChangeDoc',function(e,data){
				console.log(data);
					var index = _.findIndex($scope.ingrediantsList, function(o) { return o.id == data.id; });
					if( index !== -1) {
						$scope.ingrediantsList[index].document = data.document;
					}
			})	
			$rootScope.$on('ingrediantSelfChangeTag',function(e,data){
				console.log(data);
					var index = _.findIndex($scope.ingrediantsList, function(o) { return o.id == data.id; });
					if( index !== -1) {
						$scope.ingrediantsList[index].tags = data.tags;
					}
			})	
			$rootScope.$on('ingrediantSelfChangeCat',function(e,data){
				console.log(data);
					var index = _.findIndex($scope.ingrediantsList, function(o) { return o.id == data.id; });
					if( index !== -1) {
						$scope.ingrediantsList[index].categories = data.categories;
					}
			})
			$rootScope.$on('ingrediantSelfChangeAuthorAdd',function(e,data){
				console.log('ingrediantSelfChangeAuthorADD');
				console.log(data);
				var ingrediantId= data.data.parent.id;
				var authorId = data.addedAuthorId;
				console.log(ingrediantId);
					var index = _.findIndex($scope.ingrediantsList, function(o) { return o.id == ingrediantId; });
					console.log(index);
					if( index !== -1) {
						userService.fetchOne(authorId).then(function(author){
							console.log('final author fetch==>');
							console.log(author);
							$scope.ingrediantsList[index].authors.push(author)

						},function(d){
							console.log('EROOR');
						})
					}
			})
			$rootScope.$on('ingrediantSelfChangeAuthorRemove',function(e,data){
				console.log('ingrediantSelfChangeAuthorRemove');
				console.log(data);
				var ingrediantId= data.data.id;
				var authorId = data.removedAuthorId;
				console.log(ingrediantId);
				var index = _.findIndex($scope.ingrediantsList, function(o) { return o.id == ingrediantId; });
				console.log(index);
				if( index !== -1) {
						var index2 = _.findIndex($scope.ingrediantsList[index].authors, function(o) { return o.id == authorId; });
						if( index2 !== -1)
							$scope.ingrediantsList[index].authors.splice(index2,1)

				}	
			})

			    $sailsSocket.subscribe('ingrediant',function(data){
			        console.log('ON ARTICLE');
			        console.log(data);
			        if(data.verb =='created'){
			        	// ingrediantService.fetchOne(data.id).then(function(data2){
			        		// console.log(data2);
			        		$scope.ingrediantsList.unshift(data.data)
			        		
			        	// })
			        	
			        }else
			        if(data.verb =='updated'){
			        	// _.find($scope.ingrediantsList,function(o) { return o.age < 40; });
			        	var index = _.findIndex($scope.ingrediantsList, function(o) { return o.id == data.id; });
						if( index !== -1) {
							
							console.log($scope.ingrediantsList[index]);
							_.merge($scope.ingrediantsList[index], data.data)
							console.log(data.id);
							// $scope.$broadcast('ellipsContent-'+data.id);
						}
			        }else
			        if(data.verb =='destroyed'){
			        	// _.find($scope.ingrediantsList,function(o) { return o.age < 40; });
			        	var index = _.findIndex($scope.ingrediantsList, function(o) { return o.id == data.id; });
						if( index !== -1) {
							
							console.log($scope.ingrediantsList[index]);
							$scope.ingrediantsList.splice(index,1)
							// console.log(data.id);
							// $scope.$broadcast('ellipsContent-'+data.id);
						}
			        }else
			        if(data.verb =='addedTo'){
							console.log('addedTO');
							var ingrediantTochange = _.find($scope.ingrediantsList, function(o){ return o.id == data.id})

							if(data.attribute == 'tags'){

								if(ingrediantTochange){
									if(typeof(ingrediantTochange.tags) == 'undefined'){
									ingrediantTochange.tags = [];
									}
								tagService.fetchOne(data.addedId).then(function(tag){
									console.log(tag);
									ingrediantTochange.tags.push(tag)

								},function(d){
									console.log('EROOR');
								})
								}
							}else
							if(data.attribute == 'categories'){

								console.log('categories');
								console.log(data.addedId);
								if(typeof(ingrediantTochange.categories) == 'undefined'){
									ingrediantTochange.categories = [];
								}
								categoryService.fetchOne(data.addedId).then(function(cat){
									console.log(cat);
									ingrediantTochange.categories.push(cat)

								},function(d){
									console.log('EROOR');
								})
							}
							if(data.attribute == 'images'){

								console.log('images');
								console.log(data.addedId);
								if(typeof(ingrediantTochange.images) == 'undefined'){
									ingrediantTochange.images = [];
								}
								imageService.fetchOne(data.addedId).then(function(cat){
									console.log(cat);
									ingrediantTochange.images.push(cat)

								},function(d){
									console.log('EROOR');
								})
							}
							if(data.attribute == 'documents'){

								console.log('documents');
								console.log(data.addedId);
								if(typeof(ingrediantTochange.documents) == 'undefined'){
									ingrediantTochange.documents = [];
								}
								documentService.fetchOne(data.addedId).then(function(cat){
									console.log(cat);
									ingrediantTochange.documents.push(cat)

								},function(d){
									console.log('EROOR');
								})
							}
							if(data.attribute == 'authors'){

								console.log('authors');
								console.log(data.addedId);
								console.log(ingrediantTochange);
								if(typeof(ingrediantTochange.authors) == 'undefined'){
									ingrediantTochange.authors = [];
								}
								userService.fetchOne(data.addedId).then(function(author){
									ingrediantTochange.authors.push(author)

								},function(d){
									console.log('EROOR');
								})
							}

						}else
						if(data.verb =='removedFrom'){
							console.log('removeFrom');
							var ingrediantTochange = _.find($scope.ingrediantsList, function(o){ return o.id == data.id})

							if(data.attribute == 'tags'){
								var index = _.findIndex(ingrediantTochange.tags, function(o) { return o.id == data.removedId; });
								if( index !== -1) {
									ingrediantTochange.tags.splice(index,1)
								}
							}
							if(data.attribute == 'categories'){
								var index = _.findIndex(ingrediantTochange.categories, function(o) { return o.id == data.removedId; });
								if( index !== -1) {
									ingrediantTochange.categories.splice(index,1)
								}
							}
							if(data.attribute == 'images'){
								var index = _.findIndex(ingrediantTochange.images, function(o) { return o.id == data.removedId; });
								if( index !== -1) {
									ingrediantTochange.images.splice(index,1)
								}
							}
							if(data.attribute == 'documents'){
								var index = _.findIndex(ingrediantTochange.documents, function(o) { return o.id == data.removedId; });
								if( index !== -1) {
									ingrediantTochange.documents.splice(index,1)
								}
							}
							if(data.attribute == 'authors'){
								var index = _.findIndex(ingrediantTochange.authors, function(o) { return o.id == data.removedId; });
								if( index !== -1) {
									ingrediantTochange.authors.splice(index,1)
								}
							}

						}
			    })
				$sailsSocket.subscribe('category',function(data){
			        console.log('ON category');
			        console.log(data);
			        if(data.verb =='created'){

			        	// $scope.ingrediantsList.unshift(data.data)
			        	
			        }else
			        if(data.verb =='updated'){

			        	console.log('updated');
			        	console.log(data.id);
			        	// console.log($scope.ingrediantsList);

			        	for(var i in $scope.ingrediantsList){
			        		console.log($scope.ingrediantsList[i]);

			        		if($scope.ingrediantsList[i].categories.length)
			        		{
			        			var index = _.findIndex($scope.ingrediantsList[i].categories, function(o) { return o.id == data.id; });
								if( index !== -1) {
									console.log(data.data);
									// $scope.ingrediantsList[i].categories.splice(index,1,data.data)
									_.merge($scope.ingrediantsList[i].categories[index], data.data)
								}
			        		}
			        	}
			        	// _.find($scope.ingrediantsList,function(o) { return o.age < 40; });
			   //      	var index = _.findIndex($scope.ingrediantsList, function(o) { return o.id == data.id; });
						// if( index !== -1) {
							
						// 	console.log($scope.ingrediantsList[index]);
						// 	_.merge($scope.ingrediantsList[index], data.data)
						// 	console.log(data.id);
						// 	// $scope.$broadcast('ellipsContent-'+data.id);
						// }
			        }else
			        if(data.verb =='destroyed'){
			        	// _.find($scope.ingrediantsList,function(o) { return o.age < 40; });
			   //      	var index = _.findIndex($scope.ingrediantsList, function(o) { return o.id == data.id; });
						// if( index !== -1) {
							
						// 	console.log($scope.ingrediantsList[index]);
						// 	$scope.ingrediantsList.splice(index,1)
						// 	// console.log(data.id);
						// 	// $scope.$broadcast('ellipsContent-'+data.id);
						// }
			        }
			    })
		},
		link:function(scope,element,attrs){
			
		}
    };

});