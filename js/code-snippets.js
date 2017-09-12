   /*
   This increases scales up and down the height and width of
   a div and elegantly moves other divs around.
   */ 
    var width, height;
    width = $('#overview').innerWidth();
    height = $('#overview').innerHeight();

    $('#overview, #me').hover(
        function(){
            $(this).animate({width: width + 50 , height: height + 50}, 500 )
        },
        function(){
            $(this).animate({width: width, height: height}, 500 )
        }
    );

    box-shadow: 3px 0px 5px grey;
