window.onload = function () {
  FE.global.init();
};

// function initAppItem() {
//   let init = 'init app';
//   console.log(init);
//   hoverNav();
// }
//
// function hoverNav() {
// 	var navigation = document.querySelector('.navigation-top');
// 	var navItem = navigation.querySelectorAll('.menu-parent > li');
// 	console.log(navItem);
// }

const FE = {

    global: {

      toggleActiveClass: function(clickedElement, elementToToggle, activeClass) {
        var clickedElem = document.querySelector(clickedElement);
        var elemToToggle = document.querySelector(elementToToggle);

        clickedElem.addEventListener('click', function(event) {
          if(elemToToggle.classList.contains(activeClass)) {
              elemToToggle.classList.remove(activeClass);
          } else {
              elemToToggle.classList.add(activeClass);
          }
        });
      },

      init: function() {
        FE.global.toggleActiveClass('.hamburger', '.hamburger', 'is-active');
        FE.global.toggleActiveClass('.hamburger', '.mobile-nav', 'is-active');
      }

    }
}
