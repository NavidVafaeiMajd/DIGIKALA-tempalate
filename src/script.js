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
    slidesPerView : 10.5,  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });