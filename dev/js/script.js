
let newSwiper = new Swiper('.slider-cards-js', {
      direction: "horizontal",
            loop: true,
            autoHeight: false,
            rewind: true,
            autoplay: true,
            slidesPerView: 1.2,
            spaceBetween: 10,
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


$(window).scroll(function(){
    if ($(window).scrollTop() >= 112) {
       $('header').addClass('fixed'),
       $('body').addClass('body-padding-top')
    }
    else {
       $('header').removeClass('fixed'),
       $('body').removeClass('body-padding-top')
    }
});


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

 $(document).on('submit','.form-footer',function(){
      if ($('.form-footer').valid()){
          let formurl = $(this).attr('action');
          let me = $(this);
          
          $.ajax({
            type: "POST",
            url: formurl,
            data: $('.form-footer').serialize(),     
            success: function (data) {
              $('form input').removeClass('valid');
              $('.sucsess_popup').fadeIn();
              console.log(1)
              setTimeout(function(){
                 $('.sucsess_popup').fadeOut(1000);
                 console.log(2)
              },4000)
              me.trigger('reset')
            },
            error: function(err){
              console.log('fail');
              return false;
            },
          })    
          return false;
      }
    });

// $(window).resize(function() {
  // if ($(window).width() > 768) {
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
  // }
// });


$('body').addClass('hidden')
if($("#wrap-loading").length > 0){
  var $body = document.body,
        $wrap = document.getElementById('wrap-loading'),
        // $body = classList.add('bcg-color')
        areawidth = window.innerWidth,
        areaheight = window.innerHeight,

        canvassize = 500,

        length = 15,
        radius = 5.6,

        rotatevalue = 0.035,
        acceleration = 0,
        animatestep = 0,
        toend = false,

        pi2 = Math.PI*2,

        group = new THREE.Group(),
        mesh, ringcover, ring,

        camera, scene, renderer;


    camera = new THREE.PerspectiveCamera(65, 1, 1, 10000);
    camera.position.z = 150;

    scene = new THREE.Scene();
    // scene.add(new THREE.AxisHelper(30));
    scene.add(group);

    mesh = new THREE.Mesh(
        new THREE.TubeGeometry(new (THREE.Curve.create(function() {},
            function(percent) {

                var x = length*Math.sin(pi2*percent),
                    y = radius*Math.cos(pi2*3*percent),
                    z, t;

                t = percent%0.25/0.25;
                t = percent%0.25-(2*(1-t)*t* -0.0185 +t*t*0.25);
                if (Math.floor(percent/0.25) == 0 || Math.floor(percent/0.25) == 2) {
                    t *= -1;
                }
                z = radius*Math.sin(pi2*2* (percent-t));

                return new THREE.Vector3(x, y, z);

            }
        ))(), 200, 1.1, 2, true),
        new THREE.MeshBasicMaterial({
            color: 0x444CE7
            // , wireframe: true
        })
    );
    group.add(mesh);

    ringcover = new THREE.Mesh(new THREE.PlaneGeometry(50, 15, 1), new THREE.MeshBasicMaterial({color: 0xffffff, opacity: 0, transparent: true}));
    ringcover.position.x = length+1;
    ringcover.rotation.y = Math.PI/2;
    group.add(ringcover);

    ring = new THREE.Mesh(new THREE.RingGeometry(4.3, 5.55, 32), new THREE.MeshBasicMaterial({color: 0xffffff, opacity: 0, transparent: true}));
    ring.position.x = length+1.1;
    ring.rotation.y = Math.PI/2;
    group.add(ring);

    // fake shadow
    (function() {
        var plain, i;
        for (i = 0; i < 10; i++) {
            plain = new THREE.Mesh(new THREE.PlaneGeometry(length*2+1, radius*3, 1), new THREE.MeshBasicMaterial({color: 0xffffff, transparent: true, opacity: 0.13}));
            plain.position.z = -2.5+i*0.5;
            group.add(plain);
        }
    })();

    renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(canvassize, canvassize);
    renderer.setClearColor('#ffffff');

    $wrap.appendChild(renderer.domElement);

    $body.addEventListener('mousedown', start, false);
    $body.addEventListener('touchstart', start, false);
    $body.addEventListener('mouseup', back, false);
    $body.addEventListener('touchend', back, false);

    animate();


    function start() {
        toend = true;
    }
    
    function back() {
        toend = false;
    }

    function tilt(percent) {
        group.rotation.y = percent*0.5;
    }

    function render() {

        var progress;

        animatestep = Math.max(0, Math.min(240, toend ? animatestep+1 : animatestep-4));
        acceleration = easing(animatestep, 0, 1, 240);

        if (acceleration > 0.35) {
            progress = (acceleration-0.35)/0.65;
            group.rotation.y = -Math.PI/2 *progress;
            group.position.z = 50*progress;
            progress = Math.max(0, (acceleration-0.97)/0.03);
            mesh.material.opacity = 1-progress;
            ringcover.material.opacity = ring.material.opacity = progress;
            ring.scale.x = ring.scale.y = 0.9 + 0.1*progress;
        }

        renderer.render(scene, camera);

    }

    function animate() {
        mesh.rotation.x += rotatevalue + acceleration;
        render();
        requestAnimationFrame(animate);
    }

    function easing(t,b,c,d) {if((t/=d/2)<1)return c/2*t*t+b;return c/2*((t-=2)*t*t+2)+b;}
}

$(window).on('load', function(){ 
    $('body').removeClass('hidden') 
    $('#wrap-loading').fadeOut(500)
});

$('.link_section').click(function(){
    $('.gumb').trigger('click')
    // $('gumb').removeClass('active')
})