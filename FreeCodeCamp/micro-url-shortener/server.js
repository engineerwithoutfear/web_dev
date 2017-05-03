"use strict";
const express = require("express");
const app = express();
const mongo = require("mongodb");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const shortid = require("shortid");
const validURL = require("valid-url");
const port = process.env.PORT || 3000;
const mlabURL =
  "mongodb://" +
  process.env.DB_USR +
  ":" +
  process.env.DB_PSWD +
  "@ds127341.mlab.com:27341/shorties";
// to parse application
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
})); // support encoded bodies
// native promises
mongoose.Promise = global.Promise;

// set static folder to get public page stuff out of
// app.use(express.static('public')); <--will use public as root instead of /
app.use("/public", express.static(process.cwd() + "/public"));

// set up url schema
const dbSchema = mongoose.Schema({
  fullURL: String,
  shortURL: {
    type: String,
    default: shortid.generate
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});
const Url = mongoose.model("Url", dbSchema);

mongoose.connect(mlabURL);
mongoose.connection.on("connected", () => {
  console.log("im connected");
});
mongoose.connection.on("error", err => {
  console.log(`something bad happened... ${err}`);
});

// submits a url for considerations
app.post("/api/shorturl/new/", (req, res) => {
  let url = req.body.url;
  // check for valid url
  if (validURL.isUri(url)) {
    Url.findOne({
      fullURL: url
    }, function (err, preExisting) {
      if (preExisting) {
        console.log("he here");
        res.json({
          fullURL: preExisting.fullURL,
          shortURL: preExisting.shortURL
        });
      } else {
        // create new entry
        let shorted = addURL(url);
        console.log("he no here");
        res.json({
          fullURL: url,
          shortURL: shorted
        });
      }
    });
  } else {
    // if an invalid url..
    res.json({
      error: "invalid URL"
    });
  }
});

app.get("/api/shorturl/:site", (req, res) => {
  let site = req.params.site;
  // does it exist in our db?
  Url.findOne({
    shortURL: site
  }, function (err, preExisting) {
    if (preExisting) {
      res.redirect(preExisting.fullURL);
    } else {
      res.json({
        error: "invalid URL"
      });
    }
  });
});

function addURL(url) {
  let shortUrl = "";
  let newUrl = new Url({
    fullURL: url
  });
  // save the new link
  newUrl.save(function (err, newURL) {
    if (err) return console.log(err);
  });
  return newUrl.shortURL;
}

// dump user onto indexpage
app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/views/index.html");
});

// // catch all others and redirect
app.get("*", function (req, res) {
  res.redirect(req.protocol + '://' + req.get('host'));
});

app.listen(port, () => {
  console.log(`App has started on port ${port}`);
});