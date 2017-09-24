var Promise = require('bluebird');
var fs = require('fs'), Writable = require('stream').Writable;
var sid = require('shortid');
var easyimg = require('easyimage');
var IsThere = require("is-there");
module.exports = {

	searchGlobal:function(req,res,next){
		

		console.log('SEARCH');
		console.log(req.body.slug);

		es.searchGlobal(req.body.slug).then(function(data){
			

			console.log(data);
			res.send(data)

            // return callback()
        }).catch(function(err){
        	console.log('erreorGlobal search');
        })






	},
	reindex:function(req,res,next){

		console.log('RE INDEX');

		Article.find().populateAll().exec(function(err,data){
			var item=[]

			for(d in data){
				var head = {"index": {"_index":sails.config.esName,"_type":'article',"_id":data[d].id}}
				item.push(head)
				item.push(data[d])
			}
			console.log(item);
			es.client().bulk({
				body:item
			},function(e,rep){
				console.log('result');
				console.log(e);				
				console.log(rep);				
			})
			
		})
		Project.find().populateAll().exec(function(err,data){
			var item=[]

			for(d in data){
				var head = {index: {_index:sails.config.esName,_type:'project',"_id":data[d].id}}
				item.push(head)
				item.push(data[d])
			}
			es.client().bulk({
				body:item
			},function(e,rep){
				console.log('result');
				console.log(e);				
				console.log(rep);				
			})

		})
		Event.find().populateAll().exec(function(err,data){
			var item=[]	
			for(d in data){
				var head = {index: {_index:sails.config.esName,_type:'event',"_id":data[d].id}}
				item.push(head)
				item.push(data[d])
			}
			es.client().bulk({
				body:item
			},function(e,rep){
				console.log('result');
				console.log(e);				
				console.log(rep);				
			})

		})
		Tag.find().exec(function(err,data){
				var item=[]
			for(d in data){
				var head = {index: {_index:sails.config.esName,_type:'tag',"_id":data[d].id}}
				item.push(head)
				item.push(data[d])
			}
			es.client().bulk({
				body:item
			},function(e,rep){
				console.log('result');
				console.log(e);				
				console.log(rep);				
			})

		})
		Category.find().exec(function(err,data){
				var item=[]
			for(d in data){
				var head = {index: {_index:sails.config.esName,_type:'category',"_id":data[d].id}}
				item.push(head)
				item.push(data[d])
			}
			es.client().bulk({
				body:item
			},function(e,rep){
				console.log('result');
				console.log(e);				
				console.log(rep);				
			})

		})
		Ingrediant.find().populateAll().exec(function(err,data){
				var item=[]
			for(d in data){
				var head = {index: {_index:sails.config.esName,_type:'ingrediant',"_id":data[d].id}}
				item.push(head)
				item.push(data[d])
			}
			es.client().bulk({
				body:item
			},function(e,rep){
				console.log('result');
				console.log(e);				
				console.log(rep);				
			})

		})
		Fabricant.find().populateAll().exec(function(err,data){
				var item=[]
			for(d in data){
				var head = {index: {_index:sails.config.esName,_type:'fabricant',"_id":data[d].id}}
				item.push(head)
				item.push(data[d])
			}
			es.client().bulk({
				body:item
			},function(e,rep){
				console.log('result');
				console.log(e);				
				console.log(rep);				
			})

		})
		Comment.find().populateAll().exec(function(err,data){
				var item=[]
			for(d in data){
				var head = {index: {_index:sails.config.esName,_type:'comment',"_id":data[d].id}}
				item.push(head)
				item.push(data[d])
			}
			es.client().bulk({
				body:item
			},function(e,rep){
				console.log('result');
				console.log(e);				
				console.log(rep);				
			})

		})
		User.find().exec(function(err,data){
				var item=[]
			for(d in data){
				var head = {index: {_index:sails.config.esName,_type:'user',"_id":data[d].id}}
				item.push(head)
				item.push(data[d])
			}
			es.client().bulk({
				body:item
			},function(e,rep){
				console.log('result');
				console.log(e);				
				console.log(rep);				
			})

		})

		
	}








}