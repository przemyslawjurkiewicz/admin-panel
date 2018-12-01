"use strict";
(function() {
  var buttonsTab = document.getElementsByClassName("button--tab");
  console.log(buttonsTab);
  for (var i = 0; i < buttonsTab.length; i++) {
    buttonsTab[i].addEventListener("click", function() {
      this.classList.toggle("button--active");
    });
  }
})();
