"use strict";

var url = 'https://raw.githubusercontent.com/free-code-camp/ProjectReferenceData/master/GDP' +
    '-data.json';

function tooltipText(d) {
  var month = d3.timeFormat("%B");
  var year = d
    .date
    .getFullYear();
  var tooltext = month(d.date) + " <br> " + year + "</span> <br>  " + Math.floor(d.gdp) + " billion";
  console.log(tooltext);
  return tooltext;
}

var tooltip = d3
  .select("#chart")
  .append("div")
  .attr("id", "tooltip")
  .style("visibility", "hidden");

var margin = {
  top: 20,
  right: 20,
  bottom: 40,
  left: 50
};

var width = $("#container").innerWidth() - margin.left - margin.right;
var height = 400 - margin.top - margin.bottom;

var svg = d3
  .select("#chart")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom);
var g = svg
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
var x = d3
  .scaleTime()
  .range([0, width]);
var y = d3
  .scaleLinear()
  .rangeRound([height, 0]);

var gradient = svg
  .append("svg:defs")
  .append("svg:linearGradient")
  .attr("id", "gradient")
  .attr("x1", "0%")
  .attr("y1", "0%")
  .attr("x2", "100%")
  .attr("y2", "100%")
  .attr("spreadMethod", "pad");
gradient
  .append("svg:stop")
  .attr("offset", "0%")
  .attr("stop-color", "#B1CBE0")
  .attr("stop-opacity", 1);

gradient
  .append("svg:stop")
  .attr("offset", "100%")
  .attr("stop-color", "green") //#c00
  .attr("stop-opacity", 1);

$.getJSON(url, function (dataset) {
  var datatrimmed = [];
  dataset
    .data
    .forEach(function (d) {
      var obj = {};
      obj.date = new Date(d[0]);
      obj.gdp = d[1];
      datatrimmed.push(obj);
    });

  var chartWidth = Math.ceil(width / datatrimmed.length);
  var startDate = datatrimmed[0].date;
  var endDate = datatrimmed[datatrimmed.length - 1].date;

  x.domain([startDate, endDate]);
  y.domain(d3.extent(datatrimmed, function (d) {
    return d.gdp;
  }));

  g
    .append("g")
    .selectAll(".bar")
    .data(datatrimmed)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", function (d) {
      return x(d.date);
    })
    .attr("y", function (d) {
      return y(d.gdp);
    })
    .attr("width", chartWidth)
    .attr("height", function (d) {
      return height - y(d.gdp);
    })
    .style("fill", "url(#gradient)")
    .attr("data-date", function (d) {
      return d
        .date
        .getFullYear();
    })
    .attr("data-gdp", function (d) {
      return d.gdp;
    })
    // .on("mousemove", function() {   //return tooltip     // .style("top",
    // (d3.event.pageY - 5) + "px")     // .style("left", (d3.event.pageX + 15) +
    // "px"); })
    .on("mouseover", function (d) {
      var rect = d3.select(this);
      rect.style("fill", "#FEF667");
      tooltip.html(tooltipText(d));
      return tooltip.style("visibility", "visible");
    })
    .on("mouseout", function () {
      var rect = d3.select(this);
      rect.style("fill", "url(#gradient)");
      return tooltip.style("visibility", "hidden");
    });

  g
    .append("g")
    .attr("id", "x-axis")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x).ticks(d3.timeYear, 5).tickFormat(d3.timeFormat("%Y")).tickSizeOuter(0))
    .selectAll("text")
    .style("text-anchor", "end")
    .attr("dx", "-.8em")
    .attr("dy", ".15em")
    .attr("transform", "rotate(-35)");

  g
    .append("g")
    .attr("id", "y-axis")
    .call(d3.axisLeft(y).ticks(10).tickSizeOuter(0));
  g
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 20)
    .style("text-anchor", "end")
    .text("GDP (billions)");
});

//   //Axes, Domains and Ranges   const minGDP = d3.min(dataset, (d) => d[1]);
// const maxGDP = d3.max(dataset, (d) => d[1]);   const startDate = new
// Date(dataset[0][0])   const endDate = new Date([dataset.length - 1][0]) const
// x = d3.scaleTime().range([0, w]);   x.domain([startDate, endDate]); const
// xAxis = d3.svg.axis().scale(x).orient("bottom");   const y =
// d3.scaleLinear().rangeRound([h, 0]);   const yAxis =
// d3.svg.axis().scale(y).orient("left");   const yScale = d3.scaleLinear()
// .domain([minGDP, maxGDP])     .range([(minGDP / maxGDP) * (h), h]);
// #BarChartTests
// 1. My chart should have a title with a corresponding id="title" ‣
// 2. My Chart should have an x-axis with a corresponding id="x-axis" ‣
// 3. My Chart should have a y-axis with a corresponding id="y-axis" ‣
// 4. Both axes should contain multiple tick labels ‣
// 5. My Chart should have a bar for each data point with a corresponding
// class="bar" displaying the data ‣
// 6. Each bar should have the properties "data-date" and "data-gdp" containing
// date and GDP values ‣
// 7. The "data-date" properties should match the order of the provided data ‣
// 8. The "data-gdp" properties should match the order of the provided data ‣
// 9. Each bar's height should accurately represent the data's corresponding GDP
// ‣
// 10. I can mouse over a bar and see a tooltip with corresponding id="tooltip"
// which displays more information about the data
// 11. My tooltip should have a "data-date" property that corresponds to the
// given date of the active bar const svg = d3.select("body")  .append("div")
// .classed("svg-container", true) //container class to make it responsive
// .append("svg")  //responsive SVG needs these 2 attributes and no width and
// height attr  .attr("preserveAspectRatio", "xMinYMin meet")  .attr("viewBox",
// "0 0 600 400")  //class to make it responsive
// .classed("svg-content-responsive", true) svg.selectAll("text") .data(dataset)
//  .enter()  .append("text")  .text((d) =>  (d[0] ))  .attr("x", (d, i) => (i
// * 30))  .attr("y", (d) => yScale(d[0])) svg.selectAll("text") .data(dataset)
// .enter()  .append("text")  .text((d) =>  (d[0] ))  .attr("x", (d, i) => (i *
// 30))  .attr("y", (d) => yScale(d[0])) var years = Array.from(dataArray, x =>
// x[0]); var gdp = Array.from(dataArray, x => x[1]); <a
// href="https://iros.github.io/d3-v4-whats-new/#1">This slideshow</a> was very
// helpful when it came to understanding the many differences (breaking diffs)
// between v3 and v4 of d3. Most of the tutorials on the d3 site are still
// written for v3 and won't work if you use the v4 library.</li>     <li><a
// href="https://bl.ocks.org/mbostock/3885304">A sample v4 bar chart</a></li>
// <li><a
// href="http://bl.ocks.org/alandunning/274bf248fd0f362d64674920e85c1eb7">A
// sample barchart with tooltips</a></li>     <li><a
// href="http://stackoverflow.com/questions/36999574/d3v4-time-scale-axis-error-
// i n-ticks-display">This Stack Overflow question</a> helped me sort out how
// to make the labels on the x axis work in v4 as they do on the sample
// chart.</li>   </ul>
// </div>https://chartio.com/resources/tutorials/how-to-show-data-on-mouseover-i
// n -d3js/
// http://stackoverflow.com/questions/11336251/accessing-d3-js-element-attribute
// s -from-the-datum
// http://www.d3noob.org/2012/12/setting-scales-domains-and-ranges-in.html
// http://stackoverflow.com/questions/22138897/d3-js-getting-gradients-on-a-bar-
// c hart