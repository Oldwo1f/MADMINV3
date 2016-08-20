angular.module('momi-projects')
.directive('addProject', function(){

    'use strict';

    return {
      	scope: {
      		newProject:'=',
      	},
      	replace: true,
      	templateUrl: 'js/backoffice/project/partials/addProject.html',
      	controller:function($mdDialog,$state,$timeout,$scope,userService,$rootScope,projectService,$mdToast,imageService,documentService, tagService, categoryService, $q, Upload,$sailsSocket){

      		$scope.touched = false;
      		console.log($state);
      		console.log($state.current.name);
      		if($state.current.name == 'projects.edit'){
      			$scope.touched = true;
      		}
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
      		$scope.returnParentState=function(){
				$state.go('^')
			}
			$scope.returnPreviousState=function(){
				if($rootScope.previousState){
					$state.go($rootScope.previousState.name, $rootScope.previousStateParams)
				}else{
					$state.go('^')
				}
			}
			$scope.returnDashboardState=function(){
				$state.go('dashboard')
			}
      		
			$scope.selectedItem = null;
    		$scope.searchText = null;
    		
      		$scope.NewImage='';

      		console.log($scope.newProject);
			$scope.formData=$scope.newProject;
			if($state.current.name != 'projects.edit'){
      			// $scope.touched = true;
				$rootScope.$broadcast('projectSelfAdd',$scope.newProject);
      		}

			$sailsSocket.subscribe('project',function(data){
			        console.log('ON ARTICLE2');
			        console.log(data);
			        if(data.id == $scope.newProject.id)
			        {
			        	console.log('cool');
			        	if(data.verb =='created'){
			        	// _.find($scope.projectsList,function(o) { return o.age < 40; });
			        	// var index = _.findIndex($scope.projectsList, function(o) { return o.id == data.id; });
						// if( index !== -1) {
							console.log('created');
							// console.log($scope.projectsList[index]);
							// _.merge($scope.formData, data.data)

						}else
						if(data.verb =='updated'){
			        	// _.find($scope.projectsList,function(o) { return o.age < 40; });
			        	// var index = _.findIndex($scope.projectsList, function(o) { return o.id == data.id; });
						// if( index !== -1) {
							console.log('MERGE');
							// console.log($scope.projectsList[index]);
							_.merge($scope.formData, data.data)

						}else
						if(data.verb =='destroyed'){
			        	$state.go('^')

						}else
						if(data.verb =='addedTo'){
							console.log('addedTO');
							if(data.attribute == 'tags'){

								console.log('TAGS');
								console.log(data.addedId);
								tagService.fetchOne(data.addedId).then(function(tag){
									console.log(tag);
									$scope.formData.tags.push(tag)

								},function(d){
									console.log('EROOR');
								})
							}else
							if(data.attribute == 'categories'){

								console.log('categories');
								console.log(data.addedId);
								categoryService.fetchOne(data.addedId).then(function(cat){
									console.log(cat);
									$scope.formData.categories.push(cat)

								},function(d){
									console.log('EROOR');
								})
							}
							if(data.attribute == 'images'){

								console.log('images');
								console.log(data.addedId);
								imageService.fetchOne(data.addedId).then(function(cat){
									console.log(cat);
									$scope.formData.images.push(cat)

								},function(d){
									console.log('EROOR');
								})
							}
							if(data.attribute == 'documents'){

								console.log('documents');
								console.log(data.addedId);
								documentService.fetchOne(data.addedId).then(function(cat){
									console.log(cat);
									$scope.formData.documents.push(cat)

								},function(d){
									console.log('EROOR');
								})
							}
							if(data.attribute == 'authors'){

								console.log('authors');
								console.log(data.addedId);
								userService.fetchOne(data.addedId).then(function(user){
									console.log(user);
									$scope.formData.authors.push(user)

								},function(d){
									console.log('EROOR');
								})
							}

						}else
						if(data.verb =='removedFrom'){
							console.log('removeFrom');
							if(data.attribute == 'tags'){
								var index = _.findIndex($scope.formData.tags, function(o) { return o.id == data.removedId; });
								if( index !== -1) {
									$scope.formData.tags.splice(index,1)
								}
							}
							if(data.attribute == 'categories'){
								var index = _.findIndex($scope.formData.categories, function(o) { return o.id == data.removedId; });
								if( index !== -1) {
									$scope.formData.categories.splice(index,1)
								}
							}
							if(data.attribute == 'images'){
								var index = _.findIndex($scope.formData.images, function(o) { return o.id == data.removedId; });
								if( index !== -1) {
									$scope.formData.images.splice(index,1)
								}
							}
							if(data.attribute == 'documents'){
								var index = _.findIndex($scope.formData.documents, function(o) { return o.id == data.removedId; });
								if( index !== -1) {
									$scope.formData.documents.splice(index,1)
								}
							}
							if(data.attribute == 'authors'){
								var index = _.findIndex($scope.formData.authors, function(o) { return o.id == data.removedId; });
								if( index !== -1) {
									$scope.formData.authors.splice(index,1)
								}
							}
							// if(data.attribute == 'comments'){
							// 	var index = _.findIndex($scope.formData.comments, function(o) { return o.id == data.removedId; });
							// 	if( index !== -1) {
							// 		$scope.formData.comments.splice(index,1)
							// 	}
							// }

						}
			        }else{
			        	console.log('PAS bon ID');
			        }
			   //      if(data.verb =='created'){

			   //      	$scope.projectsList.unshift(data.data)
			        	
			   //      }else
			   //      if(data.verb =='updated'){
			   //      	// _.find($scope.projectsList,function(o) { return o.age < 40; });
			   //      	var index = _.findIndex($scope.projectsList, function(o) { return o.id == data.id; });
						// if( index !== -1) {
							
						// 	console.log($scope.projectsList[index]);
						// 	_.merge($scope.projectsList[index], data.data)

						// }
			   //      }
			    })
			$sailsSocket.subscribe('category',function(data){
			        console.log('ON category');
			        console.log(data);
			        
			        if(data.verb =='updated'){

			        	console.log('updated');
			        	console.log(data.id);
			        	// console.log($scope.projectsList);

			        	
	        			var index = _.findIndex($scope.formData.categories, function(o) { return o.id == data.id; });
						if( index !== -1) {
							console.log(data.data);
							// $scope.projectsList[i].categories.splice(index,1,data.data)
							_.merge($scope.formData.categories[index], data.data)
						}
			        	
			        	// _.find($scope.projectsList,function(o) { return o.age < 40; });
			   //      	var index = _.findIndex($scope.projectsList, function(o) { return o.id == data.id; });
						// if( index !== -1) {
							
						// 	console.log($scope.projectsList[index]);
						// 	_.merge($scope.projectsList[index], data.data)
						// 	console.log(data.id);
						// 	// $scope.$broadcast('ellipsContent-'+data.id);
						// }
			        }
			       
			})
			$sailsSocket.subscribe('comment',function(data){
			        console.log('ON comment');
			        console.log(data);
			        
			        if(data.verb =='addedTo' && data.attribute=="responses"){

			        	console.log('updated');
			        	console.log(data.id);
			        	// console.log($scope.projectsList);
	        			var index = _.findIndex($scope.formData.comments, function(o) { return o.id == data.id; });
						if( index !== -1) {
							projectService.fetchOneComment(data.addedId).then(function(data){
								console.log(data);
								$scope.formData.comments[index].responses.push(data)
								
							})
							// console.log(data.data);
						}
			        }
			        if(data.verb =='updated'){

			        	console.log('updated');
			        	console.log(data.id);
			        	// console.log($scope.projectsList);
	        			var index = _.findIndex($scope.formData.comments, function(o) { return o.id == data.id; });
						if( index !== -1) {
							console.log(data.data);
							// $scope.projectsList[i].categories.splice(index,1,data.data)
							_.merge($scope.formData.comments[index], data.data)
						}else{
							var returnedCom ; 
							_.map($scope.formData.comments,function(com){
								var index2 = _.findIndex(com.responses, function(o) { return o.id == data.id; });
								if( index2 !== -1){
									console.log(data);
									_.merge(com.responses[index2], data.data)
									returnedCom = com;
									return true
									
								}else{
									return false
								}

							})
							console.log(returnedCom);

							var index3 = _.findIndex($scope.formData.comments, function(o) { return o.id == returnedCom.id; });
							$scope.formData.comments[index3] = returnedCom
						}
			        }
			        if(data.verb =='destroyed'){

			        	console.log('destroyed');

			        	console.log(data.id);
			        	// console.log($scope.projectsList);
	        			var index = _.findIndex($scope.formData.comments, function(o) { return o.id == data.id; });
						if( index !== -1) {
							console.log(data.data);
							// $scope.projectsList[i].categories.splice(index,1,data.data)
							$scope.formData.comments.splice(index, 1)
						}else{
							var returnedCom ; 
							_.map($scope.formData.comments,function(com){
								var index2 = _.findIndex(com.responses, function(o) { return o.id == data.id; });
								if( index2 !== -1){
									console.log(data);
									com.responses.splice(index2, 1)
									returnedCom = com;
									return true
									
								}else{
									return false
								}

							})
							console.log(returnedCom);

							var index3 = _.findIndex($scope.formData.comments, function(o) { return o.id == returnedCom.id; });
							$scope.formData.comments[index3] = returnedCom
						}
			        }
			       
			})

			$scope.closeDatePicker=function(t,tt){
				$('.open').removeClass('open')
			}
			$scope.update=function(attribute){

				$rootScope.startSpin();
				var attrToUpdate = {};
				attrToUpdate[attribute] = $scope.formData[attribute];
				projectService.update($scope.formData.id,attrToUpdate).then(function(data){
					console.log('----------------------------------------------------------');
					console.log(data);
					console.log($scope.$parent);
					$scope.touched = true;
					$rootScope.$broadcast('projectSelfChange',data);

        			$rootScope.stopSpin();
				},function(d){
					console.log('EROOR');
				})
			}
			$scope.updateComment=function(id,attribute,value){
				console.log(id);
				$rootScope.startSpin();
				var attrToUpdate = {};
				attrToUpdate[attribute] = value;
				projectService.updateComment(id,attrToUpdate).then(function(data){
					console.log('----------------------------------------------------------');
					console.log(data);
					// console.log($scope.$parent);
					// $rootScope.$broadcast('userSelfChange',data);

        			$rootScope.stopSpin();
				},function(d){
					console.log('EROOR');
				})
			}
			$scope.AddReponse=function(id,tmpRep){

				console.log(id);
				$rootScope.startSpin();
				var attrToUpdate = {};
				attrToUpdate.content = tmpRep;
				console.log(tmpRep);
				attrToUpdate.authorName = userService.me.firstname+ ' ' + userService.me.name;
				attrToUpdate.email = userService.me.email;
				attrToUpdate.admin = true;
				attrToUpdate.status = 'actif';
				// console.log(userService.me.images[0].filename);
				if(userService.me.images.length){
					attrToUpdate.imgpath = userService.me.images[0].filename;
				}
				projectService.addReponse(id,attrToUpdate).then(function(data){
					console.log('----------------------------------------------------------');
					console.log(data);

					var index = _.findIndex($scope.formData.comments, function(o) { return o.id == data.parent.id; });
					if( index !== -1) {
						// var index2 = _.findIndex($scope.formData.comments[index], function(o) { return o.id == data.parent.id; });
							$scope.formData.comments[index].responses.push(data.child)
							$scope.formData.comments[index].tmpRep = '';

					}
					// console.log($scope.$parent);
					// $rootScope.$broadcast('userSelfChange',data);

        			$rootScope.stopSpin();
				},function(d){
					console.log('EROOR');
				})
			}
			$scope.deleteComment=function(id){
				console.log(id);
				$rootScope.startSpin();
				var attrToUpdate = {};
				projectService.deleteComment(id).then(function(data){
					console.log('----------------------------------------------------------');
					console.log(data);
					var index = _.findIndex($scope.formData.comments, function(o) { return o.id == id; });
					if( index !== -1) {
						$scope.formData.comments.splice(index, 1);
					}else{
							var returnedCom ; 
							_.map($scope.formData.comments,function(com){
								var index2 = _.findIndex(com.responses, function(o) { return o.id == data.id; });
								if( index2 !== -1){
									console.log(data);
									com.responses.splice(index2, 1)
									returnedCom = com;
									return true
									
								}else{
									return false
								}

							})
							console.log(returnedCom);

							var index3 = _.findIndex($scope.formData.comments, function(o) { return o.id == returnedCom.id; });
							$scope.formData.comments[index3] = returnedCom
					}
					// $rootScope.$broadcast('projectSelfChangeDoc',data);
					//  else {
					// 	$scope.formData.tags.push(tag_with_id);
					// }

        			$rootScope.stopSpin();
				},function(d){
					console.log('EROOR');
				})
			}	
			$scope.removeThis=function(id){
				$rootScope.startSpin();
				// var attrToUpdate = {};
				// attrToUpdate[attribute] = $scope.formData[attribute];
				projectService.remove($scope.formData.id).then(function(data){
					console.log('----------------------------------------------------------');
					console.log(data);
					console.log(id);
					$rootScope.$broadcast('projectSelfRemove',id);
					
            		$state.go('^')

				// 	console.log(data);
				// 	console.log($scope.$parent);
				// 	$rootScope.$broadcast('projectSelfChange',data);

        			$rootScope.stopSpin();
				},function(d){
					console.log('EROOR');
				})
			}

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
				projectService.addTag($scope.formData.id,newTag).then(function(data){
					$rootScope.$broadcast('projectSelfChangeTag',data.parent);
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
				projectService.removeTag($scope.formData.id,t).then(function(data){
					console.log(data);
					$rootScope.$broadcast('projectSelfChangeTag',data);
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
					$rootScope.$broadcast('projectSelfChangeCat',data.parent);

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
				projectService.removeCategory($scope.formData.id,category).then(function(data){
					$rootScope.$broadcast('projectSelfChangeCat',data);
					$rootScope.stopSpin();
				},function(d){
					console.log('EROOR');
				})
			}	

			$scope.addAuthor=function(newAuthor){
				var name = newAuthor.name;
				$rootScope.startSpin();
				if(!newAuthor.id)
				{
					newAuthor={};
					newAuthor.name = name;
					newAuthor.color = 'darkgrey';
					newAuthor.textColor = 'white';
				}
				// console.log(newAuthor);
				projectService.addAuthor($scope.formData.id,newAuthor).then(function(data){
					$rootScope.$broadcast('projectSelfChangeAuthorAdd',data);
					// data = data.data;
					// console.log('ttttttttttttttttttttttttttttttttttttttttt');
					// console.log(data);
					// var tag_with_id =data.child;
					// var index = _.findIndex($scope.formData.authors, function(o) { return o.name == name || o.text == name; });
					
					// // console.log('index='+index);
					// if( index != -1) {
					// 	// console.log('index different -1');
					// 	$scope.formData.authors.splice(index, 1, tag_with_id);
					// } else {
					// 	// console.log('---------------------------------------------------------');
					// 	// console.log(tag_with_id);
					// 	$scope.formData.authors.push(tag_with_id);


					// }
					$scope.touched = true;

					$rootScope.stopSpin();
						
				},function(d){
					console.log('EROOR');
				})
			}	
			function transformAuthor(newAuthor){

				console.log('transformAuthor');
				if (newAuthor.id){
					return newAuthor
				}else{
					return {
				    	name: newAuthor,
					};
				}
			}	

			$scope.removeAuthor=function(author){
				$rootScope.startSpin();
				projectService.removeAuthor($scope.formData.id,author).then(function(data){
					$rootScope.$broadcast('projectSelfChangeAuthorRemove',data);
					$rootScope.stopSpin();
				},function(d){
					console.log('EROOR');
				})
			}	

			$scope.changeVideoHost = function(host){
				console.log('changeVideoHost  '+ host);
				$scope.formData.videoHost = host;
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
      		


        	$scope.indexDocument=0;
        	$scope.uploadsDocument=[];

        	$scope.uploadDocument = function (files) {
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
		                if( $scope.uploadsDocument[i].status=='start'){
		                	
		                    $scope.uploadsDocument[i].status='progress';
		                    (function(i){
			                    Upload.upload({
			                        url: '/api/project/'+$scope.formData.id+'/documents',
			                        data: {files : $scope.uploadsDocument[i].file,filename:'tt',name:'t'}
			                    }).then(function (data) {
			                        // $scope.formData.documents = data.data.parent.documents
			                        console.log(data);
			                        // $rootScope.$broadcast('projectSelfChange',data.data.parent);
			                        $rootScope.$broadcast('projectSelfChangeDoc',data.data.parent);
			                        // $rootScope.$broadcast('projectSelfChange',data.parent);
			                        $scope.uploadsDocument[i].text='Envoi terminé';
									$scope.touched = true;

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
			$scope.removeImg=function(img){
				$rootScope.startSpin();
				projectService.removeImage($scope.formData.id,img).then(function(data){
					var index = _.findIndex($scope.formData.images, function(o) { return o.id == img; });
					if( index !== -1) {
						$scope.formData.images.splice(index, 1);
					}
					//  else {
					// 	$scope.formData.tags.push(tag_with_id);
					// }
					$rootScope.$broadcast('projectSelfChangeImg',data);
					$rootScope.stopSpin();
				},function(d){
					console.log('EROOR');
				})
			}

        	$scope.indexImage=0;
        	$scope.uploadingImages=[];

        	$scope.resizeOnly=function(){
        		$rootScope.startSpin();
				$scope.dataToSend = {};
		        $scope.dataToSend.displayHeight = $scope.imgcrop.displayHeight;
		        $scope.dataToSend.displayWidth = $scope.imgcrop.displayWidth;
		        $scope.dataToSend.scaledWidth = $scope.imgcrop.scaledWidth;
		        $scope.dataToSend.scaledHeight = $scope.imgcrop.scaledHeight;
		        $scope.dataToSend.scaledTop = $scope.imgcrop.scaledTop;
		        $scope.dataToSend.scaledLeft = $scope.imgcrop.scaledLeft;
		        $scope.dataToSend.aspectRatio = $scope.imgcrop.aspectRatio;
		        $scope.dataToSend.landscape = $scope.imgcrop.landscape;
		        $scope.dataToSend.containerWidth = $scope.imgcrop.containerWidth;
		        $scope.dataToSend.containerHeight = $scope.imgcrop.containerHeight;
		        $scope.dataToSend.filename= $scope.imgcrop.filename;
		        $scope.dataToSend.normalWidth= 800;
            	$scope.dataToSend.normalHeight= 450;
            	if(!$scope.imgcrop.landscape){
            		$scope.dataToSend.normalWidth= 300;
            		$scope.dataToSend.normalHeight= 400;
            	}
				$('#imageCropSource').hide();

		        $scope.imgcrop.imgEditId = 0;
            	$scope.imgcrop.displayHeight = 0;
				$scope.imgcrop.displayWidth = 0;
				$scope.imgcrop.scaledWidth = 0;
				$scope.imgcrop.scaledHeight = 0;
				$scope.imgcrop.scaledTop = 0;
				$scope.imgcrop.scaledLeft = 0;
				$scope.imgcrop.containerWidth = 0;
				$scope.imgcrop.containerHeight = 0;
				$scope.imgcrop.aspectRatio = '16/9';
				$scope.imgcrop.imgSrc = "";

		        $sailsSocket.post('/api/image/resize/',$scope.dataToSend).success(function (data,status) {
		            console.log('SUCCESS RESIZE');
		            $rootScope.stopSpin();
		            
		        }).error(function (data,status) {
		            console.log(data);
		            console.log('errOR');
		        })
	        }

        	$scope.uploadImage = function () {

        		console.log($scope.imgcrop);
        		console.log('UPLOAD IMAGE');
		        $scope.dataToSend = {};
		        $scope.fileToSend = $scope.imgcrop.file; 
		        $scope.dataToSend.file = $scope.imgcrop.file; 
		        $scope.dataToSend.displayHeight = $scope.imgcrop.displayHeight;
		        $scope.dataToSend.displayWidth = $scope.imgcrop.displayWidth;
		        $scope.dataToSend.scaledWidth = $scope.imgcrop.scaledWidth;
		        $scope.dataToSend.scaledHeight = $scope.imgcrop.scaledHeight;
		        $scope.dataToSend.scaledTop = $scope.imgcrop.scaledTop;
		        $scope.dataToSend.scaledLeft = $scope.imgcrop.scaledLeft;
		        $scope.dataToSend.aspectRatio = $scope.imgcrop.aspectRatio;
		        $scope.dataToSend.landscape = $scope.imgcrop.landscape;
		        $scope.dataToSend.containerWidth = $scope.imgcrop.containerWidth;
		        $scope.dataToSend.containerHeight = $scope.imgcrop.containerHeight;
		        $scope.uploadingImages[$scope.indexImage] = {};
		        $scope.uploadingImages[$scope.indexImage].status = 'start';
		        $scope.uploadingImages[$scope.indexImage].text='0%';
		        $scope.uploadingImages[$scope.indexImage].file=$scope.imgcrop.file;

		        $scope.dataToSend.normalWidth= 800;
            	$scope.dataToSend.normalHeight= 450;
            	if(!$scope.imgcrop.landscape){
            		$scope.dataToSend.normalWidth= 300;
            		$scope.dataToSend.normalHeight= 400;
            	}

                $scope.uploadingImages[$scope.indexImage].status='progress';
                (function(indexImage){
                	$scope.imgcrop.imgEditId = 0;
                	$scope.imgcrop.displayHeight = 0;
					$scope.imgcrop.displayWidth = 0;
					$scope.imgcrop.scaledWidth = 0;
					$scope.imgcrop.scaledHeight = 0;
					$scope.imgcrop.scaledTop = 0;
					$scope.imgcrop.scaledLeft = 0;
					$scope.imgcrop.containerWidth = 0;
					$scope.imgcrop.containerHeight = 0;
					$scope.imgcrop.aspectRatio = '16/9';
					$scope.imgcrop.imgSrc = "";
					$('#imageCropSource').hide();

                    Upload.upload({
                        url: '/api/project/'+$scope.formData.id+'/images',
                        data: {file :$scope.fileToSend}
                        	// 'displayWidth':$scope.dataToSend.displayWidth,
                        	// 'scaledWidth':$scope.dataToSend.scaledWidth,
                        	// 'scaledHeight':$scope.dataToSend.scaledHeight,
                        	// 'scaledTop':$scope.dataToSend.scaledTop,
                        	// 'scaledLeft':$scope.dataToSend.scaledLeft,
                        	// 'aspectRatio':$scope.dataToSend.aspectRatio,
                        	// 'landscape':$scope.dataToSend.landscape,
                        
                    }).then(function (data) {
                    	console.log(data);
                    	console.log(data.data.child);
                    	$rootScope.$broadcast('projectSelfChangeImg',data.data.parent);
                    	// $scope.formData.images.push(data.data.child)
                    	$scope.dataToSend.imgid= data.data.child.id;
                    	$scope.dataToSend.filename= data.data.child.filename;
                    	$rootScope.startSpin();
      					$sailsSocket.post('/api/image/resize/',$scope.dataToSend).success(function (data,status) {
				            console.log('SUCCESS RESIZE');
				            $rootScope.stopSpin();
				          
				        }).error(function (data,status) {
				            console.log(data);
				            console.log('errOR');
				        })


                        $scope.uploadingImages[indexImage].text='Envoi terminé';
						$scope.touched = true;

                        (function(indexImage){

                            $timeout(function () {
                                $scope.uploadingImages[indexImage].status = 'success';
                            },3000)
                        })(indexImage)
                    },function (evt) {
                        //HANDLE ERROR
                    },function (evt) {
                        $scope.uploadingImages[indexImage].progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                        $scope.uploadingImages[indexImage].text = $scope.uploadingImages[indexImage].progressPercentage+'%'
                    });
                })($scope.indexImage)
		        $scope.indexImage++;
		    };
		    $scope.changeOrientation=function(){
		    	if($scope.imgcrop.landscape)
		    	{
		    		$scope.imgcrop.landscape = false;
		    		$scope.imgcrop.aspectRatio = $scope.imgcrop.aspectRatioPortrait
		    	}else{
		    		$scope.imgcrop.landscape = true;
		    		$scope.imgcrop.aspectRatio = $scope.imgcrop.aspectRatioPaysage
		    	}
		    }
		    $scope.resizeagain=function(img){
		    	console.log(img);

		    	$scope.imgcrop.imgSrc = 'image/originalSize/'+img.filename;
		    	$scope.imgcrop.imgEditId = img.id;
		    	$scope.imgcrop.filename = img.filename;
				
		    }
		    $scope.imgcrop = {};
		    $scope.imgcrop.imgEditId = 0;
			$scope.imgcrop.displayHeight = 0;
			$scope.imgcrop.displayWidth = 0;
			$scope.imgcrop.scaledWidth = 0;
			$scope.imgcrop.scaledHeight = 0;
			$scope.imgcrop.scaledTop = 0;
			$scope.imgcrop.scaledLeft = 0;
			$scope.imgcrop.containerWidth = 0;
			$scope.imgcrop.containerHeight = 0;
			$scope.imgcrop.aspectRatio = '16/9';
			$scope.imgcrop.imgSrc = "";
			$scope.imgcrop.aspectRatioPaysage = '16/9';
			$scope.imgcrop.aspectRatioPortrait = '3/4';

			
			$scope.addImgCrop=function($files){
				console.log('uploadFiles');
				console.log($files);
				// $scope.imgcrop = {};
				$scope.imgcrop.imgEditId = 0;
				$scope.imgcrop.displayHeight = 0;
				$scope.imgcrop.displayWidth = 0;
				$scope.imgcrop.scaledWidth = 0;
				$scope.imgcrop.scaledHeight = 0;
				$scope.imgcrop.scaledTop = 0;
				$scope.imgcrop.containerWidth = 0;
				$scope.imgcrop.containerHeight = 0;
				$scope.imgcrop.scaledLeft = 0;
				$scope.imgcrop.imgSrc = '';
				$('#imageCropSelector').css({'display':'none'})
					
				// $files[0].$ngfBlobUrl;

				if(typeof($files[0])== 'object'){
					$scope.imgcrop.imgSrc = $files[0].$ngfBlobUrl;
					$('#imageCropSource').show();

					$scope.imgcrop.file = $files[0];
					$scope.$applyAsync();
				    if($files[0].$ngfWidth < $files[0].$ngfHeight)
	            	{
	            		$scope.imgcrop.aspectRatio = $scope.imgcrop.aspectRatioPortrait;
	            		$scope.imgcrop.landscape = false;
	            	}else{
	            		$scope.imgcrop.aspectRatio = $scope.imgcrop.aspectRatioPaysage;
	            		$scope.imgcrop.landscape = true;
	            	}
				}

			};
			// $scope.uploadDocument=function($files){
			// 	console.log('fileDrop');
			// 	console.log($files);



			// };
			$scope.removeImgCrop = function(){
				console.log('CANCEL IMAGE');
				setTimeout(function(){
					// $('#imageCropSource').attr('src','');
					$('#imageCropSource').hide();
					$scope.imgcrop.imgSrc = '';
					$scope.$applyAsync();
					
				},1)
				// $scope.$applyAsync();
			}
			// $scope.removeImage=function(doc){
			// 	$rootScope.startSpin();
			// 	projectService.removeImage($scope.formData.id,doc).then(function(data){
			// 		var index = _.findIndex($scope.formData.documents, function(o) { return o.id == doc; });
			// 		if( index !== -1) {
			// 			$scope.formData.documents.splice(index, 1);
			// 		}
			// 		//  else {
			// 		// 	$scope.formData.tags.push(tag_with_id);
			// 		// }
			// 		$rootScope.stopSpin();
			// 	},function(d){
			// 		console.log('EROOR');
			// 	})
			// }
			$scope.titi = [{name:'riri'},{name:'loulou'},{name:'fifi'},{name:'picsous'}]

			$scope.formData.images = _.orderBy($scope.formData.images,'rank')

			$scope.sortOption={
				'ui-floating':true,
				stop: function(e, ui) {
					console.log('UPDATE');
					console.log($scope.formData.images);
					var allImages = $scope.formData.images
					console.log(allImages);

					for(var i=0; i< allImages.length; i++)
					{
						console.log(i);
						console.log(allImages[i].name);
						$rootScope.startSpin();
						imageService.saveImage(allImages[i].id,{rank:i}).then(function(d){
							$rootScope.stopSpin();
							console.log('cool');
							
						})
					}



					console.log(allImages);
// saveImage
					// imageService.saveIndex($scope.formData.images).then(function(d){

					// 	console.log('cool');
						
					// })

					// console.log($scope.formData.images);
					// console.log(ui);
					// console.log(e);
				    // if (ui.item.sortable.model == "can't be moved") {
				    //     ui.item.sortable.cancel();
				    // }
				},

				start:function(e,ui) {
					console.log('START');
					console.log($scope.formData.images);
				}
			};

			$scope.formData.players = _.orderBy($scope.formData.players,'rank')
			$scope.sortOptionPlayer={
				'ui-floating':true,
				stop: function(e, ui) {
					console.log('UPDATE');
					console.log($scope.formData.players);
					var allplayers = $scope.formData.players
					console.log(allplayers);

					for(var i=0; i< allplayers.length; i++)
					{
						console.log(i);
						console.log(allplayers[i].name);
						$rootScope.startSpin();
						projectService.savePlayers(allplayers[i].id,{rank:i}).then(function(d){
							$rootScope.stopSpin();
							console.log('cool');
							
						})
					}



					console.log(allplayers);
// saveImage
					// imageService.saveIndex($scope.formData.images).then(function(d){

					// 	console.log('cool');
						
					// })

					// console.log($scope.formData.images);
					// console.log(ui);
					// console.log(e);
				    // if (ui.item.sortable.model == "can't be moved") {
				    //     ui.item.sortable.cancel();
				    // }
				},

				start:function(e,ui) {
					console.log('START');
					console.log($scope.formData.players);
				}
			};
















			$scope.addPlayer=function(projectid){
				console.log('projectid');
				console.log(projectid);
				$rootScope.startSpin();
				projectService.createBlankPlayer(projectid).then(function(data){
					console.log('----------COOLLLLL------------------------------------------------');
					console.log(data);
					$scope.formData.players.push(data.child)
					// $scope.slideshowList
					// var index = _.findIndex($scope.slideshowList, function(o) { return o.id == slideshowID; });
					// if( index !== -1) {
					// 	$scope.slideshowList[index].slides.push(data.child);
					// }
        			$rootScope.stopSpin();
				},function(d){
					console.log('EROOR');
				})

			}












			// $scope.displayAddPopUp=function(){
			// 	// $scope.showAdvanced = function(ev) {
			// 	// console.log('showadvan');
			//     // var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
			//     $mdDialog.show({
			//       	controller: function($scope,$rootScope,sliderService){
			      	
			//       		$scope.formData = {};
			//       		// $scope.formData.width = 800;
			//       		// $scope.formData.height = 600;



			//       		$scope.CreateSlideshow=function(){
			      			
			//       			if($scope.formData.title)
			//       			{

			// 					$rootScope.startSpin();
			// 					sliderService.create($scope.formData).then(function(data){
			// 						console.log('----------------------------------------------------------');
			// 						console.log(data);
			// 						// $scope.$parent.parentCB(data);
			// 						$rootScope.$broadcast('slideshowADD',{data:data});
			// 						$mdDialog.hide()
			// 	        			$rootScope.stopSpin();
			// 					},function(d){
			// 						console.log('EROOR');
			// 					})
			//       			}
			//       		}


			//      	},
			//       	templateUrl: 'js/backoffice/project/partials/addPlayerModal.html',
			//       	parent: angular.element(document.body),
			//       // targetEvent: ev,
			//       	clickOutsideToClose:true,
			//     })
			//     .then(function(answer) {
			//       $scope.status = 'You said the information was "' + answer + '".';
			//     }, function() {
			//       $scope.status = 'You cancelled the dialog.';
			//     });
			    
			// };



			// }
			$rootScope.$on('playerSelfChange',function(e,data){
				console.log('playerSelfChange');
					console.log(data);
					var index = _.findIndex($scope.formData.players, function(o) { return o.id == data.playerID; });
					if( index !== -1) {

						
							$scope.formData.players[index] = data.data;
					}
			})	
			$rootScope.$on('playerSelfRemove',function(e,data){
				console.log('playerSelfRemove');
				console.log(data);
					var index = _.findIndex($scope.formData.players, function(o) { return o.id == data.playerID; });
					if( index !== -1) {
						console.log('hehe');
						$scope.formData.players.splice(index,1)
						// var index2 = _.findIndex($scope.slideshowList[index].slides, function(o) { return o.id == data.data.id; });
						// if( index2 !== -1) {
						// 	console.log('hehe2');

						// 	$scope.slideshowList[index].slides.splice(index2,1,data.data)
						// 	console.log(tt);
						// }
					}
			})		
			$rootScope.$on('playerSelfChangeImg',function(e,data){
				console.log('playerSelfChangeImg');
				console.log(data);
					var index = _.findIndex($scope.formData.players, function(o) { return o.id == data.playerID; });
					if( index !== -1) {
						console.log('hehe');
						
						// var index2 = _.findIndex($scope.slideshowList[index].slides, function(o) { return o.id == data.item.id; });
						// if( index2 !== -1) {
						// 	console.log('hehe2');

							$scope.formData.playerssplice(index,1,data.item)
						// }
					}
			})



			$scope.editPlayerPopUp=function(projid, player){

				var aspectRatioSlideshow = '4/3';
				var playerID = player.id;
				var projectID = projid;
				
			    $mdDialog.show({
			    	// resolve:{
			     //  		slide:function(sliderService){
			     //  			console.log('RESOLVE66666666666666666666666666666666666666666666666666666666666666666666666666666666');
			     //  			return sliderService.fetchSlide(slideID)
			     //  		}
			     //  	},
			      	controller: function($scope,$rootScope,sliderService){

			      		$scope.poussin == false
			      		if(projectID == '57b417009c22273d1a44798f')
			      			$scope.poussin == true
			      		console.log(player);
			      		$scope.playerData = {};
			      		$scope.playerData.id = player.id;
			      		$scope.playerData.rank=player.rank;
			      		$scope.playerData.poste=player.poste;
			      		$scope.playerData.taille=Number(player.taille);
			      		$scope.playerData.detente=Number(player.detente);
			      		$scope.playerData.attaque=Number(player.attaque);
			      		$scope.playerData.contre=Number(player.contre);
			      		$scope.playerData.defence=Number(player.defence);
			      		$scope.playerData.recep=Number(player.recep);
			      		$scope.playerData.passe=Number(player.passe);
			      		$scope.playerData.plongeon=Number(player.plongeon);
			      		$scope.playerData.service=Number(player.service);
			      		$scope.playerData.vision=Number(player.vision);
			      		$scope.playerData.mail=player.mail;
			      		$scope.playerData.facebook=player.facebook;
			      		$scope.playerData.twitter=player.twitter;
			      		$scope.playerData.instagram=player.instagram;
			      		$scope.playerData.snapchat=player.snapchat;
			      		$scope.playerData.content=player.content;
			      		$scope.playerData.name=player.name;


			      		$scope.indexDocument=0;
			        	
			     		$scope.removeImg=function(img){
							$rootScope.startSpin();
							sliderService.removeImage($scope.playerData.id,img).then(function(data){
								console.log(data);
								var index = _.findIndex($scope.playerData.images, function(o) { return o.id == img; });
								if( index !== -1) {
									$scope.playerData.images.splice(index, 1);
			                    		$rootScope.$broadcast('slideSelfChangeImg',{item : data,slideshowID:slideshowID});

								}
								//  else {
								// 	$scope.playerData.tags.push(tag_with_id);
								// }
								// $rootScope.$broadcast('articleSelfChangeImg',data);
								$rootScope.stopSpin();
							},function(d){
								console.log('EROOR');
							})
						}

			        	$scope.indexImage=0;
			        	$scope.uploadingImages=[];

			        	$scope.resizeOnly=function(imgID){
			        		$rootScope.startSpin();
							$scope.dataToSend = {};
					        $scope.dataToSend.displayHeight = $scope.imgcrop.displayHeight;
					        $scope.dataToSend.displayWidth = $scope.imgcrop.displayWidth;
					        $scope.dataToSend.scaledWidth = $scope.imgcrop.scaledWidth;
					        $scope.dataToSend.scaledHeight = $scope.imgcrop.scaledHeight;
					        $scope.dataToSend.scaledTop = $scope.imgcrop.scaledTop;
					        $scope.dataToSend.scaledLeft = $scope.imgcrop.scaledLeft;
					        $scope.dataToSend.aspectRatio = $scope.imgcrop.aspectRatio;
					        $scope.dataToSend.landscape = $scope.imgcrop.landscape;
					        $scope.dataToSend.containerWidth = $scope.imgcrop.containerWidth;
					        $scope.dataToSend.containerHeight = $scope.imgcrop.containerHeight;
					        $scope.dataToSend.filename= $scope.imgcrop.filename;
					        $scope.dataToSend.imgid= $scope.imgEditId;
					        $scope.dataToSend.normalWidth= slideshowWidth;
			            	$scope.dataToSend.normalHeight= slideshowHeight;
			            	if(!$scope.imgcrop.landscape){
			            		$scope.dataToSend.normalWidth= slideshowWidth;
			            		$scope.dataToSend.normalHeight= slideshowHeight;
			            	}
			                    	
							$('#imageCropSource2').hide();

					        $scope.imgcrop.imgEditId = 0;
			            	$scope.imgcrop.displayHeight = 0;
							$scope.imgcrop.displayWidth = 0;
							$scope.imgcrop.scaledWidth = 0;
							$scope.imgcrop.scaledHeight = 0;
							$scope.imgcrop.scaledTop = 0;
							$scope.imgcrop.scaledLeft = 0;
							$scope.imgcrop.containerWidth = 0;
							$scope.imgcrop.containerHeight = 0;
							$scope.imgcrop.aspectRatio = aspectRatioSlideshow;
							$scope.imgcrop.imgSrc = "";

					        $sailsSocket.post('/api/image/resize/',$scope.dataToSend).success(function (data,status) {
					            console.log('SUCCESS RESIZE'); 
					            console.log($scope.dataToSend);
					            
					            var index = _.findIndex($scope.playerData.images, function(o) { return o.id == $scope.dataToSend.imgid; });
								if( index !== -1) {
									console.log('IN INDEX');
									var savedfilename = $scope.playerData.images[index].filename+'?rdm='+Math.round(Math.random() * 999999);
									// $scope.playerData.images[index].filename = '';
									$scope.playerData.images[index].filename= savedfilename
			                    		// $rootScope.$broadcast('slideSelfChangeImg',{item : data,slideshowID:slideshowID});

								}
					            // var imgsrc = $('.imageList img').attr('src')
					            // console.log(imgsrc);
					            // console.log(data);

					            $rootScope.stopSpin();
					            
					        }).error(function (data,status) {
					            console.log(data);
					            console.log('errOR');
					        })
				        }

			        	$scope.uploadImage = function () {

			        		console.log($scope.imgcrop);
			        		console.log('UPLOAD IMAGE');
					        $scope.dataToSend = {};
					        $scope.fileToSend = $scope.imgcrop.file; 
					        $scope.dataToSend.file = $scope.imgcrop.file; 
					        $scope.dataToSend.displayHeight = $scope.imgcrop.displayHeight;
					        $scope.dataToSend.displayWidth = $scope.imgcrop.displayWidth;
					        $scope.dataToSend.scaledWidth = $scope.imgcrop.scaledWidth;
					        $scope.dataToSend.scaledHeight = $scope.imgcrop.scaledHeight;
					        $scope.dataToSend.scaledTop = $scope.imgcrop.scaledTop;
					        $scope.dataToSend.scaledLeft = $scope.imgcrop.scaledLeft;
					        $scope.dataToSend.aspectRatio = $scope.imgcrop.aspectRatio;
					        $scope.dataToSend.landscape = $scope.imgcrop.landscape;
					        $scope.dataToSend.containerWidth = $scope.imgcrop.containerWidth;
					        $scope.dataToSend.containerHeight = $scope.imgcrop.containerHeight;
					        $scope.uploadingImages[$scope.indexImage] = {};
					        $scope.uploadingImages[$scope.indexImage].status = 'start';
					        $scope.uploadingImages[$scope.indexImage].text='0%';
					        $scope.uploadingImages[$scope.indexImage].file=$scope.imgcrop.file;

			                $scope.uploadingImages[$scope.indexImage].status='progress';
			                (function(indexImage){
			                	$scope.imgcrop.imgEditId = 0;
			                	$scope.imgcrop.displayHeight = 0;
								$scope.imgcrop.displayWidth = 0;
								$scope.imgcrop.scaledWidth = 0;
								$scope.imgcrop.scaledHeight = 0;
								$scope.imgcrop.scaledTop = 0;
								$scope.imgcrop.scaledLeft = 0;
								$scope.imgcrop.containerWidth = 0;
								$scope.imgcrop.containerHeight = 0;
								$scope.imgcrop.aspectRatio = aspectRatioSlideshow;
								$scope.imgcrop.imgSrc = "";
								$('#imageCropSource2').hide();

			                    Upload.upload({
			                        url: '/api/player/'+playerID+'/images',
			                        data: {file :$scope.fileToSend}
			                        	// 'displayWidth':$scope.dataToSend.displayWidth,
			                        	// 'scaledWidth':$scope.dataToSend.scaledWidth,
			                        	// 'scaledHeight':$scope.dataToSend.scaledHeight,
			                        	// 'scaledTop':$scope.dataToSend.scaledTop,
			                        	// 'scaledLeft':$scope.dataToSend.scaledLeft,
			                        	// 'aspectRatio':$scope.dataToSend.aspectRatio,
			                        	// 'landscape':$scope.dataToSend.landscape,
			                        
			                    }).then(function (data) {
			                    	console.log(data);
			                    	console.log(data.data.child);
			                    	var dataTOCALLBACK = data.data.parent;
			                    	var dataChild = data.data.child;
			                    	$scope.dataToSend.imgid= data.data.child.id;
			                    	$scope.dataToSend.normalWidth= 800;
			                    	$scope.dataToSend.normalHeight= 600;
			                    	if(!$scope.imgcrop.landscape){
			                    		$scope.dataToSend.normalWidth= 600;
			                    		$scope.dataToSend.normalHeight= 800;
			                    	}
			                    	$scope.dataToSend.filename= data.data.child.filename;
			                    	$rootScope.startSpin();
			      					$sailsSocket.post('/api/image/resize/',$scope.dataToSend).success(function (data,status) {
							            console.log('SUCCESS RESIZE');
							            // $scope.playerData.images.push(dataChild)
			                    		$rootScope.$broadcast('playerSelfChangeImg',{item : dataTOCALLBACK,playerID:playerID});

							            $rootScope.stopSpin();
							          
							        }).error(function (data,status) {
							            console.log(data);
							            console.log('errOR');
							        })


			                        $scope.uploadingImages[indexImage].text='Envoi terminé';
									$scope.touched = true;

			                        (function(indexImage){

			                            $timeout(function () {
			                                $scope.uploadingImages[indexImage].status = 'success';
			                            },3000)
			                        })(indexImage)
			                    },function (evt) {
			                        //HANDLE ERROR
			                    },function (evt) {
			                        $scope.uploadingImages[indexImage].progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
			                        $scope.uploadingImages[indexImage].text = $scope.uploadingImages[indexImage].progressPercentage+'%'
			                    });
			                })($scope.indexImage)
					        $scope.indexImage++;
					    };
					    // $scope.changeOrientation=function(){
					    // 	if($scope.imgcrop.landscape)
					    // 	{
					    // 		$scope.imgcrop.landscape = false;
					    // 		$scope.imgcrop.aspectRatio = $scope.imgcrop.aspectRatioPortrait
					    // 	}else{
					    // 		$scope.imgcrop.landscape = true;
					    // 		$scope.imgcrop.aspectRatio = $scope.imgcrop.aspectRatioPaysage
					    // 	}
					    // }
					    $scope.resizeagain=function(img){
					    	console.log(img);

					    	$scope.imgcrop.imgSrc = 'image/originalSize/'+img.filename;
					    	$scope.imgcrop.imgEditId = img.id;
					    	$scope.imgEditId = img.id;
					    	$scope.imgcrop.filename = img.filename;
							
					    }
					    $scope.imgcrop = {};
					    $scope.imgcrop.imgEditId = 0;
						$scope.imgcrop.displayHeight = 0;
						$scope.imgcrop.displayWidth = 0;
						$scope.imgcrop.scaledWidth = 0;
						$scope.imgcrop.scaledHeight = 0;
						$scope.imgcrop.scaledTop = 0;
						$scope.imgcrop.scaledLeft = 0;
						$scope.imgcrop.containerWidth = 0;
						$scope.imgcrop.containerHeight = 0;
						$scope.imgcrop.aspectRatio = aspectRatioSlideshow;
						$scope.imgcrop.imgSrc = "";
						// $scope.imgcrop.aspectRatioPaysage = '16/9';
						// $scope.imgcrop.aspectRatioPortrait = '3/4';

						
						$scope.addImgCrop=function($files){
							console.log('addImgCrop');
							console.log($files);
							// $scope.imgcrop = {};
							$scope.imgcrop.imgEditId = 0;
							$scope.imgcrop.displayHeight = 0;
							$scope.imgcrop.displayWidth = 0;
							$scope.imgcrop.scaledWidth = 0;
							$scope.imgcrop.scaledHeight = 0;
							$scope.imgcrop.scaledTop = 0;
							$scope.imgcrop.containerWidth = 0;
							$scope.imgcrop.containerHeight = 0;
							$scope.imgcrop.scaledLeft = 0;
							$scope.imgcrop.imgSrc = '';
							$('#imageCropSelector2').css({'display':'none'})
								
							// $files[0].$ngfBlobUrl;

							if(typeof($files[0])== 'object'){

								console.log('HERE');
								$scope.imgcrop.imgSrc = $files[0].$ngfBlobUrl;
								$('#imageCropSource').show();

								$scope.imgcrop.file = $files[0];
								$scope.$applyAsync();
								$scope.imgcrop.aspectRatio = aspectRatioSlideshow
							    // if($files[0].$ngfWidth < $files[0].$ngfHeight)
				       //      	{
				       //      		$scope.imgcrop.aspectRatio = $scope.imgcrop.aspectRatioPortrait;
				       //      		$scope.imgcrop.landscape = false;
				       //      	}else{
				       //      		$scope.imgcrop.aspectRatio = $scope.imgcrop.aspectRatioPaysage;
				       //      		$scope.imgcrop.landscape = true;
				       //      	}
							}

						};
						// $scope.uploadDocument=function($files){
						// 	console.log('fileDrop');
						// 	console.log($files);



						// };
						$scope.removeImgCrop = function(){
							console.log('CANCEL IMAGE');
							setTimeout(function(){
								// $('#imageCropSource').attr('src','');
								$('#imageCropSource2').hide();
								$scope.imgcrop.imgSrc = '';
								$scope.$applyAsync();
								
							},1)
							// $scope.$applyAsync();
						}


			      		$scope.savePlayer=function(attribute){
			      			
			     //  			if($scope.playerData.title)
			     //  			{
			     	console.log($scope.playerData);

								$rootScope.startSpin();
								var attrToUpdate = {};
								attrToUpdate[attribute] = $scope.playerData[attribute];
								console.log('attrToUpdate');
								console.log(attrToUpdate);
								projectService.savePlayer(playerID,attrToUpdate).then(function(data){
									// console.log('----------------------------------------------------------');
									// console.log(data);
									$rootScope.$broadcast('playerSelfChange',{data:data,playerID :playerID});
									// // $mdDialog.hide()
				        			$rootScope.stopSpin();
								},function(d){
									console.log('EROOR');
								})
			     //  			}
			      		};
			      		$scope.deletePlayer=function(playerId){
			      			
			     //  			if($scope.playerData.title)
			     //  			{

								$rootScope.startSpin();
								
								projectService.deletePlayer(playerId,projectID).then(function(data){
									console.log('----------------------------------------------------------');
									console.log(data);
									$rootScope.$broadcast('playerSelfRemove',{data:data,playerID :playerId});
									$mdDialog.hide()
				        			$rootScope.stopSpin();
								},function(d){
									console.log('EROOR');
								})
			     //  			}
			      		}


			     	},
			      	templateUrl: 'js/backoffice/project/partials/addPlayerModal.html',
			      	parent: angular.element(document.body),
			      	
			      // targetEvent: ev,
			      	clickOutsideToClose:true,
			    })
			    .then(function(answer) {
			      $scope.status = 'You said the information was "' + answer + '".';
			    }, function() {
			      $scope.status = 'You cancelled the dialog.';
			    });
			    
			// };



			}

















      	},
      	link:function(scope,element,attrs){
      		


			// scope.textAngularOptions={};

			// scope.textAngularOptions = ['bold', 'italics', 'underline', 'strikeThrough', 'ul', 'ol', 'redo', 'undo','justifyLeft', 'justifyCenter', 'justifyRight', 'indent', 'outdent','html', 'insertImage','insertLink', 'insertVideo'];
		  	// scope.textAngularOptions = [['h1','h2','h3'],['bold','italics']]
      	}
    };

});