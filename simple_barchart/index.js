d3.csv("earnings.csv").then(function(data) {
  d3.select(".chart")
    .selectAll("div")
    .data(data)
      .enter()
      .append("div")
      .style("width", function(d) { return d.Earnings * 2 + "px"; })
      .text(function(d) { return '$ ' + d.Earnings; });
}).catch(function(error) {
})


