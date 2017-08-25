angular.module('pai-agenda')
  .directive('addEvent', function (){

    'use strict';

    return {
      
      	scope: {
      		newEvent:'=',
      	},
		replace: true,
		templateUrl: 'js/front/PAI/agenda/partials/add.html',
		controller :function(Flash,$window,$state,imageService,tagService,categoryService,userService,eventService, $scope, $rootScope, $q, Upload,$sailsSocket,$timeout){


			$scope.tagtooltip = "Les tags servent la visibilité<br> de votre contenus.<br> N'hésitez pas à en mettre plusieurs<br> Attention, des tag sans rapport<br> peuvents entrainer un <br>refus du contenus. <br><strong>Essayer de choisir des <br>tags existants</strong> <br> Ou utiliser la touche <strong>virgule pour créer de nouveau tag</strong>"
			$scope.cattooltip = "Les catégories servent la visibilité<br> de votre contenus.<br> Vous pouvez en mettre plusieurs,<br> mais vous ne pouvez pas en<br> créer de nouvelles."

		        // First argument (string) is the type of the flash alert.
		        // Second argument (string) is the message displays in the flash alert (HTML is ok).
		        // Third argument (number, optional) is the duration of showing the flash. 0 to not automatically hide flash (user needs to click the cross on top-right corner).
		        // Fourth argument (object, optional) is the custom class and id to be added for the flash message created. 
		        // Fifth argument (boolean, optional) is the visibility of close button for this flash.
		        // Returns the unique id of flash message that can be used to call Flash.dismiss(id); to dismiss the flash message.


			console.log($scope.newEvent);
			$scope.formData= $scope.newEvent;
			$scope.formData.title= '';
			$scope.formData.startsAt = new Date();
			$scope.formData.endsAt = new Date();
			console.log(this);
			console.log($scope.formData);
			console.log($scope);
			$scope.touched = false;
			// $scope.formData = {};
			// $scope.formData.content = 'tottot too to ot o';
			$rootScope.$on('$stateChangeStart',function (e,toState,toParams,fromState,fromParams){


      			console.log('STATE CHANGE START');
      			console.log($scope.touched);
      			console.log($scope.formData.id);
      			if($scope.touched == false){
	      			eventService.remove($scope.formData.id).then(function(data){
						console.log('-------------------------------REMOVE FAKe INGREDIENT---------------------------');
						$rootScope.$broadcast('eventSelfRemove',data.id);
						
	            		// $state.go('^')

	        			$rootScope.stopSpin();
					},function(d){
						console.log('EROOR'); 
					})
      			}
		          

		   	});

		  	window.onbeforeunload = function (e) {
				console.log('HEYHEYHEY HOOOOOOOOOOOOOOOOOO');
				console.log($scope.formData.title);

			  if(1 == 2){
				  	var e = e || window.event;

				  // For IE and Firefox
				  if (e) {
				    e.returnValue = 'Any string1';
				  }

			  // For Safari
			  	return 'Any string';
			  }
			  else{
			  	if($scope.touched == false){
	      			eventService.removeSyncro($scope.formData.id).then(function(data){
						console.log('----------------------------------------------------------');
						$rootScope.$broadcast('eventSelfRemove',data.id);
						
	            		// $state.go('^')

	        			$rootScope.stopSpin();
					},function(d){
						console.log('EROOR'); 
					})
      			}
			  }
			};







			$scope.t = {};
			$scope.fab = {};
			
			$scope.eventId = '';
			
   			

			$scope.update=function(attribute){

				$rootScope.startSpin();
				var attrToUpdate = {};
				attrToUpdate[attribute] = $scope.formData[attribute];

				console.log(attrToUpdate);
				eventService.update($scope.formData.id,attrToUpdate).then(function(data){
					console.log('----------------------------------------------------------');
					console.log(data);
					console.log($scope.$parent);
					// $scope.touched = true;

        			$rootScope.stopSpin();
				},function(d){
					console.log('EROOR');
				})
			}

			$scope.exitValidationContenttype = function(){
				if($scope.formData.contentType)
				{
					return true;
				}else{
					var message = 'Veuillez choisir un type de contenus';
		        	Flash.create('warning', message, 5000);
					return false;
				}
			}
			$scope.finishedWizardAddContent = function(){

				

				console.log('FINISH WIZZARD');

				$rootScope.startSpin();
				var attrToUpdate = {};
				attrToUpdate['nbPoints'] = $scope.nbPoints;
				// attrToUpdate['initialPrice'] = $scope.formData.initialPrice;
				// attrToUpdate['contentType'] = $scope.formData.contentType;

				console.log(attrToUpdate);
				eventService.update($scope.formData.id,attrToUpdate).then(function(data){
					
					console.log('ici');
					var collabspoints = {};
					collabspoints.score = attrToUpdate['nbPoints']
					collabspoints.contentID = $scope.formData.id
					collabspoints.contentType = 'event'
					collabspoints.contentModel = 'event'
					collabspoints.title = $scope.formData.title
					
					userService.addCollabsPoints(userService.me.id,collabspoints).then(function(newcollabs){

						console.log('collabs ADDED to user');
						
						console.log(newcollabs);
						eventService.addCollabsPoints($scope.formData.id,newcollabs.child.id).then(function(data){
						

							console.log('FINISH');
							$scope.touched = true;
							$scope.finishedWizzard = true;
		        			$rootScope.stopSpin();
		        			
		        			console.log(data);
		        			if(data){
		        				$state.go('agenda')

		        				console.log(this);

		        			// 	$scope.successMessage=true;
		        				var message = '<strong>Votre contenus à été posté!</strong> Vous aurez des nouvelles de sa validation dans vos email d\'ici quelques jours.';
		        				Flash.create('success', message);
		        			}else{
		        				var message = '<strong>Une erreur est survenu!</strong> Veuillez reessayer plus tard. Si le problème persiste contactez nous.';
		        				Flash.create('danger', message);
		        			}
							return true;
						})
					}) 


  
 
					
				},function(d){
					console.log('EROOR');
				})
			}
			$scope.nbPoints = 0;
			$scope.exitValidationFinish = function(ctx){

				console.log('exitValidationFinish');
				return true
					
			}
			$scope.enterValidationFinish = function(ctx){

				console.log('enterValidationFinish');
				$scope.nbPoints = 0;
				

        		$scope.nbPoints += 0;
        			if($scope.formData.content){
		                var val = $scope.formData.content.split(' ')
		        		if(val.length <50)
		        			$scope.nbPoints += 1;
		        		else if(val.length <100)
		        			$scope.nbPoints += 2;
		        		else if(val.length <200)
		        			$scope.nbPoints += 3;
		        		else if(val.length >300)
		        			$scope.nbPoints += 4;
	        		}
	        		if($scope.formData.tags){
		        		if($scope.formData.tags.length <= 2)
		        			$scope.nbPoints += 1;
		        		else if($scope.formData.tags.length > 2)
		        			$scope.nbPoints += 2;
	        		}
					if($scope.formData.categories){
		                
		        		if($scope.formData.categories.length >0)
		        			$scope.nbPoints += 1;
	        		}
					// if($scope.formData.images){
		                
		   //      		if($scope.formData.images.length >0)
		   //      			$scope.nbPoints += 2;
	    //     		}

        		


				return true;
				
			}

			$scope.enterValidationContenus = function(ctx){
				
				console.log(ctx);
					return true;
				
			}
			$scope.exitValidationContenus = function(){
				
					if($scope.formData.content && $scope.formData.title && $scope.formData.tags.length)
					{
						return true;
					}else{
						var message = 'Veuillez remplir les champs requis';
		        		Flash.create('warning', message, 5000);
		        		$window.scrollTo(0, 0);
						return false
					}
			}


			$scope.autocompleteTag =function(query) {
		    	console.log('autocompleteTag');
		    	return tagService.searchTags(query)
		    }
		    $scope.autocompleteCategories =function(query) {
		    	if(query.length <= 2 ){
		    		
		    		return categoryService.fetchAll()
		    	}else{

		    		return categoryService.searchCategories(query)
		    	}
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
					// $scope.touched = true;

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
					// $rootScope.$broadcast('eventSelfChangeTag',data);
					$rootScope.stopSpin();
				},function(d){
					console.log('EROOR');
				})
			}
			$scope.addCategory=function(newCategory){
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
					// $rootScope.$broadcast('eventSelfChangeCat',data.parent);

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
					// $scope.touched = true;

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
					// $rootScope.$broadcast('eventSelfChangeCat',data);
					$rootScope.stopSpin();
				},function(d){
					console.log('EROOR');
				})
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
      			content_css : '/styles/front/PAI/tinymce.css' ,
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
      			menubar:false,
      			toolbar: 'undo redo | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist indent outdent  '

			}

			

        	

			
		},
		link:function(scope,element,attrs){

			console.log('LINKKKKKKKKKKKK add event');
		
			
		}
    };

});
