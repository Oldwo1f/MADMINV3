var moment = require('moment');
var http = require('http');
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require("fs"));
var request = require('request');

module.exports={

	blog:function(req,res){
		// console.log('COME HERE');
 
		return res.render('blog');
	}
};