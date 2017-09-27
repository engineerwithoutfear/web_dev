$(document).ready(function() {

    $.getJSON("http://ipinfo.io", function(locationData) {
        var weatherURL = "https://api.forecast.io/forecast/9b6cdb806648ea42b2f2a076e97be283/" + locationData.loc + "?callback=?";
        $.getJSON(weatherURL, function(weatherData) {
            temp = weatherData.currently.temperature;
            tempF = Math.floor(temp) + " <span class = \"unit\"> ºF</span>";
            tempC = Math.floor((temp - 32) / 1.8) + " <span class = \"unit\"> ºC</span>";
            $(".location").text(locationData.city + ", " + locationData.region);
            $(".summary").text(weatherData.currently.summary);
            $(".temp").html(tempF);
            $(".weather-icon").html("<i class = \"wi " + "wi-forecast-io-" + weatherData.currently.icon + "\"></i>");
            });
    });

    var isC = false;
    $(".temp-toggle").on("click", function() {
        var temp = $(".temp");
        if (isC) {
            temp.html(tempF);
            isC = false;
            } else {
            temp.html(tempC);
            isC = true;
        }
    });
});