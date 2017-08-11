angular.module('pai-agenda')
  .directive('agenda', function(){

    'use strict';

    return {
      	scope: {
      		itemsList:'=',
      	},
		replace: true,
      	templateUrl: 'js/front/PAI/agenda/partials/agenda.html',
      	controller:function($mdDialog,$scope,$rootScope,userService,tagService,categoryService,imageService,documentService,$sailsSocket,$stateParams,$state,usSpinnerService){
			console.log($scope.itemsList);
			$scope.events = $scope.itemsList;
			var colorSet = [
			{'primary':'#E9408F','secondary':'#ED88B7'},
			{'primary':'#FFFFFF','secondary':'rgba(255,255,255,0.7)'},
			{'primary':'#1c7dfa','secondary':'#368EFF'},
			{'primary':'#989cff','secondary':'#B1B5FF'},
			]

			$scope.dayViewStart = '06:00';
			$scope.dayViewEnd = '23:00';
			$scope.calendarView = 'year';
			$scope.calendarDate = new Date();

			for(var i in $scope.events){
				$scope.events[i].endsAt = new Date($scope.events[i].endsAt)
				$scope.events[i].startsAt = new Date($scope.events[i].startsAt)
				if($scope.events[i].contentType =='conf'){ $scope.events[i].color = colorSet[0]}
				if($scope.events[i].contentType =='colloque'){ $scope.events[i].color = colorSet[1]}
				if($scope.events[i].contentType =='lunch'){ $scope.events[i].color = colorSet[2]}
				if($scope.events[i].contentType =='sallon'){ $scope.events[i].color = colorSet[3]}
			}

		

			$scope.eventClicked=function(myevent){

					console.log('CLICKED');
				
				    $mdDialog.show({
				      	controller: function($scope,$rootScope,eventService, $timeout){
				      		$scope.invalid = false;
				      	

				     	},
				      	templateUrl: 'js/backoffice/agenda/partials/single.html',
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



			// $scope.ModalAdd=function(Cat){
				
			//     $mdDialog.show({
			//     	preserveScope:true,
			//       	controller: function($scope,$rootScope,eventService, $timeout){
			//       		$scope.invalid = false;
			//       		touched = false;


			//       		eventService.createBlank().then(function(data){


			//       				console.log('BLANK CREATED');
			//       				$scope.formData = data;
			// 		      		$scope.formData.categories = [];
			// 		      		$scope.formData.tags = [];
			// 					$rootScope.$broadcast('eventSelfcreate',data);


			      			
			//       		})

			// 			$scope.update=function(attribute){

			// 				$rootScope.startSpin();
			// 				var attrToUpdate = {};
			// 				attrToUpdate[attribute] = $scope.formData[attribute];
			// 				eventService.update($scope.formData.id,attrToUpdate).then(function(data){
			// 					console.log('----------------------------------------------------------');
			// 					console.log(data);
			// 					console.log($scope.$parent);
			// 					touched = true;
			// 					$rootScope.$broadcast('eventSelfUpdated',data);

			//         			$rootScope.stopSpin();
			// 				},function(d){
			// 					console.log('EROOR');
			// 				})
			// 			}

			//       		// $scope.addEvent=function(){
			//       		// 	$scope.invalid = false;

			//       		// 	$scope.formData.startsAt = new Date( $scope.formData.startsAt);
			//       		// 	$scope.formData.endsAt = new Date( $scope.formData.endsAt);


			//       		// 	return eventService.addEvent($scope.formData).then(function(data){
			//       		// 		console.log(data);
			//       		// 		$rootScope.$broadcast('eventSelfcreate',data);
			//       		// 		 $mdDialog.hide()
			      				
			//       		// 	}).catch(function(e){
			//       		// 		console.log('catch e');
			//       		// 		console.log(e);
			//       		// 		$scope.invalid = true;

			      				
			//       		// 	})
			      			
			//       		// }
			//    //    		$scope.removeThis=function(id){
			// 			// 	$rootScope.startSpin();
			// 			// 	eventService.remove($scope.formData.id).then(function(data){
			// 			// 		console.log('----------------------------------------------------------');
			// 			// 		console.log(data);
			// 			// 		console.log(id);
			// 			// 		$rootScope.$broadcast('eventSelfRemove',id);
								
			//    //          		$state.go('^')

			//    //      			$rootScope.stopSpin();
			// 			// 	},function(d){
			// 			// 		console.log('EROOR');
			// 			// 	})
			// 			// }

			// 		    $scope.autocompleteTag =function(query) {
			// 		    	console.log('autocompleteTag');
			// 		    	return tagService.searchTags(query)
			// 		    }
			// 		    $scope.autocompleteCategories =function(query) {
			// 		    	return categoryService.searchCategories(query)
			// 		    }
			// 		    $scope.autocompleteAuthors =function(query) {
			// 		    	return userService.searchUsers(query)
			// 		    }
					   

			// 		    $scope.unselectOnBlur=function(){
			// 		    	console.log('onBlur');
			// 		    	$('.tag-item.selected').removeClass('selected')
			// 		    }
			// 			$scope.addTag=function(newTag){
			// 				console.log(newTag);
			// 				$rootScope.startSpin();
			// 				var tagText = newTag.text;
			// 				eventService.addTag($scope.formData.id,newTag).then(function(data){
			// 					$rootScope.$broadcast('eventSelfChangeTag',data.parent);
			// 					var tag_with_id =data.child
			// 					var index = _.findIndex($scope.formData.tags, function(o) { return o.text == tagText; });
			// 					if( index !== -1) {
			// 						$scope.formData.tags.splice(index, 1, tag_with_id);
			// 					} else {
			// 						$scope.formData.tags.push(tag_with_id);
			// 					}
			// 					touched = true;

			// 				$rootScope.stopSpin();
			// 				},function(d){
			// 					console.log(d);
			// 					console.log('EROOR');
			// 				})
			// 			}	
			// 			function transformTag(newTag){
			// 				if (newTag.id){
			// 					return newTag
			// 				}else{
			// 					return {
			// 				    	text: newTag,
			// 					};
			// 				}
			// 			}	

			// 			$scope.removeTag=function(t){
			// 				$rootScope.startSpin();
			// 				eventService.removeTag($scope.formData.id,t).then(function(data){
			// 					console.log(data);
			// 					$rootScope.$broadcast('eventSelfChangeTag',data);
			// 					$rootScope.stopSpin();
			// 				},function(d){
			// 					console.log('EROOR');
			// 				})
			// 			}
			// 			$scope.addCategory=function(newCategory){
			// 				console.log('ADD CATEGORY');
			// 				var name = newCategory.name;
			// 				$rootScope.startSpin();
			// 				if(!newCategory.id)
			// 				{
			// 					newCategory={};
			// 					newCategory.name = name;
			// 					newCategory.color = 'darkgrey';
			// 					newCategory.textColor = 'white';
			// 				}
			// 				console.log(newCategory);
			// 				eventService.addCategory($scope.formData.id,newCategory).then(function(data){
			// 					$rootScope.$broadcast('eventSelfChangeCat',data.parent);

			// 					console.log(data);
			// 					var tag_with_id =data.child;
			// 					var index = _.findIndex($scope.formData.categories, function(o) { return o.name == name || o.text == name; });
								
			// 					console.log('index='+index);
			// 					if( index != -1) {
			// 						console.log('index different -1');
			// 						$scope.formData.categories.splice(index, 1, tag_with_id);
			// 					} else {
			// 						console.log('---------------------------------------------------------');
			// 						console.log(tag_with_id);
			// 						$scope.formData.categories.push(tag_with_id);


			// 					}
			// 					touched = true;

			// 					$rootScope.stopSpin();
									
			// 				},function(d){
			// 					console.log(d);
			// 					console.log('EROOR');
			// 				})
			// 			}	
			// 			function transformCategory(newCategory){

			// 				console.log('transformCategory');
			// 				if (newCategory.id){
			// 					return newCategory
			// 				}else{
			// 					return {
			// 				    	name: newCategory,
			// 				    	color : 'darkgrey',
			// 						textColor : 'white'
			// 					};
			// 				}
			// 			}	

			// 			$scope.removeCategory=function(category){
			// 				$rootScope.startSpin();
			// 				eventService.removeCategory($scope.formData.id,category).then(function(data){
			// 					$rootScope.$broadcast('eventSelfChangeCat',data);
			// 					$rootScope.stopSpin();
			// 				},function(d){
			// 					console.log('EROOR');
			// 				})
			// 			}	
			// 			$scope.closeDatePicker=function(t,tt){
			// 				$('.open').removeClass('open')
			// 			}
						
			// 			function tinymce_focus(){
			// 				console.log('FOCUS');
			// 		        $('.mce-edit-area').addClass('focused');
			// 		    }

			// 		    function tinymce_blur(){
			// 		        $('.mce-edit-area').removeClass('focused');
			// 		    	console.log('BLUR');
			// 		    }

			//       		$scope.tinymceOption ={
			//       			// skin: 'myStyle',
			//       			content_css : '/styles/backoffice/tinymce.css' ,
			//       			setup: function(editor) {

			//   					var placeholder = $('#' + editor.id).attr('placeholder');
			// 				    if (typeof placeholder !== 'undefined' && placeholder !== false) {
			// 				      var is_default = false;
			// 				      editor.on('init', function() {
			// 				        // get the current content
			// 				        var cont = editor.getContent();
			// 				        $(editor.getDoc()).contents().find('body').focus(function(){tinymce_focus();});
			//                     	$(editor.getDoc()).contents().find('body').blur(function(){tinymce_blur();});
			// 				        // If its empty and we have a placeholder set the value
			// 				        if (cont.length === 0) {
			// 				          editor.setContent(placeholder);
			// 				          // Get updated content
			// 				          cont = placeholder;
			// 				        }
			// 				        // convert to plain text and compare strings
			// 				        is_default = (cont == placeholder);

			// 				        // nothing to do
			// 				        if (!is_default) {
			// 				          return;
			// 				        }
			// 				      })
			// 				      .on('focus', function() {
			// 				        // replace the default content on focus if the same as original placeholder
			// 				        if (is_default) {
			// 				          editor.setContent('');
			// 				        }
			// 				      })
			// 			      	  .on("blur", function() {
			// 					        console.log('ON bbbblur');
			// 				         	if (editor.getContent().length === 0) {
			// 						    	editor.setContent(placeholder);
			// 					    	}else{
			// 					    		is_default = false;
			// 					    	}
			// 				      	});
			// 		      		}

			// 		      		editor.on("blur", function() {
							        
			// 				        // $scope.update('content');
			// 			      	});
			// 				},
			//       			plugins: 'link image code',
			//       			statusbar:false,
			//       			toolbar: 'undo redo | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist indent outdent | link image '

			// 			}

			// 			$scope.tinymceModel = 'Initial content';
			      		


			      		

			//      	},
			//       	templateUrl: 'js/backoffice/agenda/partials/add.html',
			//       	parent: angular.element(document.body),
			//       	// targetEvent: ev,
			//       	preserveScope:true,
			//       	clickOutsideToClose:true,
			//       	onRemoving: function (scope,element) {
			//       		console.log('oremoving');
			//            console.log(scope);
			//           	if(touched == false){
			// 	    		console.log('false');
			//       			eventService.remove($scope.formData.id).then(function(data){
			// 					console.log('----------------------------------------------------------');
			// 					console.log(data)
			// 					$rootScope.$broadcast('eventSelfRemove',data.id);

			//         			$rootScope.stopSpin();
			// 				},function(d){
			// 					console.log('EROOR'); 
			// 				})
		 //      			}
			//         }
			//     })
			//     .finally(function() {
			//     	console.log('finally');
			//     	console.log(scope);
			   
			//     });
			// }












		},
		link:function(scope,element,attrs){
			
		}
    };

});