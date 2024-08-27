const swiper = new Swiper('.story-box', {
    slidesPerView : 10.5,
    // Optional parameters
    // If we need pagination

  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
  });

  document.querySelectorAll('.left-menu li').forEach(item => {
    item.addEventListener('mouseover', function() {
      // مخفی کردن تمامی محتواهای راست
      document.querySelectorAll('.right-menu .menu-content').forEach(content => {
        content.classList.remove('active');
      });
      console.log("salam")
      // نمایش محتوای مرتبط با آیتم هاور شده
      const contentId = this.getAttribute('data-content');
      document.getElementById(contentId).classList.add('active');
    });
  });
  
   const swiperSlideShow = new Swiper('.slide-show', {
    // Optional parameters

    autoplay : true ,
    autoplay :{
      pauseOnMouseEnter : true ,
    },
    delay : 2000,
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets : true
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

   const swiperAmazingOrder = new Swiper('.amazing-order', {
    slidesPerView : 6.5,
    freeMode: true ,

  // Optional parameters
  direction: 'horizontal',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }

  });

// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2030 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="countdown-timer"
  document.querySelector(".countdown-timer-h").innerHTML = hours;
  document.querySelector(".countdown-timer-m").innerHTML = minutes;
  document.querySelector(".countdown-timer-s").innerHTML = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".countdown-timer").innerHTML = "EXPIRED";
  }
}, 1000);