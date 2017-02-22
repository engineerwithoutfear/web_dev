'use strict';

//Javascript30 - Project #1 : Drum Kit 

function playSound(key, type) {
  var charCode = getCharCode(key, type);
  var soundClip = document.querySelector('audio[data-key="' + charCode + '"]');
  if (!soundClip) return;
  var currentDiv = '[data-key="' + charCode + '"]';
  document.querySelector(currentDiv).classList.add('playing');
  soundClip.currentTime = 0;
  soundClip.play();
}

// get the keycode from a keypress or click
function getCharCode(key, type) {
  if (type == "click") {
    return clickSoundClip(key);
  } else if (type == "press") {
    return pressSoundClip(key);
  }
}

function pressSoundClip(key) {
  var keyCode = key.keyCode;
  return keyCode;
}

function clickSoundClip(key) {
  var keyCode = key.path[1].getAttribute("data-key");
  return keyCode;
}

function removeClass(event) {
  if (event.propertyName !== "transform") {
    return;
  } else {
    event.target.classList.remove("playing");
  }
}

var keypad = Array.from(document.querySelectorAll(".key"));
keypad.forEach(function (key) {
  return key.addEventListener("transitionend", removeClass);
});

// Add an event listener to the entire window that listens for a keypress or click
window.addEventListener("keydown", function (key) {
  var type = "press";
  playSound(key, type);
});

window.addEventListener("click", function (key) {
  var type = "click";
  playSound(key, type);
});