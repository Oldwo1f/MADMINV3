angular.module('momi-pai')
  .directive('fabricants', ["fabricantService", function(fabricantService){

    'use strict';

    return {
      
      	scope: {
      		fabricantsList:'=',
      	},
		replace: true,
		templateUrl: 'js/backoffice/fabricant/partials/fabricants.html',
		controller:["$scope", "$rootScope", "userService", "fabricantService", "tagService", "imageService", "documentService", "$sailsSocket", "$stateParams", "$state", "usSpinnerService", function($scope,$rootScope,userService,fabricantService,tagService,imageService,documentService,$sailsSocket,$stateParams,$state,usSpinnerService){
			console.log($scope.fabricantsList);

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
			, className: 'myFabricantSpinner' // The CSS class to assign to the spinner
			, top: 'auto' // Top position relative to parent
			, left: 'auto' // Left position relative to parent
			, shadow: false // Whether to render a shadow
			, hwaccel: false // Whether to use hardware acceleration
			, position: 'relative' // Element positioning
			};
			$scope.startSpin = function(){
				console.log('STARTSPIN');
            	usSpinnerService.spin('fabricantSpinner');
	        }
	        $scope.stopSpin = function(){
	                
	            usSpinnerService.stop('fabricantSpinner');
	        }



			$scope.fetchFabricants=function(){
				fabricantService.fetch($scope.sort,$scope.page,$scope.nbPerPage).then(function(data){
					$scope.fabricantsList = data;
				})
			}
			$scope.pagin=1;
			$scope.myPagingFunction=function(){
				if(!$scope.searchSlug && !$scope.fin){
					$scope.startSpin();
					$scope.pagin++;
					fabricantService.fetch($scope.sort,$scope.pagin,10).then(function(data){
						if(data.length==0)
						{
							$scope.fin = true
						}else{
							$scope.fabricantsList = _.union($scope.fabricantsList , data);
						}
						$scope.stopSpin()
					})
				}
			}
				$scope.blurSearch= 0;
			$scope.searchFabricant=function(){
				if($scope.searchSlug){
					console.log('HERE');
					if($scope.blurSearch== 0){
						fabricantService.search($scope.searchSlug,$scope.sort).then(function(data){
							console.log(data);
							$scope.fabricantsList = data;
						}).catch(function(e){
							console.log('err');
							console.log(e);
						})
					}else if($scope.blurSearch== 1){
						fabricantService.search($scope.searchSlug,$scope.sort).then(function(data){
							console.log(data);
							$scope.fabricantsList = data;
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
					fabricantService.fetch($scope.sort,0,10).then(function(data){
						console.log(data);
						if(data.length==0)
						{
							$scope.fin = true
						}else{
							$scope.fabricantsList = data;
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
					$scope.searchFabricant();
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
					case 'title':
						if($scope.sort == 'title DESC'){
							$scope.sort =	'title ASC'
						}else{
						 	$scope.sort =	'title DESC'
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
				$state.transitionTo('fabricant', { sort: $scope.sort,page:$scope.page,nbPerPage:$scope.nbPerPage}, {location:true});
				console.log('fetchFabricants');
				// $scope.fetchFabricants()
				
			}	
			$scope.update=function(fabricantid,attribute,value){
				console.log(fabricantid);
				$rootScope.startSpin();
				var attrToUpdate = {};
				attrToUpdate[attribute] = value;
				fabricantService.update(fabricantid,attrToUpdate).then(function(data){
					console.log('----------------------------------------------------------');
					console.log(data);
					// console.log($scope.$parent);
					// $rootScope.$broadcast('fabricantSelfChange',data);

        			$rootScope.stopSpin();
				},function(d){
					console.log('EROOR');
				})
			}	
			$rootScope.$on('fabricantSelfChange',function(e,data){
				console.log(data);
					var index = _.findIndex($scope.fabricantsList, function(o) { return o.id == data.id; });
					if( index !== -1) {
						$scope.fabricantsList[index] = data;
					}
			})		
			$rootScope.$on('fabricantSelfAdd',function(e,data){
				// console.log(id);
				console.log('fabricantSelfAdd');
					$scope.fabricantsList.unshift(data)
			})			
			$rootScope.$on('fabricantSelfRemove',function(e,id){
				console.log(id);
				console.log('fabricantSelfRemove');
					var index = _.findIndex($scope.fabricantsList, function(o) { return o.id == id; });

					console.log($scope.fabricantsList);
					console.log(index);
					if( index !== -1) {
						console.log('index !== -1');
						$scope.fabricantsList.splice(index,1)
						console.log($scope.fabricantsList);
					}
			})	
			$rootScope.$on('fabricantSelfChangeImg',function(e,data){
				console.log(data);
					var index = _.findIndex($scope.fabricantsList, function(o) { return o.id == data.id; });
					if( index !== -1) {
						$scope.fabricantsList[index].images = data.images;
					}
			})	
			$rootScope.$on('fabricantSelfChangeDoc',function(e,data){
				console.log(data);
					var index = _.findIndex($scope.fabricantsList, function(o) { return o.id == data.id; });
					if( index !== -1) {
						$scope.fabricantsList[index].document = data.document;
					}
			})	
			$rootScope.$on('fabricantSelfChangeTag',function(e,data){
				console.log(data);
					var index = _.findIndex($scope.fabricantsList, function(o) { return o.id == data.id; });
					if( index !== -1) {
						$scope.fabricantsList[index].tags = data.tags;
					}
			})	
			$rootScope.$on('fabricantSelfChangeCat',function(e,data){
				console.log(data);
					var index = _.findIndex($scope.fabricantsList, function(o) { return o.id == data.id; });
					if( index !== -1) {
						$scope.fabricantsList[index].categories = data.categories;
					}
			})
			$rootScope.$on('fabricantSelfChangeAuthorAdd',function(e,data){
				console.log('fabricantSelfChangeAuthorADD');
				console.log(data);
				var fabricantId= data.data.parent.id;
				var authorId = data.addedAuthorId;
				console.log(fabricantId);
					var index = _.findIndex($scope.fabricantsList, function(o) { return o.id == fabricantId; });
					console.log(index);
					if( index !== -1) {
						userService.fetchOne(authorId).then(function(author){
							console.log('final author fetch==>');
							console.log(author);
							$scope.fabricantsList[index].authors.push(author)

						},function(d){
							console.log('EROOR');
						})
					}
			})
			$rootScope.$on('fabricantSelfChangeAuthorRemove',function(e,data){
				console.log('fabricantSelfChangeAuthorRemove');
				console.log(data);
				var fabricantId= data.data.id;
				var authorId = data.removedAuthorId;
				console.log(fabricantId);
				var index = _.findIndex($scope.fabricantsList, function(o) { return o.id == fabricantId; });
				console.log(index);
				if( index !== -1) {
						var index2 = _.findIndex($scope.fabricantsList[index].authors, function(o) { return o.id == authorId; });
						if( index2 !== -1)
							$scope.fabricantsList[index].authors.splice(index2,1)

				}	
			})

			    $sailsSocket.subscribe('fabricant',function(data){
			        console.log('ON ARTICLE');
			        console.log(data);
			        if(data.verb =='created'){
			        	// fabricantService.fetchOne(data.id).then(function(data2){
			        		// console.log(data2);
			        		$scope.fabricantsList.unshift(data.data)
			        		
			        	// })
			        	
			        }else
			        if(data.verb =='updated'){
			        	// _.find($scope.fabricantsList,function(o) { return o.age < 40; });
			        	var index = _.findIndex($scope.fabricantsList, function(o) { return o.id == data.id; });
						if( index !== -1) {
							
							console.log($scope.fabricantsList[index]);
							_.merge($scope.fabricantsList[index], data.data)
							console.log(data.id);
							// $scope.$broadcast('ellipsContent-'+data.id);
						}
			        }else
			        if(data.verb =='destroyed'){
			        	// _.find($scope.fabricantsList,function(o) { return o.age < 40; });
			        	var index = _.findIndex($scope.fabricantsList, function(o) { return o.id == data.id; });
						if( index !== -1) {
							
							console.log($scope.fabricantsList[index]);
							$scope.fabricantsList.splice(index,1)
							// console.log(data.id);
							// $scope.$broadcast('ellipsContent-'+data.id);
						}
			        }else
			        if(data.verb =='addedTo'){
							console.log('addedTO');
							var fabricantTochange = _.find($scope.fabricantsList, function(o){ return o.id == data.id})

							if(data.attribute == 'tags'){

								if(fabricantTochange){
									if(typeof(fabricantTochange.tags) == 'undefined'){
									fabricantTochange.tags = [];
									}
								tagService.fetchOne(data.addedId).then(function(tag){
									console.log(tag);
									fabricantTochange.tags.push(tag)

								},function(d){
									console.log('EROOR');
								})
								}
							}else
							if(data.attribute == 'categories'){

								console.log('categories');
								console.log(data.addedId);
								if(typeof(fabricantTochange.categories) == 'undefined'){
									fabricantTochange.categories = [];
								}
								categoryService.fetchOne(data.addedId).then(function(cat){
									console.log(cat);
									fabricantTochange.categories.push(cat)

								},function(d){
									console.log('EROOR');
								})
							}
							if(data.attribute == 'images'){

								console.log('images');
								console.log(data.addedId);
								if(typeof(fabricantTochange.images) == 'undefined'){
									fabricantTochange.images = [];
								}
								imageService.fetchOne(data.addedId).then(function(cat){
									console.log(cat);
									fabricantTochange.images.push(cat)

								},function(d){
									console.log('EROOR');
								})
							}
							if(data.attribute == 'documents'){

								console.log('documents');
								console.log(data.addedId);
								if(typeof(fabricantTochange.documents) == 'undefined'){
									fabricantTochange.documents = [];
								}
								documentService.fetchOne(data.addedId).then(function(cat){
									console.log(cat);
									fabricantTochange.documents.push(cat)

								},function(d){
									console.log('EROOR');
								})
							}
							if(data.attribute == 'authors'){

								console.log('authors');
								console.log(data.addedId);
								console.log(fabricantTochange);
								if(typeof(fabricantTochange.authors) == 'undefined'){
									fabricantTochange.authors = [];
								}
								userService.fetchOne(data.addedId).then(function(author){
									fabricantTochange.authors.push(author)

								},function(d){
									console.log('EROOR');
								})
							}

						}else
						if(data.verb =='removedFrom'){
							console.log('removeFrom');
							var fabricantTochange = _.find($scope.fabricantsList, function(o){ return o.id == data.id})

							if(data.attribute == 'tags'){
								var index = _.findIndex(fabricantTochange.tags, function(o) { return o.id == data.removedId; });
								if( index !== -1) {
									fabricantTochange.tags.splice(index,1)
								}
							}
							if(data.attribute == 'categories'){
								var index = _.findIndex(fabricantTochange.categories, function(o) { return o.id == data.removedId; });
								if( index !== -1) {
									fabricantTochange.categories.splice(index,1)
								}
							}
							if(data.attribute == 'images'){
								var index = _.findIndex(fabricantTochange.images, function(o) { return o.id == data.removedId; });
								if( index !== -1) {
									fabricantTochange.images.splice(index,1)
								}
							}
							if(data.attribute == 'documents'){
								var index = _.findIndex(fabricantTochange.documents, function(o) { return o.id == data.removedId; });
								if( index !== -1) {
									fabricantTochange.documents.splice(index,1)
								}
							}
							if(data.attribute == 'authors'){
								var index = _.findIndex(fabricantTochange.authors, function(o) { return o.id == data.removedId; });
								if( index !== -1) {
									fabricantTochange.authors.splice(index,1)
								}
							}

						}
			    })
				$sailsSocket.subscribe('category',function(data){
			        console.log('ON category');
			        console.log(data);
			        if(data.verb =='created'){

			        	// $scope.fabricantsList.unshift(data.data)
			        	
			        }else
			        if(data.verb =='updated'){

			        	console.log('updated');
			        	console.log(data.id);
			        	// console.log($scope.fabricantsList);

			        	for(var i in $scope.fabricantsList){
			        		console.log($scope.fabricantsList[i]);

			        		if($scope.fabricantsList[i].categories.length)
			        		{
			        			var index = _.findIndex($scope.fabricantsList[i].categories, function(o) { return o.id == data.id; });
								if( index !== -1) {
									console.log(data.data);
									// $scope.fabricantsList[i].categories.splice(index,1,data.data)
									_.merge($scope.fabricantsList[i].categories[index], data.data)
								}
			        		}
			        	}
			        	// _.find($scope.fabricantsList,function(o) { return o.age < 40; });
			   //      	var index = _.findIndex($scope.fabricantsList, function(o) { return o.id == data.id; });
						// if( index !== -1) {
							
						// 	console.log($scope.fabricantsList[index]);
						// 	_.merge($scope.fabricantsList[index], data.data)
						// 	console.log(data.id);
						// 	// $scope.$broadcast('ellipsContent-'+data.id);
						// }
			        }else
			        if(data.verb =='destroyed'){
			        	// _.find($scope.fabricantsList,function(o) { return o.age < 40; });
			   //      	var index = _.findIndex($scope.fabricantsList, function(o) { return o.id == data.id; });
						// if( index !== -1) {
							
						// 	console.log($scope.fabricantsList[index]);
						// 	$scope.fabricantsList.splice(index,1)
						// 	// console.log(data.id);
						// 	// $scope.$broadcast('ellipsContent-'+data.id);
						// }
			        }
			    })
		}],
		link:function(scope,element,attrs){
			
		}
    };

}]);