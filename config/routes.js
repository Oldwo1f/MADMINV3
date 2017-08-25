/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  // '/': {
  //   view: 'homepage'
  // },
  '/admin':'adminController.serveApp',
  '/club':'adminController.servePAI',
  'GET /':'FrontController.home',


 

  
  'GET /api/fabricant/searchAutocomplete/:searchText':'fabricantController.searchAutocomplete',
  'GET /api/tag/searchAutocomplete/:searchText':'tagController.searchAutocomplete',
  'GET /api/category/searchAutocomplete/:searchText':'categoryController.searchAutocomplete',
  'POST /api/article/:id/documents':'articleController.uploadDocument',
  'POST /api/article/:id/images':'articleController.uploadImage',
  'POST /api/category/:id/images':'categoryController.uploadImage',
  'POST /article/:itemid/addComment':'articleController.addComment',
  'POST /project/:itemid/addComment':'projectController.addComment',
  'POST /comment/:itemid/addReponse':'articleController.addReponse',
  'GET /image/:size/:name':'ImageController.serveImage',
  'GET /document/:name':'DocumentController.serveDocument',
  'POST /api/image/resize':'ImageController.resizeImage',
  'POST /api/image/resizeprofile':'ImageController.resizeImageProfile',
  'get /api/article/search/:sort/:slug':'articleController.search',
  'get /api/article/:sort/:limit/:page':'articleController.fetch',
  'get /api/articleActif/:sort/:limit/:page':'articleController.fetchActive',
  'get /api/article/:id':'articleController.fetchOne',
  'POST /api/slide/:id/images':'slideController.uploadImage',
  'POST /api/slide/:id/documents':'slideController.uploadDocument',
  'get /api/slideshow/:sort/:limit/:page':'slideshowController.fetch',
  'get /api/slideshow':'slideshowController.fetch',
  'get /api/slideshow/home':'slideshowController.fetchHome',
  // 'POST /api/mycomment/:id':'commentController.update'

  //Fabricants

  'get /api/fabricant/getFabList':'fabricantController.getFabList',
  'get /api/fabricant/search/:sort/:slug':'fabricantController.search',
  'get /api/fabricant/:sort/:limit/:page':'fabricantController.fetch',
  'get /api/fabricantActif/:sort/:limit/:page':'fabricantController.fetchActive',
  'get /api/fabricant/:id':'fabricantController.fetchOne',
  'POST /api/fabricant/:id/documents':'fabricantController.uploadDocument',
  'POST /api/fabricant/:id/images':'fabricantController.uploadImage',
  'get /searchCountries/:slug':'fabricantController.searchCountries',
  //Event 
  'get /api/event/search/:sort/:slug':'eventController.search',
  'get /api/event/:sort/:limit/:page':'eventController.fetch',
  'get /api/eventActif':'eventController.fetchActive',
  'get /api/event/:id':'eventController.fetchOne',
  'POST /api/event/:id/documents':'eventController.uploadDocument',
  'POST /api/event/:id/images':'eventController.uploadImage',
  //Ingrediant
  'get /api/ingrediant/search/:sort/:slug':'ingrediantController.search',
  'get /api/ingrediant/:sort/:limit/:page':'ingrediantController.fetch',
  'get /api/ingrediantActif/:sort/:limit/:page':'ingrediantController.fetchActive',
  'get /api/ingrediant/:id':'ingrediantController.fetchOne',
  'POST /api/ingrediant/:id/documents':'ingrediantController.uploadDocument',
  'POST /api/ingrediant/:id/images':'ingrediantController.uploadImage',
    //Fabricant
  // 'get /api/fabricant/search/:sort/:slug':'fabricantController.search',
  // 'get /api/fabricant/:sort/:limit/:page':'fabricantController.fetch',
  // 'get /api/fabricantActif/:sort/:limit/:page':'fabricantController.fetchActive',
  // 'get /api/fabricant/:id':'fabricantController.fetchOne',
  // 'POST /api/fabricant/:id/documents':'fabricantController.uploadDocument',
  // 'POST /api/fabricant/:id/images':'fabricantController.uploadImage',


  'POST /api/project/:id/documents':'projectController.uploadDocument',
  'POST /api/project/:id/images':'projectController.uploadImage',
  'get /api/project/search/:sort/:slug':'projectController.search',
  'get /api/project/:sort/:limit/:page':'projectController.fetch',
  'get /api/projectActif/:sort/:limit/:page':'projectController.fetchActive',
  'get /api/project/:id':'projectController.fetchOne',
  //USER
  // 'POST /user':'UserController.create',
  'GET /api/user/verifyUniqueEmail/:email':'UserController.verifyUniqueEmail',
  'POST /user/firstConnexion':'UserController.firstConnexion',
  'get /addFirstAdmin':'UserController.addFirstAdmin',
  'POST /auth/login':'UserController.login',
  'POST /api/user/:id/images':'userController.uploadImage',
  'get /api/user/search/:sort/:slug':'userController.search',
  'GET /api/user/searchAutocomplete/:searchText':'userController.searchAutocomplete',
  'POST /api/user/:id/saveDash':'userController.saveDash',
  
  //admin
  'GET /analytics/:period/:metrics':'adminController.analytics',
  'GET /getBestBlogger':'adminController.getBestBlogger',
  'GET /countAll':'adminController.countAll',
  'GET /getNewComments':'adminController.getNewComments',
  'GET /getSocials':'adminController.getSocials',

  //Params 
  'GET /getTraductions/:lang':'ParamsController.getTraductions',
  'PUT /saveTraduction/:lang':'ParamsController.saveTraduction',
  'GET /getUploadsSize':'ParamsController.getUploadsSize',
  'GET /backupFiles':'ParamsController.backupFiles',
  'GET /backupDb':'ParamsController.backupDb',
  'GET /restoreDb':'ParamsController.restoreDb',
  'GET /gitCheckout':'ParamsController.gitCheckout',
  'GET /getVersion':'ParamsController.getVersion',
  'GET /getDbStats':'ParamsController.getDbStats',
  'GET /getLangs':'ParamsController.getLangs',
  'GET /getConfig':'ParamsController.getConfig',
  'GET /restartSite':'ParamsController.restartSite',


  // VALIDATEPAI

  'POST /validatePaiArticle/:id':'articleController.validatePai',
  'POST /unvalidatePaiArticle/:id':'articleController.unvalidatePai',

  'POST /validatePaiIngrediant/:id':'ingrediantController.validatePai',
  'POST /unvalidatePaiIngrediant/:id':'ingrediantController.unvalidatePai',

  'POST /validatePaiFabricant/:id':'fabricantController.validatePai',
  'POST /unvalidatePaiFabricant/:id':'fabricantController.unvalidatePai',

  'POST /validatePaiEvent/:id':'eventController.validatePai',
  'POST /unvalidatePaiEvent/:id':'eventController.unvalidatePai',

  'POST /validatePaiProject/:id':'projectController.validatePai2',
  'POST /unvalidatePaiProject/:id':'projectController.unvalidatePai2',

  'GET /refuscontreoffre/:id':'projectController.refuscontreoffre',
  'GET /validcontreoffre/:id':'projectController.validcontreoffre',


  // FETCH FRONT

  'GET /marketplace/fetchItem/:page':'projectController.fetchFront',
  'GET /blog/fetchItem/:page':'articleController.fetchFront',
  'GET /article/fetchOne/:id':'articleController.fetchOne',
  'GET /ingredient/fetchItem/:page':'ingrediantController.fetchFront',
  'GET /fabricant/fetchItem/:page':'fabricantController.fetchFront',
  'GET /fabricant/fetchOne/:id':'fabricantController.fetchOne',
  'GET /ingrediant/fetchOne/:id':'ingrediantController.fetchOne',
  'GET /event/fetchOne/:id':'eventController.fetchOne',


  // 'POST /article/:id/tags/:pk':'ArticleController.addTag',
  // 'POST /article/:id/tags':'ArticleController.addTag',
  // 'DELETE /article/:id/tags/:pk':'ArticleController.removeTag',

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/


  //FRONT

  
  'GET /home':'FrontController.home',
  'GET /blog':'FrontController.blog',


};
