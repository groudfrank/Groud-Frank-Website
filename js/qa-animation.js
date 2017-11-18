$(document).ready(function(){
    
    var $body = $('body');
    var $html_body = $('html, body');
    var $pseudo_body = $('#pseudo-body');
    
    
    $window = $(window);
    var window_vh = $window.height();
    var window_vw = $window.width();
    var body_scroll_height = $body.scrollHeight;
    
    /*---------- Resize Events ----------*/
    $window.on('resize', function(){
      var window_vh = $window.height();
      var window_vw = $window.width();
      var body_scroll_height = $body.scrollHeight;
    });
    
    function hideTimeOut(target, delay){
      setTimeout(function(){
        target.removeClass('hide-me');
      }, delay);
    }
    
    function noDisplayTimeOut(target, delay){
      setTimeout(function(){
        target.removeClass('hide-me');
      }, delay);
    }
    
    
    /*----------Navigation Stuff-----------*/
    $nav_a = $('#custom-nav .nav-ul .nav-li a');
    $nav_li = $('#custom-nav .nav-ul .nav-li');
    $nav_contact_ul = $('.nav-contact-ul');
    $custom_nav_canvas = $('#custom-nav-canvas');

    function customNavAnimate(){
      $nav_li.removeClass('hide-me');
      TweenMax.staggerFrom($nav_li, 1, {y: -20, opacity: 0}, 0.2);
    
      $nav_contact_ul.removeClass('hide-me');
      TweenMax.from($nav_contact_ul, 1, {y: 20, opacity: 0, delay: 1.3});
    }

    var navbar_exposed = false;
    
    $nav_btn = $('#nav-btn');
    var nav_btn_click_check = 0;
    
    $nav_btn.click(function(){
      
      if(navbar_exposed == false){
        TweenMax.to($nav_btn, 0.2, {rotation: 135, transformOrigin:"50% 50%"})
        TweenMax.to($('#nav-btn span i'), 0.7, {color: '#333'});
        TweenMax.to($pseudo_body, 0.7, {x: (window_vw + 20), ease: Expo.easeInOut, onComplete: customNavAnimate});
        navbar_exposed = true;
        // $body.addClass('overflow-hidden');
      }
      else{
        TweenMax.to($nav_btn, 0.2, {rotation: 0, transformOrigin:"50% 50%"})
        TweenMax.to($('#nav-btn span i'), 0.2, {color: '#fff'});
        TweenMax.to($pseudo_body, 0.7, {x: 0, ease: Expo.easeInOut});
        navbar_exposed = false;
        $nav_li.addClass('hide-me');
        $nav_contact_ul.addClass('hide-me');
        // $body.removeClass('overflow-hidden');
      }
    });
    
      $nav_a.click(function(e){
        // e.preventDefault();
    
        if(navbar_exposed == false){
        TweenMax.to($nav_btn, 0.2, {rotation: 135})
        TweenMax.to($('#nav-btn span i'), 0.7, {color: '#fff'});
        TweenMax.to($pseudo_body, 0.7, {x: (window_vw + 20), ease: Expo.easeInOut});
        navbar_exposed = true;
        // $body.addClass('overflow-hidden');
      }
      else{
        TweenMax.to($nav_btn, 0.2, {rotation: 0})
        TweenMax.to($('#nav-btn span i'), 0.2, {color: '#808080'});
        TweenMax.to($pseudo_body, 0.7, {x: 0, ease: Expo.easeInOut});
        navbar_exposed = false;
        // $body.removeClass('overflow-hidden');
      }
      })

      if(window_vw > 768){
        $nav_a.each(function(){
          $(this).hover(function(){
            if($(this).hasClass('home-bg')){
              TweenMax.to($custom_nav_canvas, 1, {backgroundColor:"#FF6484"});
            }
            if($(this).hasClass('me-bg')){
              TweenMax.to($custom_nav_canvas, 1, {backgroundColor:"#1fc8db"});
            }
            if($(this).hasClass('services-bg')){
              TweenMax.to($custom_nav_canvas, 1, {backgroundColor:"#BD3F55"});
            }
            if($(this).hasClass('contact-bg')){
              TweenMax.to($custom_nav_canvas, 1, {backgroundColor:"#B99BEC"});
            }
            if($(this).hasClass('journal-bg')){
              TweenMax.to($custom_nav_canvas, 1, {backgroundColor:"#f09819"});
            }
            if($(this).hasClass('qa-bg')){
              TweenMax.to($custom_nav_canvas, 1, {backgroundColor:"#23C086"});
            }
          },
          function(){
            TweenMax.to($custom_nav_canvas, 1, {backgroundColor:"transparent"});
          });
        });
      }

    
      /*-----------Misc----------*/
        function overflowHide(el){
        el.addClass('overflow-hidden');
      }
    
      function overflowShow(el){
        el.removeClass('overflow-hidden');
      }


    
    });
    
    
    