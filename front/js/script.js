


// var swiper = new Swiper(".slider-cards-js", {
//         direction: "horizontal",
//         loop: false,
//         rewind: true,
//         slidesPerView: 1,
//         centeredSlides: true,
//         spaceBetween: 32,
//         pagination: {
//           el: ".swiper-pagination",
//           clickable: true,
//         },
//       });
// if (window.innerWidth > 767) {
//     swiper.detachEvents();
// }


// if(jQuery(window).width() < 768) {
//     if (typeof mySwiper == 'undefined') {
//        mySwiper = new Swiper(".slider-cards-js", {
//         direction: "horizontal",
//         loop: false,
//         rewind: true,
//         slidesPerView: 1,
//         centeredSlides: true,
//         spaceBetween: 32,
//         pagination: {
//           el: ".swiper-pagination",
//           clickable: true,
//         },
//       }); 
//     }
// } else {
//     if (typeof mySwiper != 'undefined') {
//         // destroy and delete swiper object
//         mySwiper.destroy();
//         mySwiper = undefined;

//         // reset styling for wrapper and slides
//         jQuery('.swiper-wrapper').removeAttr('style');
//         jQuery('.swiper-slide').removeAttr('style');
//     }
// }



// var mySwiper = undefined;
// function initSwiper() {
//     var screenWidth = $(window).width();
//     if(screenWidth < 768 && mySwiper == undefined) {            
//         mySwiper = new Swiper('.slider-cards-js', {            
//             direction: "horizontal",
//             loop: false,
//             rewind: true,
//             slidesPerView: 1,
//             centeredSlides: true,
//             spaceBetween: 32,
//             pagination: {
//               el: ".swiper-pagination",
//               clickable: true,
//             },
//         });
//     } else if (screenWidth > 768 && mySwiper != undefined) {
//         mySwiper.destroy();
//         mySwiper = undefined;
//         jQuery('.swiper-wrapper').removeAttr('style');
//         jQuery('.swiper-slide').removeAttr('style');            
//     }        
// }

// //Swiper plugin initialization
// initSwiper();

// //Swiper plugin initialization on window resize
// $(window).on('resize', function(){
//     initSwiper();        
// });


// let mql = window.matchMedia('(max-width: 767px)');

// window.addEventListener('resize', () => {
//   if (mql.matches) {
//     let newSwiper = new Swiper('.slider-cards-js', {
//       direction: "horizontal",
//             loop: false,
//             rewind: true,
//             slidesPerView: 1,
//             centeredSlides: true,
//             spaceBetween: 32,
//             pagination: {
//               el: ".swiper-pagination",
//               clickable: true,
//             },
//     });
//   } else {
//     swiper.destroy();
//   }
// })


let newSwiper = new Swiper('.slider-cards-js', {
      direction: "horizontal",
            loop: true,
            autoHeight: true,
            rewind: true,
            autoplay: true,
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 32,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
});

$('.gumb').click(function(){
  $('header').toggleClass('active')
  $(this).toggleClass('active')
  $('html').toggleClass('hidden')
})

// var image = document.getElementsByClassName('thumbnail');
// new simpleParallax(image, {
//   scale: 1.7
// });

// var video = document.getElementsByTagName('video');
// new simpleParallax(video);



$(function() {
    $.validator.addMethod("emailRegex", function(value, element) {
        return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i.test(value);
    }, "");
});

$(function() {
    $(".form-footer").validate({
        rules: {
            "email": {
                required: true,
                emailRegex: true,
            },
        },
        messages: {
            "email": {
                required: "Введіть вашу електронну адресу",
                emailRegex: "Формат електронної пошти невірний",
            },
        },
    });
});


     const backgroundVideo = new BackgroundVideo('.bv-video', {
      src: [
        '../video/Gradientsoftbodies.mp4',
      ],
      onReady: function () {
        // Use onReady() to prevent flickers or force loading state
        const vidParent = document.querySelector(`.${this.bvVideoWrapClass}`);
        vidParent.classList.add('bv-video-wrap--ready');
        autoplayFallback: true;
      },

    });

