$(function(){
    
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
    
    //   $($nav_a).on('click', function(event) {
    
    //     if (this.hash !== "") {
    //       event.preventDefault();
    
    //       var hash = this.hash;
    
    //       $($html_body).animate({
    //         scrollTop: $(hash).offset().top
    //       }, 2200, function(){
       
    //         window.location.hash = hash;
    //       });
    //     } 
    //   });
    
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

      /*----------Me----------*/
      $card_format = $('.card-format');
      $card_heading_format = $('.card-heading-format');
      $card_pic_format = $('#me-pic-div');
      $p = $('p');
      $h1 = $('h1');
      $questions_answers = $('#questions-answers');
      $questions_answers_container = $('.questions-answers-container');

      // function animateContent(){
      //   $card_heading_format.removeClass('hide-me');
      //   TweenMax.from($card_heading_format, 1 ,{ x: 20,  opacity: 0});
      //   $card_pic_format.removeClass('hide-me');
      //   TweenMax.from($card_pic_format, 1 ,{ x: -20, opacity: 0});
      //   $questions_answers_container.removeClass('hide-me');
      //   TweenMax.from($questions_answers_container, 0.7 ,{ y: 20, opacity: 0, delay:1});
      // }

      TweenMax.to($card_format, 2, {className: "+=card-format-shadow", delay:1});
      $questions_answers.children().removeClass('hide-me');
      TweenMax.staggerFrom($questions_answers.children(), 1.5, {opacity: 0, y: 100, delay: 3, ease: Back.easeOut.config(1.7)}, 0.2);
    
    
      /*-----------Misc----------*/
        function overflowHide(el){
        el.addClass('overflow-hidden');
      }
    
      function overflowShow(el){
        el.removeClass('overflow-hidden');
      }
    
    });
    
    
    