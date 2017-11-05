// Sorry boys. jQuery all the way. It was made to be used. 
$(document).ready(function(){

var $body = $('body');
var $html_body = $('html, body');
var $pseudo_body = $('#pseudo-body');
var $custom_modal_layer = $('.custom-modal-layer');
var $custom_modal_close = $('.custom-modal-window-close');


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
    TweenMax.to($('#nav-btn span i'), 0.7, {color: '#fff'});
    TweenMax.to($pseudo_body, 0.7, {x: (window_vw + 20), ease: Expo.easeInOut, onComplete: customNavAnimate});
    navbar_exposed = true;
    // $body.addClass('overflow-hidden');
  }
  else{
    TweenMax.to($nav_btn, 0.2, {rotation: 0, transformOrigin:"50% 50%"})
    TweenMax.to($('#nav-btn span i'), 0.2, {color: '#808080'});
    TweenMax.to($pseudo_body, 0.7, {x: 0, ease: Expo.easeInOut});
    navbar_exposed = false;
    $nav_li.addClass('hide-me');
    $nav_contact_ul.addClass('hide-me');
    // $body.removeClass('overflow-hidden');
  }
});

  $($nav_a).on('click', function(event) {

    if($(this).hasClass("allow-default") == true){
      // alert("has class allow-default");
    }
    else if (this.hash !== "") {
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      $($html_body).animate({
        scrollTop: $(hash).offset().top
      }, 2200, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }
  });

  $nav_a.click(function(e){

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
    $nav_li.addClass('hide-me');
    $nav_contact_ul.addClass('hide-me');
    // $body.removeClass('overflow-hidden');
  }
  });


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



/*----------Scroll Events----------*/
var $greeter_about_container = $('#greeter-about-container')
var $greeter_breaker = $('#greeter-breaker');
var $greeter_breaker_h1 = $('#greeter-breaker h1');
var $greeter_breaker_text_stagger = $('.greeter-breaker-text-stagger');
var $greeter_breaker_img = $('#greeter-breaker img');
var $card_format = $('.card-format');
var $card_pic_format = $('.card-pic-format img');
var $slogan = $('.slogan')
var $section_breaker_format = $('.section-breaker-format');
var $me_card = $('#me-card');
var $services_card = $('#services-card');
var $card_content = $('.card-content');
var $education = $('#education');
var $work = $('#work');
var $skills = $('#skills');
var $skills_icons_ul = $('#skills .skills-icons ul');
var $skills_icons_ul_li = $('#skills .skills-icons ul li');
var $skills_icons_i = $('#skills .skills-icons ul i');
var $future = $('#future');
var $future_div = $('#future div');
var $hobbies = $('#hobbies');
var $fancies = $('#fancies');
var $groudie = $('#groudie');
var $groudie_icons = $('.groudie-icons');
var $services_subsection_div = $('#services-subsection div');
var $services_linux_img = $('#services-linux-img');
var $contact_subsection_div = $('#contact-subsection div');
var $contact_breaker = $('#contact-breaker');
var card_animate_dist = window_vw;
var $meh = $('.meh');

function shrinkImg(){
  //animate card content
  var card_pic = $(this).children('.card-pic-format');
  TweenMax.from($(this).children('.card-pic-format').children('.shrink-img'), 0.1, {scale: 1.5});
  // alert('found shrink class');
}

// Triggers a scroll event so when the page reloads on
// any point that is >= the trigger zone for any element 
// set to be animated will not remain blank. If I didn't 
// explain that well enough just comment out this section 
// and reload the page on any area that is set to animate 
// on scroll. Also it's wrapped in a setTimeout function 
// so that it the triggered event doesn't fire too soon.
$window.trigger('scroll');
setTimeout(function(){
  $window.trigger('scroll');
}, 1000);

