const svg = d3.select("svg");

const titleText = "Countries to Continents";

const width = +svg.attr("width");
const height = +svg.attr("height");


const populateChart = data => {
  const countryValue = d => d.Country;
  const continentValue = d => d.Continent;

  const innerHeight = height - 100;
  const innerWidth = width - 250;

  const countryScale = d3.scaleBand()
      .domain(data.map(countryValue))
      .range([0, innerHeight]);

  const continentScale = d3.scaleBand()
      .domain(data.map(continentValue))
      .range([0, innerHeight]);

  const g = svg.append("g")
      .attr("transform", "translate(50, 100)");

  // Create countries group
  const countries_g = g.append("g")
      .attr("id", "countries");

  // Add country labels
  countries_g.selectAll("text").data(data)
    .enter().append("text")
      .attr("y", d => countryScale(countryValue(d)))
      .text(d => countryValue(d));

  // Create continents group
  const continents_g = g.append("g")
      .attr("id", "continents")
      .attr("transform", "translate(725, 0)")

  // Get unique continents
  const uniqueContinents = d3.map(data, function(d){return d.Continent;}).keys()

  // Add continent labels
  continents_g.selectAll("text").data(uniqueContinents)
    .enter().append("text")
      .attr("x", 0)
      .attr("y", d => continentScale(d))
      .text(d => d);

  // Add country -> continent line
  g.selectAll("line").data(data)
    .enter().append("line")
      .attr("x1", 75)
      .attr("x2", innerWidth)
      .attr("y1", d => countryScale(countryValue(d)))
      .attr("y2", d => continentScale(continentValue(d)))

  // Add a title
  g.append("text")
    .attr("x", innerWidth / 2)
    .attr("y", -25)
    .attr("font-weight", "bold")
    .text(titleText);

};

d3.csv("data.csv").then(data => {
  populateChart(data);
});
