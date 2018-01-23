var Promise = require('bluebird');
var nodemailer = require('nodemailer');
var moment = require('moment');
// var marked = require('marked');
var truncate = require('html-truncate');

module.exports={
	home:function(req,res,next) {

		

			res.status(200).render('front/index',{
				baseurl : '/',
				// articles: articles,
				// articles:articles,
				// marked:marked,
				title: req.__('SEO_HOME_title'),
				description:req.__('SEO_HOME_description_google'),
				// scripturl:'script.js',
				moment: moment,
				menu:'home',
			})
					


	},
	clubRD:function(req,res,next) {

		

			res.status(200).view('front/clubRD',{
				baseurl : '/',
				// articles: articles,
				// articles:articles,
				// marked:marked,
				title: req.__('SEO_HOME_title'),
				description:req.__('SEO_HOME_description_google'),
				// scripturl:'script.js',
				moment: moment,
				menu:'home',
			})
					


	},
	documents:function(req,res,next) {

			
		var slideshowsPromise = Slideshow.find({title:['document']}).limit(100).populateAll();

			slideshowsPromise
		    .then(function(slideshows) {   
		        var slideshowsWithSlidesPromises = slideshows.map(function(slideshow) {
		            var slidePromises = slideshow.slides.map(function(slide) {
		                return Slide.findOne(slide.id).populateAll();
		            });

		            return Promise.all(slidePromises)
		                  .then(function(fullfilledSlides) {
		                  	  slideshow = slideshow.toObject()
		                      slideshow.slides = fullfilledSlides;
		                      return slideshow;
		                   })
		        })

		        return Promise.all(slideshowsWithSlidesPromises)
		    })
		   .then(function(fullData) {
		   		
		        // res.send()
		        res.status(200).view('front/documents',{
					baseurl : '/',
					// articles: articles,
					documents:fullData,
					// marked:marked,
					title: req.__('SEO_HOME_title'),
					description:req.__('SEO_HOME_description_google'),
					// scripturl:'script.js',
					moment: moment,
					menu:'documents',
				})
		    })
		    .catch(function(e){
		    	console.log(e);
		    })













			
					


	},
		
	sendmail:function(req,res,next) {

		console.log('sendmail');

				
				var reponse = { "alert": "error", "message": "Votre email n'à <strong>pas</strong> été envoyé." };


				console.log(req.body);

				var receivers = 'alexismomcilovic@gmail.com';
				// var expiditor = 'alexismomcilovic@gmail.com';
				// var subject = 'alexismomcilovic@gmail.com';
				// var message = 'alexismomcilovic@gmail.com';

				var data = {}
				  data.name = req.body['template-contactform-name']
			      data.email = req.body['template-contactform-email']
			      data.phone = req.body['template-contactform-phone']
			      data.subject = req.body['template-contactform-subject']
			      data.message = req.body['template-contactform-message']

			      if(!data.name || !data.email || !data.message){
			      		var reponse = { "alert": "error", "message": "Veuillez remplir les champs requis." };
			      		res.status(301).send(reponse)
			      		
			      }

			      console.log(data);


				mail.sendEmail({
		             from: ""+ data.name +"<"+data.email+">", // sender address 
		             to: sails.config.mainEmailClient, // list of receivers 
		             subject: data.subject, // Subject line 
		        },'emailClient',{data:data, URL_HOME:sails.config.URL_HOME  }).then(function(data){

		        	console.log(data);


		        	if(data.rejected.length){

		        		var reponse = { "alert": "error", "message": "Votre email n'à <strong>pas</strong> été envoyé." };
			      		res.status(301).send(reponse)
		        	}else{
		        		var reponse = { "alert": "success", "message": "Votre email à été envoyé." };
		        		res.status(200).send(reponse)
		        	}
		        });




				
	},	
	contact:function(req,res,next) {

		console.log('contact');
					res.status(200).view('front/contact',{
						baseurl : '/',
						// articles:articles,
						// marked:marked,
						title: req.__('SEO_contact_title'),
						description:req.__('SEO_contact_description'),
						// scripturl:'script.js',
						menu:'contact',
					})
	},	
	consultation:function(req,res,next) {

		console.log('services');
					res.status(200).view('front/consultation',{
						baseurl : '/',
						// articles:articles,
						// marked:marked,
						title: req.__('SEO_consultation_title'),
						description:req.__('SEO_consultation_description'),
						// scripturl:'script.js',
						menu:'consultation',
					})
	},	
	maintenance:function(req,res,next) {

		console.log('maintenance');
					res.status(200).view('front/maintenance',{
						baseurl : '/',
						// articles:articles,
						// marked:marked,
						title: req.__('SEO_consultation_title'),
						description:req.__('SEO_consultation_description'),
						// scripturl:'script.js',
						menu:'',
					})
	},		
	services:function(req,res,next) {

		console.log('services');
					res.status(200).view('front/services',{
						baseurl : '/',
						// articles:articles,
						// marked:marked,
						title: req.__('SEO_services_title'),
						description:req.__('SEO_services_description'),
						// scripturl:'script.js',
						menu:'services',
					})
	},	
	services2:function(req,res,next) {

		console.log('services');
					res.status(200).view('front/services2',{
						baseurl : '/',
						// articles:articles,
						// marked:marked,
						title: req.__('SEO_services_title'),
						description:req.__('SEO_services_description'),
						// scripturl:'script.js',
						menu:'services',
					})
	},

	addCommentArticle:function(req,res,next){

		console.log('addCommentArticle');
		console.log(req.params.itemid);

		console.log(req.body);
		var comment = req.body
		var commentToCreate =req.body;

		Article.findOne(req.params.itemid)
		.then(function(article){
			console.log(article);
			comment.articleName = article.title;
			article.comments.add(req.body)
			// return
			return article.save()	

		}).then(function(d){
				res.status(200).send('OK')
			
		})
		
	},
	article:function(req,res,next){
		console.log('ARTICLE');
		console.log(req.params.id);
		moment.locale(req.locale);
		// baseurl='/'
		// if(req.params.page){
			baseurl='/../'
			// page = req.params.page;
		// }
		var result = {};

		

		Article.findOne(req.params.id).populate('images').populate('authors').populate('categories').populate('documents').populate('comments',{where:{'status':'actif'}})
	    .then(function(article) {
	    	var newnbView = Number(article.nbView) + 1 ; 

	    	console.log(article.nbView +'_____>>>>>'+newnbView);
	    	article.nbView = newnbView
	    	result.tmparticle = article
	    	return Article.update(req.params.id,{nbView:newnbView})
	    		
	    })
	    .then(function(article) {  
	    	article = result.tmparticle
	    	// console.log(article);

	            var authorsPromises = article.authors.map(function(author) {
	                return User.findOne(author.id).populateAll();
	            });
	            return Promise.all(authorsPromises)
	                  .then(function(fullfilledAuthors) {
	                  	  article = article.toObject()
	                      article.authors = fullfilledAuthors;
	                      // article.content = truncate(article.content, 250)
	                      return article;
	                   })
	        

	    })
	    .then(function(article) {   
	   		result.article = article

	            var comPromises = result.article.comments.map(function(com) {
	                return Comment.findOne(com.id).populateAll();
	            });
	            return Promise.all(comPromises)
	                  .then(function(fullfilled) {
	                  	  // article = article.toObject()
	                      result.article.comments = fullfilled;
	                      // article.content = truncate(article.content, 250)
	                      return article;
	                   })
	        

	    })
	   .then(function(article) {
	   		
	   		result.article = article
	   		
	   		return Article.find({status:'actif'}).populate('images').sort('nbView DESC')
	    	.limit(5)



	    })
	   .then(function(mostseen) {
	   		
	   		result.mostseen = mostseen
	   		
	   		return Category.find({ nbArticles: { '!': '0' }}).sort('name ASC')



	    })
	   .then(function(categories) {
	   		
	   		result.categories = categories
	   		
	   		return Article.find({status:'actif'}).populate('images').sort('date DESC')
	    	.limit(5)



	    })
	   .then(function(recent) {
	   		
	   		result.recent = recent
	   		
	   		return Tag.find({ nbArticles: { '!': '0' }}).sort('name ASC')



	    }).then(function(tags){

			result.tags = tags	    	

	    	res.status(200).view('front/article',{
				article:result.article,
				title: result.article.title,
				description:result.article.description,
				scripturl:'blog.js',
				menu:'blog',
				// nbPage:nbPage,
				thiscategory:null,
				mostseen:result.mostseen,
				recent:result.recent,
				tags:result.tags,
				categories:result.categories,
				moment: moment,
				baseurl:baseurl
			})
	    })
	    .catch(function(e){
	    	console.log('ERRRRRRRRRRRRRRRRRRRRRRRRRROR');
	    	console.log(e);
	    })
		
	},
	blog:function(req,res,next){
		req.locale = req.locale || 'en'
		moment.locale(req.locale);
		var page = 1;
		// nbperpage = 2;
		baseurl='/'
		if(req.params.page){
			baseurl='/../'
			page = req.params.page;
		}
		var result = {};

		var articlesPromise = Article.find({status:'actif'}).sort('date DESC')
	    .limit(100).populateAll();

		articlesPromise
	    .then(function(articles) {   
	        var articlesWithAuthorsPromises = articles.map(function(article) {
	            var authorsPromises = article.authors.map(function(author) {
	                return User.findOne(author.id).populateAll();
	            });

	            return Promise.all(authorsPromises)
	                  .then(function(fullfilledAuthors) {
	                  	  article = article.toObject()
	                      article.authors = fullfilledAuthors;
	                      article.content = truncate(article.content, 250)
	                      return article;
	                   })
	        })

	        return Promise.all(articlesWithAuthorsPromises)
	    })
	   .then(function(articles) {
	   		
	   		result.articles = articles
	   		
	   		return Article.find({status:'actif'}).populate('images').sort('nbView DESC')
	    	.limit(5)



	    })
	   .then(function(mostseen) {
	   		
	   		result.mostseen = mostseen
	   		
	   		return Article.find({status:'actif'}).populate('images').sort('date DESC')
	    	.limit(5)



	    })
	   .then(function(recent) {
	   		
	   		result.recent = recent
	   		
	   		return Category.find({ nbArticles: { '!': '0' }}).sort('name ASC')



	    })
	   .then(function(categories) {
	   		
	   		result.categories = categories
	   		
	   		return Tag.find({ nbArticles: { '!': '0' }}).sort('name ASC')



	    }).then(function(tags){

			result.tags = tags	    	

	    	res.status(200).view('front/blog',{
				articles:result.articles,
				title: req.__('SEO_BLOG_title'),
				description:req.__('SEO_BLOG_description'),
				scripturl:'blog.js',
				menu:'blog',
				// nbPage:nbPage,
				thiscategory:null,
				recent:result.recent,
				mostseen:result.mostseen,
				tags:result.tags,
				categories:result.categories,
				moment: moment,
				baseurl:baseurl
			})
	    })
	    .catch(function(e){
	    	console.log('ERRRRRRRRRRRRRRRRRRRRRRRRRROR');
	    	console.log(e);
	    })
		
			




	},
	categoryArticle:function(req,res,next){
		console.log('CATEGORY====>',req.params.thiscat);
		req.locale = req.locale || 'en'
		moment.locale(req.locale);
		var page = 1;
		// nbperpage = 2;
		baseurl='/'
		if(req.params.page){
			baseurl='/../'
			page = req.params.page;
		}
		var result = {};

		Category.findOne(req.params.thiscat).populate('articles')

		.then(function(cat){
			console.log(cat);
				// console.log(cat.articles);
				var articlesIds = _.map(cat.articles,function(o){ return o.id})
				console.log(articlesIds);
				return Article.find({id: articlesIds , status:'actif'})
				.sort('date DESC').limit(100).populateAll();
		})
	    .then(function(articles) {   
	        var articlesWithAuthorsPromises = articles.map(function(article) {
	            var authorsPromises = article.authors.map(function(author) {
	                return User.findOne(author.id).populateAll();
	            });

	            return Promise.all(authorsPromises)
	                  .then(function(fullfilledAuthors) {
	                  	  article = article.toObject()
	                      article.authors = fullfilledAuthors;
	                      article.content = truncate(article.content, 250)
	                      return article;
	                   })
	        })

	        return Promise.all(articlesWithAuthorsPromises)
	    })
	   .then(function(articles) {
	   		
	   		result.articles = articles
	   		
	   		return Article.find({status:'actif'}).populate('images').sort('nbView DESC')
	    	.limit(5)



	    })
	   .then(function(mostseen) {
	   		
	   		result.mostseen = mostseen
	   		
	   		return Article.find({status:'actif'}).populate('images').sort('date DESC')
	    	.limit(5)



	    })
	   .then(function(recent) {
	   		
	   		result.recent = recent
	   		
	   		return Category.find({nbArticles: { '!': '0' }}).sort('name ASC')



	    })
	   .then(function(categories) {
	   		
	   		result.categories = categories
	   		
	   		return Category.findOne(req.params.thiscat).populate('images')



	    }).then(function(thiscat) {
	   		
	   		result.thiscat = thiscat
	   		
	   		return Tag.find({ nbArticles: { '!': '0' }}).sort('name ASC')



	    }).then(function(tags){

			result.tags = tags	    	

			console.log('HEHEHEHEHEHEHEHEHHEE');
	    	res.status(200).view('front/blog',{
				articles:result.articles,
				title: req.__('SEO_BLOG_title'),
				description:req.__('SEO_BLOG_description'),
				scripturl:'blog.js',
				menu:'blog',
				// nbPage:nbPage,
				thiscategory:result.thiscat,
				recent:result.recent,
				mostseen:result.mostseen,
				tags:result.tags,
				categories:result.categories,
				moment: moment,
				baseurl:baseurl
			})
	    })
	    .catch(function(e){
	    	console.log('ERRRRRRRRRRRRRRRRRRRRRRRRRROR');
	    	console.log(e);
	    })
		
			




	},
	tagArticle:function(req,res,next){
		console.log('tags====>',req.params.thiscat);
		req.locale = req.locale || 'en'
		moment.locale(req.locale);
		var page = 1;
		// nbperpage = 2;
		baseurl='/'
		if(req.params.page){
			baseurl='/../'
			page = req.params.page;
		}
		var result = {};

		Tag.findOne(req.params.thiscat).populate('articles')

		.then(function(cat){
			console.log(cat);
				// console.log(cat.articles);
				var articlesIds = _.map(cat.articles,function(o){ return o.id})
				console.log(articlesIds);
				return Article.find({id: articlesIds , status:'actif'})
				.sort('date DESC').limit(100).populateAll();
		})
	    .then(function(articles) {   
	        var articlesWithAuthorsPromises = articles.map(function(article) {
	            var authorsPromises = article.authors.map(function(author) {
	                return User.findOne(author.id).populateAll();
	            });

	            return Promise.all(authorsPromises)
	                  .then(function(fullfilledAuthors) {
	                  	  article = article.toObject()
	                      article.authors = fullfilledAuthors;
	                      article.content = truncate(article.content, 250)
	                      return article;
	                   })
	        })

	        return Promise.all(articlesWithAuthorsPromises)
	    })
	   .then(function(articles) {
	   		
	   		result.articles = articles
	   		
	   		return Article.find({status:'actif'}).populate('images').sort('nbView DESC')
	    	.limit(5)



	    })
	   .then(function(mostseen) {
	   		
	   		result.mostseen = mostseen
	   		
	   		return Category.find({nbArticles: { '!': '0' }}).sort('name ASC')



	    })
	   .then(function(categories) {
	   		
	   		result.categories = categories
	   		
	   		return Tag.find({ nbArticles: { '!': '0' }}).sort('name ASC')



	    }).then(function(tags){

			result.tags = tags	    	

			console.log('TAGSARTICLE  END');


	    	res.status(200).view('front/blog',{
				articles:result.articles,
				title: req.__('SEO_BLOG_title'),
				description:req.__('SEO_BLOG_description'),
				scripturl:'blog.js',
				menu:'blog',
				tags:result.tags,
				// nbPage:nbPage,
				thiscategory:null,
				mostseen:result.mostseen,
				categories:result.categories,
				moment: moment,
				baseurl:baseurl
			})
	    })
	    .catch(function(e){
	    	console.log('ERRRRRRRRRRRRRRRRRRRRRRRRRROR');
	    	console.log(e);
	    })
		
			




	}

}
