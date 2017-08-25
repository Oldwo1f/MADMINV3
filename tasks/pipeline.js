/**
 * grunt/pipeline.js
 *
 * The order in which your css, javascript, and template files should be
 * compiled and linked from your views and static HTML files.
 *
 * (Note that you can take advantage of Grunt-style wildcard/glob/splat expressions
 * for matching multiple files.)
 *
 * For more information see:
 *   https://github.com/balderdashy/sails-docs/blob/master/anatomy/myApp/tasks/pipeline.js.md
 */


// CSS files to inject in order
//
// (if you're using LESS with the built-in default config, you'll want
//  to change `assets/styles/importer.less` instead.)
var cssFilesToInject = [
  'bower_components/bootstrap/dist/css/bootstrap.min.css',
  
  'bower_components/font-awesome/css/font-awesome.css',
  'bower_components/angular-gridster/dist/angular-gridster.min.css',
  'bower_components/textAngular/dist/textAngular.css',
  'bower_components/angularjs-color-picker/dist/angularjs-color-picker.min.css',
  'bower_components/ng-tags-input/ng-tags-input.css',
  'bower_components/jqcloud2/dist/jqcloud.min.css',
  'bower_components/angular-trustpass/dist/tr-trustpass.min.css',
  'bower_components/angular-notification-icons/dist/angular-notification-icons.min.css',
  'bower_components/angular-chart.js/dist/angular-chart.min.css',
  'bower_components/angular-carousel/dist/angular-carousel.min.css',
  'bower_components/angular-ui-select/dist/select.css',
  // 'bower_components/angular-bootstrap-calendar/dist/css/angular-bootstrap-calendar.min.css',
  // 'bower_components/angular-material/angular-material.css',

  'styles/backoffice/**/*.css',
  'styles/backoffice/main.css',
  'styles/backoffice/importer.css'

];



// Client-side javascript files to inject in order
// (uses Grunt-style wildcard/glob/splat expressions)
var jsFilesToInject = [
  // Load sails.io before everything else
  'js/dependencies/sails.io.js', 

  // Dependencies like jQuery, or Angular are brought in here
  'bower_components/jquery/dist/jquery.min.js',
  'bower_components/bootstrap/dist/js/bootstrap.min.js',
  'bower_components/tinycolor/dist/tinycolor-min.js',
  'bower_components/jqcloud2/dist/jqcloud.min.js',
  'js/dependencies/**/*.js',
  'bower_components/moment/moment.js',
  'bower_components/moment/locale/fr.js',
  'bower_components/angular/angular.min.js',
  'bower_components/angular-ui-router/release/angular-ui-router.min.js',
  'bower_components/angularSails/dist/ngsails.io.js',
  'bower_components/flexi-list-master/flexi-list.js',
  'bower_components/javascript-detect-element-resize/jquery.resize.js',
  'bower_components/angular-gridster/dist/angular-gridster.min.js',
  'bower_components/angular-sanitize/angular-sanitize.min.js',
  'bower_components/angular-animate/angular-animate.min.js',
  'bower_components/tinymce-dist/tinymce.js',
  'bower_components/angular-ui-tinymce/src/tinymce.js',
  'bower_components/angular-ui-select/dist/select.min.js',
  'bower_components/angular-bootstrap-datetimepicker/src/js/datetimepicker.js',
  'bower_components/angular-bootstrap-datetimepicker/src/js/datetimepicker.templates.js',
  'bower_components/angular-moment/angular-moment.js',
  'bower_components/angular-aria/angular-aria.min.js',
  'bower_components/angular-material/angular-material.js',
  'bower_components/angular-file-model/angular-file-model.js',
  'bower_components/ng-file-upload/ng-file-upload.js',
  'bower_components/ng-tags-input/ng-tags-input.js',
  'bower_components/satellizer/satellizer.min.js',
  'bower_components/spin.js/spin.js',
  'bower_components/angular-trustpass/dist/tr-trustpass.min.js',
  'bower_components/angular-spinner/angular-spinner.js',
  'bower_components/ng-file-upload/ng-file-upload.min.js',
  'bower_components/angular-file-upload/angular-file-upload.min.js',
  'bower_components/angular-ui-sortable/sortable.js',
  'bower_components/ngInfiniteScroll/build/ng-infinite-scroll.min.js',
  'bower_components/ngletteravatar/dist/ngletteravatar.min.js',
  'bower_components/angular-notification-icons/dist/angular-notification-icons.min.js',
  'bower_components/angular-nicescroll/angular-nicescroll.js',
  'bower_components/genie/dist/genie.min.js',
  'bower_components/ux-genie/uxGenie.min.js',
  'bower_components/Chart.js/Chart.js',
  'bower_components/angular-chart.js/dist/angular-chart.min.js',
  'bower_components/angular-elastic/elastic.js',
  'bower_components/angular-touch/angular-touch.min.js',
  'bower_components/angular-carousel/dist/angular-carousel.min.js',
  'bower_components/angularjs-color-picker/dist/angularjs-color-picker.min.js',
  'bower_components/angular-bootstrap-calendar/dist/js/angular-bootstrap-calendar-tpls.min.js',
  'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
  'bower_components/textAngular/dist/textAngular-rangy.min.js',
  'bower_components/textAngular/dist/textAngular-sanitize.min.js',
  'bower_components/textAngular/dist/textAngular.min.js',
  'bower_components/ngSlimscroll/src/js/min/ngSlimscroll.js',


  // All of the rest of your client-side js files
  // will be injected here in no particular order.
  'js/backoffice/core/app.annotated.js',
  'js/backoffice/core/widgetService.annotated.js',
  'js/backoffice/**/index.annotated.js',
  'js/backoffice/**/*.annotated.js'
];

















