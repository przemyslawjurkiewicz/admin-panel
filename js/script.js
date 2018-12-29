'use strict';
(function() {
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
  var password = document.getElementById('password');
  var passwordRepeat = document.getElementById('password-repeat');

  //When mobile
  function whenMobile(media) {
    if (media.matches) {
      // If media query matches
      // console.log("mobile");
      changeMenu();
    }
  }
  var media = window.matchMedia('(max-width: 767px)');
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
  }

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
    buttonsTab[i].addEventListener('click', function() {
      this.classList.toggle('button--active');
    });
  }

  //Menu items swicher
  for (var i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener('click', function() {
      if (this.classList.contains('menu__item--active')) {
        return;
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
      //console.log(i);
      sections[i].style.display = 'none';
    }
  }

  //First site on load index.html
  window.onload = function() {
    clearView();
    switchView('general');
  };

  //Switch view in right column after menu item clicked
  function switchView(id) {
    switch (id) {
      case 'general':
        document.getElementById('section-general').style.display = 'block';
        document.getElementById('section-links').style.display = 'block';
        document
          .getElementById('section-links')
          .classList.remove('sections--first');
        break;
      case 'details':
        document.getElementById('section-details').style.display = 'block';
        break;
      case 'links':
        document.getElementById('section-links').style.display = 'block';
        document
          .getElementById('section-links')
          .classList.add('sections--first');
        break;
      case 'baners':
        document.getElementById('section-baners').style.display = 'block';
        break;
      case 'personal-data':
        document.getElementById('section-personal-data').style.display =
          'block';
        break;
      case 'payout':
        document.getElementById('section-payout').style.display = 'block';
        break;
      case 'postback':
        document.getElementById('section-postback').style.display = 'block';
        break;
    }
  }

  //Funcion to close modal

  function closeModal() {
    document.querySelector('#overlay').classList.remove('overlay--show');
  }

  //Close modal button x
  document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      closeModal();
    });
  });

  //close modal click overlay
  document.querySelector('#overlay').addEventListener('click', function(e) {
    if (e.target === this) {
      closeModal();
    }
  });

  //close modal escape button on keyboard
  document.addEventListener('keyup', function(e) {
    if (e.keyCode === 27) {
      closeModal();
    }
  });

  //open modal function
  function openModal(modal) {
    document.querySelectorAll('#overlay > *').forEach(function(modal) {
      modal.classList.remove('modal--show');
    });
    document.querySelector('#overlay').classList.add('overlay--show');
    document.querySelector(modal).classList.add('modal--show');
  }

  document.querySelectorAll('#exit').forEach(function(e) {
    e.addEventListener('click', function() {
      openModal('#quit');
    });
  });

  document.querySelectorAll('#logout').forEach(function(e) {
    e.addEventListener('click', function() {
      openModal('#login');
    });
  });

  document.querySelectorAll('#js--add-banners').forEach(function(e) {
    e.addEventListener('click', function() {
      openModal('#add-banners');
    });
  });

  document.querySelectorAll('#js--add-links').forEach(function(e) {
    e.addEventListener('click', function() {
      openModal('#add-links');
    });
  });

  document.querySelectorAll('#js--chat').forEach(function(e) {
    e.addEventListener('click', function() {
      openModal('#chat');
    });
  });

  //Chart
  var ctx = document.getElementById('myChart').getContext('2d');
  var chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
      datasets: [
        {
          label: 'Signups',
          backgroundColor: '#8DBEC8',
          borderColor: '#8DBEC8',
          data: [52, 51, 41, 94, 26, 6, 72, 9, 21, 88]
        },
        {
          label: 'FTD',
          backgroundColor: '#F29E4E',
          borderColor: '#F29E4E',
          data: [6, 72, 1, 0, 47, 11, 50, 44, 63, 76]
        },
        {
          label: 'Earned',
          backgroundColor: '#71B374',
          borderColor: '#71B374',
          data: [59, 49, 68, 90, 67, 41, 13, 38, 48, 48],
          hidden: true
        }
      ]
    }
  });
})();
