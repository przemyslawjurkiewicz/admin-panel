"use strict";
(function() {
  var buttonsTab = document.getElementsByClassName("button--tab");
  var hamburger = document.getElementById('hamburger');
  var menu = document.getElementById('menu');
  var topMenu = document.getElementById('top-menu');
  var logo = document.getElementsByClassName("menu__logo");
  var icons = document.getElementsByClassName("menu__icon");
  var text = document.getElementsByClassName("menu__text");
  var lines = document.getElementsByClassName("menu__line");
  var mobiles = document.getElementsByClassName("menu__mobile");
  var manager = document.getElementsByClassName("menu__manager");
  var items = document.getElementsByClassName("menu__item");
  for (var i = 0; i < buttonsTab.length; i++) {
    buttonsTab[i].addEventListener("click", function() {
      this.classList.toggle("button--active");
    });
  }

  hamburger.addEventListener('click', function() {
    menu.classList.toggle('col-m-2');
    menu.classList.toggle('col-m-1');
    menu.classList.toggle('col-s-1');
    menu.classList.toggle('col-s-6');
    topMenu.classList.toggle('top-menu--mini');
    topMenu.classList.toggle('col-m-10');
    topMenu.classList.toggle('col-m-11');
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
  });
})();
