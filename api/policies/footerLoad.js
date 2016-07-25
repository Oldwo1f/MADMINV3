module.exports = function(req, res, next) {


	var slideshowsPromise = Slideshow.find().where({title:'Client'}).populateAll();

	slideshowsPromise.then(function(slideshows) {   
		var slideshowsWithSlidesPromises = slideshows.map(function(slideshow) {
	        var slidePromises = slideshow.slides.map(function(slide) {
	            return Slide.findOne(slide.id).populateAll();
	        });

        	return Promise.all(slidePromises).then(function(fullfilledSlides) {
          	  	slideshow = slideshow.toObject()
              	slideshow.slides = fullfilledSlides;
              	return slideshow;
           })
		})

		return Promise.all(slideshowsWithSlidesPromises)
	})
	.then(function(fullData) {
   		// footer={}
   		// footer.clientSlideshow = fullData
        req.clientSlideshow = fullData
        return next()
    })
    .catch(function(e){
    	return next();
    })





 
};
