// server.js
// where your node app starts

var express = require('express');
var app = express();
var moment = require("moment");
var port = process.env.PORT || 8080;


// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({
    optionSuccessStatus: 200
})); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
});



app.get("/api/timestamp/:query", function (req, res) {
    var input = req.params.query;

    if (input > 0) {
        console.log("valid unikkusu")
        var convert = moment.unix(input / 1000).format("MMMM D, YYYY");
        var response = {
            "unix": Math.floor(input / 1000),
            "natural": convert
        }
    } else if (isNaN(input) && moment(input, "MMMM D, YYYY").isValid()) {
        console.log("valid language")
        var convert = moment(input, "MMMM D, YYYY").format("X");
        var response = {
            "unix": convert,
            "natural": input.replace(/%20/g, " ")
        }
    } else {
        var response = {
            "unix": null,
            "natural": null
        }
    }
    res.json(response)
});

// listen for requests 
var listener = app.listen(process.env.PORT, function () {
    console.log('Your app is listening on port ' + listener.address().port);
});