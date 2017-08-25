angular.module('momi-agenda')
  .directive('agenda', function(){

    'use strict';

    return {
      	scope: {
      		itemsList:'=',
      	},
		replace: true,
      	templateUrl: 'js/backoffice/agenda/partials/agenda.html',
      	controller:["$mdDialog", "$scope", "$rootScope", "userService", "tagService", "categoryService", "eventService", "imageService", "documentService", "$sailsSocket", "$stateParams", "$state", "usSpinnerService", function($mdDialog,$scope,$rootScope,userService,tagService,categoryService,eventService,imageService,documentService,$sailsSocket,$stateParams,$state,usSpinnerService){
			console.log($scope.itemsList);
			$scope.events = $scope.itemsList;
			var touched = false;
			var colorSet = [
			{'primary':'#E9408F','secondary':'#ED88B7'},
			{'primary':'#FFFFFF','secondary':'rgba(255,255,255,0.7)'},
			{'primary':'#1c7dfa','secondary':'#368EFF'},
			{'primary':'#989cff','secondary':'#B1B5FF'},
			{'primary':'#ff9c4b','secondary':'rgba(255, 156, 75, 0.7)'},
			]
			$scope.eventsListed=[];
			 var startDate = moment()
      		, endDate   =moment().subtract(2,'months')

			for(var i in $scope.events){
				$scope.events[i].endsAt = new Date($scope.events[i].endsAt)
				$scope.events[i].startsAt = new Date($scope.events[i].startsAt)
				if($scope.events[i].contentType =='conf'){ $scope.events[i].color = colorSet[0]}
				if($scope.events[i].contentType =='colloque'){ $scope.events[i].color = colorSet[1]}
				if($scope.events[i].contentType =='lunch'){ $scope.events[i].color = colorSet[2]}
				if($scope.events[i].contentType =='salon'){ $scope.events[i].color = colorSet[3]}
				if($scope.events[i].contentType =='other'){ $scope.events[i].color = colorSet[4]}

					if(moment($scope.events[i].createdAt).isBetween(endDate,startDate) ){
						$scope.eventsListed.push($scope.events[i])
					}
			}

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

			$scope.validateEvent=function(id,bonus){
				$rootScope.startSpin();
				console.log('validate Event',id);
				
				eventService.validatePai(id,bonus).then(function(data){
					console.log('VALID');
					console.log(data);
						var index = _.findIndex($scope.eventsListed, function(o) { return o.id == data.data[0].id; });
						if( index !== -1) {
							$scope.eventsListed.splice(index,1,data.data[0])
						}
        			$rootScope.stopSpin();
				},function(d){
					console.log('EROOR');
				})
			}

			$scope.unvalidateEvent=function(id,raison){

				

				$rootScope.startSpin();
				console.log(raison);

				eventService.unvalidatePai(id,raison).then(function(data){
					console.log(data);
					console.log('invalid');

					
					var index = _.findIndex($scope.eventsListed, function(o) { return o.id == data.data[0].id; });
					if( index !== -1) {
						$scope.eventsListed.splice(index,1,data.data[0])
					}


        			$rootScope.stopSpin();
				},function(d){
					console.log('EROOR');
				})
			}
			
			$scope.eventClicked=function(myevent){

				console.log('CLICKED');
				
				    $mdDialog.show({
				      	controller: ["$scope", "$rootScope", "eventService", "$timeout", function($scope,$rootScope,eventService, $timeout){
				      		$scope.invalid = false;
				      		$scope.formData = _.clone(myevent)
				      		// $scope.formData.categories = [];
				      		// $scope.formData.tags = [];

				   //    		$scope.removeThis=function(id){
							// 	$rootScope.startSpin();
							// 	eventService.remove($scope.formData.id).then(function(data){
							// 		console.log('----------------------------------------------------------');
							// 		console.log(data);
							// 		console.log(id);
							// 		$rootScope.$broadcast('eventSelfRemove',id);
									
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
								eventService.addTag($scope.formData.id,newTag).then(function(data){
									$rootScope.$broadcast('eventSelfChangeTag',data.parent);
									var tag_with_id =data.child
									var index = _.findIndex($scope.formData.tags, function(o) { return o.text == tagText; });
									if( index !== -1) {
										$scope.formData.tags.splice(index, 1, tag_with_id);
									} else {
										$scope.formData.tags.push(tag_with_id);
									}
									touched = true;

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
								eventService.removeTag($scope.formData.id,t).then(function(data){
									console.log(data);
									$rootScope.$broadcast('eventSelfChangeTag',data);
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
								eventService.addCategory($scope.formData.id,newCategory).then(function(data){
									$rootScope.$broadcast('eventSelfChangeCat',data.parent);

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
									touched = true;

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
								eventService.removeCategory($scope.formData.id,category).then(function(data){
									$rootScope.$broadcast('eventSelfChangeCat',data);
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
								        
								        $scope.update('content');
							      	});
								},
				      			plugins: 'link image code',
				      			statusbar:false,
				      			toolbar: 'undo redo | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist indent outdent | link image '

							}

							$scope.tinymceModel = 'Initial content';
				      		
							$scope.deleteEvent=function(id){
								console.log('DELETEEVENT');
								console.log(id);
				      			
				      			eventService.remove(id).then(function(data){
				      				console.log('finish');
				      				console.log(data);
				      				$mdDialog.hide()
				      				$rootScope.$broadcast('eventSelfremoved',data);
				      			}).catch(function(e){
				      				console.log('catch e');
				      				console.log(e);
				      				$scope.invalid = true;

				      			})

				      		}

				      		$scope.update=function(attribute){

				      			console.log('UPDATE');

								$rootScope.startSpin();
								var attrToUpdate = {};
								attrToUpdate[attribute] = $scope.formData[attribute];
								eventService.update($scope.formData.id,attrToUpdate).then(function(data){
									console.log('----------------------------------------------------------');
									console.log(data);
									console.log($scope.$parent);
									touched = true;
									$rootScope.$broadcast('eventSelfUpdated',data);

				        			$rootScope.stopSpin();
								},function(d){
									console.log('EROOR');
								})
							}
				      		

				     	}],
				      	templateUrl: 'js/backoffice/agenda/partials/edit.html',
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

			$scope.dayViewStart = '06:00';
			$scope.dayViewEnd = '23:00';
			$scope.calendarView = 'month';
			$scope.calendarDate = new Date();
			// $scope.events = [
			//   {
			//     title: 'My event title', // The title of the event
			//     startsAt: new Date('2016/09/21 12:30'), // A javascript date object for when the event starts
			//     endsAt: new Date('2016/09/25 18:00'),
			//     allDay: false,
			//     color: { // can also be calendarConfig.colorTypes.warning for shortcuts to the deprecated event types
			//       primary: 'orange', // the primary event color (should be darker than secondary)
			//       secondary: 'yellow' // the secondary event color (should be lighter than primary)
			//     },
			//   },
			//   {
			//     title: 'My event title', // The title of the event
			//     startsAt: new Date('2016/09/18'), // A javascript date object for when the event starts
			//     endsAt: new Date('2016/09/22'), // Optional - a javascript date object for when the event ends
			//     color: { // can also be calendarConfig.colorTypes.warning for shortcuts to the deprecated event types
			//       primary: 'navy', // the primary event color (should be darker than secondary)
			//       secondary: 'blue' // the secondary event color (should be lighter than primary)
			//     },
			//     actions: [{ // an array of actions that will be displayed next to the event title
			//       label: '<i class=\'glyphicon glyphicon-pencil\'></i>', // the label of the action
			//       cssClass: 'edit-action', // a CSS class that will be added to the action element so you can implement custom styling
			//       onClick: function(args) { // the action that occurs when it is clicked. The first argument will be an object containing the parent event
			//         console.log('Edit event', args.calendarEvent);
			//       }
			//     }],
			//     draggable: false, //Allow an event to be dragged and dropped
			//     resizable: false, //Allow an event to be resizable
			//     incrementsBadgeTotal: true, //If set to false then will not count towards the badge total amount on the month and year view
			//     // recursOn: 'year', // If set the event will recur on the given period. Valid values are year or month
			//     cssClass: 'a-css-class-name', //A CSS class (or more, just separate with spaces) that will be added to the event when it is displayed on each view. Useful for marking an event as selected / active etc
			//     allDay: false // set to true to display the event as an all day event on the day view
			//   }
			// ];



			$rootScope.$on('eventSelfcreate',function(e,data){
				console.log('eventSelfcreate');
				console.log(data);
				if(data.contentType =='conf'){ data.color = colorSet[0]}
				if(data.contentType =='colloque'){ data.color = colorSet[1]}
				if(data.contentType =='lunch'){ data.color = colorSet[2]}
				if(data.contentType =='salon'){ data.color = colorSet[3]}
				if(data.contentType =='other'){ data.color = colorSet[4]}
				$scope.events.push(data);

			})
			$rootScope.$on('eventSelfUpdated',function(e,data){
				console.log('eventSelfUpdated');
				console.log(data);

				var index = _.findIndex($scope.events, function(o) { return o.id == data.id; });
				if( index !== -1) {
					if(data.contentType =='conf'){console.log('CONFERENCE'); data.color = colorSet[0]}
					if(data.contentType =='colloque'){ data.color = colorSet[1]}
					if(data.contentType =='lunch'){ data.color = colorSet[2]}
					if(data.contentType =='salon'){ data.color = colorSet[3]}
					if(data.contentType =='other'){ data.color = colorSet[4]}
					$scope.events[index] = data;
				}
			})
			$rootScope.$on('eventSelfremoved',function(e,data){
				console.log('eventSelfremoved');

				var index = _.findIndex($scope.events, function(o) { return o.id == data.id; });
				if( index !== -1) {
					$scope.events.splice(index,1)
				}
			})


			$scope.ModalAdd=function(Cat){
				
			    $mdDialog.show({
			    	preserveScope:true,
			      	controller: ["$scope", "$rootScope", "eventService", "$timeout", function($scope,$rootScope,eventService, $timeout){
			      		$scope.invalid = false;
			      		touched = false;


			      		eventService.createBlank().then(function(data){


			      				console.log('BLANK CREATED');
			      				$scope.formData = data;
					      		$scope.formData.categories = [];
					      		$scope.formData.tags = [];
								$rootScope.$broadcast('eventSelfcreate',data);


			      			
			      		})

						$scope.update=function(attribute){

							$rootScope.startSpin();
							var attrToUpdate = {};
							attrToUpdate[attribute] = $scope.formData[attribute];
							eventService.update($scope.formData.id,attrToUpdate).then(function(data){
								console.log('----------------------------------------------------------');
								console.log(data);
								console.log($scope.$parent);
								touched = true;
								$rootScope.$broadcast('eventSelfUpdated',data);

			        			$rootScope.stopSpin();
							},function(d){
								console.log('EROOR');
							})
						}

			      		// $scope.addEvent=function(){
			      		// 	$scope.invalid = false;

			      		// 	$scope.formData.startsAt = new Date( $scope.formData.startsAt);
			      		// 	$scope.formData.endsAt = new Date( $scope.formData.endsAt);


			      		// 	return eventService.addEvent($scope.formData).then(function(data){
			      		// 		console.log(data);
			      		// 		$rootScope.$broadcast('eventSelfcreate',data);
			      		// 		 $mdDialog.hide()
			      				
			      		// 	}).catch(function(e){
			      		// 		console.log('catch e');
			      		// 		console.log(e);
			      		// 		$scope.invalid = true;

			      				
			      		// 	})
			      			
			      		// }
			   //    		$scope.removeThis=function(id){
						// 	$rootScope.startSpin();
						// 	eventService.remove($scope.formData.id).then(function(data){
						// 		console.log('----------------------------------------------------------');
						// 		console.log(data);
						// 		console.log(id);
						// 		$rootScope.$broadcast('eventSelfRemove',id);
								
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
							eventService.addTag($scope.formData.id,newTag).then(function(data){
								$rootScope.$broadcast('eventSelfChangeTag',data.parent);
								var tag_with_id =data.child
								var index = _.findIndex($scope.formData.tags, function(o) { return o.text == tagText; });
								if( index !== -1) {
									$scope.formData.tags.splice(index, 1, tag_with_id);
								} else {
									$scope.formData.tags.push(tag_with_id);
								}
								touched = true;

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
							eventService.removeTag($scope.formData.id,t).then(function(data){
								console.log(data);
								$rootScope.$broadcast('eventSelfChangeTag',data);
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
							eventService.addCategory($scope.formData.id,newCategory).then(function(data){
								$rootScope.$broadcast('eventSelfChangeCat',data.parent);

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
								touched = true;

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
							eventService.removeCategory($scope.formData.id,category).then(function(data){
								$rootScope.$broadcast('eventSelfChangeCat',data);
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
			      		


			      		

			     	}],
			      	templateUrl: 'js/backoffice/agenda/partials/add.html',
			      	parent: angular.element(document.body),
			      	// targetEvent: ev,
			      	preserveScope:true,
			      	clickOutsideToClose:true,
			      	onRemoving: function (scope,element) {
			      		console.log('oremoving');
			           console.log(scope);
			          	if(touched == false){
				    		console.log('false');
			      			eventService.remove($scope.formData.id).then(function(data){
								console.log('----------------------------------------------------------');
								console.log(data)
								$rootScope.$broadcast('eventSelfRemove',data.id);

			        			$rootScope.stopSpin();
							},function(d){
								console.log('EROOR'); 
							})
		      			}
			        }
			    })
			    .finally(function() {
			    	console.log('finally');
			    	console.log(scope);
			   
			    });
			}












		}],
		link:function(scope,element,attrs){
			
		}
    };

});