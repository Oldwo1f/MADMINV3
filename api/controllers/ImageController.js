/**
 * ImageController
 *
 * @description :: Server-side logic for managing images
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var fs = require('fs'), Writable = require('stream').Writable;
var sid = require('shortid');
var easyimg = require('easyimage');
var IsThere = require("is-there");
module.exports = {
	
	serveImage:function  (req,res,next) {
		var filePath = 'uploads/images/'+ req.params.size +'/'+ req.params.name;
		// +req.params.size+'/'
		// sails.log(filePath);
		if (fs.existsSync(filePath)) {
    
		    var stat = fs.statSync(filePath);
	    	res.writeHead(200, {
		        // 'Content-Type': 'image/',
		        'Content-Length': stat.size
		    });

		    var readStream = fs.createReadStream(filePath);
		    readStream.pipe(res);
		}
		else{
			res.send(404)
		}
	    
	},	
	resizeImage:function  (req,res,next) {

		console.log('RESIZE IMAGE');
		easyimg.info('uploads/images/originalSize/'+req.body.filename).then(function(file) {
				info = file;
				var quality = 100;

				if(info.size > 300000){ quality = 90;}
				if(info.size > 500000){ quality = 80;}
				if(info.size > 700000){ quality = 70;}
				if(info.size > 1000000){ quality = 50;}
				if(info.size > 2000000){ quality = 30;}


		    	easyimg.rescrop({
		    		 gravity:'NorthWest',
				     src:'uploads/images/originalSize/'+req.body.filename, dst:'uploads/images/resized/'+req.body.filename,
				     width:file.width, height:file.height,
				     cropwidth:req.body.scaledWidth, cropheight:req.body.scaledHeight,
				     x:req.body.scaledLeft, y:req.body.scaledTop, quality:quality
				}).then(function(image) {

					easyimg.rescrop({
			    		 gravity:'NorthWest',
					     src:'uploads/images/resized/'+req.body.filename, dst:'uploads/images/resized2/'+req.body.filename,
					     width:req.body.normalWidth, height:req.body.normalHeight,
					     // cropwidth:req.body.normalWidth, cropheight:req.body.normalHeight,
					     // x:req.body.scaledLeft, y:req.body.scaledTop,
					      quality:100
					}).then(function(image) {
						
						
						if(req.body.imgid)
						{
							var paysage = true;
							if(image.width < image.height)
								paysage = false;

							Image.update(req.body.imgid,{width:image.width,height:image.height,size:image.size,paysage:paysage}).then(function(){
								
								Image.publishUpdate(req.body.imgid,{width:image.width,height:image.height,size:image.size,filename:req.body.filename})
								res.ok('resized')
							})

						}
						
					},function (err) {
					    console.log(err);
					});
					
				},function (err) {
				    console.log(err);
				});









		  	}, function (err) {
		    	console.log(err);
		  	}
		);


		

	},	
	resizeImageProfile:function  (req,res,next) {


		easyimg.info('uploads/images/originalSize/'+req.body.filename).then(function(file) {

		    	easyimg.rescrop({
		    		 gravity:'NorthWest',
				     src:'uploads/images/originalSize/'+req.body.filename, dst:'uploads/images/resized/'+req.body.filename,
				     width:file.width, height:file.height,
				     cropwidth:req.body.scaledWidth, cropheight:req.body.scaledHeight,
				     x:req.body.scaledLeft, y:req.body.scaledTop
				}).then(function(image) {
					
						easyimg.resize({
				    		 gravity:'NorthWest',
						     src:'uploads/images/resized/'+req.body.filename, dst:'uploads/images/profile/'+req.body.filename,
						     width:150, height:150,
						}).then(function(img){
							
							
						})
					if(req.body.imageId)
					{
						Image.publishUpdate(req.body.imageId,{'filename' : req.body.filename})
						res.ok('resized')
					}else{
						res.ok('noresized2')
					}
					
				},function (err) {
				    console.log(err);
				}
				);
		  	}, function (err) {
		    	console.log(err);
		  	}
		);


		

	},
};

