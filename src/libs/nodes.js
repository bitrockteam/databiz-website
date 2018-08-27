import * as d3 from "d3";
import $ from 'jquery';

import dbz from './../assets/logos/DatabizLogo.svg';
import rb from './../assets/logos/RadicalbitLogo.svg';
import brock from './../assets/logos/BitrockLogo.svg';

// some colour variables
var tcBlack = "#ccc";
const parent = document.querySelector("#vis").parentNode;
const hero = document.querySelector("#hero");
// rest of vars
var w = parent.offsetWidth,
  h = hero.offsetHeight,
  maxNodeSize = 300,
  root;
var vis;
var force = d3.layout.force();

vis = d3.select("#vis")
        .append("svg").attr("width", w).attr("height", h);

// d3.json("databizgroup.json", function (json) {
  root = {
    "name": "Databiz group",
    "img": dbz,
    "description": "Databiz description Suspendisse potenti. Maecenas dignissim lacus mi, non tempus lorem commodo quis. ",
    "class": "databiz",
    "width": "500",
    "size": 500,
    "children": [
      { "name": "HR & Jobs", "size": 3000, "class": "databiz" },
      { "name": "Corporate Management", "size": 3000, "class": "databiz" },
      { "name": "CSR", "size": 3000, "class": "databiz" },
      {
        "name": "Bitrock",
        "img": brock,
        "description": "Nam id posuere lacus, eu rutrum enim. Phasellus auctor, diam sed condimentum ullamcorper ",
        "class": "bitrock",
        "width": "300",
        "size": 300,
        "children": [
          { "name": "Reliable innovation", "size": 3000, "class": "bitrock" },
          { "name": "Enterprise Solutions", "size": 3000, "class": "bitrock" },
          { "name": "DevOps", "size": 3000, "class": "bitrock" },
        ]
      },
      {
        "name": "RadicalBit",
        "img": rb,
        "description": "Aenean pellentesque commodo dolor eu viverra. Aliquam sed ante et quam posuere placerat.",
        "class": "radicalbit",
        "width": "300",
        "size": 300,
        "children": [
          { "name": "Fast Data", "size": 3000, "class": "radicalbit" },
          { "name": "Streaming Technologies", "size": 3000, "class": "radicalbit" },
          { "name": "Machine Learning A.I.", "size": 3000, "class": "radicalbit" }
        ]
      }
    ]
  };
  root.fixed = true;
  root.x = w / 2;
  root.y = h / 2;
  // Build the path
  var defs = vis.insert("svg:defs")
    .data(["end"]);
  defs.enter().append("svg:path")
    .attr("d", "M0,-5L10,0L0,5");
  update();
// });
function collapse(d) {
  if (d.children) {
    d._children = d.children;
    d._children.forEach(collapse);
    d.children = null;
  }
}
function collapseAll() {
  collapse(root);
  update();
}
update();
collapseAll();
function update() {
  var nodes = flatten(root),
    links = d3.layout.tree().links(nodes);
  // Restart the force layout.
  force
    .nodes(nodes)
    .links(links)
    .gravity(0.05)
    .charge(-2000)
    .linkDistance(h / 2)
    .friction(0.5)
    .linkStrength(function (l, i) { return .5; })
    .size([w, h])
    .on("tick", tick)
    .start();
  var path = vis.selectAll("path.link")
    .data(links, function (d) { return d.target.id; });
  path.enter().insert("svg:path")
    .attr("class", "link")
    .attr("marker-end", "url(#end)")
    .style("stroke", "#ccc");
  // Exit any old paths.
  path.exit().remove();
  // Update the nodes…
  var node = vis.selectAll("g.node")
    .data(nodes, function (d) { return d.id; });
  // Enter any new nodes.
  var nodeEnter = node.enter().append("svg:g")
    .attr("class", "node")
    .attr("transform", function (d) { return "translate(" + d.x + "," + d.y + ")"; })
    .on("click", click)
    .call(force.drag)
    .text(function (d) { return d.name; });
  // Append a circle
  nodeEnter.append("svg:circle")
    .attr("r", function (d) { return Math.sqrt(d.size) / 10 || 4.5; })
    .attr("class", function (d) { return d.class; })
  nodeEnter.append("text")
    .attr("dx", ".5em")
    .attr("dy", ".5em")
    .text(function (d) { return d.img ? '' : d.name; })
    .attr("class", function (d) { return d.class; })
  var images = nodeEnter.append("svg:image")
    .attr("xlink:href", function (d) { return d.img; })
    .attr("x", function (d) { return (- d.width / 2) || 0; })
    .attr("y", function (d) { return -50; })
    .attr("height", 100)
    .attr("width", function (d) { return d.width; });
  // var setEvents = images
  //   .on('click', function (d) {
  //     d3.select("h1").html(d.name);
  //     d3.select("h2").html(d.description);
  //     d3.select("h3").html("Take me to " + "<a href='" + d.link + "' >" + d.name + " web page ⇢" + "</a>");
  //   })
  // Exit any old nodes.
  node.exit().remove();
  // Re-select for update.
  path = vis.selectAll("path.link");
  node = vis.selectAll("g.node");
  function tick() {
    path.attr("d", function (d) {
      var dx = d.target.x - d.source.x,
        dy = d.target.y - d.source.y,
        dr = Math.sqrt(dx * dx + dy * dy);
      return "M" + d.source.x + ","
        + d.source.y
        + "A" + dr + ","
        + dr + " 0 0,1 "
        + d.target.x + ","
        + d.target.y;
    });
    node.attr("transform", function (d) { return "translate(" + d.x + "," + d.y + ")"; });
  }
}
// Toggle children on click.
function click(d) {
  if (d3.event.defaultPrevented) return; // ignore drag
  if (d.children) {
    d._children = d.children;
    d.children = null;
  } else {
    d.children = d._children;
    d._children = null;
  }
  update();
}

// Returns a list of all nodes under the root.
function flatten(root) {
  var nodes = [], i = 0;
  function recurse(node) {
    if (node.children) node.children.forEach(recurse);
    if (!node.id) node.id = ++i;
    nodes.push(node);
  }
  recurse(root);
  return nodes;
}

$.fn.triggerSVGEvent = function (eventName) {
  var event = document.createEvent('SVGEvents');
  event.initEvent(eventName, true, true);
  this[0].dispatchEvent(event);
  return $(this);
};

setTimeout(() => {
  $('#vis image').triggerSVGEvent('click');
}, 900)
 

window.d3 = d3;