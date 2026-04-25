"use strict";

var currentYear = new Date().getFullYear();
document.getElementById("current-year").innerHTML = currentYear;

function updateRangeDisplay(sliderId, outputId) {
   var slider = document.getElementById(sliderId);
   var output = document.getElementById(outputId);
   if (slider && output) {
      output.innerHTML = slider.value;
      slider.addEventListener("input", function () {
         output.innerHTML = this.value;
      });
   }
}

updateRangeDisplay("familiarity", "range-value");

var clockEl = document.getElementById("live-clock");

function updateClock() {
   var now = new Date();
   function pad(n) {
      return n < 10 ? "0" + n : String(n);
   }
   if (clockEl) {
      clockEl.innerHTML = pad(now.getHours())   + ":" +
                          pad(now.getMinutes()) + ":" +
                          pad(now.getSeconds());
   }
}

updateClock();
setInterval(updateClock, 1000);

var form      = document.getElementById("contact-form");
var submitBtn = document.getElementById("btn-submit");

if (form && submitBtn) {
   form.addEventListener("submit", function (e) {
      e.preventDefault();

      submitBtn.disabled    = true;
      submitBtn.textContent = "Sending...";

      fetch("https://formsubmit.co/ajax/ycarrej@my.gvltec.edu", {
         method:  "POST",
         headers: {
            "Content-Type": "application/json",
            "Accept":       "application/json"
         },
         body: JSON.stringify(Object.fromEntries(new FormData(form)))
      })
      .then(function (response) {
         return response.json();
      })
      .then(function (data) {
         submitBtn.textContent = "Submitted!";
         submitBtn.style.background = "linear-gradient(135deg, hsl(140,50%,38%), hsl(150,45%,28%))";
         submitBtn.style.borderColor = "hsl(140,50%,34%)";
      })
      .catch(function () {
         submitBtn.disabled    = false;
         submitBtn.textContent = "Send Message";
         alert("Something went wrong. Please try again.");
      });
   });
}
