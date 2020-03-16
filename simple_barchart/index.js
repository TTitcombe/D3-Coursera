d3.csv("earnings.csv").then(function(data) {
  populateTable(data);
}).catch(function(error) {
  d3.select("#error").text(error);
})

function populateTable(data) {
  // Convert Earnings from strings to numbers
  data.forEach(function(d) {
    d.Earnings = +d.Earnings;
  });

  // Get bounds of data
  let max_earnings = d3.max(data, function(d) { return d.Earnings; });
  let min_earnings = 0;

  // Scale data linearly to fit into figure
  var scale = d3.scaleLinear()
  		.domain([min_earnings, max_earnings])
		.range([0, 300])

  d3.select(".chart")
    .selectAll("div")
    .data(data)
      .enter()
      .append("div")
      .style("width", function(d) { return scale(d.Earnings) + "px"; })
      .text(function(d) { return '$ ' + d.Earnings; });
}


