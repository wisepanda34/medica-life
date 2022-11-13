window.addEventListener('DOMContentLoaded', () => {
   const menu = document.querySelector('.menu'),
      menuItem = document.querySelectorAll('.menu_item'),
      hamburger = document.querySelector('.hamburger');

   hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('menu_active');
   });

   menuItem.forEach(item => {
      item.addEventListener('click', () => {
         hamburger.classList.toggle('hamburger_active');
         menu.classList.toggle('menu_active');
      })
   })
})

new Swiper('.image-slider', {
   //стрелки
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
   },

   //Pagination
   pagination: {
      el: '.swiper-pagination',
      //Буллеты
      clickable: true,
   },
   //Количество слайдов для показа на экране
   slidesPerView: 3,

   //Отключение функционала, если слайдов меньше, чем...
   watchOverFlow: true,
});








