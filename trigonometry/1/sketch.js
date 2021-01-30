// M_2_1_01
//
// Generative Gestaltung – Creative Coding im Web
// ISBN: 978-3-87439-902-9, First Edition, Hermann Schmidt, Mainz, 2018
// Benedikt Groß, Hartmut Bohnacker, Julia Laub, Claudius Lazzeroni
// with contributions by Joey Lee and Niels Poldervaart
// Copyright 2018

/**
 * draws an oscillator
 *
 * KEYS
 * a                 : toggle oscillation animation
 * 1/2               : frequency -/+
 * arrow left/right  : phi -/+
 * s                 : save png
 */

'use strict';

var sketch = function(p) {

  var pointCount;
  var freq = 1;
  var phi = 0;

  var angle;
  var y;

  var dodrawAnimation = true;

  p.setup = function() {
    p.createCanvas(innerWidth,innerHeight);
  };

  p.draw = function() {
    p.background(0);
    p.stroke(255);
    p.noFill();
    p.strokeWeight(2);

    if (dodrawAnimation) {
      pointCount = p.width - 250;
      p.translate(250, p.height / 2);
    } else {
      pointCount = p.width;
      p.translate(0, p.height / 2);
    }

    // draw oscillator curve
    p.beginShape();
    for (var i = 0; i <= pointCount; i++) {
      angle = p.map(i,0,pointCount,0,p.TAU);
      y = p.sin(angle * freq + p.radians(phi));
      y *= 100;
      p.vertex(i,y);
    }
    p.endShape();

    if (dodrawAnimation) {
      drawAnimation();
    }

  };

  function drawAnimation() {
    // draw circle, dots and lines
    var t = (p.frameCount / pointCount) % 1;
    angle = p.map(t,0,1,0,p.TAU);
    var x = p.cos(angle * freq + p.radians(phi));
    x *= 100 - 125;
    y = p.sin(angle * freq + p.radians(phi));
    y = y * 100;

    // circle
    p.strokeWeight(1);
    p.ellipse(-125, 0, 200, 200);
    // lines
    p.stroke(125, 128);
    p.line(0, -100, 0, 100);
    p.line(0, 0, pointCount, 0);
    p.line(-225, 0, -25, 0);
    p.line(-125, -100, -125, 100);
    p.line(x, y, -125, 0);

    p.stroke(250, 0, 164);
    p.strokeWeight(2);
    p.line(t * pointCount, y, t * pointCount, 0);
    p.line(x, y, x, 0);

    var phiX = p.cos(p.radians(phi)) * 100 - 125;
    var phiY = p.sin(p.radians(phi)) * 100;

    // phi line
    p.strokeWeight(1);
    p.stroke(100, 128);
    p.line(-125, 0, phiX, phiY);

    // phi dots
    p.fill(100);
    p.stroke(255);
    p.strokeWeight(2);
    p.ellipse(0, phiY, 8, 8);
    p.ellipse(phiX, phiY, 8, 8);

    // dot on curve
    p.ellipse(t * pointCount, y, 10, 10);

    // dot on circle
    p.ellipse(x, y, 10, 10);
  }

  p.keyPressed = function() {
    if (p.key == 's' || p.key == 'S') p.saveCanvas(gd.timestamp(), 'png');

    if (p.key == 'a' || p.key == 'A') dodrawAnimation = !dodrawAnimation;

    if (p.key == '1') freq--;
    if (p.key == '2') freq++;
    freq = p.max(freq,1);

    if (p.keyCode == p.LEFT_ARROW) phi -= 15;
    if (p.keyCode == p.RIGHT_ARROW) phi += 15;

    console.log('freq: ' + freq + ', phi: ' + phi);
  };

};

var myp5 = new p5(sketch);
