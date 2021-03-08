'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Immediately executing function passing in JQuery so not to conflict
// with other libs that use $

(function ($) {
   "use strict";

   var BodModal = function () {
      function BodModal(modal) {
         _classCallCheck(this, BodModal);

         this.$window = $(window);
         this.$document = $(document);
         this.$modal = $(modal);
         this.$image = this.$modal.find('img');
         this.$expand = this.$modal.find('.bod-expand-icon');
         this.slideCount = 0;
         this.activeSlide = 0;
         this.displayTitle = this.$modal.attr('data-title');
         this.timer = '';
         this.disableClick = false;

         // data-interval contains slide auto play interval in seconds i.e. time between slides
         // 0 = no autoplay, undefined value defaults to 5 seconds  
         this.slideInterval = $(modal).attr("data-interval");
         this.slideInterval == undefined ? this.slideInterval = 5000 : this.slideInterval = parseInt(this.slideInterval) * 1000;
         this.autoplay = '';
         this.swipeStarted = false;

         this.openModal = this.openModal.bind(this);
         this.closeModal = this.closeModal.bind(this);
         this.prevSlide = this.prevSlide.bind(this);
         this.nextSlide = this.nextSlide.bind(this);
         this.imageTitle = this.imageTitle.bind(this);
         this.displaySlide = this.displaySlide.bind(this);
         this.navLink = this.navLink.bind(this);
         this.debounceresize = this.debounceresize.bind(this);
         this.resize = this.resize.bind(this);
         this.triggerSlide = this.triggerSlide.bind(this);
         this.startSwipe = this.startSwipe.bind(this);
         this.endSwipe = this.endSwipe.bind(this);
         this.cancelSwipe = this.cancelSwipe.bind(this);

         // click on one of the modal images 
         this.$image.on('click touchstart', this.openModal);
         this.$expand.on('click touchstart', this.openModal);
      }

      // Inserts modal html in document and displays first slide


      _createClass(BodModal, [{
         key: 'openModal',
         value: function openModal(evt) {
            var _this = this;

            evt.preventDefault();
            evt.stopPropagation();

            var filename = '';
            if ($(evt.target).hasClass('bod-expand-icon')) {
               filename = this.constructor.extractFile($(evt.target).find('img').attr('src'));
            } else {
               // get filename of img that user click on to trigger modal
               filename = this.constructor.extractFile(evt.target.src);
            }

            var html = this.buildModalHtml(filename);

            this.$document.find('body').append(html);

            // handle image title

            if (this.displayTitle) {
               // need to wait for html append to finish rendering
               setTimeout(function () {
                  _this.imageTitle(true);
                  _this.$window.on('resize', _this.debounceresize);
               }, 500);
            }

            // event handler to close modal 
            $('.bodCloseIcon').on('click touchstart', this.closeModal);

            // handle mobile swipe
            $('.bodOpenModal').on('touchstart', this.startSwipe);
            $('.bodOpenModal').on('touchend', this.endSwipe);
            $('.bodOpenModal').on('touchcancel', this.cancelSwipe);

            // next and previous slide events
            $('.bodNextSlide').on('click touchstart', { cancelAutoPlay: true }, this.nextSlide);
            $('.bodPrevSlide').on('click touchstart', { cancelAutoPlay: true }, this.prevSlide);

            // slide nav link events 
            $('.bodNavLink').on('click touchstart', this.navLink);

            // initiate autoplay
            if (this.slideInterval > 0) {
               this.autoplay = setTimeout(this.triggerSlide, this.slideInterval);
            }
         }

         // handle swipe left and right on touchscreen devices

         // start tracking the swipe

      }, {
         key: 'startSwipe',
         value: function startSwipe(event) {
            this.swipeStartX = event.changedTouches[0].pageX;
            this.swipeStartY = event.changedTouches[0].pageY;
            this.swipeStarted = true;
         }
      }, {
         key: 'endSwipe',
         value: function endSwipe(event) {
            if (this.swipeStarted) {
               // check for left or right swipe. Must swipe by at least 30px 
               // and cannot be more than 30px up or down

               // check for swipe left
               if (this.swipeStartX > event.changedTouches[0].pageX && this.swipeStartX - event.changedTouches[0].pageX > 30) {

                  if (!BodModal.checkYSwipe(this.swipeStartY, event.changedTouches[0].pageY)) {
                     if (this.autoplay) clearTimeout(this.autoplay);
                     this.nextSlide();
                  }

                  // check for swipe right 
               } else if (this.swipeStartX < event.changedTouches[0].pageX && event.changedTouches[0].pageX - this.swipeStartX > 30) {

                  if (!BodModal.checkYSwipe(this.swipeStartY, event.changedTouches[0].pageY)) {
                     if (this.autoplay) clearTimeout(this.autoplay);
                     this.prevSlide();
                  }
               }
            }
            this.swipeStarted = false;
         }

         // cancel tracking the swipe

      }, {
         key: 'cancelSwipe',
         value: function cancelSwipe() {
            this.swipeStarted = false;
         }

         // use recursive setTimeout so create loop of slides
         // better than setInterval because its more precise, does not
         // start timeout until adter nextSlide completes. 

      }, {
         key: 'triggerSlide',
         value: function triggerSlide() {
            this.nextSlide();
            this.autoplay = setTimeout(this.triggerSlide, this.slideInterval);
         }

         // Make sure we don't refresh title position until end of resize

      }, {
         key: 'debounceresize',
         value: function debounceresize() {

            // Make title invisible if timer not set. It looks cleaner that way
            // and then we stop resizing we will display it again. We also 
            // move title to top left so that width is not impacted by resize 
            if (this.$curTitle && !this.timer) {
               this.$curTitle.removeClass('bodShowTitle');
               this.$curTitle.css({ "top": '0', "left": '0' });
            }

            // debounce : don't keep calling resize box method, only call if not resized for 0.25s
            clearTimeout(this.timer);
            this.timer = setTimeout(this.resize, 250);
         }

         // Called when screen stopped resizing and we can display the title
         // in its correct location

      }, {
         key: 'resize',
         value: function resize() {
            this.timer = '';
            // on resize we have to recalc and display the image title position
            this.imageTitle(false);
         }

         // Construct the html that displays the modal slideshow
         // filename - string - the filename of the active slide
         // return - string - html to display modal

      }, {
         key: 'buildModalHtml',
         value: function buildModalHtml(filename) {
            this.slideCount = 0;
            this.activeSlide = 0;

            var html = "";
            html += "<div class='bodOpenModal'>";
            html += "<div class='bodCloseIcon'>X</div>";
            html += "<div class='bodModalContent'>";

            // output slides 

            var that = this;
            this.$modal.find('img').each(function () {
               that.slideCount++;
               var imageAlt = $(this).attr("alt");
               var imageHref = $(this).parent().attr('href');

               var curFilename = that.constructor.extractFile(imageHref);
               if (curFilename === filename) {
                  html += "<div class='bodModal bodActiveSlide'>";
                  that.activeSlide = that.slideCount;
               } else {
                  html += "<div class='bodModal'>";
               }

               html += "<img ";
               html += "src='" + imageHref + "' alt='" + imageAlt + "' >";
               // output title

               if (that.displayTitle) {
                  var title = $(this).parent().attr('title');
                  if (title) {
                     html += '<div class="bodTitle">' + title + '</div>';
                  }
               }
               html += "</div>";
            });

            // prev and next links

            html += "<div class='bodPrevSlide'></div>";
            html += "<div class='bodNextSlide'></div>";

            html += "</div>";

            // output title

            if (that.displayTitle) {
               var title = $(this).parent().attr('title');
               if (title) {
                  html += '<div class="bodTitle">' + title + '</div>';
               }
            }

            // Output the nav icons 

            html += '<div class="bodNavLinks">';
            html += '<ul>';

            for (var i = 1; i <= this.slideCount; i++) {
               if (i === this.activeSlide) {
                  html += '<li class="bodNavLink bodActiveSlide" data-slide-no="' + i + '"></li>';
               } else {
                  html += '<li class="bodNavLink" data-slide-no="' + i + '"></li>';
               }
            }

            html += '</ul>';
            html += '</div>';

            html += '</div>';

            return html;
         }

         // Check if user swiped up or down more than 30px
         // startY - number - starting Y position for swipe
         // endY - number - ending Y position for swipe
         // return - bool - true = detected swipe up or down 

      }, {
         key: 'imageTitle',


         // output the image
         // newSlide - boolean - first time displaying a slide
         value: function imageTitle() {
            var newSlide = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;


            if (this.displayTitle) {

               if (newSlide) {
                  this.$curImage = $('.bodActiveSlide img');
                  this.$curTitle = $('.bodActiveSlide .bodTitle');
                  $('.bodTitle').removeClass('bodShowTitle');
               }

               if (this.$curTitle) {

                  var hPadBorder = this.$curImage.outerHeight() - this.$curImage.height();
                  var wPadBorder = this.$curImage.outerWidth() - this.$curImage.width();

                  if (this.displayTitle == 'left') {

                     var topOffset = this.$curImage.position().top + (this.$curImage.height() - this.$curTitle.outerHeight());
                     var leftOffset = this.$curImage.position().left + wPadBorder;
                     this.$curTitle.css({ "top": topOffset + 'px', "left": leftOffset + 'px' });
                  } else if (this.displayTitle == 'right') {

                     var _topOffset = this.$curImage.position().top + (this.$curImage.height() - this.$curTitle.outerHeight());
                     var _leftOffset = this.$curImage.position().left + this.$curImage.width() - this.$curTitle.outerWidth();
                     this.$curTitle.css({ "top": _topOffset + 'px', "left": _leftOffset + 'px' });
                  } else {

                     this.$curTitle.css({ "top": "50%", "left": "50%", "transform": "translate(-50%,-50%)" });
                  }
                  this.$curTitle.addClass('bodShowTitle');
               }
            }
         }

         // called when modal closed by user 

      }, {
         key: 'closeModal',
         value: function closeModal() {

            // remove any events 
            $('.bodOpenModal').off('touchstart');
            $('.bodOpenModal').off('touchend');
            $('.bodOpenModel').off('click');
            $('.bodOpenModal img, .bodNextSlide').off('click touchstart');
            $('.bodPrevSlide').off('click touchstart');
            $('.bodNavLink').off('click touchstart');
            this.$window.off('resize', this.debounceresize);

            // cancel autoplay
            if (this.autoplay) clearTimeout(this.autoplay);

            // finish cleanup by removing modal html code previously inserted
            this.$document.find('.bodOpenModal').remove();
         }
      }, {
         key: 'prevSlide',
         value: function prevSlide(evt) {
            if (evt) {
               if (typeof evt.data.cancelAutoPlay !== 'undefined') {
                  if (this.autoplay && evt.data.cancelAutoPlay) clearTimeout(this.autoplay);
               }

               // Code to stop both touchstart and click events firing
               if (this.disableClick == true && evt.type == 'click') {
                  this.disableClick = false;
                  return false;
               } else if (evt.type == 'touchstart') {
                  this.disableClick = true;
               }
            }

            --this.activeSlide < 1 ? this.activeSlide = this.slideCount : this.activeSlide;
            this.displaySlide(this.activeSlide);
            if (evt) evt.stopPropagation();
         }
      }, {
         key: 'nextSlide',
         value: function nextSlide(evt) {
            if (evt) {
               if (typeof evt.data.cancelAutoPlay !== 'undefined') {
                  if (this.autoplay && evt.data.cancelAutoPlay) clearTimeout(this.autoplay);
               }

               // Code to stop both touchstart and click events firing
               if (this.disableClick == true && evt.type == 'click') {
                  this.disableClick = false;
                  return false;
               } else if (evt.type == 'touchstart') {
                  this.disableClick = true;
               }
            }

            ++this.activeSlide > this.slideCount ? this.activeSlide = 1 : this.activeSlide;
            this.displaySlide(this.activeSlide);
            if (evt) evt.stopPropagation();
         }
      }, {
         key: 'navLink',
         value: function navLink(evt) {
            this.activeSlide = parseInt($(evt.target).attr("data-slide-no"));
            this.displaySlide(this.activeSlide);
            evt.stopPropagation();
         }

         // Display the next slide. Triggered by navlink, next prev button
         // image click or autoplay.
         // activeslide - number - slide to display

      }, {
         key: 'displaySlide',
         value: function displaySlide(activeSlide) {

            // hide the slide title and move to top right
            if (this.$curTitle) {
               this.$curTitle.removeClass('bodShowTitle');
               this.$curTitle.css({ "top": '0', "left": '0' });
            }

            // remove slide indicator from nav links
            $('.bodNavLink').removeClass('bodActiveSlide');

            // hide current slide
            $('.bodModal').removeClass('bodActiveSlide');

            // show new activeslide 
            $('.bodModal:nth-of-type(' + activeSlide + ')').addClass('bodActiveSlide');

            // highlight current slide on nav links
            $('.bodNavLink:nth-of-type(' + activeSlide + ')').addClass('bodActiveSlide');

            // show title for new slide
            if (this.displayTitle) {
               this.imageTitle(true);
            }
         }
      }], [{
         key: 'checkYSwipe',
         value: function checkYSwipe(startY, endY) {

            if (startY > endY && startY - endY > 30) {
               return true;
            }

            if (startY < endY && endY - startY > 30) {
               return true;
            }

            return false;
         }

         // Extracts filename from full path
         // path - string - file path e.g. https://test.com/index.html
         // return - string - filename e.g. index.html

      }, {
         key: 'extractFile',
         value: function extractFile(path) {
            var pathParts = path.split("/");
            return pathParts[pathParts.length - 1];
         }
      }]);

      return BodModal;
   }();

   $(function () {
      // loop round all the models on the page creating an instance
      // for each one adding to an array

      window.bodModals = [];
      $('.bod-modal').each(function () {
         bodModals.push(new BodModal(this));
      });
   });
})(jQuery);
//# sourceMappingURL=bod-modal.js.map