"use strict";
(function () {
  var buttonsTab = document.getElementsByClassName('button--tab');
  var hamburger = document.getElementById('hamburger');
  var menu = document.getElementById('menu');
  var topMenu = document.getElementById('top-menu');
  var sections = document.getElementsByClassName('sections');
  var menuItem = document.getElementsByClassName('menu__item');
  var logo = document.getElementsByClassName('menu__logo');
  var icons = document.getElementsByClassName('menu__icon');
  var text = document.getElementsByClassName('menu__text');
  var lines = document.getElementsByClassName('menu__line');
  var mobiles = document.getElementsByClassName('menu__mobile');
  var manager = document.getElementsByClassName('menu__manager');
  var items = document.getElementsByClassName('menu__item');
  var password = document.getElementById("password");
  var passwordRepeat = document.getElementById("password-repeat");

  //When mobile
  function whenMobile(media) {
    if (media.matches) { // If media query matches
      console.log("mobile");
      changeMenu();
    }
  }
  var media = window.matchMedia("(max-width: 767px)");
  whenMobile(media);
  media.addListener(whenMobile);

  //Hamburger menu clicked
  hamburger.addEventListener('click', changeMenu);

  //Change left menu widht 
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


  //Password repeat validation
  password.onchange = validatePassword;
  passwordRepeat.onkeyup = validatePassword;

  function validatePassword() {
    if (password.value != passwordRepeat.value) {
      passwordRepeat.setCustomValidity("Passwords Don't Match");
    } else {
      passwordRepeat.setCustomValidity('');
    }
  }

  //Tabs buttons active switch
  for (var i = 0; i < buttonsTab.length; i++) {
    buttonsTab[i].addEventListener("click", function () {
      this.classList.toggle("button--active");
    });
  }


  //Menu items swicher
  for (var i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener("click", function () {
      if (this.classList.contains("menu__item--active")) {
        return
      } else {
        clearView();
        removeActiveMenuItem();
        switchView(this.id);
        this.classList.add('menu__item--active');
        this.firstElementChild.classList.add('menu__icon--active');
        this.lastElementChild.classList.add('menu__text--active');
      }
    });
  }

  //Remove menu item active class before switch
  function removeActiveMenuItem() {
    for (var i = 0; i < menuItem.length; i++) {
      menuItem[i].classList.remove('menu__item--active');
      menuItem[i].firstElementChild.classList.remove('menu__icon--active');
      menuItem[i].lastElementChild.classList.remove('menu__text--active');
    }
  }

  //Clear view in right column before switch  
  function clearView() {
    for (var i = 0; i < sections.length; i++) {
      console.log(i);
      sections[i].style.display = 'none';
    }
  }

//First site on load index.html
  window.onload = function() {
    clearView();
    switchView('general');
  }

  //Switch view in right column after menu item clicked 
  function switchView(id) {
    switch (id) {
      case 'general':
        document.getElementById('section-general').style.display = 'block';
        document.getElementById('section-links').style.display = 'block';
        document.getElementById('section-links').classList.remove('sections--first');
        break;
      case 'details':
        document.getElementById('section-details').style.display = 'block';
        break;
      case 'links':
        document.getElementById('section-links').style.display = 'block';
        document.getElementById('section-links').classList.add('sections--first');
        break;
      case 'baners':
        document.getElementById('section-baners').style.display = 'block';
        break;
      case 'personal-data':
        document.getElementById('section-personal-data').style.display = 'block';
        break;
        case 'postback':
        document.getElementById('section-postback').style.display = 'block';
        break;  
    }
  }
})();