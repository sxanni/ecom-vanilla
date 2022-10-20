//copy menu for mobile
function copyMenu(){
    //copy inside .dpt-cat to departments
    var dptCategory = document.querySelector('.dpt-cat');
    var dptPlace = document.querySelector('.departments');
    dptPlace.innerHTML = dptCategory.innerHTML;

    //copy inside nav to nav
    var mainNav = document.querySelector('.header-nav nav');
    var navPlace = document.querySelector('.off-canvas nav');
    navPlace.innerHTML = mainNav.innerHTML;

    //copy .header-top .wrapper to .thetop-nav
    var topNav = document.querySelector('.header-top');
    var topPlace = document.querySelector('.off-canvas .thetop-nav');
    topPlace.innerHTML = topNav.innerHTML;


}
copyMenu();


//show mobile menu
const menuButton = document.querySelector('.trigger'),
closeButton = document.querySelector('.t-close'),
addclass = document.querySelector('.site');
menuButton.addEventListener('click', function(){
    addclass.classList.toggle('showmenu')
})
closeButton.addEventListener('click', function() {
    addclass.classList.remove('showmenu')
})


//show sub menu on mobile
const submenu = document.querySelectorAll('.has-child .icon-small');
submenu.forEach((menu) => menu.addEventListener('click', toggle));

function toggle(e) {
    e.preventDefault();
    submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') : null);
    if (this.closest('.has-child').classList != 'expand');
    this.closest('.has-child').classList.toggle('expand')
}

//slider (swipper initialization boilerplaaate)
const swiper = new Swiper('.swiper', {
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

  });


  function myFunction() {
      var element = document.body;
      element.classList.toggle("dark-mode");
      var r = document.querySelector(':root');
    r.style.setProperty(' --secondary-dark-color', '#f2f3f5');
    r.style.setProperty(' --dark-color', '#ffffff');
    r.style.setProperty(' --light-bg-color', '#181818');
    r.style.setProperty(' --white-color', '#0a021c');
    r.style.setProperty(' --primary-color', '#794afa');
    // document.documentElement.style.setProperty(' --secondary-dark-color', '#f2f3f5');
    // document.documentElement.style.setProperty(' --dark-color', '#ffffff');
    // document.documentElement.style.setProperty(' --light-bg-color', '#181818');
    // document.documentElement.style.setProperty(' --white-color', '#0a021c');


    
 }