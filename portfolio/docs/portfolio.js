/*
 * IST 226 - End of Course Portfolio
 * Author:   Joey Carreno
 * Date:     April 2026
 * Filename: portfolio.js
 *
 * Tutorial 9: External script linked via <script src="portfolio.js" defer>.
 *             The defer attribute defers execution until after the HTML is
 *             fully parsed, making it safe to reference DOM elements without
 *             a separate window.onload wrapper.
 *
 * Tutorials demonstrated:
 *   Tutorial 9  — script element, defer, "use strict", variables,
 *                 getElementById, innerHTML, Date object (getFullYear,
 *                 getHours, getMinutes, getSeconds), named functions,
 *                 parameters, setInterval, addEventListener
 */

// Tutorial 9: "use strict" — enables strict syntax checking
"use strict";

/* ─────────────────────────────────────────────
   DYNAMIC COPYRIGHT YEAR
   Tutorial 9: Date object, getFullYear(), innerHTML
   ───────────────────────────────────────────── */
// Tutorial 9: var declaration
var currentYear = new Date().getFullYear();
document.getElementById("current-year").innerHTML = currentYear;

/* ─────────────────────────────────────────────
   RANGE SLIDER LIVE DISPLAY
   Tutorial 9: named function, parameters, addEventListener
   ───────────────────────────────────────────── */
// Tutorial 9: function with parameters
function updateRangeDisplay(sliderId, outputId) {
   // Tutorial 9: document.getElementById — references elements by id
   var slider = document.getElementById(sliderId);
   var output = document.getElementById(outputId);
   if (slider && output) {
      // Tutorial 9: innerHTML writes content into an element
      output.innerHTML = slider.value;
      // Tutorial 9: addEventListener attaches an event handler
      slider.addEventListener("input", function () {
         output.innerHTML = this.value;
      });
   }
}

// Call the function and pass element IDs as arguments
updateRangeDisplay("familiarity", "range-value");

/* ─────────────────────────────────────────────
   LIVE CLOCK
   Tutorial 9: setInterval, Date object methods,
               nested function, variables
   ───────────────────────────────────────────── */
// Tutorial 9: var — stores a reference to the clock element
var clockEl = document.getElementById("live-clock");

// Tutorial 9: named function
function updateClock() {
   // Tutorial 9: new Date() creates a Date object for the current moment
   var now = new Date();

   // Tutorial 9: function — pad single-digit numbers with a leading zero
   function pad(n) {
      // Tutorial 9: var, return value
      return n < 10 ? "0" + n : String(n);
   }

   if (clockEl) {
      // Tutorial 9: Date methods — getHours(), getMinutes(), getSeconds()
      clockEl.innerHTML = pad(now.getHours())   + ":" +
                          pad(now.getMinutes()) + ":" +
                          pad(now.getSeconds());
   }
}

// Run once immediately so the clock shows a value on load
updateClock();

// Tutorial 9: setInterval — repeats updateClock every 1000 ms (1 second)
setInterval(updateClock, 1000);
