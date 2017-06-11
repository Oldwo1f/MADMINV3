angular.module('pai-marketplace')
  .directive('addProject', function (){

    'use strict';

    return {
      
      	scope: {
      		newProject:'=',
      	},
		replace: true,
		templateUrl: 'js/front/PAI/marketplace/addProject.html',
		controller :["Flash", "$window", "$state", "imageService", "tagService", "categoryService", "userService", "projectService", "$scope", "$rootScope", "$q", "Upload", "$sailsSocket", "$timeout", function(Flash,$window,$state,imageService,tagService,categoryService,userService,projectService, $scope, $rootScope, $q, Upload,$sailsSocket,$timeout){


			$scope.tagtooltip = "Les tags servent la visibilité<br> de votre contenus.<br> N'hésitez pas à en mettre plusieurs<br> Attention, des tag sans rapport<br> peuvents entrainer un <br>refus du contenus. <br><strong>Essayer de choisir des <br>tags existants</strong> <br> Ou utiliser la touche <strong>virgule pour créer de nouveau tag</strong>"
			$scope.cattooltip = "Les catégories servent la visibilité<br> de votre contenus.<br> Vous pouvez en mettre plusieurs,<br> mais vous ne pouvez pas en<br> créer de nouvelles."

		        // First argument (string) is the type of the flash alert.
		        // Second argument (string) is the message displays in the flash alert (HTML is ok).
		        // Third argument (number, optional) is the duration of showing the flash. 0 to not automatically hide flash (user needs to click the cross on top-right corner).
		        // Fourth argument (object, optional) is the custom class and id to be added for the flash message created. 
		        // Fifth argument (boolean, optional) is the visibility of close button for this flash.
		        // Returns the unique id of flash message that can be used to call Flash.dismiss(id); to dismiss the flash message.


			console.log($scope.newProject);
			$scope.formData= $scope.newProject;
			$scope.formData.title= '';
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
	      			projectService.remove($scope.formData.id).then(function(data){
						console.log('----------------------------------------------------------');
						$rootScope.$broadcast('projectSelfRemove',data.id);
						
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
	      			projectService.removeSyncro($scope.formData.id).then(function(data){
						console.log('----------------------------------------------------------');
						$rootScope.$broadcast('projectSelfRemove',data.id);
						
	            		// $state.go('^')

	        			$rootScope.stopSpin();
					},function(d){
						console.log('EROOR'); 
					})
      			}
			  }
			};
			$scope.formData.initialPrice = 0;
			$scope.calculatePrices= {};

			$scope.chooseprice=function(attribute){

				var iprice = $scope.formData.initialPrice;
				var partClub = 0.3;
				var tmpNumber=0;


				$scope.calculatePrices.m0 = {};
				$scope.calculatePrices.m0.sellprice = Math.round(iprice);
				$scope.calculatePrices.m0.benefvendeur =  Math.round(iprice-(iprice * partClub));

				$scope.calculatePrices.m6 = {};
				tmpNumber = iprice - (25 * iprice / 100);
				$scope.calculatePrices.m6.sellprice = Math.round(tmpNumber);
				$scope.calculatePrices.m6.benefvendeur =  Math.round(tmpNumber-(tmpNumber * partClub));

				$scope.calculatePrices.m12 = {}
				tmpNumber = iprice - (50*iprice/100);
				$scope.calculatePrices.m12.sellprice = Math.round(tmpNumber);
				$scope.calculatePrices.m12.benefvendeur =  Math.round(tmpNumber-(tmpNumber * partClub));

				$scope.calculatePrices.m18 = {}
				tmpNumber = iprice - (75*iprice/100);
				$scope.calculatePrices.m18.sellprice = Math.round(tmpNumber);
				$scope.calculatePrices.m18.benefvendeur =  Math.round(tmpNumber-(tmpNumber * partClub));

			};

			$scope.update=function(attribute){

				$rootScope.startSpin();
				var attrToUpdate = {};
				attrToUpdate[attribute] = $scope.formData[attribute];

				console.log(attrToUpdate);
				projectService.update($scope.formData.id,attrToUpdate).then(function(data){
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

				if(!$scope.formData.comfirmTarif)
				{
					var message = 'Veuillez <strong>comfirmer</strong> les conditions de ventes.';
		        	Flash.create('warning', message);
					return false
				}

				console.log('FINISH WIZZARD');

				$rootScope.startSpin();
				var attrToUpdate = {};
				attrToUpdate['nbPoints'] = $scope.formData.nbPoints;
				attrToUpdate['initialPrice'] = $scope.formData.initialPrice;
				attrToUpdate['contentType'] = $scope.formData.contentType;

				console.log(attrToUpdate);
				projectService.update($scope.formData.id,attrToUpdate).then(function(data){
					
					var collabspoints = {};
					collabspoints.score = attrToUpdate['nbPoints']
					collabspoints.contentType = attrToUpdate['contentType']
					collabspoints.contentID = $scope.formData.id
					collabspoints.contentModel = 'project'
					collabspoints.title = $scope.formData.title
					if($scope.formData.initialPrice > 0){
						collabspoints.score = 0;
						collabspoints.payment = true;
						collabspoints.initialPrice = attrToUpdate['initialPrice'];
					}


					userService.addCollabsPoints(userService.me.id,collabspoints).then(function(newcollabs){
						
						console.log(newcollabs);
						projectService.addCollabsPoints($scope.formData.id,newcollabs.child.id).then(function(data){
						

							console.log('FINISH');
							$scope.touched = true;
							$scope.finishedWizzard = true;
		        			$rootScope.stopSpin();
		        			
		        			// console.log(data);
		        			if(data){
		        				$state.go('marketplace')
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
					
			}
			// $scope.enterValidationFinish = function(ctx){

			// 	console.log('enterValidationFinish');
			// 	$scope.nbPoints = 0;
				
			// 	// if($scope.formData.content && $scope.formData.contentType=='link')
	  //  //      			$scope.nbPoints += 5;
	        		
				
        		


   //      		if($scope.formData.contentType !='sponsored'){
   //      			$scope.nbPoints += 2;
   //      			if($scope.formData.content){
		 //                var val = $scope.formData.content.split(' ')
		 //        		if(val.length <100)
		 //        			$scope.nbPoints += 1;
		 //        		else if(val.length <200)
		 //        			$scope.nbPoints += 2;
		 //        		else if(val.length <400)
		 //        			$scope.nbPoints += 3;
		 //        		else if(val.length >400)
		 //        			$scope.nbPoints += 4;
	  //       		}
	  //       		if($scope.formData.tags){
		 //        		if($scope.formData.tags.length <= 2)
		 //        			$scope.nbPoints += 1;
		 //        		else if($scope.formData.tags.length > 2)
		 //        			$scope.nbPoints += 2;
	  //       		}
			// 		if($scope.formData.categories){
		                
		 //        		if($scope.formData.categories.length >0)
		 //        			$scope.nbPoints += 1;
	  //       		}

   //      		}else if($scope.formData.contentType !='link'){
   //      			if($scope.formData.title)
			// 			$scope.nbPoints += 1;
			// 		if($scope.formData.link)
			// 			$scope.nbPoints += 3;
			// 		if($scope.formData.content){
		 //                var val = $scope.formData.content.split(' ')
		 //        		if(val.length <100)
		 //        			$scope.nbPoints += 1;
		 //        		else if(val.length <200)
		 //        			$scope.nbPoints += 2;
		 //        		else if(val.length <400)
		 //        			$scope.nbPoints += 3;
		 //        		else if(val.length >400)
		 //        			$scope.nbPoints += 4;
	  //       		}
	  //       		if($scope.formData.tags){
		 //        		if($scope.formData.tags.length <= 2)
		 //        			$scope.nbPoints += 1;
		 //        		else if($scope.formData.tags.length > 2)
		 //        			$scope.nbPoints += 2;
	  //       		}

   //      		}else if($scope.formData.contentType !='project'){
   //      			$scope.nbPoints += 10;
   //      			if($scope.formData.content ){
		 //                var val = $scope.formData.content.split(' ')
		 //        		if(val.length <100)
		 //        			$scope.nbPoints += 5;
		 //        		else if(val.length <200)
		 //        			$scope.nbPoints += 10;
		 //        		else if(val.length <400)
		 //        			$scope.nbPoints += 15;
		 //        		else if(val.length >400)
		 //        			$scope.nbPoints += 20;
	  //       		}	
			// 		if($scope.formData.tags){
		 //        		if($scope.formData.tags.length <= 2)
		 //        			$scope.nbPoints += 2;
		 //        		else if($scope.formData.tags.length > 2)
		 //        			$scope.nbPoints += 5;
	  //       		}
			// 		if($scope.formData.categories){
		 //        		if($scope.formData.categories.length >0)
		 //        			$scope.nbPoints += 2;
	  //       		}
   //      		}


			// 	return true;
				
			// }

			$scope.enterValidationContenus = function(ctx){
				
				console.log(ctx);
					return true;
				
			}
			$scope.exitValidationContenus = function(){
				
					if($scope.formData.content && $scope.formData.title && $scope.formData.documents.length && $scope.formData.tags.length)
					{
						return true;
					}else{
						var message = 'Veuillez remplir les champs requis';
		        		Flash.create('warning', message, 5000);

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
				projectService.addTag($scope.formData.id,newTag).then(function(data){
					$rootScope.$broadcast('projectSelfChangeTag',data.parent);
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
				projectService.removeTag($scope.formData.id,t).then(function(data){
					console.log(data);
					// $rootScope.$broadcast('projectSelfChangeTag',data);
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
				projectService.addCategory($scope.formData.id,newCategory).then(function(data){
					// $rootScope.$broadcast('projectSelfChangeCat',data.parent);

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
				projectService.removeCategory($scope.formData.id,category).then(function(data){
					// $rootScope.$broadcast('projectSelfChangeCat',data);
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

			

        	$scope.indexDocument=0;
        	$scope.uploadsDocument=[];

        	$scope.uploadDocument = function (files) {


        		console.log('uploadDocument');
		        if (files && files.length) {
		            for (var i = 0; i < files.length; i++) {
		                var file = files[i];
		                $scope.uploadsDocument[$scope.indexDocument]={};
		                $scope.uploadsDocument[$scope.indexDocument].file=file;
		                $scope.uploadsDocument[$scope.indexDocument].status='start';
		                $scope.uploadsDocument[$scope.indexDocument].text='0%';
		                $scope.indexDocument++;
		            }
		            for (var i = 0; i < $scope.uploadsDocument.length; i++) {
		            	console.log('uploadDocument2');
		                if( $scope.uploadsDocument[i].status=='start'){
		                	
		                    $scope.uploadsDocument[i].status='progress';
		                    (function(i){
		                    	console.log('uploadDocument3');
			                    Upload.upload({
			                        url: '/api/project/'+$scope.formData.id+'/documents',
			                        data: {files : $scope.uploadsDocument[i].file,filename:'tt',name:'t'}
			                    }).then(function (data) {
			                        $scope.formData.documents = data.data.parent.documents
			                        console.log(data);
			                        // $rootScope.$broadcast('projectSelfChange',data.data.parent);
			                        // $rootScope.$broadcast('projectSelfChangeDoc',data.data.parent);
			                        // $rootScope.$broadcast('projectSelfChange',data.parent);
			                        $scope.uploadsDocument[i].text='Envoi terminé';
									// $scope.touched = true;

			                        (function(i){

	                                    $timeout(function () {
	                                        $scope.uploadsDocument[i].status = 'success';
	                                    },3000)
	                                })(i)
			                    },function (evt) {
			                        //HANDLE ERROR
			                    },function (evt) {
	                                $scope.uploadsDocument[i].progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
	                                $scope.uploadsDocument[i].text = $scope.uploadsDocument[i].progressPercentage+'%'
			                    });
		                    })(i)
		                }
		            };
		        }
		    };

			$scope.removeDocument=function(doc){
				$rootScope.startSpin();
				projectService.removeDocument($scope.formData.id,doc).then(function(data){
					var index = _.findIndex($scope.formData.documents, function(o) { return o.id == doc; });
					if( index !== -1) {
						$scope.formData.documents.splice(index, 1);
					}
					$rootScope.$broadcast('projectSelfChangeDoc',data);
					//  else {
					// 	$scope.formData.tags.push(tag_with_id);
					// }
					$rootScope.stopSpin();
				},function(d){
					console.log('EROOR');
				})
			}

			
		}],
		link:function(scope,element,attrs){

			console.log('LINKKKKKKKKKKKK add project');
		
			
		}
    };

});