$window.on('scroll', _.throttle(function(){
  
  if($window.scrollTop() >= ($greeter_breaker.offset().top - (400)) && $greeter_breaker.hasClass('disanimate') == false){
    // $greeter_breaker_img.removeClass('hide-me');
    // TweenMax.from($greeter_breaker_img, 1.5, {y: 50, opacity: 0});
    $greeter_breaker.addClass('disanimate');
  };

  $card_format.each(function(){
    if($window.scrollTop() >= ($(this).offset().top - (600)) && $(this).hasClass('disanimate') == false){
      //animate card 
      $(this).removeClass('hide-me');
      TweenMax.from($(this), 1.5, {x: card_animate_dist, ease: Expo.easeOut,});
      $(this).addClass('disanimate');
      $(this).children().removeClass('hide-me');
      TweenMax.staggerFrom($(this).children(), 0.9, {y:100, opacity: 0, delay: 1.5
      , ease: Back.easeOut.config(1.7)}, 0.2);
      var card_pic = $(this).children('.card-pic-format');
      TweenMax.to($(this).children('.card-pic-format').children('.shrink-img'), 2.5, {scale: 1, delay: 1.8, ease: Power1.easeOut});
      $(this).children().addClass('disanimate');
     };
    });

    $slogan.each(function(){
      if($window.scrollTop() >= ($(this).offset().top - (400)) && $(this).hasClass('disanimate') == false){
        $(this).removeClass('hide-me');
        TweenMax.from($(this), 0.5, {y: 50, opacity: 0});
        $(this).addClass('disanimate');
        };
      });

    $section_breaker_format.each(function(){
    if($window.scrollTop() >= ($(this).offset().top - (400)) && $(this).hasClass('disanimate') == false){
      $(this).children().removeClass('hide-me');
      TweenMax.from($(this).children(), 2, {opacity: 0});
      $(this).addClass('disanimate');
      };
    });


    //EDUCATION
     if($window.scrollTop() >= ($education.offset().top - (400)) && $education.hasClass('disanimate') == false){
      $education.children().removeClass('hide-me');
      TweenMax.staggerFrom($education.children(), 1, {y: 100, opacity: 0, ease: Back.easeOut.config(1.7)}, 0.2);
      $education.addClass('disanimate');
    };

    //WORKED @
    if($window.scrollTop() >= ($work.offset().top - (400)) && $work.hasClass('disanimate') == false){
      $work.children().removeClass('hide-me');
      TweenMax.staggerFrom($work.children(), 1, {x: 100, opacity: 0, ease: Back.easeOut.config(1.7)}, 0.2);
      $work.addClass('disanimate');
    };

    //SKILLS
    if($window.scrollTop() >= ($skills.offset().top - (600)) && $skills.hasClass('disanimate') == false){
      $skills.children().first().removeClass('hide-me');
      TweenMax.from($skills.children().first(), 1, {x: -100, opacity: 0, ease: Back.easeOut.config(1.7)});
      $skills.addClass('disanimate');
    };

    $skills_icons_ul.each(function(){
      if($window.scrollTop() >= ($(this).offset().top - (600)) && $(this).hasClass('disanimate') == false){
        $(this).children().first().removeClass('hide-me');
        TweenMax.from($(this).children().first(), 1, {opacity: 0, ease: Back.easeOut.config(1.7)}, 0.2);
        $(this).addClass('disanimate');
        $(this).children('li').removeClass('hide-me');
        TweenMax.staggerFrom($(this).children('li'), 0.5, {x:-100, opacity: 0, ease: Back.easeOut.config(1.7)}, 0.2);
        $(this).children('li').addClass('disanimate');
       };

       // Slow and buggie.
      // $skills_icons_ul_li.each(function(){
      //   $(this).hover(
      //     function(){
      //       TweenMax.to($(this), 0.3, {x: -10});
      //     },
      //     function(){
      //      TweenMax.to($(this), 0.3, {x: 0});
      //     });
      // });

    // FUTURE
    if($window.scrollTop() >= ($future.offset().top - (600)) && $future.hasClass('disanimate') == false){
      $future.children().first().removeClass('hide-me');
      TweenMax.from($future.children().first(), 1, {x: -100, opacity: 0, ease: Back.easeOut.config(1.7)});
      $future.addClass('disanimate');
    };

    $future.children('div').each(function(){
      if($window.scrollTop() >= ($(this).offset().top - (600)) && $(this).hasClass('disanimate') == false){
        $(this).children('.container-1').removeClass('hide-me');
        TweenMax.from($(this).children('.container-1'), 2, {x: -100, opacity: 0, ease: Back.easeOut.config(1.7), delay: 1}, 0.2);
        $(this).children('.container-2').removeClass('hide-me');
        TweenMax.from($(this).children('.container-2'), 2, {x: 100, opacity: 0, ease: Back.easeOut.config(1.7), delay: 1}, 0.2);
        $(this).addClass('disanimate');
        $(this).children('li').removeClass('hide-me');
        TweenMax.staggerFrom($(this).children('li'), 0.5, {x:-100, opacity: 0, delay: 1.5, ease: Back.easeOut.config(1.7)}, 0.2);
        $(this).children('li').addClass('disanimate');
    };

    // HOBBIES
    if($window.scrollTop() >= ($hobbies.offset().top - (400)) && $hobbies.children().first().hasClass('disanimate') == false){
      $hobbies.children().first().removeClass('hide-me');
      TweenMax.from($hobbies.children().first(), 1, {y: 100, opacity: 0, ease: Back.easeOut.config(1.7)});
      $hobbies.children().first().addClass('disanimate');
    };

    if($window.scrollTop() >= ($hobbies.children('.hobbies-container').offset().top - (400)) && $hobbies.children('.hobbies-container').hasClass('disanimate') == false){
      $hobbies.children().removeClass('hide-me');
      TweenMax.staggerFrom($hobbies.children('.hobbies-container').children(), 1, {y: 100, opacity: 0, ease: Back.easeOut.config(1.7)}, 0.2);
      $hobbies.children('.hobbies-container').addClass('disanimate');
  };

  //FANCIES
  if($window.scrollTop() >= ($fancies.offset().top - (600)) && $fancies.hasClass('disanimate') == false){
    $fancies.children().first().removeClass('hide-me');
    TweenMax.from($fancies.children().first(), 1, {y: -100, opacity: 0, ease: Back.easeOut.config(1.7)});
    $fancies.addClass('disanimate');
  };

  $fancies.children('div').each(function(){
    if($window.scrollTop() >= ($(this).offset().top - (600)) && $(this).hasClass('disanimate') == false){
      $(this).children('.container-1').removeClass('hide-me');
      TweenMax.from($(this).children('.container-1'), 2, {y: -100, opacity: 0, ease: Back.easeOut.config(1.7), delay: 1}, 0.2);
      $(this).children('.container-2').removeClass('hide-me');
      TweenMax.from($(this).children('.container-2'), 2, {y: 100, opacity: 0, ease: Back.easeOut.config(1.7), delay: 1}, 0.2);
      $(this).addClass('disanimate');
  };
  });

   //GROUDIE
   if($window.scrollTop() >= ($groudie.offset().top - (500)) && $groudie.hasClass('disanimate') == false){
    $groudie.children('#me-imgs').children('.me-img-container').removeClass('hide-me');
    TweenMax.staggerFrom($groudie.children('#me-imgs').children('.me-img-container'), 1, {y: 100, opacity: 0, ease: Back.easeOut.config(1.7)}, 0.2);
    $groudie.addClass('disanimate');
    $groudie_icons.removeClass('hide-me');
    TweenMax.from($groudie_icons, 1, {opacity: 0, delay: 2.5});
  };

  // SERVICES SUBSECTION
  $services_subsection_div.each(function(){
    if($window.scrollTop() >= ($(this).offset().top - (600)) && $(this).hasClass('disanimate') == false){
      $(this).children().removeClass('hide-me');
      
      TweenMax.staggerFrom($(this).children(), 1, {y: 100, opacity: 0}, 0.2);
      $(this).addClass('disanimate');
      };
    });
  
    if($window.scrollTop() >= ($services_linux_img.offset().top - (400)) && $services_linux_img.hasClass('disanimate') == false){
      $services_linux_img.children().removeClass('hide-me');
      TweenMax.staggerFrom($services_linux_img.children(), 1, {x: -100, opacity: 0}, 0.2);
      $services_linux_img.addClass('disanimate');
      };

  // CONTACT SUBSECTION
    if($window.scrollTop() >= ( $contact_subsection_div.offset().top - (200)) &&  $contact_subsection_div.hasClass('disanimate') == false){
      $contact_subsection_div.children().removeClass('hide-me');
      // TweenMax.from($contact_subsection_div.children(), 1.5, {scale: 0, ease: Elastic.easeOut.config(1, 0.3) });
      TweenMax.from($contact_subsection_div.children(), 0.5, {scale: 1.5, opacity: 0});
      $contact_subsection_div.addClass('disanimate');
      };
    
    
    if($window.scrollTop() >= ( $contact_breaker.offset().top - (600)) &&  $contact_breaker.hasClass('disanimate') == false){
      $contact_breaker.children().removeClass('hide-me');
      TweenMax.staggerFrom($contact_breaker.children(), 1, {y: 100, opacity: 0}, 0.2);
      $contact_breaker.addClass('disanimate');
      };

    });
  });

  // if($window.scrollTop() >= ($me_card.offset().top - (400)) && $me_card.hasClass('disanimate') == false){
  
  //   $me_card.removeClass('hide-me');
  //   TweenMax.from($me_card, 1.5, {x: card_animate_dist, ease: Expo.easeOut,});
  //   $me_card.addClass('disanimate');
  //   $me_card.children().removeClass('hide-me');
  //   TweenMax.staggerFrom($me_card.children(), 0.9, {y:100, opacity: 0, delay: 1.5}, 0.2);
  //   $me_card.children().addClass('disanimate');
  //  };

  //  if($window.scrollTop() >= ($services_card.offset().top - (400)) && $services_card.hasClass('disanimate') == false){
  
  //   $services_card.removeClass('hide-me');
  //   TweenMax.from($services_card, 1.5, {x: card_animate_dist, ease: Expo.easeOut,});
  //   $services_card.addClass('disanimate');
  //   $servvices_card.children().removeClass('hide-me');
  //   TweenMax.staggerFrom($services_card.children(), 0.9, {y:100, opacity: 0, delay: 1.5}, 0.2);
  //   $services_card.children().addClass('disanimate');
  //  };


}, 100));


