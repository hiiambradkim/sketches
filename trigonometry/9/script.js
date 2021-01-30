console.clear();

// cache output canvas
const output_c = document.getElementById('output');
const output_ctx = output_c.getContext('2d');

// create buffer canvas
const c = document.createElement('canvas');
const ctx = c.getContext('2d');
c.width = output_c.width;
c.height = output_c.height;

// Global time vars - see update()
let _t, _bt;

// Position and sizes used in rendering
const BASE_X = 0;
const graphCenterY = 160;
const graphLength = 1000;
const graphYRange = 63;
const graphCellSize = 1;
const xrange = 20;

// Tweakable params used in calculations
// (exposed via the GUI)
let PARAMS = {
  speedFactor: 0.001,
  wavelength: 0.1,
  sampleX: 20 };


// Colors used in the render
const COLORS = {
  param: 'limegreen',
  graph: '#666',
  axis: '#333',
  sampleX: 'red',
  samplePoint: 'cyan',
  xrange: '#001',
  inst: 'yellow' };


// FIXME: make these utility functions pure

// Update the base time based on the current system time
function update() {
  _t = Date.now();
  _bt = _t * PARAMS.speedFactor;
}

// Shorthand function for rendering Canvas text
function _text(txt, x, y, col) {
  if (col === undefined || col === null) col = 'white';
  ctx.fillStyle = col;
  ctx.fillText(txt, x, y);
}

// Return sine output (-1 ... 1) based on
// current base time and input value
function _calcSineAtX(x) {
  return Math.sin(_bt + x * PARAMS.wavelength);
}

// Transform a (-1 ... 1) value into a (0 ... 1) value
function _normalize(s) {
  return 0.5 + s * 0.5;
}

// Return a value between 0 and 255 based on 
// an input value from (0 ... 1)
function _getTint(vn) {
  return Math.round(vn * 255);
}

// Return a grayscale RGB string based on a 
// given value (0 ... 255)
function _getRGB(gs) {
  return 'rgb(' + gs + ',' + gs + ',' + gs + ')';
}

// Combine all the above util functions together;
// return a RGB string based on an input value
// TODO: would be nice if these were chainable
function xToRGB(x) {
  return _getRGB(_getTint(_normalize(_calcSineAtX(x))));
}

// Draw the scene. Scene is built up on an offscreen,
// in-memory canvas and then rendered to the in-page one
// for performance reasons.
function render() {
  // Clear everything for this frame
  ctx.clearRect(0, 0, c.width, c.height);

  // Translate all canvas values to make things a
  // bit more nicely positioned
  const GUTTER = 5;
  ctx.translate(GUTTER, GUTTER);

  // TODO: replace all these Y magic numbers with
  // something more robust

  // Render incoming time
  _text('Date.now()  = ' + _t, BASE_X, 10);
  _text('speedFactor = ' + PARAMS.speedFactor.toFixed(3), BASE_X, 30, COLORS.param);
  _text('_bt         = ' + _bt.toFixed(2), BASE_X, 50);

  // Render graph...
  _text('wavelength = ' + PARAMS.wavelength.toFixed(3), BASE_X, 100, COLORS.param);
  _text('Math.sin(_bt + (x * wavelength)) :', BASE_X, 120);

// The Display Unit //

  // Draw x range background
  ctx.fillStyle = COLORS.xrange;
  ctx.fillRect(BASE_X + PARAMS.sampleX * graphCellSize,
  graphCenterY - graphYRange,
  graphCellSize * xrange,
  graphYRange * 2);

  // Draw horizontal 0 axis
  ctx.fillStyle = COLORS.axis;
  ctx.fillRect(BASE_X, graphCenterY, graphLength * graphCellSize, graphCellSize);

  // Draw x sample line
  ctx.fillStyle = COLORS.sampleX;
  ctx.fillRect(BASE_X + PARAMS.sampleX * graphCellSize,
  graphCenterY - graphYRange,
  graphCellSize,
  graphYRange * 2);

  // Render sine wave
  for (let x = 0; x < graphLength; x++) {
    ctx.fillStyle = x === PARAMS.sampleX ? COLORS.samplePoint : COLORS.graph;
    const wv = _calcSineAtX(x) * graphYRange;
    const y = graphCenterY + wv;
    ctx.fillRect(BASE_X + x * graphCellSize, y, graphCellSize, graphCellSize);
  }

// The Display Unit //

  // Render axis labels
  const tx = BASE_X + graphLength * graphCellSize + 5;
  _text('-1', tx, 140, COLORS.axis);
  _text(' 0', tx, 155, COLORS.axis);
  _text('+1', tx, 170, COLORS.axis);

  // Render sample output, including normalization
  const v = _calcSineAtX(PARAMS.sampleX);
  const vn = _normalize(v);  

  // Map to shade and render color block
  const gs = _getTint(vn);
  _text('gs = vn * 255   = ' + gs, BASE_X, 280);
  _text('rgb(gs, gs, gs) = ', BASE_X, 300);
  ctx.fillStyle = _getRGB(gs);
  ctx.fillRect(BASE_X + 130, 302, 50, 12);
  ctx.strokeRect(BASE_X + 130, 302, 50, 12);

  // Render shade range
  _text('x = sampleX ... sampleX + ' + xrange, BASE_X, 340);
  let cellSize = 10;
  for (let x = 0; x < xrange; x++) {
    ctx.fillStyle = xToRGB(PARAMS.sampleX + x);
    ctx.fillRect(BASE_X + cellSize * x, 360, cellSize, cellSize);
  }
  ctx.strokeRect(BASE_X, 360, cellSize * xrange, cellSize);
  // Reset translations for the next frame
  ctx.translate(-GUTTER, -GUTTER);

  // Blit the offscreen canvas to the main one
  output_ctx.clearRect(0, 0, c.width, c.height);
  output_ctx.drawImage(c, 0, 0);
}

// Animation loop
function frame() {
  requestAnimationFrame(frame);
  update();
  render();
}

// Set non-changing canvas properties
ctx.font = '12px monospace';
ctx.textBaseline = 'top';
ctx.strokeStyle = 'white';
ctx.lineWidth = 2;

// Set up GUI
const gui = new dat.GUI();
gui.add(PARAMS, 'speedFactor').min(0).max(0.03).step(0.001);
gui.add(PARAMS, 'wavelength').min(0).max(1).step(0.05);
gui.add(PARAMS, 'sampleX').min(0).max(graphLength).step(1);
gui.close();

// Kick it off
frame();