/////////////////////////////////////////////////
// INDEX
/////////////////////////////////////////////////

/**
 * IDEAS
 * Use Canvas Path2D() to store the curves
 * but that would mean creating many instances,
 * clearing, redrawing in every frame
 * which we can't really afford
 */

// Layout stuffs
const SPACING = 25;
const RADIUS = 50;
const NODERADIUS = 4;
// Circle stuffs 
let COUNT = 4;
let BASESPEED = 0.02;
// const RELSPEED = 1.5
// Canvasw
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d', { alpha: false });

let NEXTFRAME;
let CIRCLES;

function init() {
  // A few constants derived from other constants
  window.WIDTH = 2 * RADIUS * (COUNT + 1) + (COUNT + 2) * SPACING;
  window.HEIGHT = 2 * RADIUS * (COUNT + 1) + (COUNT + 2) * SPACING;
  // One unit is the place that a circle + spacing around takes
  window.UNIT = SPACING + 2 * RADIUS;
  // Canvas clearing values that don't need to be constantly reevaluated
  window.CLRX = SPACING + 2 * RADIUS;
  window.CLRY = 0.5 * SPACING;
  window.CLRH = SPACING + 2 * RADIUS;
  window.CLRW = WIDTH - CLRX;

  canvas.width = WIDTH;
  canvas.height = HEIGHT;

  cancelAnimationFrame(NEXTFRAME);
  NEXTFRAME = requestAnimationFrame(draw);

  CIRCLES = new Array(COUNT).fill().map((x, i) => {
    let rgb = hslToRgb((i + 1) / COUNT, 1, 0.8);
    rgb = rgb.map(x => Math.floor(x));

    return {
      x: SPACING * (i + 2) + RADIUS * (2 * i + 3),
      y: SPACING + RADIUS,
      speed: BASESPEED * (i + 1),
      angle: 0,
      color: '#' + rgb.map(x => x.toString(16)).join(''),
      rgb: rgb,
      // Storing the sin and cos because these operations are expensive
      projx: RADIUS * Math.cos(0),
      projy: RADIUS * Math.sin(0) };

  });
}


init();


/**
         * https://gist.github.com/mjackson/5311256
         * Converts an HSL color value to RGB. Conversion formula
         * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
         * Assumes h, s, and l are contained in the set [0, 1] and
         * returns r, g, and b in the set [0, 255].
         *
         * @param   Number  h       The hue
         * @param   Number  s       The saturation
         * @param   Number  l       The lightness
         * @return  Array           The RGB representation
         */
