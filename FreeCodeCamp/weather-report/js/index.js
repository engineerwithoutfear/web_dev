"use strict";

var locationAPI = "https://ipinfo.io";
var weatherAPI = "https://api.forecast.io/forecast/9b6cdb806648ea42b2f2a076e97be283/";
var tempF;
var tempC;
var tempDisplay = $(".temp");
var isFahrenheit = true;

$(document).ready(function () {
  $.getJSON(locationAPI, function (locationData) {
    weatherAPI = weatherAPI + locationData.loc + "?callback=?";
    $.getJSON(weatherAPI, function (weatherData) {
      var temp = weatherData.currently.temperature;
      tempF = Math.floor(temp) + ' <span class = "unit">ºF</span>';
      tempC = Math.floor((temp - 32) / 1.8) + ' <span class = "unit">ºC</span>';
      tempDisplay.html(tempF);
      $(".location").text(locationData.city + " , " + locationData.region);
      $(".summary").text(weatherData.currently.summary);
      $(".weather-icon").html('<i class = "wi wi-forecast-io-' + weatherData.currently.icon + '"></i>');
    });
  });

  $(".temp-toggle").on("click", function () {
    isFahrenheit = !isFahrenheit;
    tempDisplay.html(isFahrenheit ? tempF : tempC);
  });
});