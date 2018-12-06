"use strict";
(function () {
  var buttonsTab = document.getElementsByClassName('button--tab');
  var hamburger = document.getElementById('hamburger');
  var menu = document.getElementById('menu');
  var topMenu = document.getElementById('top-menu');
  var sections = document.getElementsByClassName('sections');
  var logo = document.getElementsByClassName('menu__logo');
  var icons = document.getElementsByClassName('menu__icon');
  var text = document.getElementsByClassName('menu__text');
  var lines = document.getElementsByClassName('menu__line');
  var mobiles = document.getElementsByClassName('menu__mobile');
  var manager = document.getElementsByClassName('menu__manager');
  var items = document.getElementsByClassName('menu__item');


  for (var i = 0; i < buttonsTab.length; i++) {
    buttonsTab[i].addEventListener("click", function () {
      this.classList.toggle("button--active");
    });
  }

  function whenMobile(media) {
    if (media.matches) { // If media query matches
      console.log("mobile");
      changeMenu();
    }
  }
  var media = window.matchMedia("(max-width: 767px)")
  whenMobile(media);
  media.addListener(whenMobile);

  hamburger.addEventListener('click', changeMenu);

  function changeMenu() {
    menu.classList.toggle('col-lg-2');
    menu.classList.toggle('col-lg-1');
    menu.classList.toggle('col-sm-1');
    menu.classList.toggle('col-sm-6');
    topMenu.classList.toggle('top-menu--mini');
    topMenu.classList.toggle('col-lg-10');
    topMenu.classList.toggle('col-lg-11');

    
   
    for (var i = 0; i < sections.length; i++) {
      sections[i].classList.toggle('sections--mini');
      sections[i].classList.toggle('col-lg-10');
      sections[i].classList.toggle('col-lg-11');

      
    }
    for (var i = 0; i < logo.length; i++) {
      logo[i].classList.toggle('menu__logo--mini');
    }
    for (var i = 0; i < text.length; i++) {
      text[i].classList.toggle('menu__text--mini');
    }
    for (var i = 0; i < icons.length; i++) {
      icons[i].classList.toggle('menu__icon--mini');
    }
    for (var i = 0; i < lines.length; i++) {
      lines[i].classList.toggle('menu__line--mini');
    }
    for (var i = 0; i < mobiles.length; i++) {
      mobiles[i].classList.toggle('menu__mobile--mini');
    }
    for (var i = 0; i < manager.length; i++) {
      manager[i].classList.toggle('menu__manager--mini');
    }
    for (var i = 0; i < items.length; i++) {
      items[i].classList.toggle('menu__item--mini');
    }
  };
 
})();