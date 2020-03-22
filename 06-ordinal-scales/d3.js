const svg = d3.select("svg");

const titleText = "Countries to Continents";

const width = +svg.attr("width");
const height = +svg.attr("height");


const populateChart = data => {
  const countryValue = d => d.Country;
  const continentValue = d => d.Continent;

  const innerHeight = height - 100;
  const innerWidth = width - 50;

  const countryScale = d3.scaleBand()
      .domain(data.map(countryValue))
      .range([0, innerHeight]);

  const continentScale = d3.scaleBand()
		  .domain(data.map(continentValue))
		  .range([0, innerHeight]);

  const g = svg.append("g")
  	    .attr("transform", "translate(50, 100)");

  g.selectAll("text").data(data)
    .enter().append("text")
      .attr("y", d => countryScale(countryValue(d)))
      .text(countryValue(d));

  g.selectAll("line").data(data)
    .enter().append("line")
      .attr("x1", 20)
      .attr("x2", innerWidth - 20)
      .attr("y1", countryScale(countryValue(d)))
      .attr("y2", continentScale(continentValue(d)))

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
