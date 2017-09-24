{
"mappings": {
   "category": {
      "dynamic": false,
      "properties": {
         "color": {
            "type": "keyword"
           
         },
         "createdAt": {
            "type": "date"
         },
         "id": {
            "type": "keyword"
            
         },
         "name": {
            "type": "text",
            "analyzer":"french",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "nbArticles": {
            "type": "long"
         },
         "nbEvents": {
            "type": "long"
         },
         "nbFabricants": {
            "type": "long"
         },
         "nbIngrediants": {
            "type": "long"
         },
         "nbProjects": {
            "type": "long"
         },
         "textColor": {
            "type": "keyword"
         },
         "total": {
            "type": "long"
         },
         "updatedAt": {
            "type": "date"
         }
      }
   },
   "image": {
      "dynamic": false,
      "properties": {
         "alt": {
            "type": "text",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "createdAt": {
            "type": "date"
         },
         "filename": {
            "type": "keyword"
         },
         "height": {
            "type": "long"
         },
         "id": {
            "type": "keyword"
         },
         "name": {
            "type": "text",
            "analyzer":"french",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "paysage": {
            "type": "boolean"
         },
         "rank": {
            "type": "long"
         },
         "size": {
            "type": "long"
         },
         "type": {
            "type": "keyword"
         },
         "updatedAt": {
            "type": "date"
         },
         "width": {
            "type": "long"
         }
      }
   },
   "ingrediant": {
      "dynamic": false,
      "properties": {
         "categories": {
            "properties": {
               "name": {
                  "boost": 2,
                  "type": "text",
                  "analyzer":"french",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               }
            }
         },
         "content": {
            "type": "text",
            "analyzer":"french"
         },
         "createdAt": {
            "type": "date"
         },
         "date": {
            "type": "date"
         },
         "documents": {
            "properties": {
               "description": {
                  "type": "text",
                  "analyzer":"french"
               },
               "name": {
                  "type": "text",
                  "analyzer":"french",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               }
            }
         },
         "fabricant": {
            "properties": {
               
               "country": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "isPaiContent": {
                  "type": "boolean"
               },
               "name": {
                  "type": "text",
                  "analyzer":"french",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "status": {
                  "type": "keyword"
               }
            }
         },
         "id": {
            "type": "keyword"
         },
         "images": {
            "properties": {
               "alt": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "name": {
                  "type": "text",
                  "analyzer":"french",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               }
            }
         },
         "isPaiContent": {
            "type": "boolean"
         },
         "name": {
            "type": "text",
            "analyzer":"french",
            "index_options": "offsets",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "nbPoints": {
            "type": "long"
         },
         "nbView": {
            "type": "long"
         },
         "solded": {
            "type": "boolean"
         },
         "status": {
            "type": "keyword"
         },
         "tags": {
            "properties": {
              
               "id": {
                  "type": "keyword"
               },
               "text": {
                  "type": "text",
                  "analyzer":"french",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               }
            }
         },
         "updatedAt": {
            "type": "date"
         }
      }
   },
   "user": {
      "dynamic": false,
      "properties": {
         "createdAt": {
            "type": "date"
         },
         "email": {
            "type": "text",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "firstname": {
            "type": "text",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "id": {
            "type": "keyword"
         },
         "lastActivity": {
            "type": "date"
         },
         "name": {
            "type": "text",
            "analyzer":"french",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "nbArticles": {
            "type": "long"
         },
         "nbCollabsPoints": {
            "type": "long"
         },
         "nbCollabsPointsTotal": {
            "type": "long"
         },
         "nbFabricants": {
            "type": "long"
         },
         "nbIngrediants": {
            "type": "long"
         },
         "nbProjects": {
            "type": "long"
         },
         
         "redCards": {
            "type": "long"
         },
         "role": {
            "type": "keyword"
         },
         "theme": {
            "type": "keyword"
         },
         "total": {
            "type": "long"
         },
         "updatedAt": {
            "type": "date"
         },
         "yellowCards": {
            "type": "long"
         }
      }
   },
   "document": {
      "dynamic": false,
      "properties": {
         "createdAt": {
            "type": "date"
         },
         "date": {
            "type": "date"
         },
         "description": {
            "type": "text",
            "analyzer":"french",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "filename": {
            "type": "keyword"
         },
         "id": {
            "type": "keyword"
         },
         "name": {
            "type": "text",
            "analyzer":"french",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "nbDowload": {
            "type": "long"
         },
         "size": {
            "type": "long"
         },
         "type": {
            "type": "keyword"
         },
         "updatedAt": {
            "type": "date"
         }
      }
   },
   "article": {
      "dynamic": false,
      "properties": {
         "activeComent": {
            "type": "boolean"
         },
         "authors": {
            "properties": {
               "firstname": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "id": {
                  "type": "keyword"
               },
               "name": {
                  "type": "text",
                  "analyzer":"french",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               }
            }
         },
         "categories": {
            "properties": {
               "name": {
                  "boost": 2,
                  "type": "text",
                  "analyzer":"french",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               }
            }
         },
         "content": {
            "type": "text",
            "analyzer":"french"
         },
         "contentType": {
            "type": "keyword"
         },
         "createdAt": {
            "type": "date"
         },
         "date": {
            "type": "date"
         },
         "description": {
            "type": "text",
            "analyzer":"french",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "documents": {
            "properties": {
               "description": {
                  "type": "text",
                  "analyzer":"french"
               },
               "name": {
                  "type": "text",
                  "analyzer":"french",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               }
            }
         },
         "id": {
            "type": "keyword"
         },
         "images": {
            "properties": {
               "alt": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "name": {
                  "type": "text",
                  "analyzer":"french",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               }
            }
         },
         "isPaiContent": {
            "type": "boolean"
         },
         "keyword": {
            "type": "text",
            "analyzer":"french" 
         },
         "link": {
            "type": "text",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
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
         "status": {
            "type": "keyword"
         },
         "tags": {
            "properties": {
              
               "id": {
                  "type": "keyword"
               },
               "text": {
                  "type": "text",
                  "analyzer":"french",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               }
            }
         },
         "title": {
            "type": "text",
            "analyzer":"french",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "updatedAt": {
            "type": "date"
         }
      }
   },
   "tag": {
      "dynamic": false,
      "properties": {
         "createdAt": {
            "type": "date"
         },
         "id": {
            "type": "keyword"
         },
         "nbArticles": {
            "type": "long"
         },
         "nbDocuments": {
            "type": "long"
         },
         "nbEvents": {
            "type": "long"
         },
         "nbFabricants": {
            "type": "long"
         },
         "nbIngrediants": {
            "type": "long"
         },
         "nbProjects": {
            "type": "long"
         },
         "text": {
            "type": "text",
            "analyzer":"french",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "total": {
            "type": "long"
         },
         "updatedAt": {
            "type": "date"
         }
      }
   },
   "fabricant": {
      "dynamic": false,
      "properties": {
         "adress": {
            "type": "text",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "categories": {
            "properties": {
               "name": {
                  "boost": 2,
                  "type": "text",
                  "analyzer":"french",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               }
            }
         },
         "content": {
            "type": "text",
            "analyzer":"french"
         },
         "country": {
            "type": "keyword"
         },
         "cp": {
            "type": "keyword"
         },
         "createdAt": {
            "type": "date"
         },
         "date": {
            "type": "date"
         },
         "documents": {
            "properties": {
               "description": {
                  "type": "text",
                  "analyzer":"french"
               },
               "name": {
                  "type": "text",
                  "analyzer":"french",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               }
            }
         },
         "id": {
            "type": "keyword"
         },
         "images": {
            "properties": {
               "alt": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "name": {
                  "type": "text",
                  "analyzer":"french",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               }
            }
         },
         "isPaiContent": {
            "type": "boolean"
         },
         "lat": {
            "type": "double"
         },
         "lng": {
            "type": "double"
         },
         "name": {
            "type": "text",
            "analyzer":"french",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "nbPoints": {
            "type": "long"
         },
         "nbView": {
            "type": "long"
         },
         "phone": {
            "type": "keyword"
         },
         "solded": {
            "type": "boolean"
         },
         "status": {
            "type": "keyword"
         },
         "tags": {
            "properties": {
              
               "id": {
                  "type": "keyword"
               },
               "text": {
                  "type": "text",
                  "analyzer":"french",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               }
            }
         },
         "updatedAt": {
            "type": "date"
         },
         "ville": {
            "type": "keyword"
         },
         "website": {
            "type": "keyword"
         }
      }
   },
   "event": {
      "dynamic": false,
      "properties": {
         "categories": {
            "properties": {
               "name": {
                  "boost": 2,
                  "type": "text",
                  "analyzer":"french",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               }
            }
         },
         "content": {
            "type": "text",
            "analyzer":"french"
           
         },
         "contentType": {
            "type": "keyword"
         },
         "createdAt": {
            "type": "date"
         },
         "endsAt": {
            "type": "date"
         },
         "id": {
            "type": "keyword"
         },
         "isPaiContent": {
            "type": "boolean"
         },
         "link": {
            "type": "text",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
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
            "type": "date"
         },
         "status": {
            "type": "keyword"
         },
         
         "tags": {
            "properties": {
              
               "id": {
                  "type": "keyword"
               },
               "text": {
                  "type": "text",
                  "analyzer":"french",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               }
            }
         },
         "title": {
            "type": "text",
            "analyzer":"french",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "updatedAt": {
            "type": "date"
         },
         "validate": {
            "type": "boolean"
         }
      }
   },
   "project": {
      "dynamic": false,
      "properties": {
         "activeComent": {
            "type": "boolean"
         },
          "authors": {
            "properties": {
               "firstname": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "id": {
                  "type": "keyword"
               },
               "name": {
                  "type": "text",
                  "analyzer":"french",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               }
            }
         },
         "categories": {
            "properties": {
               "name": {
                  "boost": 2,
                  "type": "text",
                  "analyzer":"french",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               }
            }
         },
         "content": {
            "type": "text",
            "analyzer":"french"
         },
         "contentType": {
            "type": "keyword"
         },
         "createdAt": {
            "type": "date"
         },
         "date": {
            "type": "date"
         },
         "description": {
            "type": "text",
            "analyzer":"french",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "documents": {
            "properties": {
               "description": {
                  "type": "text",
                  "analyzer":"french"
               },
               "name": {
                  "type": "text",
                  "analyzer":"french",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               }
            }
         },
         "id": {
            "type": "keyword"
         },
         "images": {
            "properties": {
               "alt": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "name": {
                  "type": "text",
                  "analyzer":"french",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               }
            }
         },
         "isPaiContent": {
            "type": "boolean"
         },
         "initialPrice": {
            "type": "long"
         },
         "keyword": {
            "type": "text",
            "analyzer":"french" 
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
         "status": {
            "type": "keyword"
         },
         "tags": {
            "properties": {
              
               "id": {
                  "type": "keyword"
               },
               "text": {
                  "type": "text",
                  "analyzer":"french",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               }
            }
         },
         "title": {
            "type": "text",
            "analyzer":"french",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "updatedAt": {
            "type": "date"
         }
         
      }
   }
}
}

