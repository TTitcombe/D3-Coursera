# D3 Examples
This repository contains examples of D3 visualisations created while following the 
[NYU D3 visualisation coursera course](https://www.coursera.org/lecture/information-visualization-programming-d3js/introduction-to-d3-Fiduu)

## How to use
Simply clone the repository, navigate to one of the folders and open any of the `index.html` files in a browser of your choice.
In a folder with a `.csv` file,
you will need to start a server.
One simple way to do this is using python:
Navigate to the folder in the command prompt / terminal
and type `python -m http.server`.
This should provide a local host link;
open it.

## D3 Coursera examples
Small D3 examples adapted from the Coursera course.
These examples get progressively more complex.
* [`selections`](./01-selections)
  - Simply demonstrations of selections and using `text` and `html` to alter the selection
* [`adding/removing elements`](./02-adding-elements)
  - Adds and removes elements
* [`changing properties`](./03-changing-properties)
  - Use `attr` and `style` to change an element's properties
* [`loading data`](./04-loading-data)
  - Load and read CSV data
* [`simple svg`](./05_svg)
  - No D3, just simple SVG manipulation

## Non Coursera examples
D3 examples not inspired by the Coursera course
* [`simple bar chart`](./simple_barchart)
  - Inspired by Mike Bostock's ["Let's make a bar chart" tutorial](https://observablehq.com/@d3/lets-make-a-bar-chart)
