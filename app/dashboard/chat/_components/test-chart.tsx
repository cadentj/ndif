import React, { useEffect } from "react";
import * as d3 from "d3";

const Heatmap: React.FC = () => {
  useEffect(() => {
    const margin = { top: 80, right: 25, bottom: 30, left: 40 },
      width = 450 - margin.left - margin.right,
      height = 1000 - margin.top - margin.bottom;

    // Select the container and clear any existing SVG
    const container = d3.select("#heatmap-container");
    container.selectAll("*").remove();

    const svg = container
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    d3.csv("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/heatmap_data.csv").then((data) => {
      const myGroups = Array.from(new Set(data.map(d => d.group)));
      const myVars = Array.from(new Set(data.map(d => d.variable)));

      const x = d3.scaleBand()
        .range([0, width])
        .domain(myGroups)
        .padding(0.05);
      
      svg.append("g")
        .style("font-size", 15)
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x).tickSize(0))
        .select(".domain").remove();

      const y = d3.scaleBand()
        .range([height, 0])
        .domain(myVars)
        .padding(0.05);
      
      svg.append("g")
        .style("font-size", 15)
        .call(d3.axisLeft(y).tickSize(0))
        .select(".domain").remove();

      const myColor = d3.scaleSequential()
        .interpolator(d3.interpolateInferno)
        .domain([1, 100]);

      const tooltip = d3.select("#heatmap-container")
        .append("div")
        .style("opacity", 0)
        .attr("class", "tooltip")
        .style("background-color", "white")
        .style("border", "solid")
        .style("border-width", "2px")
        .style("border-radius", "5px")
        .style("padding", "5px");

      svg.selectAll()
        .data(data, function(d: any) { return d.group + ':' + d.variable; })
        .enter()
        .append("rect")
        .attr("x", function(d: any) { return x(d.group) || 0; })
        .attr("y", function(d: any) { return y(d.variable) || 0; })
        .attr("rx", 4)
        .attr("ry", 4)
        .attr("width", x.bandwidth())
        .attr("height", y.bandwidth())
        .style("fill", function(d: any) { return myColor(d.value); })
        .style("stroke-width", 4)
        .style("stroke", "none")
        .style("opacity", 0.8)
    });
  }, []);

  return <div id="heatmap-container"></div>;
};

export default Heatmap;
