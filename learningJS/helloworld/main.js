$(document).ready(() => {
  "use strict";
  paper.install(window);
  paper.setup(document.getElementById("mainCanvas"));

  const tool = new Tool();

  let c = Shape.Circle(200, 200, 80);
  c.fillColor = "black";
  const text = new PointText(200, 200);
  text.justification = "center";
  text.fillColor = "white";
  text.fontSize = 20;
  text.content = "hello world";
  tool.onMouseDown = event => {
    const c = Shape.Circle(event.point, 20);
    c.fillColor = "green";
  };

  paper.view.draw();

  console.log("main.js loaded");
});