/*----------Greeter Stuff----------*/
  var $greeter_main = $('#greeter-main');
  var $greeter_logo = $('#greeter-logo');
  var $greeter_hi = $('#greeter-hi');
  var $greeter_main_click = $('#greeter-main #greeter-mouse-img');
  var $greeter_main_access = $('#greeter-main #greeter-access');
  var $greeter_heading_div = $("#greeter-heading-div");
  var $greeter_about_div = $("#greeter-about-div");
  var $heading_words = $('.heading-words');
  var $greeter_arrow = $('#greeter-arrow');
  

  function mainGreeterTrigger(){
  
    $body.removeClass("overflow-hidden");
    $greeter_main.removeClass("pos-fixed");
    $greeter_main.addClass("no-display");
  };

  function pulseIcon(){
    TweenMax.from($greeter_main_click, 0.65 , {opacity: 0.4, scale: 1.05, repeat: 100, yoyo:true });
  }

  $greeter_main.one("click wheel", function(){
    TweenMax.to($greeter_main, 1, {y: -(window_vh + 100), ease: Expo.easeInOut, onComplete:mainGreeterTrigger});
  });

  hideTimeOut($greeter_hi, 2000);
  TweenMax.from($greeter_hi, 2, {opacity:0, ease: SlowMo.easeOut, delay: 2});

  hideTimeOut($greeter_main_access, 2000);
  TweenMax.from($greeter_main_access, 2, {y:50,  opacity:0, ease: SlowMo.easeOut, delay: 3.5});


  $greeter_main_click.click(function(){
    TweenMax.to($greeter_main, 1, {y: -(window_vh + 100), ease: Expo.easeInOut, onComplete:mainGreeterTrigger});
  });

  $greeter_logo.removeClass('no-display');
  TweenMax.from($greeter_logo, 1.5, {y: 200, opacity: 0, ease: Expo.easeOut});
  TweenMax.to($greeter_logo, 2, {opacity: 0, delay: 3, onComplete: summonGreeterText});


  function summonGreeterText(){
    $greeter_logo.addClass('no-display');
    $greeter_about_container.removeClass('no-display');;
    TweenMax.from($greeter_about_container, 1.5, {y: 200, opacity: 0, ease: Expo.easeOut, delay: 1});
  }



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

  $custom_modal_close.click(function(){
  $custom_modal_layer.addClass('no-display');
  $body.removeClass('overflow-hidden');
});

  $work_btn_two.click(function(){
    $custom_work_modal_two.removeClass('no-display');
    $body.addClass('overflow-hidden');
    TweenMax.from($custom_modal_content_two, 0.2, {scale: 1.2, opacity: 0, delay: 0.2});
  });

  $work_btn_three.click(function(){
    $custom_work_modal_three.removeClass('no-display');
    $body.addClass('overflow-hidden');
    TweenMax.from($custom_modal_content_three, 0.2, {scale: 1.2, opacity: 0, delay: 0.2});
  });

  $work_btn_four.click(function(){
    $custom_work_modal_four.removeClass('no-display');
    $body.addClass('overflow-hidden');
    TweenMax.from($custom_modal_content_four, 0.2, {scale: 1.2, opacity: 0, delay: 0.2});
  });


  // $me_img_container.each(function(){
  //   $(this).hover(
  //   function(){
  //     TweenMax.to($(this), 0.7, {
  //       width: 300,
  //       height: 350,
  //       ease: Expo.easeOut});
  //   },
  //   function(){
  //     TweenMax.to($(this), 0.7, {
  //       width: me_img_container_original_width,
  //       height: me_img_container_original_height,
  //       ease: Expo.easeOut});
  //   }
  // );
  // });


  /*-----------Misc----------*/
    function overflowHide(el){
    el.addClass('overflow-hidden');
  }

  function overflowShow(el){
    el.removeClass('overflow-hidden');
  }

});


