// Zepto is used instead of jQuery for query selections
$(document).ready(function(){

var $body = $('body');
var $html_body = $('html, body');
var $pseudo_body = $('#pseudo-body');
var $custom_modal_layer = $('.custom-modal-layer');
var $custom_modal_close = $('.custom-modal-window-close');
var $last_updated = $('.last-updated');


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
var $nav_li = $('#custom-nav .nav-ul .nav-li');
var $nav_contact_ul = $('.nav-contact-ul');
var $nav_icon = $('#nav-btn span i');
var $custom_nav_canvas = $('#custom-nav-canvas');

// Animates the sections on 
function customNavAnimate(){
  $nav_li.removeClass('hide-me');
  TweenMax.staggerFrom($nav_li, 0.5, {y: -20, opacity: 0}, 0.2);

  $nav_contact_ul.removeClass('hide-me');
  TweenMax.from($nav_contact_ul, 1, {y: 20, opacity: 0, delay: 1.3});
}

function hideNavContent(){
  $nav_contact_ul.addClass('hide-me');
  $nav_li.addClass('hide-me');
};

function MansNotHot(){
  $custom_nav_container.addClass('no-display');
  TweenMax.to($custom_nav_container, 0.01, {right:0, onComplete:hideNavContent});
};


var navbar_exposed = false;

$nav_btn = $('#nav-btn');
var nav_btn_click_check = 0;

$nav_btn.on('click', function(){

  if(navbar_exposed == false){
    TweenMax.to($nav_btn, 0.2, {rotation: -135, transformOrigin:"50% 50%"});
    TweenMax.to($nav_icon, 0.7, {color: '#fff'});
    $custom_nav_container.removeClass('no-display');
    TweenMax.from($custom_nav_container, 0.7, {right: -(window_vw + 20), ease: Expo.easeInOut, onComplete: customNavAnimate});
    navbar_exposed = true;
  }
  else{
    TweenMax.to($nav_btn, 0.2, {rotation: 0, transformOrigin:"50% 50%"});
    TweenMax.to($nav_icon, 0.2, {color: '#808080'});
    TweenMax.to($custom_nav_container, 0.7, {right: -(window_vw + 20), ease: Expo.easeInOut, onComplete:MansNotHot});
    navbar_exposed = false;
  }
});

$nav_a.each(function(){
  $(this).on('click', function(event){
    if(navbar_exposed == true){
      event.preventDefault();
      TweenMax.to($nav_btn, 0.2, {rotation: 0, transformOrigin:"50% 50%"});
      TweenMax.to($nav_icon, 0.2, {color: '#808080'});
      TweenMax.to($custom_nav_container, 0.7, {right: -(window_vw + 20), ease: Expo.easeInOut, onComplete:MansNotHot});
      navbar_exposed = false;
      }

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