var cssPaiFilesToInject = [
  'bower_components/bootstrap/dist/css/bootstrap.min.css',
  
  'bower_components/font-awesome/css/font-awesome.css',
  'bower_components/angular-gridster/dist/angular-gridster.min.css',
  'bower_components/textAngular/dist/textAngular.css',
  'bower_components/angularjs-color-picker/dist/angularjs-color-picker.min.css',
  'bower_components/ng-tags-input/ng-tags-input.css',
  'bower_components/jqcloud2/dist/jqcloud.min.css',
  'bower_components/angular-trustpass/dist/tr-trustpass.min.css',
  'bower_components/angular-notification-icons/dist/angular-notification-icons.min.css',
  'bower_components/angular-chart.js/dist/angular-chart.min.css',
  'bower_components/angular-carousel/dist/angular-carousel.min.css',
  'bower_components/angular-wizard/dist/angular-wizard.min.css',
  'bower_components/angular-flash-alert/dist/angular-flash.min.css',
  'bower_components/angular-ui-select/dist/select.css',
  // 'bower_components/gentelella/build/css/custom.css',
  // 'bower_components/angular-material/angular-material.css',
'bower_components/angular-bootstrap-calendar/dist/css/angular-bootstrap-calendar.min.css',
  // 'styles/backoffice/**/*.css',
  'styles/front/font-icons.css',
  'styles/front/fonts.css',
  'styles/front/animate.css',
  'styles/front/magnific-popup.css',
  'styles/front/responsive.css',
  'styles/front/style.css',
  'styles/front/mystyle.css',
  'styles/front/PAI/paistyle.css',

];




