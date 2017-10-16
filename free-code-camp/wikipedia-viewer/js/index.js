
  $("#search-commence1").click(function() {
    $("#landing-page").velocity({
      opacity: 0
    }, {
      display: "none"
    }, {
      duration: 1500
    });
    $("nav, .results-page").velocity({
      opacity: 1
    }, {
      display: "block"
    }, {
      delay: 1500,
      duration: 1500
    });
    searchFor();

  });
  $("#search-commence2").click(function() {
    searchFor();
  });

  // when the button is clicked...COMMENCE THE SEARCH!
  function searchFor() {
    $("#island__results-box").slideUp(100);
    // get the search query from the input box  
    var topic = $("#search-input").val();
    // ask wikipedia for its datas
    $.getJSON("https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&callback=?&srsearch=" + topic, function(data) {
      var results = "";
      var json = data.query.search;
      for (i = 0; i < json.length; i++) {
        results +=
          "<div class=\"island__row\"><h1><span class = \"results__page-title\"> <a href=\"https://en.wikipedia.org/wiki/" + json[i].title + "\">" + json[i].title + "</span></h1><br>" +
          "<p><span class = \"results__summary\">" + json[i].snippet + "...</span></p></a><br>" +
          "<span class = \"results__word-count\">Word Count: " + json[i].wordcount + "</span><br>" +
          "<span class = \"results__timestamp\">Timestamp: " + json[i].timestamp + "</span><br>" +
          "<span class = \"results__size\">Size: " + json[i].size + "kb</span><br></div>";
      }
      $("#island__results-box").empty().append(results).slideDown(800);
    })
  }

searchFor();