angular.module('momi-agenda')
  .directive('agenda', function(){

    'use strict';

    return {
      	scope: {
      		itemsList:'=',
      	},
		replace: true,
      	templateUrl: 'js/backoffice/agenda/partials/agenda.html',
      	controller:function($mdDialog,$scope,$rootScope,userService,tagService,categoryService,imageService,documentService,$sailsSocket,$stateParams,$state,usSpinnerService){
			console.log($scope.itemsList);

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





			$scope.dayViewStart = '06:00';
			$scope.dayViewEnd = '23:00';
			$scope.calendarView = 'month';
			$scope.calendarDate = new Date();
			$scope.events = [
			  {
			    title: 'My event title', // The title of the event
			    startsAt: new Date('2016/09/21 12:30'), // A javascript date object for when the event starts
			    endsAt: new Date('2016/09/25 18:00'),
			    allDay: false,
			    color: { // can also be calendarConfig.colorTypes.warning for shortcuts to the deprecated event types
			      primary: 'orange', // the primary event color (should be darker than secondary)
			      secondary: 'yellow' // the secondary event color (should be lighter than primary)
			    },
			  },
			  {
			    title: 'My event title', // The title of the event
			    startsAt: new Date('2016/09/18'), // A javascript date object for when the event starts
			    endsAt: new Date('2016/09/22'), // Optional - a javascript date object for when the event ends
			    color: { // can also be calendarConfig.colorTypes.warning for shortcuts to the deprecated event types
			      primary: 'navy', // the primary event color (should be darker than secondary)
			      secondary: 'blue' // the secondary event color (should be lighter than primary)
			    },
			    actions: [{ // an array of actions that will be displayed next to the event title
			      label: '<i class=\'glyphicon glyphicon-pencil\'></i>', // the label of the action
			      cssClass: 'edit-action', // a CSS class that will be added to the action element so you can implement custom styling
			      onClick: function(args) { // the action that occurs when it is clicked. The first argument will be an object containing the parent event
			        console.log('Edit event', args.calendarEvent);
			      }
			    }],
			    draggable: false, //Allow an event to be dragged and dropped
			    resizable: false, //Allow an event to be resizable
			    incrementsBadgeTotal: true, //If set to false then will not count towards the badge total amount on the month and year view
			    // recursOn: 'year', // If set the event will recur on the given period. Valid values are year or month
			    cssClass: 'a-css-class-name', //A CSS class (or more, just separate with spaces) that will be added to the event when it is displayed on each view. Useful for marking an event as selected / active etc
			    allDay: false // set to true to display the event as an all day event on the day view
			  }
			];






			$scope.ModalAdd=function(Cat){
				
			    $mdDialog.show({
			      	controller: function($scope,$rootScope,eventService, $timeout){
			      		$scope.invalid = false;
			      		$scope.formData = {};
			      		$scope.formData.categories = [];
			      		$scope.formData.tags = [];

			   //    		$scope.removeThis=function(id){
						// 	$rootScope.startSpin();
						// 	articleService.remove($scope.formData.id).then(function(data){
						// 		console.log('----------------------------------------------------------');
						// 		console.log(data);
						// 		console.log(id);
						// 		$rootScope.$broadcast('articleSelfRemove',id);
								
			   //          		$state.go('^')

			   //      			$rootScope.stopSpin();
						// 	},function(d){
						// 		console.log('EROOR');
						// 	})
						// }

					    $scope.autocompleteTag =function(query) {
					    	console.log('autocompleteTag');
					    	return tagService.searchTags(query)
					    }
					    $scope.autocompleteCategories =function(query) {
					    	return categoryService.searchCategories(query)
					    }
					    $scope.autocompleteAuthors =function(query) {
					    	return userService.searchUsers(query)
					    }
					   

					    $scope.unselectOnBlur=function(){
					    	console.log('onBlur');
					    	$('.tag-item.selected').removeClass('selected')
					    }
						$scope.addTag=function(newTag){
							console.log(newTag);
							$rootScope.startSpin();
							var tagText = newTag.text;
							articleService.addTag($scope.formData.id,newTag).then(function(data){
								$rootScope.$broadcast('articleSelfChangeTag',data.parent);
								var tag_with_id =data.child
								var index = _.findIndex($scope.formData.tags, function(o) { return o.text == tagText; });
								if( index !== -1) {
									$scope.formData.tags.splice(index, 1, tag_with_id);
								} else {
									$scope.formData.tags.push(tag_with_id);
								}
								$scope.touched = true;

							$rootScope.stopSpin();
							},function(d){
								console.log(d);
								console.log('EROOR');
							})
						}	
						function transformTag(newTag){
							if (newTag.id){
								return newTag
							}else{
								return {
							    	text: newTag,
								};
							}
						}	

						$scope.removeTag=function(t){
							$rootScope.startSpin();
							articleService.removeTag($scope.formData.id,t).then(function(data){
								console.log(data);
								$rootScope.$broadcast('articleSelfChangeTag',data);
								$rootScope.stopSpin();
							},function(d){
								console.log('EROOR');
							})
						}
						$scope.addCategory=function(newCategory){
							console.log('ADD CATEGORY');
							var name = newCategory.name;
							$rootScope.startSpin();
							if(!newCategory.id)
							{
								newCategory={};
								newCategory.name = name;
								newCategory.color = 'darkgrey';
								newCategory.textColor = 'white';
							}
							console.log(newCategory);
							articleService.addCategory($scope.formData.id,newCategory).then(function(data){
								$rootScope.$broadcast('articleSelfChangeCat',data.parent);

								console.log(data);
								var tag_with_id =data.child;
								var index = _.findIndex($scope.formData.categories, function(o) { return o.name == name || o.text == name; });
								
								console.log('index='+index);
								if( index != -1) {
									console.log('index different -1');
									$scope.formData.categories.splice(index, 1, tag_with_id);
								} else {
									console.log('---------------------------------------------------------');
									console.log(tag_with_id);
									$scope.formData.categories.push(tag_with_id);


								}
								$scope.touched = true;

								$rootScope.stopSpin();
									
							},function(d){
								console.log(d);
								console.log('EROOR');
							})
						}	
						function transformCategory(newCategory){

							console.log('transformCategory');
							if (newCategory.id){
								return newCategory
							}else{
								return {
							    	name: newCategory,
							    	color : 'darkgrey',
									textColor : 'white'
								};
							}
						}	

						$scope.removeCategory=function(category){
							$rootScope.startSpin();
							articleService.removeCategory($scope.formData.id,category).then(function(data){
								$rootScope.$broadcast('articleSelfChangeCat',data);
								$rootScope.stopSpin();
							},function(d){
								console.log('EROOR');
							})
						}	
						$scope.closeDatePicker=function(t,tt){
							$('.open').removeClass('open')
						}
						
						function tinymce_focus(){
							console.log('FOCUS');
					        $('.mce-edit-area').addClass('focused');
					    }

					    function tinymce_blur(){
					        $('.mce-edit-area').removeClass('focused');
					    	console.log('BLUR');
					    }

			      		$scope.tinymceOption ={
			      			// skin: 'myStyle',
			      			content_css : '/styles/backoffice/tinymce.css' ,
			      			setup: function(editor) {

			  					var placeholder = $('#' + editor.id).attr('placeholder');
							    if (typeof placeholder !== 'undefined' && placeholder !== false) {
							      var is_default = false;
							      editor.on('init', function() {
							        // get the current content
							        var cont = editor.getContent();
							        $(editor.getDoc()).contents().find('body').focus(function(){tinymce_focus();});
			                    	$(editor.getDoc()).contents().find('body').blur(function(){tinymce_blur();});
							        // If its empty and we have a placeholder set the value
							        if (cont.length === 0) {
							          editor.setContent(placeholder);
							          // Get updated content
							          cont = placeholder;
							        }
							        // convert to plain text and compare strings
							        is_default = (cont == placeholder);

							        // nothing to do
							        if (!is_default) {
							          return;
							        }
							      })
							      .on('focus', function() {
							        // replace the default content on focus if the same as original placeholder
							        if (is_default) {
							          editor.setContent('');
							        }
							      })
						      	  .on("blur", function() {
								        console.log('ON bbbblur');
							         	if (editor.getContent().length === 0) {
									    	editor.setContent(placeholder);
								    	}else{
								    		is_default = false;
								    	}
							      	});
					      		}

					      		editor.on("blur", function() {
							        
							        // $scope.update('content');
						      	});
							},
			      			plugins: 'link image code',
			      			statusbar:false,
			      			toolbar: 'undo redo | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist indent outdent | link image '

						}

						$scope.tinymceModel = 'Initial content';
			      		


			      		$scope.addEvent=function(){
			      			$scope.invalid = false;
			      			return eventService.addEvent($scope.formData).then(function(data){
			      				console.log(data);
			      				
			      			}).catch(function(e){
			      				console.log('catch e');
			      				console.log(e);
			      				$scope.invalid = true;

			      				
			      			})
			      			
			      		}

			     	},
			      	templateUrl: 'js/backoffice/agenda/partials/add.html',
			      	parent: angular.element(document.body),
			      	// targetEvent: ev,
			      	clickOutsideToClose:true,
			    })
			    .then(function(answer) {
			      $scope.status = 'You said the information was "' + answer + '".';
			    }, function() {
			      $scope.status = 'You cancelled the dialog.';
			    });
			}












		},
		link:function(scope,element,attrs){
			
		}
    };

});