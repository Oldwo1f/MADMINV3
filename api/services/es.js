var Promise = require("bluebird");
var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'error'
});

module.exports ={

	client : function(){
		return client;
	},
   	isOk:function(){
   		client.ping({
		  requestTimeout: Infinity,
		  hello: "elasticsearch!"
		}).then(function (error) {
		  
		    console.log('All is well');
		    
		}).catch(function(error){
		  	if (error) {
		    	console.trace('elasticsearch cluster is down!');
			}
		})
   		
   	},
   	search:function(slug,type, parent){
   		
   		return client.search({
   			index: sails.config.esName,
		  	type: type,
		  	body: {
			    "query": {
			        "bool" : {          
			        "should" : [
			            {
			                "fuzzy" : {
			                    "_all" : {
			                        "value" :         slug,
			                        "boost" :         1.0,
			                        "fuzziness" :     2,
			                        "prefix_length" : 0,
			                        "max_expansions": 100
			                    }
			                }
			            },
			            {
			                "match" : {
			                    "_all" : {
			                        "query" :         slug,
			                        "boost" :         2.0
			                    }

			                }

			            },
			            {
			            "match" : {
			                	"title" : {
			                        "query" :         slug,
			                        "boost" :         2.0
			                    }

			                }

			            },
			            {
			                "match_phrase_prefix" : {
			                    "_all" : {
			                        "query" :         slug,
			                        "boost" :         1.0
			                    }
                			}
                		}
			        ]
			        
			        }
			    }
			    
		    }
		}).then(function (response) {
			return response;
		}).catch(function(error){
		    	console.trace(error);
		    	return error
		});
	},
   	searchGlobal:function(slug,type, parent){

   		console.log(slug);
   		
   		return client.search({
   			index: sails.config.esName,
   			type:['article','project','event','ingrediant','fabricant'],
		  	body: {
			    "query": {
			        "bool" : {          
				        "should" : [
				            {
				                "fuzzy" : {
				                    "_all" : {
				                        "value" :         slug,
				                        "boost" :         0.5,
				                        "fuzziness" :     1,
				                        "prefix_length" : 0,
				                        "max_expansions": 100
				                    }
				                }
				            },
				            {
				                "match" : {
				                    "_all" : {
				                        "query" :         slug,
				                        "boost" :         2.0
				                    }

				                }

				            },
				            {
				            "match" : {
				                	"title" : {
				                        "query" :         slug,
				                        "boost" :         4.0
				                    }

				                }

				            },
				            {
				            "match" : {
				                	"name" : {
				                        "query" :         slug,
				                        "boost" :         4.0
				                    }

				                }

				            },
				            {
				            "match" : {
				                	"content" : {
				                        "query" :         slug,
				                        "boost" :         1.0
				                    }

				                }

				            },
				            {
				                "match_phrase_prefix" : {
				                    "_all" : {
				                        "query" :         slug,
				                        "boost" :         1.0
				                    }
	                			}
	                		}
				        ],
				        "filter": [ 
       						 { "term":  { "status": "actif" }}
       					]
			        
			        }

			    },
			      

			    "highlight" : {
			        "fields" : {
			            // "content" : {"fragment_size" : 150, "number_of_fragments" : 3},
			            "*" : {"fragment_size" : 150, "number_of_fragments" : 5},
			            // "name" : {"fragment_size" : 150, "number_of_fragments" : 3},
			        }
			    }
						    
		    }
		}).then(function (response) {
			return response;
		}).catch(function(error){
		    	console.trace(error);
		    	return error
		});
	},
   	create:function(type, body, parent){
   		
   		return client.create({
		  index: sails.config.esName,
		  type: type,
		  // parent : parent,
		  id: body.id,
		  body: body
		}).then(function (response) {
			return response;
		}).catch(function(error){
		    	console.trace(error);
		    	return error
		});
	},
	delete:function(type, body){
   		return client.delete({
		  index: sails.config.esName,
		  type: type,
		  id: body.id
		}).then(function (response) {
            return response
		}).catch(function(error){
		    	console.trace(error);
		    	return error
		});
	},
	update:function(type, body, parent){
		console.log('ES UPDATE');
		console.log(type, body, parent);

   		return client.update({
		  index: sails.config.esName,
		  type: type,
		  // parent : parent,
		  id: body.id,
		  body: {doc:body}
		}).then(function (response) {
            return response
		}).catch(function(error){
		   console.trace(error);
		   return error
		});
	},
};

