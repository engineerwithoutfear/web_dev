"use strict";

//Javascript30 - Project #2 : Clock
// Create an animated clock using HTML/CSS/JS.

//CSS
// Set the transform-origin CSS property of the .hand class at 100% so clock hands will tranform at their rightmost ends rather than their centers
// Rotate all of the hands by 90 degrees so they are vertical
// Set the transition CSS property of .hand to all 0.05s
// Set the transition-timing-function CSS property of .hand to whatever function you prefer, or define your own using the cubic-bezier() property value.

// JavaScript
// Assign variables for each clock hand + pair it with its HTML element.
// Create a function to update the position of the hands
// Calculate the necessary rotation using the current numerical time value for each hand and dividing it by the max value possible to get the percentage, multiplying the result of that by 360 (each hand can rotate 360 degrees) to get the numerical value for the rotation, and increasing that by another 90 degrees to compensate for the shift originally applied by the CSS styling on page load.
// Call the function defined in step 2 every second.
// fix secondhand spaz attack on minute increment

var secHand = document.querySelector(".second-hand");
var minHand = document.querySelector(".min-hand");
var hrsHand = document.querySelector(".hour-hand");
var s = 1000;

function updatePositions() {}

function getCurrentTime() {
  var atm = new Date();
  var seconds = atm.getSeconds();
  var minutes = atm.getMinutes();
  var hours = atm.getHours();
  var secDegrees = seconds * 360 / 60 + 90;
  var minDegrees = minutes * 360 / 60 + 90 + seconds / 60 * 6;
  var hrsDegrees = hours * 360 / 12 + 90 + minutes / 60 * 30;
  console.log(seconds);
  if (secDegrees === 90) {
    console.log("fsdfsd");
    secHand.style.transition = 'none';
    minHand.style.transition = 'none';
    hrsHand.style.transition = 'none';
  } else {
    //switches back to stylesheet settings
    secHand.style.transition = '';
    minHand.style.transition = '';
    hrsHand.style.transition = '';
  }
  secHand.style.transform = "rotate(" + secDegrees + "deg)";
  minHand.style.transform = "rotate(" + minDegrees + "deg)";
  hrsHand.style.transform = "rotate(" + hrsDegrees + "deg)";
}

function clockInterval(fn) {
  var timing = s - Date.now() % s;
  setTimeout(function () {
    fn();
    clockInterval(fn);
  }, timing);
}

clockInterval(getCurrentTime);

//https://taylorhakes.com/posts/creating-a-clock-with-setinterval/