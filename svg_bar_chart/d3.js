const svg = d3.select("svg");

const titleText = "A figure";

const width = +svg.attr("width");
const height = +svg.attr("height");


const populateChart = data => {
  const xValue = d => d.Value;
  const yValue = d => d.X;

  const innerHeight = height - 100;
  const innerWidth = width - 50;

  const xScale = d3.scaleLinear()
  		   .domain([0, d3.max(data, xValue) ])
		   .range([0, innerWidth]);

  const yScale = d3.scaleBand()
		   .domain(data.map(yValue))
		   .range([0, innerHeight]);

  const g = svg.append("g")
  	    .attr("transform", "translate(50, 100)");

  g.selectAll("rect").data(data)
    .enter().append("rect")
      .attr("y", d => yScale(yValue(d)))
      .attr("height", yScale.bandwidth())
      .attr("width", d => xScale(xValue(d)));

  g.append("text")
    .attr("y", -10)
    .text(titleText);
  
};

d3.csv("data.csv").then(data => {
  data.forEach(d => {
    d.Value = +d.Value;
    });
  populateChart(data);
});