function hslToRgb(h, s, l) {
  var r, g, b;

  if (s == 0) {
    r = g = b = l; // achromatic
  } else {
    function hue2rgb(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    }

    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;

    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [r * 255, g * 255, b * 255];
}

/////////////////////////////////////////////////
// DRAWING
/////////////////////////////////////////////////

function draw() {
  // Clear both horizontal and vertical circles
  ctx.clearRect(CLRX, CLRY, CLRW, CLRH);
  ctx.clearRect(CLRY, CLRX, CLRH, CLRW);

  // Update
  updateCircles();

  // Drawing
  drawCircles();
  drawNodes();
  drawPlot();

  NEXTFRAME = requestAnimationFrame(draw);
}


function updateCircles() {
  let c;

  for (let i = 0; i < COUNT; ++i) {
    c = CIRCLES[i];
    c.angle += c.speed;
    c.projx = RADIUS * Math.cos(c.angle);
    c.projy = RADIUS * Math.sin(c.angle);
  }
}


function drawCircles() {
  let c;

  for (let i = 0; i < COUNT; ++i) {
    c = CIRCLES[i];
    ctx.strokeStyle = c.color;
    ctx.lineWidth = 2;

    // Horizontally
    ctx.beginPath();
    ctx.arc(c.x, c.y, RADIUS, 0, 2 * Math.PI);
    ctx.stroke();
    // Vertically
    ctx.beginPath();
    ctx.arc(c.y, c.x, RADIUS, 0, 2 * Math.PI);
    ctx.stroke();
  }
}


function drawNodes() {
  let c;

  for (let i = 0; i < COUNT; ++i) {
    c = CIRCLES[i];
    ctx.fillStyle = c.color;

    // Horizontal nodes
    ctx.beginPath();
    ctx.arc(c.x + c.projx, c.y + c.projy, NODERADIUS, 0, 2 * Math.PI);
    ctx.fill();
    // Vertical nodes
    ctx.beginPath();
    ctx.arc(c.y + c.projx, c.x + c.projy, NODERADIUS, 0, 2 * Math.PI);
    ctx.fill();
  }
}


function drawPlot() {
  let c1, c2, rgb;

  for (let i = 0; i < COUNT; ++i) {
    c1 = CIRCLES[i];

    for (let j = 0; j < COUNT; ++j) {
      c2 = CIRCLES[j];

      // Take the average of the colors
      let rgb = c1.rgb.map((x, i) => Math.floor((c1.rgb[i] + c2.rgb[i]) / 2).toString(16));
      ctx.fillStyle = '#' + rgb.join('');

      ctx.beginPath();
      ctx.arc(SPACING + RADIUS + UNIT * (i + 1) + c1.projx, SPACING + RADIUS + UNIT * (j + 1) + c2.projy, 1, 0, 2 * Math.PI);
      ctx.fill();
    }

  }
}

/////////////////////////////////////////////////
// CONTROLS
/////////////////////////////////////////////////

/*
Note: Every form is for ONE option
the form ID should match the initalizer CONTROLS.init.{name}
and the oninput callback CONTROLS.callback.{name}
*/

function CONTROLS() {}

CONTROLS.DOM = {
  // All the container form elements
  'forms': {
    'count': document.getElementById('count'),
    'speed': document.getElementById('speed'),
    // 'ratio': document.getElementById('ratio'),
    'clear': document.getElementById('clear'),
    'save': document.getElementById('save') },

  // The child values, for reference
  'children': {} };



//
// Initalization
//

CONTROLS.init = function () {
  /*
                             Note: Looping through all the individual initializers to call them all
                             Also add the callbacks and disable form submission
                             */

  let forms = Object.keys(this.init);

  for (let i = 0; i < forms.length; i++) {
    this.init[forms[i]].call(this);
    this.DOM.forms[forms[i]].oninput = this.callback[forms[i]].bind(this);
    this.DOM.forms[forms[i]].onclick = this.callback[forms[i]].bind(this);
    // onchange is for the checkboxes on mobile touch devices
    this.DOM.forms[forms[i]].onchange = this.callback[forms[i]].bind(this);
    this.DOM.forms[forms[i]].onsubmit = function () {return false;};
  }
};

CONTROLS.init.count = function () {
  let input = document.createElement('input');
  input.type = 'range';
  input.id = 'count-input';
  input.min = 1;
  input.max = 20;
  input.step = 1;
  input.value = COUNT;

  let label = document.createElement('label');
  label.innerHTML = COUNT;
  label.htmlFor = 'count-input';

  this.DOM.children.count = input;
  this.DOM.children.countlabel = label;
  this.DOM.forms.count.appendChild(input);
  this.DOM.forms.count.appendChild(label);
};

CONTROLS.init.speed = function () {
  let input = document.createElement('input');
  input.type = 'range';
  input.id = 'speed-input';
  input.min = 0;
  input.max = 0.1;
  input.step = (input.max - input.min) / 100;
  input.value = BASESPEED;

  let label = document.createElement('label');
  label.innerHTML = BASESPEED;
  label.htmlFor = 'speed-input';

  this.DOM.children.speed = input;
  this.DOM.children.speedlabel = label;
  this.DOM.forms.speed.appendChild(input);
  this.DOM.forms.speed.appendChild(label);
};

// CONTROLS.init.ratio = function() {
// 	let input = document.createElement('input')
// 	input.type = 'range'
// 	input.id = 'ratio-input'
// 	input.min = 0
// 	input.max = 2
// 	input.step = (input.max - input.min)/100
// 	input.value = RELSPEED

// 	let label = document.createElement('label')
// 	label.innerHTML = RELSPEED
// 	label.htmlFor = 'ratio-input'

// 	this.DOM.children.ratio = input
// 	this.DOM.children.ratiolabel = label
// 	this.DOM.forms.ratio.appendChild(input)
// 	this.DOM.forms.ratio.appendChild(label)
// }

CONTROLS.init.clear = function () {
  let input = document.createElement('input');
  input.type = 'button';
  input.value = 'Clear';

  this.DOM.children.clear = input;
  this.DOM.forms.clear.appendChild(input);
};

CONTROLS.init.save = function () {
  let input = document.createElement('input');
  input.type = 'button';
  input.value = 'Save';

  this.DOM.children.save = input;
  this.DOM.forms.save.appendChild(input);
};

//
// Callbacks
//

CONTROLS.callback = {};

CONTROLS.callback.count = function () {
  let value = parseInt(this.DOM.children.count.value);
  console.log(value);
  COUNT = value;
  this.DOM.children.countlabel.innerHTML = value;
  init();
};

CONTROLS.callback.speed = function () {
  let value = this.DOM.children.speed.value;
  BASESPEED = value;
  this.DOM.children.speedlabel.innerHTML = value;
  init();
};

// CONTROLS.callback.ratio = function() {
// 	let value = this.DOM.children.ratio.value
// 	RELSPEED = value
// 	this.DOM.children.ratiolabel.innerHTML = value
// 	init()
// }

CONTROLS.callback.clear = function () {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
};

CONTROLS.callback.save = function () {
  // Create a canvas with black background
  // and draw plot on it
  let c = document.createElement('canvas');
  let ctx = c.getContext('2d');
  c.width = WIDTH;
  c.height = HEIGHT;
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
  ctx.drawImage(canvas, 0, 0);

  // Generate image and download
  let link = document.createElement('a');
  link.download = `lissajous.jpg`;
  link.href = c.toDataURL('image/png');
  document.body.appendChild(link);
  link.setAttribute('type', 'hidden');
  link.click();
  document.body.removeChild(link);
};

//
// Start everything
//

CONTROLS.init();