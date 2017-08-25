/**
 * @ngdoc directive
 * @name fitVids.directive:fitVids
 * @restrict A
 *
 * @version  0.1.0
 *
 * @description
 * Angular direYctive port of FitVids (http://fitvidsjs.com/).
 */

angular.module('PAI').directive('fitVids', function() {
    'use strict';

    if (!document.getElementById('fit-vids-style')) {
        var div = document.createElement('div');
        var ref = document.getElementsByTagName('base')[0] || document.getElementsByTagName('script')[0];
        var cssStyles = '&shy;<style>.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>';
        div.className = 'fit-vids-style';
        div.id = 'fit-vids-style';
        div.style.display = 'none';
        div.innerHTML = cssStyles;
        ref.parentNode.insertBefore(div, ref);
    }

    return {
        restrict: 'A',
        link: function (scope, element, attr) {

            var selectors = [
                "iframe[src*='player.vimeo.com']",
                "iframe[src*='youtube.com']",
                "iframe[src*='youtube-nocookie.com']",
                "iframe[src*='kickstarter.com'][src*='video.html']",
                "object",
                "embed"
            ];

            var video;

            if (attr.customSelector) {
                selectors.push(attr.customSelector);
            }
            console.log(element);
            video =$(element).find('iframe')
            console.log('VIDEO');

            var height2,height, width, aspectRatio;
            console.log(video.height());
            console.log(video.width());

             height = (video.attr('height')) ? parseInt(video.attr('height'), 10) : video.height();
            width = !isNaN(parseInt(video.attr('width'), 10)) ? parseInt(video.attr('width'), 10) : video.width();
            aspectRatio = height / width;

            console.log(height);
            console.log(height2);
            console.log(width);


            if (!video.attr('id')) {
                var videoID = 'fitvid' + Math.floor(Math.random()*999999);
                video.attr('id', videoID);
            }

            video.wrap('<div class="fluid-width-video-wrapper" />').parent().css('padding-top', (aspectRatio * 100) + "%");
            video.removeAttr('height').removeAttr('width');


        }
    };

});