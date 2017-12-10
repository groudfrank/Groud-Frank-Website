$(document).ready(function(){
    
    var $body = $('body');
    var $html_body = $('html, body');
    var $pseudo_body = $('#pseudo-body');
    
    
    $window = $(window);
    var window_vw = $window.width();
    
    /*---------- Resize Events ----------*/
    $window.on('resize', function(){
      window_vw = $window.width();
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
var $custom_nav_container = $('#custom-nav-container');
var $nav_a = $('.nav-li a');
var $nav_a_contact = $('.custom-nav-contact-format');
var $custom_nav_canvas = $('#custom-nav-canvas');

// Carries the slide in navbar to it's origin/original position.
function MansNotHot(){
  $custom_nav_container.addClass('no-display');
  TweenMax.to($custom_nav_container, 0, {x:0});
};

$nav_btn = $('#nav-btn');
$nav_btn_close = $('#nav-btn-close');

$nav_btn.on('click', function(){
  $custom_nav_container.removeClass('no-display');
  TweenMax.from($custom_nav_container, 0.7, {x: (window_vw + 2), ease: Expo.easeInOut});
});

$nav_btn_close.on('click', function(){
    TweenMax.to($custom_nav_container, 0.7, {x: (window_vw + 2), ease: Expo.easeInOut, onComplete:MansNotHot});
  });

$nav_a.each(function(){
  $(this).on('click', function(event){
    event.preventDefault();
    TweenMax.to($custom_nav_container, 0.7, {x: (window_vw + 2), ease: Expo.easeInOut, onComplete:MansNotHot});

    (function(link){ 
      setTimeout(function() { 
        window.location = link;
      }, 701);
  })(this.href);

    });
});

$nav_a_contact.each(function(){
  $(this).on('click', function(event){
    event.preventDefault();
    TweenMax.to($custom_nav_container, 0.7, {x: (window_vw + 2), ease: Expo.easeInOut, onComplete:MansNotHot});
    (function(link){ 
      setTimeout(function() { 
        window.location = link;
      }, 701);
  })(this.href);

    });
});

if(window_vw > 768){
  $nav_a.each(function(){
    $(this).on('mouseenter', function(){
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
      if($(this).hasClass('credits-bg')){
        TweenMax.to($custom_nav_canvas, 1, {backgroundColor:"#3D82BA"});
      }
    });
    $(this).on('mouseleave', function(){
      TweenMax.to($custom_nav_canvas, 1, {backgroundColor:"transparent"});
    })
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
    
    
    