var jsPaiFilesToInject = [
  // Load sails.io before everything else
  'js/dependencies/sails.io.js', 

  // Dependencies like jQuery, or Angular are brought in here
  'bower_components/jquery/dist/jquery.min.js',
  'bower_components/bootstrap/dist/js/bootstrap.min.js',
  'bower_components/tinycolor/dist/tinycolor-min.js',
  'bower_components/jqcloud2/dist/jqcloud.min.js',
  'js/dependencies/**/*.js',
  'bower_components/moment/moment.js',
  'bower_components/moment/locale/fr.js',
  'bower_components/angular/angular.min.js',
  'bower_components/ev-emitter/ev-emitter.js',
  'bower_components/desandro-matches-selector/matches-selector.js',
  'bower_components/fizzy-ui-utils/utils.js',
  'bower_components/get-size/get-size.js',
  'bower_components/outlayer/item.js',
  'bower_components/outlayer/outlayer.js',
  'bower_components/masonry/masonry.js',
  'bower_components/flexslider/jquery.flexslider.js',
  'bower_components/angular-ui-select/dist/select.min.js',
  'bower_components/angular-ui-router/release/angular-ui-router.min.js',
  'bower_components/angularSails/dist/ngsails.io.js',
  'bower_components/flexi-list-master/flexi-list.js',
  'bower_components/javascript-detect-element-resize/jquery.resize.js',
  'bower_components/angular-gridster/dist/angular-gridster.min.js',
  'bower_components/angular-sanitize/angular-sanitize.min.js',
  'bower_components/angular-animate/angular-animate.min.js',
  'bower_components/tinymce-dist/tinymce.js',
  'bower_components/angular-ui-tinymce/src/tinymce.js',
  'bower_components/angular-bootstrap-datetimepicker/src/js/datetimepicker.js',
  'bower_components/angular-bootstrap-datetimepicker/src/js/datetimepicker.templates.js',
  'bower_components/angular-moment/angular-moment.js',
  'bower_components/angular-aria/angular-aria.min.js',
  'bower_components/angular-material/angular-material.js',
  'bower_components/angular-file-model/angular-file-model.js',
  'bower_components/ng-file-upload/ng-file-upload.js',
  'bower_components/ng-tags-input/ng-tags-input.js',
  'bower_components/satellizer/satellizer.min.js',
  'bower_components/spin.js/spin.js',
  'bower_components/angular-trustpass/dist/tr-trustpass.min.js',
  'bower_components/angular-spinner/angular-spinner.js',
  'bower_components/ng-file-upload/ng-file-upload.min.js',
  'bower_components/angular-file-upload/angular-file-upload.min.js',
  'bower_components/angular-ui-sortable/sortable.js',
  'bower_components/ngInfiniteScroll/build/ng-infinite-scroll.min.js',
  'bower_components/ngletteravatar/dist/ngletteravatar.min.js',
  'bower_components/angular-notification-icons/dist/angular-notification-icons.min.js',
  'bower_components/angular-nicescroll/angular-nicescroll.js',
  'bower_components/genie/dist/genie.min.js',
  'bower_components/ux-genie/uxGenie.min.js',
  'bower_components/Chart.js/Chart.js',
  'bower_components/angular-chart.js/dist/angular-chart.min.js',
  'bower_components/angular-elastic/elastic.js',
  'bower_components/angular-touch/angular-touch.min.js',
  'bower_components/angular-carousel/dist/angular-carousel.min.js',
  'bower_components/angular-wizard/dist/angular-wizard.min.js',
  'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
  'bower_components/angular-flash-alert/dist/angular-flash.min.js',
  'bower_components/angular-masonry/angular-masonry.js',
  'bower_components/ngInfiniteScroll/ng-infinite-scroll.min.js',
  'bower_components/angular-flexslider/angular-flexslider.js',
  'bower_components/angular-socialshare/dist/angular-socialshare.min.js',
  '/bower_components/ngmap/build/scripts/ng-map.min.js',

    'bower_components/angular-bootstrap-calendar/dist/js/angular-bootstrap-calendar-tpls.min.js',
  // 'bower_components/angular-bootstrap/ui-bootstrap.min.js',
  // 'bower_components/gentelella/build/js/custom.js',
  // 'bower_components/angularjs-color-picker/dist/angularjs-color-picker.min.js',

  // 'bower_components/textAngular/dist/textAngular-rangy.min.js',
  // 'bower_components/textAngular/dist/textAngular-sanitize.min.js',
  // 'bower_components/textAngular/dist/textAngular.min.js',
  // 'bower_components/ngSlimscroll/src/js/min/ngSlimscroll.js',

  // 'js/front/plugins.js',
  // 'js/front/functions.js',
  'js/front/PAI/app.annotated.js',
  'js/front/PAI/**/index.annotated.js',
  'js/front/PAI/**/*.annotated.js',
];


// Client-side HTML templates are injected using the sources below
// The ordering of these templates shouldn't matter.
// (uses Grunt-style wildcard/glob/splat expressions)
//
// By default, Sails uses JST templates and precompiles them into
// functions for you.  If you want to use jade, handlebars, dust, etc.,
// with the linker, no problem-- you'll just want to make sure the precompiled
// templates get spit out to the same file.  Be sure and check out `tasks/README.md`
// for information on customizing and installing new tasks.
var templateFilesToInject = [
  'templates/**/*.html',
  'js/**/*.html',
];







// Default path for public folder (see documentation for more information)
var tmpPath = '.tmp/public/';

// Prefix relative paths to source files so they point to the proper locations
// (i.e. where the other Grunt tasks spit them out, or in some cases, where
// they reside in the first place)
module.exports.cssFilesToInject = cssFilesToInject.map(function(cssPath) {
  return require('path').join('.tmp/public/', cssPath);
});
module.exports.cssPaiFilesToInject = cssPaiFilesToInject.map(function(cssPath) {
  return require('path').join('.tmp/public/', cssPath);
});
module.exports.jsFilesToInject = jsFilesToInject.map(function(jsPath) {
  return require('path').join('.tmp/public/', jsPath);
});
module.exports.jsPaiFilesToInject = jsPaiFilesToInject.map(function(jsPath) {
  return require('path').join('.tmp/public/', jsPath);
});
module.exports.templateFilesToInject = templateFilesToInject.map(function(tplPath) {
  return require('path').join('assets/',tplPath);
});


