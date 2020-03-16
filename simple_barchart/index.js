let data = [50, 100, 123, 64];

d3.select(".chart")
  .selectAll("div")
  .data(data)
    .enter()
    .append("div")
    .style("width", function(d) { return d * 2 + "px"; })
    .text(function(d) { return '$ ' + d; });
