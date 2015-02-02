/*!
 * jQuery Responsive Image Plugin v1
 * https://github.com/richard-parnaby-king/Responsive-Images
 *
 * @Copyright 2013 Richard Parnaby-King
 * @author Richard Parnaby-King
 * Released under the MIT license
 */
(function($){
  "use strict";
  $.fn.responsivePictures = function(){
    //img attributes to use
    var attributes = ['alt','class','id','style'];
    
    //only run this code if window.matchMedia is available
    if(window.matchMedia) {
      this.each(function() {
      
      //replace all <picture> elements with <img> elements with correct src
          //replacement image:
          var img = document.createElement('img');

          //find image src that matches media command
          var src = $(this).find('source');
          src.each(function(){
            var s = $(this);
            
            //if no media attribute located, set it to apply to all screen
            if(s.attr('media') === undefined) {
              s.attr('media','(min-width:0)');
            }
            
            //If media query is valid, then set the source url
            if(window.matchMedia(s.attr('media')).matches) {
							var imgs = s.attr('srcset').split(','),
								imgsLength = imgs.length;
							if(imgsLength > 1) {
								var PixelRatio = 1;
								//check for retina display
								if(window.devicePixelRatio !== undefined) PixelRatio = window.devicePixelRatio;
								for(var i = 0; i < imgsLength; i++) {
									var currentImg = imgs[i].trim();
									if(currentImg.lastIndexOf(' ' + PixelRatio + 'x') == currentImg.length - 3) {
										img.src = currentImg.slice(0,-3);
										return false;
									}
								}
							}
              img.src = imgs[0];
              return false;
            }
          });

          //Not found a valid image. Stop processing
          if(img.src.length === 0) {
            return;
          }

          //Set the alt text (good for SEO)
          var oldimg = $(this).find('img');
          for (var i = 0; i < attributes.length; i++) {
            if(oldimg.attr(attributes[i]) != undefined) {
              img.setAttribute(attributes[i], oldimg.attr(attributes[i]));
            }
          }

          //replace picture with image
          $(this).replaceWith(img);
        });
    } else {
      console.log('window.matchMedia is not supported in this browser');
    }
  }
	//if browse does not support picture, then do this
  $(function($){ 
		if(window.HTMLPictureElement == undefined) {
			$('picture').responsivePictures();
		}
	});
})(jQuery);
