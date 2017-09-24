
{
"mappings": {
   "event": {
      "properties": {
         "authors": {
            "properties": {
               "createdAt": {
                  "type": "date"
               },
               "dashboard": {
                  "properties": {
                     "analyticsWidget": {
                        "properties": {
                           "col": {
                              "type": "long"
                           },
                           "enabled": {
                              "type": "boolean"
                           },
                           "html": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "maxSizeX": {
                              "type": "long"
                           },
                           "maxSizeY": {
                              "type": "long"
                           },
                           "minSizeX": {
                              "type": "long"
                           },
                           "minSizeY": {
                              "type": "long"
                           },
                           "noresize": {
                              "type": "boolean"
                           },
                           "publicName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "required": {
                              "type": "boolean"
                           },
                           "row": {
                              "type": "long"
                           },
                           "sizeX": {
                              "type": "long"
                           },
                           "sizeY": {
                              "type": "long"
                           },
                           "transparent": {
                              "type": "boolean"
                           },
                           "widgetName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           }
                        }
                     },
                     "categorycloudWidget": {
                        "properties": {
                           "col": {
                              "type": "long"
                           },
                           "enabled": {
                              "type": "boolean"
                           },
                           "html": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "maxSizeX": {
                              "type": "long"
                           },
                           "maxSizeY": {
                              "type": "long"
                           },
                           "minSizeX": {
                              "type": "long"
                           },
                           "minSizeY": {
                              "type": "long"
                           },
                           "noresize": {
                              "type": "boolean"
                           },
                           "publicName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "required": {
                              "type": "boolean"
                           },
                           "row": {
                              "type": "long"
                           },
                           "sizeX": {
                              "type": "long"
                           },
                           "sizeY": {
                              "type": "long"
                           },
                           "transparent": {
                              "type": "boolean"
                           },
                           "widgetName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           }
                        }
                     },
                     "dashboardconfigWidget": {
                        "properties": {
                           "col": {
                              "type": "long"
                           },
                           "enabled": {
                              "type": "boolean"
                           },
                           "html": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "maxSizeX": {
                              "type": "long"
                           },
                           "maxSizeY": {
                              "type": "long"
                           },
                           "minSizeX": {
                              "type": "long"
                           },
                           "minSizeY": {
                              "type": "long"
                           },
                           "noresize": {
                              "type": "boolean"
                           },
                           "publicName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "required": {
                              "type": "boolean"
                           },
                           "row": {
                              "type": "long"
                           },
                           "sizeX": {
                              "type": "long"
                           },
                           "sizeY": {
                              "type": "long"
                           },
                           "transparent": {
                              "type": "boolean"
                           },
                           "widgetName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           }
                        }
                     },
                     "lastarticleWidget": {
                        "properties": {
                           "col": {
                              "type": "long"
                           },
                           "enabled": {
                              "type": "boolean"
                           },
                           "html": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "maxSizeX": {
                              "type": "long"
                           },
                           "maxSizeY": {
                              "type": "long"
                           },
                           "minSizeX": {
                              "type": "long"
                           },
                           "minSizeY": {
                              "type": "long"
                           },
                           "noresize": {
                              "type": "boolean"
                           },
                           "publicName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "required": {
                              "type": "boolean"
                           },
                           "row": {
                              "type": "long"
                           },
                           "sizeX": {
                              "type": "long"
                           },
                           "sizeY": {
                              "type": "long"
                           },
                           "transparent": {
                              "type": "boolean"
                           },
                           "widgetName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           }
                        }
                     },
                     "lastprojectWidget": {
                        "properties": {
                           "col": {
                              "type": "long"
                           },
                           "enabled": {
                              "type": "boolean"
                           },
                           "html": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "maxSizeX": {
                              "type": "long"
                           },
                           "maxSizeY": {
                              "type": "long"
                           },
                           "minSizeX": {
                              "type": "long"
                           },
                           "minSizeY": {
                              "type": "long"
                           },
                           "noresize": {
                              "type": "boolean"
                           },
                           "publicName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "required": {
                              "type": "boolean"
                           },
                           "row": {
                              "type": "long"
                           },
                           "sizeX": {
                              "type": "long"
                           },
                           "sizeY": {
                              "type": "long"
                           },
                           "transparent": {
                              "type": "boolean"
                           },
                           "widgetName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           }
                        }
                     },
                     "menuPaiWidget": {
                        "properties": {
                           "col": {
                              "type": "long"
                           },
                           "enabled": {
                              "type": "boolean"
                           },
                           "html": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "maxSizeX": {
                              "type": "long"
                           },
                           "maxSizeY": {
                              "type": "long"
                           },
                           "minSizeX": {
                              "type": "long"
                           },
                           "minSizeY": {
                              "type": "long"
                           },
                           "noresize": {
                              "type": "boolean"
                           },
                           "publicName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "required": {
                              "type": "boolean"
                           },
                           "row": {
                              "type": "long"
                           },
                           "sizeX": {
                              "type": "long"
                           },
                           "sizeY": {
                              "type": "long"
                           },
                           "transparent": {
                              "type": "boolean"
                           },
                           "widgetName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           }
                        }
                     },
                     "menuWidget": {
                        "properties": {
                           "col": {
                              "type": "long"
                           },
                           "enabled": {
                              "type": "boolean"
                           },
                           "html": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "maxSizeX": {
                              "type": "long"
                           },
                           "maxSizeY": {
                              "type": "long"
                           },
                           "minSizeX": {
                              "type": "long"
                           },
                           "minSizeY": {
                              "type": "long"
                           },
                           "noresize": {
                              "type": "boolean"
                           },
                           "publicName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "required": {
                              "type": "boolean"
                           },
                           "row": {
                              "type": "long"
                           },
                           "sizeX": {
                              "type": "long"
                           },
                           "sizeY": {
                              "type": "long"
                           },
                           "transparent": {
                              "type": "boolean"
                           },
                           "widgetName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           }
                        }
                     },
                     "notificationWidget": {
                        "properties": {
                           "col": {
                              "type": "long"
                           },
                           "enabled": {
                              "type": "boolean"
                           },
                           "html": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "maxSizeX": {
                              "type": "long"
                           },
                           "maxSizeY": {
                              "type": "long"
                           },
                           "minSizeX": {
                              "type": "long"
                           },
                           "minSizeY": {
                              "type": "long"
                           },
                           "noresize": {
                              "type": "boolean"
                           },
                           "publicName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "required": {
                              "type": "boolean"
                           },
                           "row": {
                              "type": "long"
                           },
                           "sizeX": {
                              "type": "long"
                           },
                           "sizeY": {
                              "type": "long"
                           },
                           "transparent": {
                              "type": "boolean"
                           },
                           "widgetName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           }
                        }
                     },
                     "profileWidget": {
                        "properties": {
                           "col": {
                              "type": "long"
                           },
                           "enabled": {
                              "type": "boolean"
                           },
                           "html": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "maxSizeX": {
                              "type": "long"
                           },
                           "maxSizeY": {
                              "type": "long"
                           },
                           "minSizeX": {
                              "type": "long"
                           },
                           "minSizeY": {
                              "type": "long"
                           },
                           "noresize": {
                              "type": "boolean"
                           },
                           "publicName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "required": {
                              "type": "boolean"
                           },
                           "row": {
                              "type": "long"
                           },
                           "sizeX": {
                              "type": "long"
                           },
                           "sizeY": {
                              "type": "long"
                           },
                           "transparent": {
                              "type": "boolean"
                           },
                           "widgetName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           }
                        }
                     },
                     "sliderWidget": {
                        "properties": {
                           "col": {
                              "type": "long"
                           },
                           "enabled": {
                              "type": "boolean"
                           },
                           "html": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "maxSizeX": {
                              "type": "long"
                           },
                           "maxSizeY": {
                              "type": "long"
                           },
                           "minSizeX": {
                              "type": "long"
                           },
                           "minSizeY": {
                              "type": "long"
                           },
                           "noresize": {
                              "type": "boolean"
                           },
                           "publicName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "required": {
                              "type": "boolean"
                           },
                           "row": {
                              "type": "long"
                           },
                           "sizeX": {
                              "type": "long"
                           },
                           "sizeY": {
                              "type": "long"
                           },
                           "transparent": {
                              "type": "boolean"
                           },
                           "widgetName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           }
                        }
                     },
                     "tagcloudWidget": {
                        "properties": {
                           "col": {
                              "type": "long"
                           },
                           "enabled": {
                              "type": "boolean"
                           },
                           "html": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "maxSizeX": {
                              "type": "long"
                           },
                           "maxSizeY": {
                              "type": "long"
                           },
                           "minSizeX": {
                              "type": "long"
                           },
                           "minSizeY": {
                              "type": "long"
                           },
                           "noresize": {
                              "type": "boolean"
                           },
                           "publicName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "required": {
                              "type": "boolean"
                           },
                           "row": {
                              "type": "long"
                           },
                           "sizeX": {
                              "type": "long"
                           },
                           "sizeY": {
                              "type": "long"
                           },
                           "transparent": {
                              "type": "boolean"
                           },
                           "widgetName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           }
                        }
                     },
                     "titleDashWidget": {
                        "properties": {
                           "col": {
                              "type": "long"
                           },
                           "enabled": {
                              "type": "boolean"
                           },
                           "html": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "maxSizeX": {
                              "type": "long"
                           },
                           "maxSizeY": {
                              "type": "long"
                           },
                           "minSizeX": {
                              "type": "long"
                           },
                           "minSizeY": {
                              "type": "long"
                           },
                           "noresize": {
                              "type": "boolean"
                           },
                           "publicName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "required": {
                              "type": "boolean"
                           },
                           "row": {
                              "type": "long"
                           },
                           "sizeX": {
                              "type": "long"
                           },
                           "sizeY": {
                              "type": "long"
                           },
                           "transparent": {
                              "type": "boolean"
                           },
                           "widgetName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           }
                        }
                     }
                  }
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
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "lastActivity": {
                  "type": "date"
               },
               "name": {
                  "type": "text",
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
               "password": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "redCards": {
                  "type": "long"
               },
               "role": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "theme": {
                  "type": "text",
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
               },
               "yellowCards": {
                  "type": "long"
               }
            }
         },
         "categories": {
            "properties": {
               "color": {
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
               "id": {
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
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "nbArticles": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "nbEvents": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "nbFabricants": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "nbIngrediants": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "nbProjects": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "textColor": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "total": {
                  "type": "text",
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
         "content": {
            "type": "text",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "contentType": {
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
         "endsAt": {
            "type": "date"
         },
         "id": {
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
         "lang": {
            "type": "text",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
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
            "type": "text",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "tags": {
            "properties": {
               "createdAt": {
                  "type": "date"
               },
               "id": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "nbArticles": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "nbDocuments": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "nbEvents": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "nbFabricants": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "nbIngrediants": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "nbProjects": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "text": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "total": {
                  "type": "text",
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
         "title": {
            "type": "text",
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
   "article": {
      "properties": {
         "activeComent": {
            "type": "boolean"
         },
         "authors": {
            "properties": {
               "createdAt": {
                  "type": "date"
               },
               "dashboard": {
                  "properties": {
                     "analyticsWidget": {
                        "properties": {
                           "col": {
                              "type": "long"
                           },
                           "enabled": {
                              "type": "boolean"
                           },
                           "html": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "maxSizeX": {
                              "type": "long"
                           },
                           "maxSizeY": {
                              "type": "long"
                           },
                           "minSizeX": {
                              "type": "long"
                           },
                           "minSizeY": {
                              "type": "long"
                           },
                           "noresize": {
                              "type": "boolean"
                           },
                           "publicName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "required": {
                              "type": "boolean"
                           },
                           "row": {
                              "type": "long"
                           },
                           "sizeX": {
                              "type": "long"
                           },
                           "sizeY": {
                              "type": "long"
                           },
                           "transparent": {
                              "type": "boolean"
                           },
                           "widgetName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           }
                        }
                     },
                     "categorycloudWidget": {
                        "properties": {
                           "col": {
                              "type": "long"
                           },
                           "enabled": {
                              "type": "boolean"
                           },
                           "html": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "maxSizeX": {
                              "type": "long"
                           },
                           "maxSizeY": {
                              "type": "long"
                           },
                           "minSizeX": {
                              "type": "long"
                           },
                           "minSizeY": {
                              "type": "long"
                           },
                           "noresize": {
                              "type": "boolean"
                           },
                           "publicName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "required": {
                              "type": "boolean"
                           },
                           "row": {
                              "type": "long"
                           },
                           "sizeX": {
                              "type": "long"
                           },
                           "sizeY": {
                              "type": "long"
                           },
                           "transparent": {
                              "type": "boolean"
                           },
                           "widgetName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           }
                        }
                     },
                     "dashboardconfigWidget": {
                        "properties": {
                           "col": {
                              "type": "long"
                           },
                           "enabled": {
                              "type": "boolean"
                           },
                           "html": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "maxSizeX": {
                              "type": "long"
                           },
                           "maxSizeY": {
                              "type": "long"
                           },
                           "minSizeX": {
                              "type": "long"
                           },
                           "minSizeY": {
                              "type": "long"
                           },
                           "noresize": {
                              "type": "boolean"
                           },
                           "publicName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "required": {
                              "type": "boolean"
                           },
                           "row": {
                              "type": "long"
                           },
                           "sizeX": {
                              "type": "long"
                           },
                           "sizeY": {
                              "type": "long"
                           },
                           "transparent": {
                              "type": "boolean"
                           },
                           "widgetName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           }
                        }
                     },
                     "lastarticleWidget": {
                        "properties": {
                           "col": {
                              "type": "long"
                           },
                           "enabled": {
                              "type": "boolean"
                           },
                           "html": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "maxSizeX": {
                              "type": "long"
                           },
                           "maxSizeY": {
                              "type": "long"
                           },
                           "minSizeX": {
                              "type": "long"
                           },
                           "minSizeY": {
                              "type": "long"
                           },
                           "noresize": {
                              "type": "boolean"
                           },
                           "publicName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "required": {
                              "type": "boolean"
                           },
                           "row": {
                              "type": "long"
                           },
                           "sizeX": {
                              "type": "long"
                           },
                           "sizeY": {
                              "type": "long"
                           },
                           "transparent": {
                              "type": "boolean"
                           },
                           "widgetName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           }
                        }
                     },
                     "lastprojectWidget": {
                        "properties": {
                           "col": {
                              "type": "long"
                           },
                           "enabled": {
                              "type": "boolean"
                           },
                           "html": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "maxSizeX": {
                              "type": "long"
                           },
                           "maxSizeY": {
                              "type": "long"
                           },
                           "minSizeX": {
                              "type": "long"
                           },
                           "minSizeY": {
                              "type": "long"
                           },
                           "noresize": {
                              "type": "boolean"
                           },
                           "publicName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "required": {
                              "type": "boolean"
                           },
                           "row": {
                              "type": "long"
                           },
                           "sizeX": {
                              "type": "long"
                           },
                           "sizeY": {
                              "type": "long"
                           },
                           "transparent": {
                              "type": "boolean"
                           },
                           "widgetName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           }
                        }
                     },
                     "menuPaiWidget": {
                        "properties": {
                           "col": {
                              "type": "long"
                           },
                           "enabled": {
                              "type": "boolean"
                           },
                           "html": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "maxSizeX": {
                              "type": "long"
                           },
                           "maxSizeY": {
                              "type": "long"
                           },
                           "minSizeX": {
                              "type": "long"
                           },
                           "minSizeY": {
                              "type": "long"
                           },
                           "noresize": {
                              "type": "boolean"
                           },
                           "publicName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "required": {
                              "type": "boolean"
                           },
                           "row": {
                              "type": "long"
                           },
                           "sizeX": {
                              "type": "long"
                           },
                           "sizeY": {
                              "type": "long"
                           },
                           "transparent": {
                              "type": "boolean"
                           },
                           "widgetName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           }
                        }
                     },
                     "menuWidget": {
                        "properties": {
                           "col": {
                              "type": "long"
                           },
                           "enabled": {
                              "type": "boolean"
                           },
                           "html": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "maxSizeX": {
                              "type": "long"
                           },
                           "maxSizeY": {
                              "type": "long"
                           },
                           "minSizeX": {
                              "type": "long"
                           },
                           "minSizeY": {
                              "type": "long"
                           },
                           "noresize": {
                              "type": "boolean"
                           },
                           "publicName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "required": {
                              "type": "boolean"
                           },
                           "row": {
                              "type": "long"
                           },
                           "sizeX": {
                              "type": "long"
                           },
                           "sizeY": {
                              "type": "long"
                           },
                           "transparent": {
                              "type": "boolean"
                           },
                           "widgetName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           }
                        }
                     },
                     "notificationWidget": {
                        "properties": {
                           "col": {
                              "type": "long"
                           },
                           "enabled": {
                              "type": "boolean"
                           },
                           "html": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "maxSizeX": {
                              "type": "long"
                           },
                           "maxSizeY": {
                              "type": "long"
                           },
                           "minSizeX": {
                              "type": "long"
                           },
                           "minSizeY": {
                              "type": "long"
                           },
                           "noresize": {
                              "type": "boolean"
                           },
                           "publicName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "required": {
                              "type": "boolean"
                           },
                           "row": {
                              "type": "long"
                           },
                           "sizeX": {
                              "type": "long"
                           },
                           "sizeY": {
                              "type": "long"
                           },
                           "transparent": {
                              "type": "boolean"
                           },
                           "widgetName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           }
                        }
                     },
                     "profileWidget": {
                        "properties": {
                           "col": {
                              "type": "long"
                           },
                           "enabled": {
                              "type": "boolean"
                           },
                           "html": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "maxSizeX": {
                              "type": "long"
                           },
                           "maxSizeY": {
                              "type": "long"
                           },
                           "minSizeX": {
                              "type": "long"
                           },
                           "minSizeY": {
                              "type": "long"
                           },
                           "noresize": {
                              "type": "boolean"
                           },
                           "publicName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "required": {
                              "type": "boolean"
                           },
                           "row": {
                              "type": "long"
                           },
                           "sizeX": {
                              "type": "long"
                           },
                           "sizeY": {
                              "type": "long"
                           },
                           "transparent": {
                              "type": "boolean"
                           },
                           "widgetName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           }
                        }
                     },
                     "sliderWidget": {
                        "properties": {
                           "col": {
                              "type": "long"
                           },
                           "enabled": {
                              "type": "boolean"
                           },
                           "html": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "maxSizeX": {
                              "type": "long"
                           },
                           "maxSizeY": {
                              "type": "long"
                           },
                           "minSizeX": {
                              "type": "long"
                           },
                           "minSizeY": {
                              "type": "long"
                           },
                           "noresize": {
                              "type": "boolean"
                           },
                           "publicName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "required": {
                              "type": "boolean"
                           },
                           "row": {
                              "type": "long"
                           },
                           "sizeX": {
                              "type": "long"
                           },
                           "sizeY": {
                              "type": "long"
                           },
                           "transparent": {
                              "type": "boolean"
                           },
                           "widgetName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           }
                        }
                     },
                     "tagcloudWidget": {
                        "properties": {
                           "col": {
                              "type": "long"
                           },
                           "enabled": {
                              "type": "boolean"
                           },
                           "html": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "maxSizeX": {
                              "type": "long"
                           },
                           "maxSizeY": {
                              "type": "long"
                           },
                           "minSizeX": {
                              "type": "long"
                           },
                           "minSizeY": {
                              "type": "long"
                           },
                           "noresize": {
                              "type": "boolean"
                           },
                           "publicName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "required": {
                              "type": "boolean"
                           },
                           "row": {
                              "type": "long"
                           },
                           "sizeX": {
                              "type": "long"
                           },
                           "sizeY": {
                              "type": "long"
                           },
                           "transparent": {
                              "type": "boolean"
                           },
                           "widgetName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           }
                        }
                     },
                     "titleDashWidget": {
                        "properties": {
                           "col": {
                              "type": "long"
                           },
                           "enabled": {
                              "type": "boolean"
                           },
                           "html": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "maxSizeX": {
                              "type": "long"
                           },
                           "maxSizeY": {
                              "type": "long"
                           },
                           "minSizeX": {
                              "type": "long"
                           },
                           "minSizeY": {
                              "type": "long"
                           },
                           "noresize": {
                              "type": "boolean"
                           },
                           "publicName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "required": {
                              "type": "boolean"
                           },
                           "row": {
                              "type": "long"
                           },
                           "sizeX": {
                              "type": "long"
                           },
                           "sizeY": {
                              "type": "long"
                           },
                           "transparent": {
                              "type": "boolean"
                           },
                           "widgetName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           }
                        }
                     }
                  }
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
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "lastActivity": {
                  "type": "date"
               },
               "name": {
                  "type": "text",
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
               "password": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "redCards": {
                  "type": "long"
               },
               "role": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "theme": {
                  "type": "text",
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
               },
               "yellowCards": {
                  "type": "long"
               }
            }
         },
         "categories": {
            "properties": {
               "color": {
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
               "id": {
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
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "nbArticles": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "nbEvents": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "nbFabricants": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "nbIngrediants": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "nbProjects": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "textColor": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "total": {
                  "type": "text",
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
         "content": {
            "type": "text",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "contentType": {
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
         "date": {
            "type": "date"
         },
         "description": {
            "type": "text",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "documents": {
            "properties": {
               "createdAt": {
                  "type": "date"
               },
               "date": {
                  "type": "date"
               },
               "description": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "filename": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "id": {
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
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "nbDowload": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "size": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "type": {
                  "type": "text",
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
         "id": {
            "type": "text",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
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
               "createdAt": {
                  "type": "date"
               },
               "filename": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "height": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "id": {
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
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "size": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "type": {
                  "type": "text",
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
               "width": {
                  "type": "text",
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
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "lang": {
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
         "rewriteurl": {
            "type": "text",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "solded": {
            "type": "boolean"
         },
         "status": {
            "type": "text",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "tags": {
            "properties": {
               "createdAt": {
                  "type": "date"
               },
               "id": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "nbArticles": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "nbDocuments": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "nbEvents": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "nbFabricants": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "nbIngrediants": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "nbProjects": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "text": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "total": {
                  "type": "text",
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
         "title": {
            "type": "text",
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
         "videoHost": {
            "type": "text",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "videoUrl": {
            "type": "text",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         }
      }
   },
   "tag": {
      "properties": {
         "createdAt": {
            "type": "date"
         },
         "id": {
            "type": "text",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "nbArticles": {
            "type": "text",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "nbDocuments": {
            "type": "text",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "nbEvents": {
            "type": "text",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "nbFabricants": {
            "type": "text",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "nbIngrediants": {
            "type": "text",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "nbProjects": {
            "type": "text",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "text": {
            "type": "text",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "total": {
            "type": "text",
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
   "fabricant": {
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
         "authors": {
            "properties": {
               "createdAt": {
                  "type": "date"
               },
               "dashboard": {
                  "properties": {
                     "analyticsWidget": {
                        "properties": {
                           "col": {
                              "type": "long"
                           },
                           "enabled": {
                              "type": "boolean"
                           },
                           "html": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "maxSizeX": {
                              "type": "long"
                           },
                           "maxSizeY": {
                              "type": "long"
                           },
                           "minSizeX": {
                              "type": "long"
                           },
                           "minSizeY": {
                              "type": "long"
                           },
                           "noresize": {
                              "type": "boolean"
                           },
                           "publicName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "required": {
                              "type": "boolean"
                           },
                           "row": {
                              "type": "long"
                           },
                           "sizeX": {
                              "type": "long"
                           },
                           "sizeY": {
                              "type": "long"
                           },
                           "transparent": {
                              "type": "boolean"
                           },
                           "widgetName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           }
                        }
                     },
                     "categorycloudWidget": {
                        "properties": {
                           "col": {
                              "type": "long"
                           },
                           "enabled": {
                              "type": "boolean"
                           },
                           "html": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "maxSizeX": {
                              "type": "long"
                           },
                           "maxSizeY": {
                              "type": "long"
                           },
                           "minSizeX": {
                              "type": "long"
                           },
                           "minSizeY": {
                              "type": "long"
                           },
                           "noresize": {
                              "type": "boolean"
                           },
                           "publicName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "required": {
                              "type": "boolean"
                           },
                           "row": {
                              "type": "long"
                           },
                           "sizeX": {
                              "type": "long"
                           },
                           "sizeY": {
                              "type": "long"
                           },
                           "transparent": {
                              "type": "boolean"
                           },
                           "widgetName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           }
                        }
                     },
                     "dashboardconfigWidget": {
                        "properties": {
                           "col": {
                              "type": "long"
                           },
                           "enabled": {
                              "type": "boolean"
                           },
                           "html": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "maxSizeX": {
                              "type": "long"
                           },
                           "maxSizeY": {
                              "type": "long"
                           },
                           "minSizeX": {
                              "type": "long"
                           },
                           "minSizeY": {
                              "type": "long"
                           },
                           "noresize": {
                              "type": "boolean"
                           },
                           "publicName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "required": {
                              "type": "boolean"
                           },
                           "row": {
                              "type": "long"
                           },
                           "sizeX": {
                              "type": "long"
                           },
                           "sizeY": {
                              "type": "long"
                           },
                           "transparent": {
                              "type": "boolean"
                           },
                           "widgetName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           }
                        }
                     },
                     "lastarticleWidget": {
                        "properties": {
                           "col": {
                              "type": "long"
                           },
                           "enabled": {
                              "type": "boolean"
                           },
                           "html": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "maxSizeX": {
                              "type": "long"
                           },
                           "maxSizeY": {
                              "type": "long"
                           },
                           "minSizeX": {
                              "type": "long"
                           },
                           "minSizeY": {
                              "type": "long"
                           },
                           "noresize": {
                              "type": "boolean"
                           },
                           "publicName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "required": {
                              "type": "boolean"
                           },
                           "row": {
                              "type": "long"
                           },
                           "sizeX": {
                              "type": "long"
                           },
                           "sizeY": {
                              "type": "long"
                           },
                           "transparent": {
                              "type": "boolean"
                           },
                           "widgetName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           }
                        }
                     },
                     "lastprojectWidget": {
                        "properties": {
                           "col": {
                              "type": "long"
                           },
                           "enabled": {
                              "type": "boolean"
                           },
                           "html": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "maxSizeX": {
                              "type": "long"
                           },
                           "maxSizeY": {
                              "type": "long"
                           },
                           "minSizeX": {
                              "type": "long"
                           },
                           "minSizeY": {
                              "type": "long"
                           },
                           "noresize": {
                              "type": "boolean"
                           },
                           "publicName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "required": {
                              "type": "boolean"
                           },
                           "row": {
                              "type": "long"
                           },
                           "sizeX": {
                              "type": "long"
                           },
                           "sizeY": {
                              "type": "long"
                           },
                           "transparent": {
                              "type": "boolean"
                           },
                           "widgetName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           }
                        }
                     },
                     "menuPaiWidget": {
                        "properties": {
                           "col": {
                              "type": "long"
                           },
                           "enabled": {
                              "type": "boolean"
                           },
                           "html": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "maxSizeX": {
                              "type": "long"
                           },
                           "maxSizeY": {
                              "type": "long"
                           },
                           "minSizeX": {
                              "type": "long"
                           },
                           "minSizeY": {
                              "type": "long"
                           },
                           "noresize": {
                              "type": "boolean"
                           },
                           "publicName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "required": {
                              "type": "boolean"
                           },
                           "row": {
                              "type": "long"
                           },
                           "sizeX": {
                              "type": "long"
                           },
                           "sizeY": {
                              "type": "long"
                           },
                           "transparent": {
                              "type": "boolean"
                           },
                           "widgetName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           }
                        }
                     },
                     "menuWidget": {
                        "properties": {
                           "col": {
                              "type": "long"
                           },
                           "enabled": {
                              "type": "boolean"
                           },
                           "html": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "maxSizeX": {
                              "type": "long"
                           },
                           "maxSizeY": {
                              "type": "long"
                           },
                           "minSizeX": {
                              "type": "long"
                           },
                           "minSizeY": {
                              "type": "long"
                           },
                           "noresize": {
                              "type": "boolean"
                           },
                           "publicName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "required": {
                              "type": "boolean"
                           },
                           "row": {
                              "type": "long"
                           },
                           "sizeX": {
                              "type": "long"
                           },
                           "sizeY": {
                              "type": "long"
                           },
                           "transparent": {
                              "type": "boolean"
                           },
                           "widgetName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           }
                        }
                     },
                     "notificationWidget": {
                        "properties": {
                           "col": {
                              "type": "long"
                           },
                           "enabled": {
                              "type": "boolean"
                           },
                           "html": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "maxSizeX": {
                              "type": "long"
                           },
                           "maxSizeY": {
                              "type": "long"
                           },
                           "minSizeX": {
                              "type": "long"
                           },
                           "minSizeY": {
                              "type": "long"
                           },
                           "noresize": {
                              "type": "boolean"
                           },
                           "publicName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "required": {
                              "type": "boolean"
                           },
                           "row": {
                              "type": "long"
                           },
                           "sizeX": {
                              "type": "long"
                           },
                           "sizeY": {
                              "type": "long"
                           },
                           "transparent": {
                              "type": "boolean"
                           },
                           "widgetName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           }
                        }
                     },
                     "profileWidget": {
                        "properties": {
                           "col": {
                              "type": "long"
                           },
                           "enabled": {
                              "type": "boolean"
                           },
                           "html": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "maxSizeX": {
                              "type": "long"
                           },
                           "maxSizeY": {
                              "type": "long"
                           },
                           "minSizeX": {
                              "type": "long"
                           },
                           "minSizeY": {
                              "type": "long"
                           },
                           "noresize": {
                              "type": "boolean"
                           },
                           "publicName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "required": {
                              "type": "boolean"
                           },
                           "row": {
                              "type": "long"
                           },
                           "sizeX": {
                              "type": "long"
                           },
                           "sizeY": {
                              "type": "long"
                           },
                           "transparent": {
                              "type": "boolean"
                           },
                           "widgetName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           }
                        }
                     },
                     "sliderWidget": {
                        "properties": {
                           "col": {
                              "type": "long"
                           },
                           "enabled": {
                              "type": "boolean"
                           },
                           "html": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "maxSizeX": {
                              "type": "long"
                           },
                           "maxSizeY": {
                              "type": "long"
                           },
                           "minSizeX": {
                              "type": "long"
                           },
                           "minSizeY": {
                              "type": "long"
                           },
                           "noresize": {
                              "type": "boolean"
                           },
                           "publicName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "required": {
                              "type": "boolean"
                           },
                           "row": {
                              "type": "long"
                           },
                           "sizeX": {
                              "type": "long"
                           },
                           "sizeY": {
                              "type": "long"
                           },
                           "transparent": {
                              "type": "boolean"
                           },
                           "widgetName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           }
                        }
                     },
                     "tagcloudWidget": {
                        "properties": {
                           "col": {
                              "type": "long"
                           },
                           "enabled": {
                              "type": "boolean"
                           },
                           "html": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "maxSizeX": {
                              "type": "long"
                           },
                           "maxSizeY": {
                              "type": "long"
                           },
                           "minSizeX": {
                              "type": "long"
                           },
                           "minSizeY": {
                              "type": "long"
                           },
                           "noresize": {
                              "type": "boolean"
                           },
                           "publicName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "required": {
                              "type": "boolean"
                           },
                           "row": {
                              "type": "long"
                           },
                           "sizeX": {
                              "type": "long"
                           },
                           "sizeY": {
                              "type": "long"
                           },
                           "transparent": {
                              "type": "boolean"
                           },
                           "widgetName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           }
                        }
                     },
                     "titleDashWidget": {
                        "properties": {
                           "col": {
                              "type": "long"
                           },
                           "enabled": {
                              "type": "boolean"
                           },
                           "html": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "maxSizeX": {
                              "type": "long"
                           },
                           "maxSizeY": {
                              "type": "long"
                           },
                           "minSizeX": {
                              "type": "long"
                           },
                           "minSizeY": {
                              "type": "long"
                           },
                           "noresize": {
                              "type": "boolean"
                           },
                           "publicName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "required": {
                              "type": "boolean"
                           },
                           "row": {
                              "type": "long"
                           },
                           "sizeX": {
                              "type": "long"
                           },
                           "sizeY": {
                              "type": "long"
                           },
                           "transparent": {
                              "type": "boolean"
                           },
                           "widgetName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           }
                        }
                     }
                  }
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
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "lastActivity": {
                  "type": "date"
               },
               "name": {
                  "type": "text",
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
               "password": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "redCards": {
                  "type": "long"
               },
               "role": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "theme": {
                  "type": "text",
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
               },
               "yellowCards": {
                  "type": "long"
               }
            }
         },
         "categories": {
            "properties": {
               "color": {
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
               "id": {
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
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "nbArticles": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "nbEvents": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "nbFabricants": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "nbIngrediants": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "nbProjects": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "textColor": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "total": {
                  "type": "text",
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
         "content": {
            "type": "text",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "country": {
            "type": "text",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "cp": {
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
         "date": {
            "type": "date"
         },
         "documents": {
            "properties": {
               "createdAt": {
                  "type": "date"
               },
               "date": {
                  "type": "date"
               },
               "description": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "filename": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "id": {
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
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "nbDowload": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "size": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "type": {
                  "type": "text",
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
         "id": {
            "type": "text",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
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
               "createdAt": {
                  "type": "date"
               },
               "filename": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "height": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "id": {
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
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "size": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "type": {
                  "type": "text",
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
               "width": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               }
            }
         },
         "ingrediant": {
            "properties": {
               "content": {
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
               "date": {
                  "type": "date"
               },
               "fabricant": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "id": {
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
               "lang": {
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
                  "type": "text",
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
               "videoHost": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "videoUrl": {
                  "type": "text",
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
         "lang": {
            "type": "text",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "lat": {
            "type": "text",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "lng": {
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
            "type": "text",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "solded": {
            "type": "boolean"
         },
         "status": {
            "type": "text",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "tags": {
            "properties": {
               "createdAt": {
                  "type": "date"
               },
               "id": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "nbArticles": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "nbDocuments": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "nbEvents": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "nbFabricants": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "nbIngrediants": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "nbProjects": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "text": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "total": {
                  "type": "text",
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
         "updatedAt": {
            "type": "date"
         },
         "videoHost": {
            "type": "text",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "videoUrl": {
            "type": "text",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "ville": {
            "type": "text",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "website": {
            "type": "text",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         }
      }
   },
   "ingrediant": {
      "properties": {
         "authors": {
            "properties": {
               "createdAt": {
                  "type": "date"
               },
               "dashboard": {
                  "properties": {
                     "analyticsWidget": {
                        "properties": {
                           "col": {
                              "type": "long"
                           },
                           "enabled": {
                              "type": "boolean"
                           },
                           "html": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "maxSizeX": {
                              "type": "long"
                           },
                           "maxSizeY": {
                              "type": "long"
                           },
                           "minSizeX": {
                              "type": "long"
                           },
                           "minSizeY": {
                              "type": "long"
                           },
                           "noresize": {
                              "type": "boolean"
                           },
                           "publicName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "required": {
                              "type": "boolean"
                           },
                           "row": {
                              "type": "long"
                           },
                           "sizeX": {
                              "type": "long"
                           },
                           "sizeY": {
                              "type": "long"
                           },
                           "transparent": {
                              "type": "boolean"
                           },
                           "widgetName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           }
                        }
                     },
                     "categorycloudWidget": {
                        "properties": {
                           "col": {
                              "type": "long"
                           },
                           "enabled": {
                              "type": "boolean"
                           },
                           "html": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "maxSizeX": {
                              "type": "long"
                           },
                           "maxSizeY": {
                              "type": "long"
                           },
                           "minSizeX": {
                              "type": "long"
                           },
                           "minSizeY": {
                              "type": "long"
                           },
                           "noresize": {
                              "type": "boolean"
                           },
                           "publicName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "required": {
                              "type": "boolean"
                           },
                           "row": {
                              "type": "long"
                           },
                           "sizeX": {
                              "type": "long"
                           },
                           "sizeY": {
                              "type": "long"
                           },
                           "transparent": {
                              "type": "boolean"
                           },
                           "widgetName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           }
                        }
                     },
                     "dashboardconfigWidget": {
                        "properties": {
                           "col": {
                              "type": "long"
                           },
                           "enabled": {
                              "type": "boolean"
                           },
                           "html": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "maxSizeX": {
                              "type": "long"
                           },
                           "maxSizeY": {
                              "type": "long"
                           },
                           "minSizeX": {
                              "type": "long"
                           },
                           "minSizeY": {
                              "type": "long"
                           },
                           "noresize": {
                              "type": "boolean"
                           },
                           "publicName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "required": {
                              "type": "boolean"
                           },
                           "row": {
                              "type": "long"
                           },
                           "sizeX": {
                              "type": "long"
                           },
                           "sizeY": {
                              "type": "long"
                           },
                           "transparent": {
                              "type": "boolean"
                           },
                           "widgetName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           }
                        }
                     },
                     "lastarticleWidget": {
                        "properties": {
                           "col": {
                              "type": "long"
                           },
                           "enabled": {
                              "type": "boolean"
                           },
                           "html": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "maxSizeX": {
                              "type": "long"
                           },
                           "maxSizeY": {
                              "type": "long"
                           },
                           "minSizeX": {
                              "type": "long"
                           },
                           "minSizeY": {
                              "type": "long"
                           },
                           "noresize": {
                              "type": "boolean"
                           },
                           "publicName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "required": {
                              "type": "boolean"
                           },
                           "row": {
                              "type": "long"
                           },
                           "sizeX": {
                              "type": "long"
                           },
                           "sizeY": {
                              "type": "long"
                           },
                           "transparent": {
                              "type": "boolean"
                           },
                           "widgetName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           }
                        }
                     },
                     "lastprojectWidget": {
                        "properties": {
                           "col": {
                              "type": "long"
                           },
                           "enabled": {
                              "type": "boolean"
                           },
                           "html": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "maxSizeX": {
                              "type": "long"
                           },
                           "maxSizeY": {
                              "type": "long"
                           },
                           "minSizeX": {
                              "type": "long"
                           },
                           "minSizeY": {
                              "type": "long"
                           },
                           "noresize": {
                              "type": "boolean"
                           },
                           "publicName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "required": {
                              "type": "boolean"
                           },
                           "row": {
                              "type": "long"
                           },
                           "sizeX": {
                              "type": "long"
                           },
                           "sizeY": {
                              "type": "long"
                           },
                           "transparent": {
                              "type": "boolean"
                           },
                           "widgetName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           }
                        }
                     },
                     "menuPaiWidget": {
                        "properties": {
                           "col": {
                              "type": "long"
                           },
                           "enabled": {
                              "type": "boolean"
                           },
                           "html": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "maxSizeX": {
                              "type": "long"
                           },
                           "maxSizeY": {
                              "type": "long"
                           },
                           "minSizeX": {
                              "type": "long"
                           },
                           "minSizeY": {
                              "type": "long"
                           },
                           "noresize": {
                              "type": "boolean"
                           },
                           "publicName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "required": {
                              "type": "boolean"
                           },
                           "row": {
                              "type": "long"
                           },
                           "sizeX": {
                              "type": "long"
                           },
                           "sizeY": {
                              "type": "long"
                           },
                           "transparent": {
                              "type": "boolean"
                           },
                           "widgetName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           }
                        }
                     },
                     "menuWidget": {
                        "properties": {
                           "col": {
                              "type": "long"
                           },
                           "enabled": {
                              "type": "boolean"
                           },
                           "html": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "maxSizeX": {
                              "type": "long"
                           },
                           "maxSizeY": {
                              "type": "long"
                           },
                           "minSizeX": {
                              "type": "long"
                           },
                           "minSizeY": {
                              "type": "long"
                           },
                           "noresize": {
                              "type": "boolean"
                           },
                           "publicName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "required": {
                              "type": "boolean"
                           },
                           "row": {
                              "type": "long"
                           },
                           "sizeX": {
                              "type": "long"
                           },
                           "sizeY": {
                              "type": "long"
                           },
                           "transparent": {
                              "type": "boolean"
                           },
                           "widgetName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           }
                        }
                     },
                     "notificationWidget": {
                        "properties": {
                           "col": {
                              "type": "long"
                           },
                           "enabled": {
                              "type": "boolean"
                           },
                           "html": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "maxSizeX": {
                              "type": "long"
                           },
                           "maxSizeY": {
                              "type": "long"
                           },
                           "minSizeX": {
                              "type": "long"
                           },
                           "minSizeY": {
                              "type": "long"
                           },
                           "noresize": {
                              "type": "boolean"
                           },
                           "publicName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "required": {
                              "type": "boolean"
                           },
                           "row": {
                              "type": "long"
                           },
                           "sizeX": {
                              "type": "long"
                           },
                           "sizeY": {
                              "type": "long"
                           },
                           "transparent": {
                              "type": "boolean"
                           },
                           "widgetName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           }
                        }
                     },
                     "profileWidget": {
                        "properties": {
                           "col": {
                              "type": "long"
                           },
                           "enabled": {
                              "type": "boolean"
                           },
                           "html": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "maxSizeX": {
                              "type": "long"
                           },
                           "maxSizeY": {
                              "type": "long"
                           },
                           "minSizeX": {
                              "type": "long"
                           },
                           "minSizeY": {
                              "type": "long"
                           },
                           "noresize": {
                              "type": "boolean"
                           },
                           "publicName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "required": {
                              "type": "boolean"
                           },
                           "row": {
                              "type": "long"
                           },
                           "sizeX": {
                              "type": "long"
                           },
                           "sizeY": {
                              "type": "long"
                           },
                           "transparent": {
                              "type": "boolean"
                           },
                           "widgetName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           }
                        }
                     },
                     "sliderWidget": {
                        "properties": {
                           "col": {
                              "type": "long"
                           },
                           "enabled": {
                              "type": "boolean"
                           },
                           "html": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "maxSizeX": {
                              "type": "long"
                           },
                           "maxSizeY": {
                              "type": "long"
                           },
                           "minSizeX": {
                              "type": "long"
                           },
                           "minSizeY": {
                              "type": "long"
                           },
                           "noresize": {
                              "type": "boolean"
                           },
                           "publicName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "required": {
                              "type": "boolean"
                           },
                           "row": {
                              "type": "long"
                           },
                           "sizeX": {
                              "type": "long"
                           },
                           "sizeY": {
                              "type": "long"
                           },
                           "transparent": {
                              "type": "boolean"
                           },
                           "widgetName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           }
                        }
                     },
                     "tagcloudWidget": {
                        "properties": {
                           "col": {
                              "type": "long"
                           },
                           "enabled": {
                              "type": "boolean"
                           },
                           "html": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "maxSizeX": {
                              "type": "long"
                           },
                           "maxSizeY": {
                              "type": "long"
                           },
                           "minSizeX": {
                              "type": "long"
                           },
                           "minSizeY": {
                              "type": "long"
                           },
                           "noresize": {
                              "type": "boolean"
                           },
                           "publicName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "required": {
                              "type": "boolean"
                           },
                           "row": {
                              "type": "long"
                           },
                           "sizeX": {
                              "type": "long"
                           },
                           "sizeY": {
                              "type": "long"
                           },
                           "transparent": {
                              "type": "boolean"
                           },
                           "widgetName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           }
                        }
                     },
                     "titleDashWidget": {
                        "properties": {
                           "col": {
                              "type": "long"
                           },
                           "enabled": {
                              "type": "boolean"
                           },
                           "html": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "maxSizeX": {
                              "type": "long"
                           },
                           "maxSizeY": {
                              "type": "long"
                           },
                           "minSizeX": {
                              "type": "long"
                           },
                           "minSizeY": {
                              "type": "long"
                           },
                           "noresize": {
                              "type": "boolean"
                           },
                           "publicName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "required": {
                              "type": "boolean"
                           },
                           "row": {
                              "type": "long"
                           },
                           "sizeX": {
                              "type": "long"
                           },
                           "sizeY": {
                              "type": "long"
                           },
                           "transparent": {
                              "type": "boolean"
                           },
                           "widgetName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           }
                        }
                     }
                  }
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
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "lastActivity": {
                  "type": "date"
               },
               "name": {
                  "type": "text",
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
               "password": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "redCards": {
                  "type": "long"
               },
               "role": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "theme": {
                  "type": "text",
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
               },
               "yellowCards": {
                  "type": "long"
               }
            }
         },
         "categories": {
            "properties": {
               "color": {
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
               "id": {
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
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "nbArticles": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "nbEvents": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "nbFabricants": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "nbIngrediants": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "nbProjects": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "textColor": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "total": {
                  "type": "text",
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
         "content": {
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
         "date": {
            "type": "date"
         },
         "documents": {
            "properties": {
               "createdAt": {
                  "type": "date"
               },
               "date": {
                  "type": "date"
               },
               "description": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "filename": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "id": {
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
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "nbDowload": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "size": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "type": {
                  "type": "text",
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
         "fabricant": {
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
               "content": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "country": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "cp": {
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
               "date": {
                  "type": "date"
               },
               "id": {
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
               "lang": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "lat": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "lng": {
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
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "solded": {
                  "type": "boolean"
               },
               "status": {
                  "type": "text",
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
               "videoHost": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "videoUrl": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "ville": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "website": {
                  "type": "text",
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
            "type": "text",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
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
               "createdAt": {
                  "type": "date"
               },
               "filename": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "height": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "id": {
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
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "size": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "type": {
                  "type": "text",
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
               "width": {
                  "type": "text",
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
         "lang": {
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
            "type": "text",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "tags": {
            "properties": {
               "createdAt": {
                  "type": "date"
               },
               "id": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "nbArticles": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "nbDocuments": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "nbEvents": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "nbFabricants": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "nbIngrediants": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "nbProjects": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "text": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "total": {
                  "type": "text",
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
         "updatedAt": {
            "type": "date"
         },
         "videoHost": {
            "type": "text",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "videoUrl": {
            "type": "text",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         }
      }
   },
   "user": {
      "properties": {
         "createdAt": {
            "type": "date"
         },
         "dashboard": {
            "properties": {
               "analyticsWidget": {
                  "properties": {
                     "col": {
                        "type": "long"
                     },
                     "enabled": {
                        "type": "boolean"
                     },
                     "html": {
                        "type": "text",
                        "fields": {
                           "keyword": {
                              "type": "keyword",
                              "ignore_above": 256
                           }
                        }
                     },
                     "maxSizeX": {
                        "type": "long"
                     },
                     "maxSizeY": {
                        "type": "long"
                     },
                     "minSizeX": {
                        "type": "long"
                     },
                     "minSizeY": {
                        "type": "long"
                     },
                     "noresize": {
                        "type": "boolean"
                     },
                     "publicName": {
                        "type": "text",
                        "fields": {
                           "keyword": {
                              "type": "keyword",
                              "ignore_above": 256
                           }
                        }
                     },
                     "required": {
                        "type": "boolean"
                     },
                     "row": {
                        "type": "long"
                     },
                     "sizeX": {
                        "type": "long"
                     },
                     "sizeY": {
                        "type": "long"
                     },
                     "transparent": {
                        "type": "boolean"
                     },
                     "widgetName": {
                        "type": "text",
                        "fields": {
                           "keyword": {
                              "type": "keyword",
                              "ignore_above": 256
                           }
                        }
                     }
                  }
               },
               "categorycloudWidget": {
                  "properties": {
                     "col": {
                        "type": "long"
                     },
                     "enabled": {
                        "type": "boolean"
                     },
                     "html": {
                        "type": "text",
                        "fields": {
                           "keyword": {
                              "type": "keyword",
                              "ignore_above": 256
                           }
                        }
                     },
                     "maxSizeX": {
                        "type": "long"
                     },
                     "maxSizeY": {
                        "type": "long"
                     },
                     "minSizeX": {
                        "type": "long"
                     },
                     "minSizeY": {
                        "type": "long"
                     },
                     "noresize": {
                        "type": "boolean"
                     },
                     "publicName": {
                        "type": "text",
                        "fields": {
                           "keyword": {
                              "type": "keyword",
                              "ignore_above": 256
                           }
                        }
                     },
                     "required": {
                        "type": "boolean"
                     },
                     "row": {
                        "type": "long"
                     },
                     "sizeX": {
                        "type": "long"
                     },
                     "sizeY": {
                        "type": "long"
                     },
                     "transparent": {
                        "type": "boolean"
                     },
                     "widgetName": {
                        "type": "text",
                        "fields": {
                           "keyword": {
                              "type": "keyword",
                              "ignore_above": 256
                           }
                        }
                     }
                  }
               },
               "dashboardconfigWidget": {
                  "properties": {
                     "col": {
                        "type": "long"
                     },
                     "enabled": {
                        "type": "boolean"
                     },
                     "html": {
                        "type": "text",
                        "fields": {
                           "keyword": {
                              "type": "keyword",
                              "ignore_above": 256
                           }
                        }
                     },
                     "maxSizeX": {
                        "type": "long"
                     },
                     "maxSizeY": {
                        "type": "long"
                     },
                     "minSizeX": {
                        "type": "long"
                     },
                     "minSizeY": {
                        "type": "long"
                     },
                     "noresize": {
                        "type": "boolean"
                     },
                     "publicName": {
                        "type": "text",
                        "fields": {
                           "keyword": {
                              "type": "keyword",
                              "ignore_above": 256
                           }
                        }
                     },
                     "required": {
                        "type": "boolean"
                     },
                     "row": {
                        "type": "long"
                     },
                     "sizeX": {
                        "type": "long"
                     },
                     "sizeY": {
                        "type": "long"
                     },
                     "transparent": {
                        "type": "boolean"
                     },
                     "widgetName": {
                        "type": "text",
                        "fields": {
                           "keyword": {
                              "type": "keyword",
                              "ignore_above": 256
                           }
                        }
                     }
                  }
               },
               "lastarticleWidget": {
                  "properties": {
                     "col": {
                        "type": "long"
                     },
                     "enabled": {
                        "type": "boolean"
                     },
                     "html": {
                        "type": "text",
                        "fields": {
                           "keyword": {
                              "type": "keyword",
                              "ignore_above": 256
                           }
                        }
                     },
                     "maxSizeX": {
                        "type": "long"
                     },
                     "maxSizeY": {
                        "type": "long"
                     },
                     "minSizeX": {
                        "type": "long"
                     },
                     "minSizeY": {
                        "type": "long"
                     },
                     "noresize": {
                        "type": "boolean"
                     },
                     "publicName": {
                        "type": "text",
                        "fields": {
                           "keyword": {
                              "type": "keyword",
                              "ignore_above": 256
                           }
                        }
                     },
                     "required": {
                        "type": "boolean"
                     },
                     "row": {
                        "type": "long"
                     },
                     "sizeX": {
                        "type": "long"
                     },
                     "sizeY": {
                        "type": "long"
                     },
                     "transparent": {
                        "type": "boolean"
                     },
                     "widgetName": {
                        "type": "text",
                        "fields": {
                           "keyword": {
                              "type": "keyword",
                              "ignore_above": 256
                           }
                        }
                     }
                  }
               },
               "lastprojectWidget": {
                  "properties": {
                     "col": {
                        "type": "long"
                     },
                     "enabled": {
                        "type": "boolean"
                     },
                     "html": {
                        "type": "text",
                        "fields": {
                           "keyword": {
                              "type": "keyword",
                              "ignore_above": 256
                           }
                        }
                     },
                     "maxSizeX": {
                        "type": "long"
                     },
                     "maxSizeY": {
                        "type": "long"
                     },
                     "minSizeX": {
                        "type": "long"
                     },
                     "minSizeY": {
                        "type": "long"
                     },
                     "noresize": {
                        "type": "boolean"
                     },
                     "publicName": {
                        "type": "text",
                        "fields": {
                           "keyword": {
                              "type": "keyword",
                              "ignore_above": 256
                           }
                        }
                     },
                     "required": {
                        "type": "boolean"
                     },
                     "row": {
                        "type": "long"
                     },
                     "sizeX": {
                        "type": "long"
                     },
                     "sizeY": {
                        "type": "long"
                     },
                     "transparent": {
                        "type": "boolean"
                     },
                     "widgetName": {
                        "type": "text",
                        "fields": {
                           "keyword": {
                              "type": "keyword",
                              "ignore_above": 256
                           }
                        }
                     }
                  }
               },
               "menuPaiWidget": {
                  "properties": {
                     "col": {
                        "type": "long"
                     },
                     "enabled": {
                        "type": "boolean"
                     },
                     "html": {
                        "type": "text",
                        "fields": {
                           "keyword": {
                              "type": "keyword",
                              "ignore_above": 256
                           }
                        }
                     },
                     "maxSizeX": {
                        "type": "long"
                     },
                     "maxSizeY": {
                        "type": "long"
                     },
                     "minSizeX": {
                        "type": "long"
                     },
                     "minSizeY": {
                        "type": "long"
                     },
                     "noresize": {
                        "type": "boolean"
                     },
                     "publicName": {
                        "type": "text",
                        "fields": {
                           "keyword": {
                              "type": "keyword",
                              "ignore_above": 256
                           }
                        }
                     },
                     "required": {
                        "type": "boolean"
                     },
                     "row": {
                        "type": "long"
                     },
                     "sizeX": {
                        "type": "long"
                     },
                     "sizeY": {
                        "type": "long"
                     },
                     "transparent": {
                        "type": "boolean"
                     },
                     "widgetName": {
                        "type": "text",
                        "fields": {
                           "keyword": {
                              "type": "keyword",
                              "ignore_above": 256
                           }
                        }
                     }
                  }
               },
               "menuWidget": {
                  "properties": {
                     "col": {
                        "type": "long"
                     },
                     "enabled": {
                        "type": "boolean"
                     },
                     "html": {
                        "type": "text",
                        "fields": {
                           "keyword": {
                              "type": "keyword",
                              "ignore_above": 256
                           }
                        }
                     },
                     "maxSizeX": {
                        "type": "long"
                     },
                     "maxSizeY": {
                        "type": "long"
                     },
                     "minSizeX": {
                        "type": "long"
                     },
                     "minSizeY": {
                        "type": "long"
                     },
                     "noresize": {
                        "type": "boolean"
                     },
                     "publicName": {
                        "type": "text",
                        "fields": {
                           "keyword": {
                              "type": "keyword",
                              "ignore_above": 256
                           }
                        }
                     },
                     "required": {
                        "type": "boolean"
                     },
                     "row": {
                        "type": "long"
                     },
                     "sizeX": {
                        "type": "long"
                     },
                     "sizeY": {
                        "type": "long"
                     },
                     "transparent": {
                        "type": "boolean"
                     },
                     "widgetName": {
                        "type": "text",
                        "fields": {
                           "keyword": {
                              "type": "keyword",
                              "ignore_above": 256
                           }
                        }
                     }
                  }
               },
               "notificationWidget": {
                  "properties": {
                     "col": {
                        "type": "long"
                     },
                     "enabled": {
                        "type": "boolean"
                     },
                     "html": {
                        "type": "text",
                        "fields": {
                           "keyword": {
                              "type": "keyword",
                              "ignore_above": 256
                           }
                        }
                     },
                     "maxSizeX": {
                        "type": "long"
                     },
                     "maxSizeY": {
                        "type": "long"
                     },
                     "minSizeX": {
                        "type": "long"
                     },
                     "minSizeY": {
                        "type": "long"
                     },
                     "noresize": {
                        "type": "boolean"
                     },
                     "publicName": {
                        "type": "text",
                        "fields": {
                           "keyword": {
                              "type": "keyword",
                              "ignore_above": 256
                           }
                        }
                     },
                     "required": {
                        "type": "boolean"
                     },
                     "row": {
                        "type": "long"
                     },
                     "sizeX": {
                        "type": "long"
                     },
                     "sizeY": {
                        "type": "long"
                     },
                     "transparent": {
                        "type": "boolean"
                     },
                     "widgetName": {
                        "type": "text",
                        "fields": {
                           "keyword": {
                              "type": "keyword",
                              "ignore_above": 256
                           }
                        }
                     }
                  }
               },
               "profileWidget": {
                  "properties": {
                     "col": {
                        "type": "long"
                     },
                     "enabled": {
                        "type": "boolean"
                     },
                     "html": {
                        "type": "text",
                        "fields": {
                           "keyword": {
                              "type": "keyword",
                              "ignore_above": 256
                           }
                        }
                     },
                     "maxSizeX": {
                        "type": "long"
                     },
                     "maxSizeY": {
                        "type": "long"
                     },
                     "minSizeX": {
                        "type": "long"
                     },
                     "minSizeY": {
                        "type": "long"
                     },
                     "noresize": {
                        "type": "boolean"
                     },
                     "publicName": {
                        "type": "text",
                        "fields": {
                           "keyword": {
                              "type": "keyword",
                              "ignore_above": 256
                           }
                        }
                     },
                     "required": {
                        "type": "boolean"
                     },
                     "row": {
                        "type": "long"
                     },
                     "sizeX": {
                        "type": "long"
                     },
                     "sizeY": {
                        "type": "long"
                     },
                     "transparent": {
                        "type": "boolean"
                     },
                     "widgetName": {
                        "type": "text",
                        "fields": {
                           "keyword": {
                              "type": "keyword",
                              "ignore_above": 256
                           }
                        }
                     }
                  }
               },
               "sliderWidget": {
                  "properties": {
                     "col": {
                        "type": "long"
                     },
                     "enabled": {
                        "type": "boolean"
                     },
                     "html": {
                        "type": "text",
                        "fields": {
                           "keyword": {
                              "type": "keyword",
                              "ignore_above": 256
                           }
                        }
                     },
                     "maxSizeX": {
                        "type": "long"
                     },
                     "maxSizeY": {
                        "type": "long"
                     },
                     "minSizeX": {
                        "type": "long"
                     },
                     "minSizeY": {
                        "type": "long"
                     },
                     "noresize": {
                        "type": "boolean"
                     },
                     "publicName": {
                        "type": "text",
                        "fields": {
                           "keyword": {
                              "type": "keyword",
                              "ignore_above": 256
                           }
                        }
                     },
                     "required": {
                        "type": "boolean"
                     },
                     "row": {
                        "type": "long"
                     },
                     "sizeX": {
                        "type": "long"
                     },
                     "sizeY": {
                        "type": "long"
                     },
                     "transparent": {
                        "type": "boolean"
                     },
                     "widgetName": {
                        "type": "text",
                        "fields": {
                           "keyword": {
                              "type": "keyword",
                              "ignore_above": 256
                           }
                        }
                     }
                  }
               },
               "tagcloudWidget": {
                  "properties": {
                     "col": {
                        "type": "long"
                     },
                     "enabled": {
                        "type": "boolean"
                     },
                     "html": {
                        "type": "text",
                        "fields": {
                           "keyword": {
                              "type": "keyword",
                              "ignore_above": 256
                           }
                        }
                     },
                     "maxSizeX": {
                        "type": "long"
                     },
                     "maxSizeY": {
                        "type": "long"
                     },
                     "minSizeX": {
                        "type": "long"
                     },
                     "minSizeY": {
                        "type": "long"
                     },
                     "noresize": {
                        "type": "boolean"
                     },
                     "publicName": {
                        "type": "text",
                        "fields": {
                           "keyword": {
                              "type": "keyword",
                              "ignore_above": 256
                           }
                        }
                     },
                     "required": {
                        "type": "boolean"
                     },
                     "row": {
                        "type": "long"
                     },
                     "sizeX": {
                        "type": "long"
                     },
                     "sizeY": {
                        "type": "long"
                     },
                     "transparent": {
                        "type": "boolean"
                     },
                     "widgetName": {
                        "type": "text",
                        "fields": {
                           "keyword": {
                              "type": "keyword",
                              "ignore_above": 256
                           }
                        }
                     }
                  }
               },
               "titleDashWidget": {
                  "properties": {
                     "col": {
                        "type": "long"
                     },
                     "enabled": {
                        "type": "boolean"
                     },
                     "html": {
                        "type": "text",
                        "fields": {
                           "keyword": {
                              "type": "keyword",
                              "ignore_above": 256
                           }
                        }
                     },
                     "maxSizeX": {
                        "type": "long"
                     },
                     "maxSizeY": {
                        "type": "long"
                     },
                     "minSizeX": {
                        "type": "long"
                     },
                     "minSizeY": {
                        "type": "long"
                     },
                     "noresize": {
                        "type": "boolean"
                     },
                     "publicName": {
                        "type": "text",
                        "fields": {
                           "keyword": {
                              "type": "keyword",
                              "ignore_above": 256
                           }
                        }
                     },
                     "required": {
                        "type": "boolean"
                     },
                     "row": {
                        "type": "long"
                     },
                     "sizeX": {
                        "type": "long"
                     },
                     "sizeY": {
                        "type": "long"
                     },
                     "transparent": {
                        "type": "boolean"
                     },
                     "widgetName": {
                        "type": "text",
                        "fields": {
                           "keyword": {
                              "type": "keyword",
                              "ignore_above": 256
                           }
                        }
                     }
                  }
               }
            }
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
            "type": "text",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "lastActivity": {
            "type": "date"
         },
         "name": {
            "type": "text",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "nbArticles": {
            "type": "text",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "nbCollabsPoints": {
            "type": "long"
         },
         "nbCollabsPointsTotal": {
            "type": "long"
         },
         "nbFabricants": {
            "type": "text",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "nbIngrediants": {
            "type": "text",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "nbProjects": {
            "type": "text",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "password": {
            "type": "text",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "redCards": {
            "type": "long"
         },
         "role": {
            "type": "text",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "theme": {
            "type": "text",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "total": {
            "type": "text",
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
         "yellowCards": {
            "type": "long"
         }
      }
   },
   "category": {
      "properties": {
         "color": {
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
         "id": {
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
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "nbArticles": {
            "type": "text",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "nbEvents": {
            "type": "text",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "nbFabricants": {
            "type": "text",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "nbIngrediants": {
            "type": "text",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "nbProjects": {
            "type": "text",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "textColor": {
            "type": "text",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "total": {
            "type": "text",
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
   "project": {
      "properties": {
         "activeComent": {
            "type": "boolean"
         },
         "authors": {
            "properties": {
               "createdAt": {
                  "type": "date"
               },
               "dashboard": {
                  "properties": {
                     "analyticsWidget": {
                        "properties": {
                           "col": {
                              "type": "long"
                           },
                           "enabled": {
                              "type": "boolean"
                           },
                           "html": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "maxSizeX": {
                              "type": "long"
                           },
                           "maxSizeY": {
                              "type": "long"
                           },
                           "minSizeX": {
                              "type": "long"
                           },
                           "minSizeY": {
                              "type": "long"
                           },
                           "noresize": {
                              "type": "boolean"
                           },
                           "publicName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "required": {
                              "type": "boolean"
                           },
                           "row": {
                              "type": "long"
                           },
                           "sizeX": {
                              "type": "long"
                           },
                           "sizeY": {
                              "type": "long"
                           },
                           "transparent": {
                              "type": "boolean"
                           },
                           "widgetName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           }
                        }
                     },
                     "categorycloudWidget": {
                        "properties": {
                           "col": {
                              "type": "long"
                           },
                           "enabled": {
                              "type": "boolean"
                           },
                           "html": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "maxSizeX": {
                              "type": "long"
                           },
                           "maxSizeY": {
                              "type": "long"
                           },
                           "minSizeX": {
                              "type": "long"
                           },
                           "minSizeY": {
                              "type": "long"
                           },
                           "noresize": {
                              "type": "boolean"
                           },
                           "publicName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "required": {
                              "type": "boolean"
                           },
                           "row": {
                              "type": "long"
                           },
                           "sizeX": {
                              "type": "long"
                           },
                           "sizeY": {
                              "type": "long"
                           },
                           "transparent": {
                              "type": "boolean"
                           },
                           "widgetName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           }
                        }
                     },
                     "dashboardconfigWidget": {
                        "properties": {
                           "col": {
                              "type": "long"
                           },
                           "enabled": {
                              "type": "boolean"
                           },
                           "html": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "maxSizeX": {
                              "type": "long"
                           },
                           "maxSizeY": {
                              "type": "long"
                           },
                           "minSizeX": {
                              "type": "long"
                           },
                           "minSizeY": {
                              "type": "long"
                           },
                           "noresize": {
                              "type": "boolean"
                           },
                           "publicName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "required": {
                              "type": "boolean"
                           },
                           "row": {
                              "type": "long"
                           },
                           "sizeX": {
                              "type": "long"
                           },
                           "sizeY": {
                              "type": "long"
                           },
                           "transparent": {
                              "type": "boolean"
                           },
                           "widgetName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           }
                        }
                     },
                     "lastarticleWidget": {
                        "properties": {
                           "col": {
                              "type": "long"
                           },
                           "enabled": {
                              "type": "boolean"
                           },
                           "html": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "maxSizeX": {
                              "type": "long"
                           },
                           "maxSizeY": {
                              "type": "long"
                           },
                           "minSizeX": {
                              "type": "long"
                           },
                           "minSizeY": {
                              "type": "long"
                           },
                           "noresize": {
                              "type": "boolean"
                           },
                           "publicName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "required": {
                              "type": "boolean"
                           },
                           "row": {
                              "type": "long"
                           },
                           "sizeX": {
                              "type": "long"
                           },
                           "sizeY": {
                              "type": "long"
                           },
                           "transparent": {
                              "type": "boolean"
                           },
                           "widgetName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           }
                        }
                     },
                     "lastprojectWidget": {
                        "properties": {
                           "col": {
                              "type": "long"
                           },
                           "enabled": {
                              "type": "boolean"
                           },
                           "html": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "maxSizeX": {
                              "type": "long"
                           },
                           "maxSizeY": {
                              "type": "long"
                           },
                           "minSizeX": {
                              "type": "long"
                           },
                           "minSizeY": {
                              "type": "long"
                           },
                           "noresize": {
                              "type": "boolean"
                           },
                           "publicName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "required": {
                              "type": "boolean"
                           },
                           "row": {
                              "type": "long"
                           },
                           "sizeX": {
                              "type": "long"
                           },
                           "sizeY": {
                              "type": "long"
                           },
                           "transparent": {
                              "type": "boolean"
                           },
                           "widgetName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           }
                        }
                     },
                     "menuPaiWidget": {
                        "properties": {
                           "col": {
                              "type": "long"
                           },
                           "enabled": {
                              "type": "boolean"
                           },
                           "html": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "maxSizeX": {
                              "type": "long"
                           },
                           "maxSizeY": {
                              "type": "long"
                           },
                           "minSizeX": {
                              "type": "long"
                           },
                           "minSizeY": {
                              "type": "long"
                           },
                           "noresize": {
                              "type": "boolean"
                           },
                           "publicName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "required": {
                              "type": "boolean"
                           },
                           "row": {
                              "type": "long"
                           },
                           "sizeX": {
                              "type": "long"
                           },
                           "sizeY": {
                              "type": "long"
                           },
                           "transparent": {
                              "type": "boolean"
                           },
                           "widgetName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           }
                        }
                     },
                     "menuWidget": {
                        "properties": {
                           "col": {
                              "type": "long"
                           },
                           "enabled": {
                              "type": "boolean"
                           },
                           "html": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "maxSizeX": {
                              "type": "long"
                           },
                           "maxSizeY": {
                              "type": "long"
                           },
                           "minSizeX": {
                              "type": "long"
                           },
                           "minSizeY": {
                              "type": "long"
                           },
                           "noresize": {
                              "type": "boolean"
                           },
                           "publicName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "required": {
                              "type": "boolean"
                           },
                           "row": {
                              "type": "long"
                           },
                           "sizeX": {
                              "type": "long"
                           },
                           "sizeY": {
                              "type": "long"
                           },
                           "transparent": {
                              "type": "boolean"
                           },
                           "widgetName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           }
                        }
                     },
                     "notificationWidget": {
                        "properties": {
                           "col": {
                              "type": "long"
                           },
                           "enabled": {
                              "type": "boolean"
                           },
                           "html": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "maxSizeX": {
                              "type": "long"
                           },
                           "maxSizeY": {
                              "type": "long"
                           },
                           "minSizeX": {
                              "type": "long"
                           },
                           "minSizeY": {
                              "type": "long"
                           },
                           "noresize": {
                              "type": "boolean"
                           },
                           "publicName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "required": {
                              "type": "boolean"
                           },
                           "row": {
                              "type": "long"
                           },
                           "sizeX": {
                              "type": "long"
                           },
                           "sizeY": {
                              "type": "long"
                           },
                           "transparent": {
                              "type": "boolean"
                           },
                           "widgetName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           }
                        }
                     },
                     "profileWidget": {
                        "properties": {
                           "col": {
                              "type": "long"
                           },
                           "enabled": {
                              "type": "boolean"
                           },
                           "html": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "maxSizeX": {
                              "type": "long"
                           },
                           "maxSizeY": {
                              "type": "long"
                           },
                           "minSizeX": {
                              "type": "long"
                           },
                           "minSizeY": {
                              "type": "long"
                           },
                           "noresize": {
                              "type": "boolean"
                           },
                           "publicName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "required": {
                              "type": "boolean"
                           },
                           "row": {
                              "type": "long"
                           },
                           "sizeX": {
                              "type": "long"
                           },
                           "sizeY": {
                              "type": "long"
                           },
                           "transparent": {
                              "type": "boolean"
                           },
                           "widgetName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           }
                        }
                     },
                     "sliderWidget": {
                        "properties": {
                           "col": {
                              "type": "long"
                           },
                           "enabled": {
                              "type": "boolean"
                           },
                           "html": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "maxSizeX": {
                              "type": "long"
                           },
                           "maxSizeY": {
                              "type": "long"
                           },
                           "minSizeX": {
                              "type": "long"
                           },
                           "minSizeY": {
                              "type": "long"
                           },
                           "noresize": {
                              "type": "boolean"
                           },
                           "publicName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "required": {
                              "type": "boolean"
                           },
                           "row": {
                              "type": "long"
                           },
                           "sizeX": {
                              "type": "long"
                           },
                           "sizeY": {
                              "type": "long"
                           },
                           "transparent": {
                              "type": "boolean"
                           },
                           "widgetName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           }
                        }
                     },
                     "tagcloudWidget": {
                        "properties": {
                           "col": {
                              "type": "long"
                           },
                           "enabled": {
                              "type": "boolean"
                           },
                           "html": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "maxSizeX": {
                              "type": "long"
                           },
                           "maxSizeY": {
                              "type": "long"
                           },
                           "minSizeX": {
                              "type": "long"
                           },
                           "minSizeY": {
                              "type": "long"
                           },
                           "noresize": {
                              "type": "boolean"
                           },
                           "publicName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "required": {
                              "type": "boolean"
                           },
                           "row": {
                              "type": "long"
                           },
                           "sizeX": {
                              "type": "long"
                           },
                           "sizeY": {
                              "type": "long"
                           },
                           "transparent": {
                              "type": "boolean"
                           },
                           "widgetName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           }
                        }
                     },
                     "titleDashWidget": {
                        "properties": {
                           "col": {
                              "type": "long"
                           },
                           "enabled": {
                              "type": "boolean"
                           },
                           "html": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "maxSizeX": {
                              "type": "long"
                           },
                           "maxSizeY": {
                              "type": "long"
                           },
                           "minSizeX": {
                              "type": "long"
                           },
                           "minSizeY": {
                              "type": "long"
                           },
                           "noresize": {
                              "type": "boolean"
                           },
                           "publicName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           },
                           "required": {
                              "type": "boolean"
                           },
                           "row": {
                              "type": "long"
                           },
                           "sizeX": {
                              "type": "long"
                           },
                           "sizeY": {
                              "type": "long"
                           },
                           "transparent": {
                              "type": "boolean"
                           },
                           "widgetName": {
                              "type": "text",
                              "fields": {
                                 "keyword": {
                                    "type": "keyword",
                                    "ignore_above": 256
                                 }
                              }
                           }
                        }
                     }
                  }
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
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "lastActivity": {
                  "type": "date"
               },
               "name": {
                  "type": "text",
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
               "password": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "redCards": {
                  "type": "long"
               },
               "role": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "theme": {
                  "type": "text",
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
               },
               "yellowCards": {
                  "type": "long"
               }
            }
         },
         "categories": {
            "properties": {
               "color": {
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
               "id": {
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
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "nbArticles": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "nbEvents": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "nbFabricants": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "nbIngrediants": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "nbProjects": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "textColor": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "total": {
                  "type": "text",
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
         "content": {
            "type": "text",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "contentType": {
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
         "date": {
            "type": "date"
         },
         "description": {
            "type": "text",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "documents": {
            "properties": {
               "createdAt": {
                  "type": "date"
               },
               "date": {
                  "type": "date"
               },
               "description": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "filename": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "id": {
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
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "nbDowload": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "size": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "type": {
                  "type": "text",
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
         "id": {
            "type": "text",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
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
               "createdAt": {
                  "type": "date"
               },
               "filename": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "height": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "id": {
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
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "size": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "type": {
                  "type": "text",
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
               "width": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               }
            }
         },
         "initialPrice": {
            "type": "long"
         },
         "isPaiContent": {
            "type": "boolean"
         },
         "keyword": {
            "type": "text",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "lang": {
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
         "rewriteurl": {
            "type": "text",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "solded": {
            "type": "boolean"
         },
         "status": {
            "type": "text",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "tags": {
            "properties": {
               "createdAt": {
                  "type": "date"
               },
               "id": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "nbArticles": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "nbDocuments": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "nbEvents": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "nbFabricants": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "nbIngrediants": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "nbProjects": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "text": {
                  "type": "text",
                  "fields": {
                     "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                     }
                  }
               },
               "total": {
                  "type": "text",
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
         "title": {
            "type": "text",
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
         "videoHost": {
            "type": "text",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         },
         "videoUrl": {
            "type": "text",
            "fields": {
               "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
               }
            }
         }
      }
   }
}
}
