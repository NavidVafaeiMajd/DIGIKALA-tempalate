const swiper = new Swiper('.swiper', {
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
  
