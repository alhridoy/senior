(function ($) {

    

 
 
/* Form style */
$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
  var $this = $(this),
      label = $this.prev('label');

    if (e.type === 'keyup') {
      if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
      if( $this.val() === '' ) {
        label.removeClass('active highlight'); 
      } else {
        label.removeClass('highlight');   
      }   
    } else if (e.type === 'focus') {
      
      if( $this.val() === '' ) {
        label.removeClass('highlight'); 
      } 
      else if( $this.val() !== '' ) {
        label.addClass('highlight');
      }
    }

});

$('.tab a').on('click', function (e) {
  
  e.preventDefault();
  
  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');
  
  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();
  
  $(target).fadeIn(600);
  
});
//scroll
//Scrolling stuff
$(window).scroll(function(){
  var scrollPosition = $(window).scrollTop();
  var one = $('#one').offset().top,
      two = $('#two').offset().top,
      three = $('#three').offset().top;
  var nav1 = $('a[href="#one"]'),
      nav2 = $('a[href="#two"]'),
      nav3 = $('a[href="#three"]');
  
  if(scrollPosition >= one) {
    $('.active').removeClass('active');
    $('#nav1').addClass('active');
    nav1.contents('li').text('Section 1');
    nav1.siblings().contents('li').text('');
  }
  if(scrollPosition >= two) {
    $('.active').removeClass('active');
    $('#nav2').addClass('active');
    nav2.contents('li').text('Section 2');
    nav2.siblings().contents('li').text('');
  }
   if(scrollPosition >= three) {
    $('.active').removeClass('active');
    $('#nav3').addClass('active');
    nav3.contents('li').text('Section 3');
    nav3.siblings().contents('li').text('');
  }
});





/*------------------------------------------------------
  smooth-scrolling; taken from https://css-tricks.com/snippets/jquery/smooth-scrolling/
-------------------------------------------------------*/
  // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


var $star_rating = $('.star-rating .fa');

var SetRatingStar = function() {
  return $star_rating.each(function() {
    if (parseInt($star_rating.siblings('input.rating-value').val()) >= parseInt($(this).data('rating'))) {
      return $(this).removeClass('fa-star-o').addClass('fa-star');
    } else {
      return $(this).removeClass('fa-star').addClass('fa-star-o');
    }
  });
};

$star_rating.on('click', function() {
  $star_rating.siblings('input.rating-value').val($(this).data('rating'));
  return SetRatingStar();
});

SetRatingStar();


var $star_rating2 = $('.star-rating2 .fa');

var SetRatingStar2 = function() {
  return $star_rating2.each(function() {
    if (parseInt($star_rating2.siblings('input.rating-value2').val()) >= parseInt($(this).data('rating2'))) {
      return $(this).removeClass('fa-star-o').addClass('fa-star');
    } else {
      return $(this).removeClass('fa-star').addClass('fa-star-o');
    }
  });
};

$star_rating2.on('click', function() {
  $star_rating2.siblings('input.rating-value2').val($(this).data('rating2'));
  return SetRatingStar2();
});

SetRatingStar2();


// 

//smoothscrol
    /*==== Smoothscroll ====*/    
    $('#topheader a, .navbar-nav a').on('click', function(event) {
        var $anchor = $(this);
          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
          event.preventDefault();
    });
// 

//active navigation
 $('ul li a').click(function(){
    $('li a').removeClass("active");
    $(this).addClass("active");
});

 // ===== Scroll to Top ====
$(window).scroll(function() {
if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
$('#return-to-top').fadeIn(200);    // Fade in the arrow
} else {
$('#return-to-top').fadeOut(200);   // Else fade out the arrow
}
});
$('#return-to-top').click(function() {      // When arrow is clicked
$('body,html').animate({
scrollTop : 0                       // Scroll to top of body
}, 500);
});




})(jQuery);