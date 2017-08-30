{
   "pai": {
      "mappings": {
         "slideshow": {
            "enabled": false
         },
         "category": {
            "properties": {
               "articles":{
                  "enabled": false
               },
               "color": {
                  "type": "string"
               },
               "createdAt": {
                  "type": "date",
                  "format": "dateOptionalTime"
               },
               "fabricants": {
                  "enabled": false
               },
               "id": {
                  "type": "string"
               },
               "ingrediants": {
                  "enabled": false
               },
               "name": {
                  "type": "string"
               },
               "nbArticles": {
                  "type": "string"
               },
               "nbEvents": {
                  "type": "string"
               },
               "nbFabricants": {
                  "type": "string"
               },
               "nbIngrediants": {
                  "type": "string"
               },
               "nbProjects": {
                  "type": "string"
               },
               "textColor": {
                  "type": "string"
               },
               "total": {
                  "type": "string"
               },
               "updatedAt": {
                  "type": "date",
                  "format": "dateOptionalTime"
               }
            }
         },
         "event": {
            "properties": {
               "authors": {
                  "enabled": false
                  
               },
               "content": {
                  "type": "string", "analyzer":"french"
               },
               "contentType": {
                  "type": "string"
               },
               "createdAt": {
                  "type": "date",
                  "format": "dateOptionalTime"
               },
               "dateEnd": {
                  "type": "date",
                  "format": "dateOptionalTime"
               },
               "dateStart": {
                  "type": "date",
                  "format": "dateOptionalTime"
               },
               "endsAt": {
                  "type": "date",
                  "format": "dateOptionalTime"
               },
               "id": {
                  "type": "string"
               },
               "isPaiContent": {
                  "type": "boolean"
               },
               "lang": {
                  "type": "string"
               },
               "link": {
                  "type": "string"
               },
               "nbPoints": {
                  "type": "long"
               },
               "nbView": {
                  "type": "long"
               },
               "privateContent": {
                  "type": "boolean"
               },
               "solded": {
                  "type": "boolean"
               },
               "startsAt": {
                  "type": "date",
                  "format": "dateOptionalTime"
               },
               "status": {
                  "type": "string"
               },
               "tags": {
                  "properties": {
                     "createdAt": {
                        "type": "date",
                        "format": "dateOptionalTime","enabled": false
                     },
                     "id": {
                        "type": "string"
                     },
                     "nbArticles": {
                        "type": "string","enabled": false
                     },
                     "nbDocuments": {
                        "type": "string","enabled": false
                     },
                     "nbEvents": {
                        "type": "string","enabled": false
                     },
                     "nbFabricants": {
                        "type": "string","enabled": false
                     },
                     "nbIngrediants": {
                        "type": "string","enabled": false
                     },
                     "nbProjects": {
                        "type": "string","enabled": false
                     },
                     "text": {
                        "type": "string"
                     },
                     "total": {
                        "type": "string","enabled": false
                     },
                     "updatedAt": {
                        "type": "date",
                        "format": "dateOptionalTime","enabled": false
                     }
                  }
               },
               "title": {
                  "type": "string", "analyzer":"french"
               },
               "updatedAt": {
                  "type": "date",
                  "format": "dateOptionalTime"
               },
               "validate": {
                  "type": "boolean"
               }
            }
         },
         "slide": {
            "enabled": false
         },
         "comment": {
            "properties": {
               "admin": {
                  "type": "boolean","enabled": false
               },
               "article": {
                  "type": "string"
               },
               "articleName": {
                  "type": "string"
               },
               "authorName": {
                  "type": "string"
               },
               "content": {
                  "type": "string", "analyzer":"french"
               },
               "createdAt": {
                  "type": "date",
                  "format": "dateOptionalTime"
               },
               "email": {
                  "type": "string","enabled": false
               },
               "id": {
                  "type": "string"
               },
               "imgAuthor": {
                  "type": "string"
               },
               "imgpath": {
                  "type": "string"
               },
               "project": {
                  "type": "string"
               },
               "responses": {
                  "enabled": false
               },
               "status": {
                  "type": "string"
               },
               "updatedAt": {
                  "type": "date",
                  "format": "dateOptionalTime"
               },
               "user": {
                  "type": "string"
               }
            }
         },
         "article": {
            "properties": {
               "activeComent": {
                  "type": "boolean"
               },
               "authors": {
                     "enabled": false
               
               },
               "categories": {
                  "properties": {
                     "color": {
                        "type": "string"
                     },
                     "createdAt": {
                        "type": "date",
                        "format": "dateOptionalTime","enabled": false
                     },
                     "id": {
                        "type": "string"
                     },
                     "name": {
                        "type": "string"
                     },
                     "nbArticles": {
                        "type": "string","enabled": false
                     },
                     "nbProjects": {
                        "type": "string","enabled": false
                     },
                     "textColor": {
                        "type": "string"
                     },
                     "total": {
                        "type": "string"
                     },
                     "updatedAt": {
                        "type": "date",
                        "format": "dateOptionalTime","enabled": false
                     }
                  }
               },
               "collabsPoints": {
                     "enabled": false
               
               },
               "content": {
                  "type": "string", "analyzer":"french"
               },
               "contentType": {
                  "type": "string"
               },
               "createdAt": {
                  "type": "date",
                  "format": "dateOptionalTime"
               },
               "date": {
                  "type": "date",
                  "format": "dateOptionalTime"
               },

               "documents": {
                  "properties": {
                     "createdAt": {
                        "type": "date",
                        "format": "dateOptionalTime","enabled": false
                     },
                     "date": {
                        "type": "date",
                        "format": "dateOptionalTime"
                     },
                     "description": {
                        "type": "string", "analyzer":"french"
                     },
                     "filename": {
                        "type": "string"
                     },
                     "id": {
                        "type": "string"
                     },
                     "name": {
                        "type": "string"
                     },
                     "nbDowload": {
                        "type": "string"
                     },
                     "size": {
                        "type": "string"
                     },
                     "type": {
                        "type": "string"
                     },
                     "updatedAt": {
                        "type": "date",
                        "format": "dateOptionalTime","enabled": false
                     }
                  }
               },
               "id": {
                  "type": "string"
               },
               "images": {
                  "properties": {
                     "alt": {
                        "type": "string"
                     },
                     "createdAt": {
                        "type": "date",
                        "format": "dateOptionalTime","enabled": false
                     },
                     "filename": {
                        "type": "string"
                     },
                     "height": {
                        "type": "string"
                     },
                     "id": {
                        "type": "string"
                     },
                     "name": {
                        "type": "string"
                     },
                     "paysage": {
                        "type": "boolean"
                     },
                     "rank": {
                        "type": "string"
                     },
                     "size": {
                        "type": "string"
                     },
                     "type": {
                        "type": "string"
                     },
                     "updatedAt": {
                        "type": "date",
                        "format": "dateOptionalTime","enabled": false
                     },
                     "width": {
                        "type": "string"
                     }
                  }
               },
               "isPaiContent": {
                  "type": "boolean"
               },
               "lang": {
                  "type": "string"
               },
               "link": {
                  "type": "string"
               },
               "nbPoints": {
                  "type": "long","enabled": false
               },
               "nbView": {
                  "type": "long"
               },
               "privateContent": {
                  "type": "boolean"
               },
               "solded": {
                  "type": "boolean","enabled": false
               },
               "status": {
                  "type": "string"
               },
               "tags": {
                  "properties": {
                     "createdAt": {
                        "type": "date",
                        "format": "dateOptionalTime","enabled": false
                     },
                     "id": {
                        "type": "string"
                     },
                     "nbArticles": {
                        "type": "string","enabled": false
                     },
                     "nbDocuments": {
                        "type": "string","enabled": false
                     },
                     "nbEvents": {
                        "type": "string","enabled": false
                     },
                     "nbFabricants": {
                        "type": "string","enabled": false
                     },
                     "nbIngrediants": {
                        "type": "string","enabled": false
                     },
                     "nbProjects": {
                        "type": "string","enabled": false
                     },
                     "text": {
                        "type": "string"
                     },
                     "total": {
                        "type": "string"
                     },
                     "updatedAt": {
                        "type": "date",
                        "format": "dateOptionalTime","enabled": false
                     }
                  }
               },
               "title": {
                  "type": "string", "analyzer":"french"
               },
               "updatedAt": {
                  "type": "date",
                  "format": "dateOptionalTime","enabled": false
               }
            }
         },
         "collabsPoints": {
               "enabled": false
            }
         },
         "project": {
            "properties": {
               "activeComent": {
                  "type": "boolean"
               },
               "authors": {
                  
                  "enabled": false
               },
               "categories": {
                  "properties": {
                     "color": {
                        "type": "string"
                     },
                     "createdAt": {
                        "type": "date",
                        "format": "dateOptionalTime","enabled": false
                     },
                     "id": {
                        "type": "string"
                     },
                     "name": {
                        "type": "string"
                     },
                     "nbArticles": {
                        "type": "string","enabled": false
                     },
                     "nbProjects": {
                        "type": "string","enabled": false
                     },
                     "textColor": {
                        "type": "string"
                     },
                     "total": {
                        "type": "string"
                     },
                     "updatedAt": {
                        "type": "date",
                        "format": "dateOptionalTime","enabled": false
                     }
                  }
               },
               
               "collabsPoints": {
                     "enabled": false
                  
               },
               "content": {
                  "type": "string", "analyzer":"french"
               },
               "contentType": {
                  "type": "string"
               },
               "createdAt": {
                  "type": "date",
                  "format": "dateOptionalTime"
               },
               "date": {
                  "type": "date",
                  "format": "dateOptionalTime"
               },
               "documents": {
                  "properties": {
                     "createdAt": {
                        "type": "date",
                        "format": "dateOptionalTime","enabled": false
                     },
                     "date": {
                        "type": "date",
                        "format": "dateOptionalTime"
                     },
                     "description": {
                        "type": "string", "analyzer":"french"
                     },
                     "filename": {
                        "type": "string"
                     },
                     "id": {
                        "type": "string"
                     },
                     "name": {
                        "type": "string"
                     },
                     "nbDowload": {
                        "type": "string"
                     },
                     "size": {
                        "type": "string"
                     },
                     "type": {
                        "type": "string"
                     },
                     "updatedAt": {
                        "type": "date",
                        "format": "dateOptionalTime","enabled": false
                     }
                  }
               },
               "id": {
                  "type": "string"
               },
               "initialPrice": {
                  "type": "long"
               },
               "isPaiContent": {
                  "type": "boolean"
               },
               "lang": {
                  "type": "string"
               },
               "nbPoints": {
                  "type": "long","enabled": false
               },
               "nbView": {
                  "type": "long"
               },
               "privateContent": {
                  "type": "boolean"
               },
               "solded": {
                  "type": "boolean","enabled": false
               },
               "status": {
                  "type": "string"
               },
               "tags": {
                  "properties": {
                     "createdAt": {
                        "type": "date",
                        "format": "dateOptionalTime","enabled": false
                     },
                     "id": {
                        "type": "string"
                     },
                     "nbArticles": {
                        "type": "string","enabled": false
                     },
                     "nbDocuments": {
                        "type": "string","enabled": false
                     },
                     "nbEvents": {
                        "type": "string","enabled": false
                     },
                     "nbFabricants": {
                        "type": "string","enabled": false
                     },
                     "nbIngrediants": {
                        "type": "string","enabled": false
                     },
                     "nbProjects": {
                        "type": "string","enabled": false
                     },
                     "text": {
                        "type": "string"
                     },
                     "total": {
                        "type": "string"
                     },
                     "updatedAt": {
                        "type": "date",
                        "format": "dateOptionalTime","enabled": false
                     }
                  }
               },
               "title": {
                  "type": "string", "analyzer":"french"
               },
               "updatedAt": {
                  "type": "date",
                  "format": "dateOptionalTime","enabled": false
               }
            }
         },
         "tag": {
            "properties": {
               "createdAt": {
                  "type": "date",
                  "format": "dateOptionalTime"
               },
               "id": {
                  "type": "string"
               },
               "nbArticles": {
                  "type": "string"
               },
               "nbDocuments": {
                  "type": "string"
               },
               "nbEvents": {
                  "type": "string"
               },
               "nbFabricants": {
                  "type": "string"
               },
               "nbIngrediants": {
                  "type": "string"
               },
               "nbProjects": {
                  "type": "string"
               },
               "text": {
                  "type": "string"
               },
               "total": {
                  "type": "string"
               },
               "updatedAt": {
                  "type": "date",
                  "format": "dateOptionalTime"
               }
            }
         },
         "document": {
            "properties": {
               "createdAt": {
                  "type": "date",
                  "format": "dateOptionalTime"
               },
               "date": {
                  "type": "date",
                  "format": "dateOptionalTime"
               },
               "description": {
                  "type": "string", "analyzer":"french"
               },
               "filename": {
                  "type": "string"
               },
               "id": {
                  "type": "string"
               },
               "name": {
                  "type": "string"
               },
               "nbDowload": {
                  "type": "string"
               },
               "size": {
                  "type": "string"
               },
               "type": {
                  "type": "string"
               },
               "updatedAt": {
                  "type": "date",
                  "format": "dateOptionalTime"
               }
            }
         },
         "user": {
            "properties": {
               "collabsPoints": {
                  "enabled": false
               },
               "createdAt": {
                  "type": "date",
                  "format": "dateOptionalTime"
               },
               "dashboard": {
                  "enabled": false
               },
               "description": {
                  "type": "string", "analyzer":"french"
               },
               "email": {
                  "type": "string"
               },
               "firstname": {
                  "type": "string"
               },
               "id": {
                  "type": "string"
               },
               "images": {
                  "properties": {
                     "alt": {
                        "type": "string"
                     },
                     "createdAt": {
                        "type": "date",
                        "format": "dateOptionalTime"
                     },
                     "filename": {
                        "type": "string"
                     },
                     "id": {
                        "type": "string"
                     },
                     "name": {
                        "type": "string"
                     },
                     "paysage": {
                        "type": "boolean"
                     },
                     "rank": {
                        "type": "string"
                     },
                     "size": {
                        "type": "string"
                     },
                     "type": {
                        "type": "string"
                     },
                     "updatedAt": {
                        "type": "date",
                        "format": "dateOptionalTime"
                     }
                  }
               },
               "lastActivity": {
                  "type": "date",
                  "format": "dateOptionalTime"
               },
               "name": {
                  "type": "string"
               },
               "nbArticles": {
                  "type": "string"
               },
               "nbCollabsPoints": {
                  "type": "long"
               },
               "nbCollabsPointsTotal": {
                  "type": "long"
               },
               "nbProjects": {
                  "type": "string"
               },
               "newuserhash": {
                  "type": "string"
               },
               "password": {
                  "type": "string","enabled": false
               },
               "redCards": {
                  "type": "long"
               },
               "role": {
                  "type": "string"
               },
               "theme": {
                  "type": "string"
               },
               "total": {
                  "type": "string"
               },
               "updatedAt": {
                  "type": "date",
                  "format": "dateOptionalTime","enabled": false
               },
               "yellowCards": {
                  "type": "long"
               }
            }
         },
         "fabricant": {
            "properties": {
               "adress": {
                  "type": "string"
               },
               "authors": {
                  "enabled": false
               },
               "categories": {
                  "properties": {
                     "color": {
                        "type": "string"
                     },
                     "createdAt": {
                        "type": "date",
                        "format": "dateOptionalTime","enabled": false
                     },
                     "id": {
                        "type": "string"
                     },
                     "name": {
                        "type": "string"
                     },
                     "nbArticles": {
                        "type": "string","enabled": false
                     },
                     "nbEvents": {
                        "type": "string","enabled": false
                     },
                     "nbFabricants": {
                        "type": "string","enabled": false
                     },
                     "nbIngrediants": {
                        "type": "string","enabled": false
                     },
                     "nbProjects": {
                        "type": "string","enabled": false
                     },
                     "textColor": {
                        "type": "string"
                     },
                     "total": {
                        "type": "string"
                     },
                     "updatedAt": {
                        "type": "date",
                        "format": "dateOptionalTime","enabled": false
                     }
                  }
               },
               "collabsPoints": {
                  "enabled": false
               },
               "content": {
                  "type": "string", "analyzer":"french"
               },
               "country": {
                  "type": "string"
               },
               "cp": {
                  "type": "string"
               },
               "createdAt": {
                  "type": "date",
                  "format": "dateOptionalTime"
               },
               "date": {
                  "type": "date",
                  "format": "dateOptionalTime"
               },
               "documents": {
                  "properties": {
                     "createdAt": {
                        "type": "date",
                        "format": "dateOptionalTime","enabled": false
                     },
                     "date": {
                        "type": "date",
                        "format": "dateOptionalTime"
                     },
                     "description": {
                        "type": "string", "analyzer":"french"
                     },
                     "filename": {
                        "type": "string"
                     },
                     "id": {
                        "type": "string"
                     },
                     "name": {
                        "type": "string"
                     },
                     "nbDowload": {
                        "type": "string"
                     },
                     "size": {
                        "type": "string"
                     },
                     "type": {
                        "type": "string"
                     },
                     "updatedAt": {
                        "type": "date",
                        "format": "dateOptionalTime","enabled": false
                     }
                  }
               },
               "id": {
                  "type": "string"
               },
               "images": {
                  "properties": {
                     "alt": {
                        "type": "string"
                     },
                     "createdAt": {
                        "type": "date",
                        "format": "dateOptionalTime","enabled": false
                     },
                     "filename": {
                        "type": "string"
                     },
                     "height": {
                        "type": "string"
                     },
                     "id": {
                        "type": "string"
                     },
                     "name": {
                        "type": "string"
                     },
                     "paysage": {
                        "type": "boolean"
                     },
                     "rank": {
                        "type": "string"
                     },
                     "size": {
                        "type": "string"
                     },
                     "type": {
                        "type": "string"
                     },
                     "updatedAt": {
                        "type": "date",
                        "format": "dateOptionalTime","enabled": false
                     },
                     "width": {
                        "type": "string"
                     }
                  }
               },
               "ingrediant": {
                  "properties": {
                     "activeComent": {
                        "type": "boolean"
                     },
                     "content": {
                        "type": "string", "analyzer":"french"
                     },
                     "contentType": {
                        "type": "string"
                     },
                     "createdAt": {
                        "type": "date",
                        "format": "dateOptionalTime","enabled": false
                     },
                     "date": {
                        "type": "date",
                        "format": "dateOptionalTime"
                     },
                     "fabricant": {
                        "type": "string"
                     },
                     "id": {
                        "type": "string"
                     },
                     "initialPrice": {
                        "type": "long"
                     },
                     "isPaiContent": {
                        "type": "boolean"
                     },
                     "lang": {
                        "type": "string"
                     },
                     "name": {
                        "type": "string"
                     },
                     "nbPoints": {
                        "type": "long"
                     },
                     "nbView": {
                        "type": "long"
                     },
                     "privateContent": {
                        "type": "boolean"
                     },
                     "solded": {
                        "type": "boolean","enabled": false
                     },
                     "status": {
                        "type": "string"
                     },
                     "title": {
                        "type": "string", "analyzer":"french"
                     },
                     "updatedAt": {
                        "type": "date",
                        "format": "dateOptionalTime","enabled": false
                     },
                     "validate": {
                        "type": "boolean"
                     }
                  }
               },
               "isPaiContent": {
                  "type": "boolean"
               },
               "lang": {
                  "type": "string"
               },
               "lat": {
                  "type": "string"
               },
               "lng": {
                  "type": "string"
               },
               "name": {
                  "type": "string"
               },
               "nbPoints": {
                  "type": "long","enabled": false
               },
               "nbView": {
                  "type": "long"
               },
               "phone": {
                  "type": "string"
               },
               "privateContent": {
                  "type": "boolean"
               },
               "solded": {
                  "type": "boolean","enabled": false
               },
               "status": {
                  "type": "string"
               },
               "tags": {
                  "properties": {
                     "createdAt": {
                        "type": "date",
                        "format": "dateOptionalTime","enabled": false
                     },
                     "id": {
                        "type": "string"
                     },
                     "nbArticles": {
                        "type": "string","enabled": false
                     },
                     "nbDocuments": {
                        "type": "string","enabled": false
                     },
                     "nbEvents": {
                        "type": "string","enabled": false
                     },
                     "nbFabricants": {
                        "type": "string","enabled": false
                     },
                     "nbIngrediants": {
                        "type": "string","enabled": false
                     },
                     "nbProjects": {
                        "type": "string","enabled": false
                     },
                     "text": {
                        "type": "string"
                     },
                     "total": {
                        "type": "string"
                     },
                     "updatedAt": {
                        "type": "date",
                        "format": "dateOptionalTime","enabled": false
                     }
                  }
               },
               "title": {
                  "type": "string", "analyzer":"french"
               },
               "updatedAt": {
                  "type": "date",
                  "format": "dateOptionalTime","enabled": false
               },
               "validate": {
                  "type": "boolean"
               },
               "videoHost": {
                  "type": "string"
               },
               "videoUrl": {
                  "type": "string"
               },
               "ville": {
                  "type": "string"
               },
               "website": {
                  "type": "string"
               }
            }
         },
         "image": {
            "properties": {
               "alt": {
                  "type": "string"
               },
               "createdAt": {
                  "type": "date",
                  "format": "dateOptionalTime"
               },
               "filename": {
                  "type": "string"
               },
               "height": {
                  "type": "string"
               },
               "id": {
                  "type": "string"
               },
               "name": {
                  "type": "string"
               },
               "paysage": {
                  "type": "boolean"
               },
               "rank": {
                  "type": "string"
               },
               "size": {
                  "type": "string"
               },
               "type": {
                  "type": "string"
               },
               "updatedAt": {
                  "type": "date",
                  "format": "dateOptionalTime"
               },
               "width": {
                  "type": "string"
               }
            }
         }
      }
   }
}












