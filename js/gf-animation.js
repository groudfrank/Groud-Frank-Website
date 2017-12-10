// Zepto is used instead of jQuery for query selections
$(document).ready(function(){

var $body = $('body');
var $html_body = $('html, body');
var $pseudo_body = $('#pseudo-body');
var $custom_modal_layer = $('.custom-modal-layer');
var $custom_modal_close = $('.custom-modal-window-close');
var $last_updated = $('.last-updated');


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
    target.removeClass('no-display');
  }, delay);
}

function hideMeSetIn(target, delay){
  setTimeout(function(){
    target.addClass('hide-me');
  }, delay);
}

function noDisplaySetIn(target, delay){
  setTimeout(function(){
    target.addClass('no-display');
  }, delay);
}


/*----------Navigation Stuff-----------*/
var $custom_nav_container = $('#custom-nav-container');
var $nav_a = $('#custom-nav .nav-ul .nav-li a');
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
      navbar_exposed = false;

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

/*----------Greeter Stuff----------*/
  var $greeter_logo = $('#greeter-logo');
  var $greeter_hi = $('#greeter-hi');
  var $greeter_heading_div = $("#greeter-heading-div");
  var $greeter_about_container = $("#greeter-about-container");
  var $heading_words = $('.heading-words');
  var $greeter_arrow = $('#greeter-arrow');
  

  function mainGreeterTrigger(){
  
    $body.removeClass("overflow-hidden");
    $greeter_main.removeClass("pos-fixed");
    $greeter_main.addClass("no-display");
  };

 
  // $greeter_logo.removeClass('no-display');
  // TweenMax.from($greeter_logo, 1.5, {y: 200, opacity: 0, ease: Expo.easeOut});
  // TweenMax.to($greeter_logo, 2, {opacity: 0, delay: 3, onComplete: summonGreeterText});


  // function summonGreeterText(){
  //   $greeter_logo.addClass('no-display');
  //   $greeter_about_container.removeClass('no-display');;
  //   TweenMax.from($greeter_about_container, 1.5, {y: 200, opacity: 0, ease: Expo.easeOut, delay: 1});
  // };



  /*----------Me Stuff---------*/
  var $work_btn_two = $('#work-btn-two');
  var $custom_work_modal_two = $('#custom-work-modal-two');
  var $custom_modal_content_two = $('#custom-modal-content-two');
  var $me_img_container = $('.me-img-container');
  var me_img_container_original_height = $me_img_container.height();
  var me_img_container_original_width = $me_img_container.width();
  var $me_img_figure = $('.me-img-container figure');

  var $work_btn_three = $('#work-btn-three');
  var $custom_work_modal_three = $('#custom-work-modal-three');
  var $custom_modal_content_three = $('#custom-modal-content-three');

  var $work_btn_four = $('#work-btn-four');
  var $custom_work_modal_four = $('#custom-work-modal-four');
  var $custom_modal_content_four = $('#custom-modal-content-four');

  $custom_modal_close.on('click', function(){
  $custom_modal_layer.addClass('no-display');
  $body.removeClass('overflow-hidden');
});

if(window_vw > 768){
  $work_btn_two.on('click',function(){
    $custom_work_modal_two.removeClass('no-display');
    $body.addClass('overflow-hidden');
    TweenMax.from($custom_modal_content_two, 0.05, {scale: 1.2, opacity: 0, delay: 0.2});
  });

  $work_btn_three.on('click',function(){
    $custom_work_modal_three.removeClass('no-display');
    $body.addClass('overflow-hidden');
    TweenMax.from($custom_modal_content_three, 0.05, {scale: 1.2, opacity: 0, delay: 0.2});
  });

  $work_btn_four.on('click',function(){
    $custom_work_modal_four.removeClass('no-display');
    $body.addClass('overflow-hidden');
    TweenMax.from($custom_modal_content_four, 0.05, {scale: 1.2, opacity: 0, delay: 0.2});
  });
}
else{
  $work_btn_two.on('click',function(){
    $custom_work_modal_two.removeClass('no-display');
    $body.addClass('overflow-hidden');
  });

  $work_btn_three.on('click',function(){
    $custom_work_modal_three.removeClass('no-display');
    $body.addClass('overflow-hidden');
  });

  $work_btn_four.on('click', function(){
    $custom_work_modal_four.removeClass('no-display');
    $body.addClass('overflow-hidden');
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


