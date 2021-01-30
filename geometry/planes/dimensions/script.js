//
//
// MATRIX.JS
//
//

/*
Note:
According to https://jsperf.com/js-nested-vs-flat-array-retrieve-values/
It is faster to use nested 2D arrays than flattened 2D arrays, even with TypedArrays
So I'll be using [Float32Array(n), ..., Float32Array(n)] rather than Float32Array(n*n)
*/

/*
   This library is NOT robust, at all
   I'm assuming the user did not make any mistakes inputting the array
   Normally each layer should have the same length
   That way I can read the matrix dimensions from m.length and m[0].length
   */

/*
      TODO:
      - Make a vector class that ties in neatly with the matrix class
      */

//
// High-perf static matrix library
//

function Matrix(input) {return Matrix.from(input);}


Matrix.add = function (m1, m2) {
  const m1height = m1.length,m1width = m1[0].length;
  const m2height = m2.length,m2width = m2[0].length;

  if (m1width !== m2width || m1height !== m2height) {
    throw 'Incompatible matrices';
  }

  let result = Matrix.new(m1height, m1width);
  let y, x;

  for (y = 0; y < m1height; y++) {
    for (x = 0; x < m1width; x++) {
      result[y][x] = m1[y][x] + m2[y][x];
    }
  }

  return result;
};


Matrix.subtract = function (m1, m2) {
  const m1height = m1.length,m1width = m1[0].length;
  const m2height = m2.length,m2width = m2[0].length;

  if (m1width !== m2width || m1height !== m2height) {
    throw 'Incompatible matrices';
  }

  let result = Matrix.new(m1height, m1width);
  let y, x;

  for (y = 0; y < m1height; y++) {
    for (x = 0; x < m1width; x++) {
      result[y][x] = m1[y][x] - m2[y][x];
    }
  }

  return result;
};


Matrix.dot = function (m1, m2) {
  const m1height = m1.length,m1width = m1[0].length;
  const m2height = m2.length,m2width = m2[0].length;

  if (m1width !== m2height) {
    throw 'Incompatible matrices';
  }

  let result = Matrix.new(m1height, m2width);
  let size = m1width;
  let y, x, n, sum;

  for (y = 0; y < m1height; y++) {
    for (x = 0; x < m2width; x++) {
      sum = 0;
      for (n = 0; n < size; n++) {
        sum += m1[y][n] * m2[n][x];
      }
      result[y][x] = sum;
    }
  }

  return result;
};


Matrix.scale = function (m, factor) {
  const mheight = m.length,mwidth = m[0].length;

  let result = Matrix.new(mheight, mwidth);
  let y, x;

  for (y = 0; y < mheight; y++) {
    for (x = 0; x < mwidth; x++) {
      result[y][x] = m[y][x] * factor;
    }
  }

  return result;
};


Matrix.transpose = function (m) {
  const height = m.length,width = m[0].length;

  let result = Matrix.new(width, height);
  let y, x;

  for (y = 0; y < width; y++) {
    for (x = 0; x < height; x++) {
      result[y][x] = m[x][y];
    }
  }

  return result;
};


Matrix.from = function (input) {
  const height = input.length;
  const width = input[0].length;

  let matrix = new Array(height);
  let y, x;

  for (y = 0; y < height; y++) {
    matrix[y] = Float32Array.from(input[y]);
  }

  // Return the result
  return matrix;
};


Matrix.new = function (height, width) {
  let matrix = new Array(height);
  let y;

  for (y = 0; y < height; y++) {
    matrix[y] = new Float32Array(width);
  }

  return matrix;
};


Matrix.identity = function (dimension) {
  let matrix = new Array(dimension);
  let y;

  for (y = 0; y < dimension; y++) {
    matrix[y] = new Float32Array(dimension);
    matrix[y][y] = 1;
  }

  return matrix;
};

//
//
// VERTEX.JS
//
//

/*
Note:
Generating all the vertices is similar to counting up in binary
By incrementing the binary number by 1 each time until 2^{dimensions},
we are sure to hit every possible combinations of 1's and 0's in {dimensions} places
Example:
0 --> 00 --> -1, -1, -1
1 --> 01 --> -1, -1, 1
2 --> 10 --> -1, 1, -1
3 --> 11 --> -1, 1, 1
*/

function getVertices(dimension) {

  const n = Math.pow(2, dimension);
  let vertices = new Array(n);
  let vertex;

  for (let i = 0; i < Math.pow(2, dimension); i++) {
    // Generate binary number
    vertex = i.toString(2);

    // Add leading 0's
    /*
    Note:
    In base 2, the number of digits we need to encode the number is log2(n)
    Here, we have log2(2^{dimensions}) = {dimensions}
    */
    while (vertex.length < dimension) {
      vertex = `0${vertex}`;
    }

    // Generate the vertex by splitting then substituting 0 --> -1, 1 --> 1
    // I could use array.forEach, but that's not supported in all browsers...
    vertex = vertex.split('');
    for (let j = 0; j < vertex.length; j++) {
      vertex[j] = parseInt(vertex[j]) === 0 ? -1 : 1;
    }

    // Add the vertex to the list of vertices
    vertices[i] = vertex;
  }

  // Convert to matrix
  return Matrix.from(vertices);
}

//
//
// PROJECTION.JS
//
//

function getProjectionMatrix(dimension, perspective) {
  /*
                                                      Return a simple projection matrix that depends on p (perspective)
                                                      [p, 0, ..., 0, 0]
                                                      [0, p, ..., 0, 0]
                                                      [      ...      ]
                                                      [0, 0, ..., p, 0]
                                                      [0, 0, ..., 0, 0]
                                                      But we are excluding the last line because we want (x, y, z) --> (x, y) and not (x, y, 0)
                                                      If the dimension is 2, we don't need to project it to dimension 1 --> identity matix
                                                      If the dimension is 1, we need to project into 2 dimensions (add a dimension) --> [[1], [0]] matrix
                                                      */

  /*
                                                         I won't need 1D projections because in draw.js projections only happen
                                                         for dimensions strictly higher than 2
                                                         But for reference purposes, here it is 
                                                         if (dimensions === 1) {
                                                         	matrix = Matrix.from([[1], [0]])
                                                         }
                                                         */

  let matrix;

  if (dimension === 2) {
    matrix = Matrix.identity(2);
  } else {
    matrix = Matrix.new(dimension - 1, dimension);

    for (let i = 0; i < dimension - 1; i++) {
      matrix[i][i] = perspective;
    }
  }

  return matrix;
}

//
//
// ROTATION.JS
//
//

/*
Note: 
Rotation is the rotation of a plane, defined by 2 orthogonal vectors
So when I say XY rotation, it's the plane defined by the X and Y axes
rotating around the other axes (Z for 3D, ZW for 4D)
https://www.fourthdimensionapp.com/4dmanip/ has a great explanation on rotation
*/

function getRotationMatrix(axis1, axis2, dimension, angle) {
  /*
                                                            Note:
                                                            Looking at rotations matrices for 2D, 3D and 4D, we can extrapolate a general formula for them
                                                            Each axis has a vertical matrix index corresponding to it
                                                            	- X --> 0 (1D) ; X_0 --> 0 (1D)
                                                            	- Y --> 1 (2D) ; X_1 --> 1 (2D)
                                                            	- Z --> 2 (3D) ; X_2 --> 2 (3D)
                                                            	- W --> 3 (4D) ; X_3 --> 3 (4D)
                                                            	- ...
                                                            	- X_{n} --> {n} ({n+1}D)
                                                            Algorithm:
                                                            	- Generate an identity matrix with dimension {dimension}
                                                            	- Replace the following coordinates with the following values
                                                            		- [axis1, axis1] --> cos(a)
                                                            		- [axis1, axis2] --> -sin(a)
                                                            		- [axis2, axis1] --> sin(a)
                                                            		- [axis2, axis2] --> cos(a)
                                                            */

  let matrix = Matrix.identity(dimension);

  matrix[axis1][axis1] = Math.cos(angle);
  matrix[axis1][axis2] = -Math.sin(angle);
  matrix[axis2][axis1] = Math.sin(angle);
  matrix[axis2][axis2] = Math.cos(angle);

  return matrix;
}


function getAxisName(index) {
  /*
                             Note:
                             Take the index of the axis and get the associated letter
                             Unicode caps alphabet start at 65, 'X' char is at index 65+23 = 88
                             'W' (axis index 3) is at 65+25-3 = 90-3 = 87
                             So we have X, Y, Z as 0, 1, 2 ; then we do the alphabet in reverse from 'W'
                             I'm not really caring about dimensions larger than 25 because
                             	- Such a dimension is very laggy
                             	- String.fromCharCode() doesn't throw an error for negative/large values
                             	- They will just have weird axis names
                             */

  if (index < 3) {
    return String.fromCharCode(index + 88);
  }

  return String.fromCharCode(90 - index);
}


function getListOfRotations(dimension) {
  /*
                                        Note:
                                        Return a list of all the planes you can rotate for a given dimension
                                        0D --> []
                                        1D --> []
                                        2D --> [0 1] --> ['XY']
                                        3D --> [0 1, 0 2, 1 2] --> ['XY', 'XZ', 'YZ']
                                        4D --> [0 1, 0 2, 0 3, 1 2, 1 3, 2 3] --> ['XY', 'XZ', 'XW', 'YZ', 'YW', 'ZW']
                                        Pattern:
                                        	- The first digit goes from 0 to dimension-2
                                        	- The last digit goes from the first digit + 1 to dimension-1
                                        Combine these two in a loop and BAM!
                                        */

  let list = [];
  let first, last;

  for (first = 0; first < dimension - 1; first++) {
    for (last = first + 1; last < dimension; last++) {
      list.push([first, last]);
    }
  }

  return list;
}

/*
  Fun fact:
  The number of rotations per dimension is given by (n-1)*n/2
  Observation:
  	- 0D has no rotation possible
  	  (because to rotate you need at least 2 orthogonal vectors (2 axes) that define a plane)
  	- 1D gets the number of rotations for 0D (so 0) and still no rotation possible,
  	  so a total of 0 rotations
  	- 2D gets the number of rotations for 1D (0) + 1 (2 axes = 1 plane)
  	- 3D gets 1 + 2 = 3
  	- 4D gets 3 + 3 = 6
  	- 5D gets 6 + 4 = 10
  	- 6D gets 10 + 5 = 15
  	- Hopefully you see some kind of pattern here
  Generalization:
  	- Every higher dimension {n} gets
  		- The rotation planes from the previous dimension {n-1} (obviously)
  	  	- The number of axes from the previous dimension (so {n-1} axes)
  	  	  that each can be combined with the new axis to create {n} rotation planes
  	- That translates to a well-know progression:
  		- 0, 0, 1, 3, 6, 10, 15, ...
  		- u(n) = u(n-1) + n - 1
  		- These are the triangular numbers, of general formula
  			- n(n+1)/2
  			- 2 choose n+1 (binomial coefficients)
  		- We only shift everything over by 1 to correspond with the dimension number
  		- More on them: https://en.wikipedia.org/wiki/Triangular_number
  Proof (copied from http://www.maths.surrey.ac.uk/hosted-sites/R.Knott/runsums/triNbProof.html):
  	T(n) + T(n) = 1 + 2 + 3 + ... + (n-1) + n
  	            + n + (n-1) + ... + 3 + 2 + 1
  	            = (1+n) + (2+[n-1]) + (3+[n-2]) + ... + ([n-1]+2) + (n+1)
  	            = (n+1) + (n+1) + ... + (n+1) + (n+1)
  	            = n*(n+1)
  	T(n) = (T(n) + T(n)) / 2 = n*(n+1)/2
  */

//
//
// DRAW.JS
//
//

function draw() {
  // Clear the screen
  ctx.fillStyle = '#fff';
  ctx.fillRect(-WIDTH / 2, -HEIGHT / 2, WIDTH, HEIGHT);

  // Matrices
  let point, rotated, projected;
  // Scalars and indices
  let perspective, rotation;
  let points = new Array(FIGURE.length);

  // Rotating, projecting the vertices, and storing them
  for (let i = 0; i < FIGURE.length; i++) {
    point = Matrix.from([FIGURE[i]]);
    point = Matrix.transpose(point);

    /*
                                     Note: Here I'm combining the rotation matrices by dotting them
                                     Starting out with the identity matrix, this has the effect of leaving the point intact
                                     if there are no rotations
                                     */

    rotated = Matrix.identity(DIMENSION);
    for (let j = 0; j < ROTATIONS.length; j++) {
      rotation = ROTATIONS[j];
      rotated = Matrix.dot(rotated, getRotationMatrix(rotation[0], rotation[1], DIMENSION, ANGLE));
    }
    rotated = Matrix.dot(rotated, point);

    /*
                                          Note: for every dimension strictly higher than 2
                                          we are projecting {rotated} from dimension n to n-1, and repeat until we hit 2D 
                                          */

    projected = Matrix.from(rotated);
    for (let j = DIMENSION; j > 2; j--) {
      if (ISOMETRIC) {
        perspective = 1;
      } else {
        perspective = getPerspectiveScalar(projected[j - 1][0]);
      }
      projected = Matrix.dot(getProjectionMatrix(j, perspective), projected);
    }
    projected = Matrix.scale(projected, SCALING);

    points[i] = [projected[0][0], projected[1][0]];
  }

  drawVertices(points);
  connectVertices(points);

  ANGLE += SPEED;

  NEXTFRAME = requestAnimationFrame(draw);
}


function drawVertices(points) {
  // Pretty self-explanatory
  for (let i = 0; i < points.length; i++) {
    ctx.beginPath();
    ctx.arc(points[i][0], points[i][1], 3, 0, 2 * Math.PI);
    ctx.fillStyle = '#000';
    ctx.fill();
  }
}


function connectVertices(points) {
  /*
                                  Here is the pattern to connect the vertices correctly
                                  This works for every dimension starting from 1D (2 vertices, connect them together)
                                  	- every 2 points (i%2 === 0): for the next 1 point: connect i and i+1
                                  	- every 4 points (i%4 === 0): for the next 2 points: connect i and i+2
                                  	- every 8 points (i%8 === 0): for the next 4 points: connect i and i+4
                                  	- every 16 points (i%16 === 0): for the next 8 points: connect i and i+8
                                  	- ...
                                  	- every 2^{dimensions}: for the next 2^{dimensions+!}: connect i and i+2^{dimensions-1}
                                  I'm calling the every ... points the step, and the number points each step the size  
                                  */

  ctx.beginPath();

  for (let dimension = 1; dimension < DIMENSION + 1; dimension++) {
    let step = Math.pow(2, dimension);
    let size = Math.pow(2, dimension - 1);
    for (let i = 0; i < points.length; i += step) {
      for (let j = 0; j < size; j++) {
        connect(i + j, i + j + size);
      }
    }
  }

  function connect(i1, i2) {
    ctx.moveTo(points[i1][0], points[i1][1]);
    ctx.lineTo(points[i2][0], points[i2][1]);
  }

  ctx.strokeStyle = '#000';
  ctx.stroke();
}


function getPerspectiveScalar(scalar) {
  return 1 / (DISTANCE + scalar);
}

//
//
// INDEX.JS
//
//

console.clear();

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// User-set options
let DISTANCE = 3;
let DIMENSION = 4;
let SCALING = 500;
let SPEED = 0.01;
let ISOMETRIC = false;
let ROTATIONS = [[0, 3], [1, 2]];

// Settings and constants
const HEIGHT = 400,WIDTH = 400;
let FIGURE;
let NEXTFRAME;
let ANGLE;
// I needed a list of all the rotation planes (2 axes) indices
// to avoid generating it every time the user changed the rotation
let ALLROTATIONS;

// Figure stats, the code doesn't need it, but it's nice to have
const NAMES = ['Square', 'Cube', 'Tesseract', 'Penteract', 'Hexeract', 'Hepteract', 'Octeract', 'Enneract', 'Dekeract'];
let VERTICES, EDGES;

// The init function assumes the 
function init() {
  // Stop animation if there is one
  cancelAnimationFrame(NEXTFRAME);

  // Set canvas dimensions
  canvas.width = WIDTH;
  canvas.height = HEIGHT;

  // Center the canvas
  ctx.setTransform(1, 0, 0, 1, WIDTH / 2, HEIGHT / 2);

  // Init global variable
  FIGURE = getVertices(DIMENSION);
  ALLROTATIONS = getListOfRotations(DIMENSION);
  ANGLE = 0;

  // Update the info text
  VERTICES = Math.pow(2, DIMENSION);
  EDGES = DIMENSION * Math.pow(2, DIMENSION - 1);
  document.getElementById('name').innerHTML = NAMES[DIMENSION - 2];
  document.getElementById('info').innerHTML = `${VERTICES} vertices, ${EDGES} edges`;

  // Dräw, bröther
  draw();
}

// Start everything
init();

//
//
// CONROLS.JS
//
//

/*
Note: Every form is for ONE option
the form ID should match the initalizer CONTROLS.init.{name}
and the oninput callback CONTROLS.callback.{name}
*/

function CONTROLS() {}

CONTROLS.DOM = {
  // All the container form elements
  'forms': {
    'rotations': document.getElementById('rotations'),
    'dimension': document.getElementById('dimension'),
    'scaling': document.getElementById('scaling'),
    'isometric': document.getElementById('isometric'),
    'speed': document.getElementById('speed'),
    'distance': document.getElementById('distance') },

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
    // onchange is for the checkboxes on mobile touch devices
    this.DOM.forms[forms[i]].onchange = this.callback[forms[i]].bind(this);
    this.DOM.forms[forms[i]].onsubmit = function () {return false;};
  }
};

CONTROLS.init.dimension = function () {
  /*
                                       Note: Create a number input for the dimension number
                                       */

  let input = document.createElement('input');
  input.type = 'number';
  input.value = DIMENSION;

  this.DOM.children.dimension = input;
  this.DOM.forms.dimension.appendChild(input);
};

CONTROLS.init.scaling = function () {
  /*
                                     Note: Create a number input for the scaling
                                     */

  let input = document.createElement('input');
  input.type = 'number';
  input.value = SCALING;
  input.step = 20;

  this.DOM.children.scaling = input;
  this.DOM.forms.scaling.appendChild(input);
};

CONTROLS.init.speed = function () {
  /*
                                   Note: Create a number input for the scaling
                                   */

  let input = document.createElement('input');
  input.type = 'number';
  input.value = SPEED;
  input.step = 0.001;

  this.DOM.children.speed = input;
  this.DOM.forms.speed.appendChild(input);
};

CONTROLS.init.distance = function () {
  /*
                                      Note: Create a number input for the scaling
                                      */

  let input = document.createElement('input');
  input.type = 'number';
  input.value = DISTANCE;
  input.step = 0.1;

  this.DOM.children.distance = input;
  this.DOM.forms.distance.appendChild(input);
};

CONTROLS.init.isometric = function () {
  /*
                                       Note: Create a checkbox input for the isometric projection
                                       */

  let checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = 'isometric-checkbox';
  if (ISOMETRIC) {
    checkbox.checked = true;
  }

  let label = document.createElement('label');
  label.innerHTML = ''; // Adding content with CSS, boi
  label.htmlFor = 'isometric-checkbox';

  this.DOM.children.isometric = checkbox;
  this.DOM.forms.isometric.appendChild(checkbox);
  this.DOM.forms.isometric.appendChild(label);
};

CONTROLS.init.rotations = function () {
  /*
                                       Note: Here I'm creating the inputs for the rotation matrices
                                       The checkboxes are in a form which gets triggered when any input changes
                                       I'm creating checkboxes + label then appending it to the form innerHTML
                                       */

  let checkbox, label, text;
  let activeRotations = JSON.stringify(ROTATIONS);

  // Reset the form
  this.DOM.forms.rotations.innerHTML = '';
  // Reset the children
  this.DOM.children.rotations = [];

  for (let i = 0; i < ALLROTATIONS.length; i++) {
    text = getAxisName(ALLROTATIONS[i][0]) + getAxisName(ALLROTATIONS[i][1]);

    checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = text;
    // Check if the rotation of the checkbox is active = present in ROTATIONS
    if (activeRotations.indexOf(JSON.stringify(ALLROTATIONS[i])) !== -1) {
      checkbox.checked = true;
    }

    label = document.createElement('label');
    label.htmlFor = text;
    label.innerHTML = text;

    this.DOM.children.rotations[i] = checkbox;
    this.DOM.forms.rotations.appendChild(checkbox);
    this.DOM.forms.rotations.appendChild(label);
  }
};

//
// Callbacks
//

CONTROLS.callback = {};

CONTROLS.callback.dimension = function () {
  let value = parseInt(this.DOM.children.dimension.value);

  // If the value is not a number (NaN), quit
  if (isNaN(value)) {
    return false;
  }

  // Take the value and clamp it between [2, 10]
  // Dimension 10 has 1024 vertices, which is a lot
  value = Math.min(10, Math.max(2, value)); // <-- change the 10 value to your max dimension!

  // Ka-bam, reset everything
  DIMENSION = value;
  ROTATIONS = [];
  init();
  // Update the rotation options for the new dimension 
  CONTROLS.init.rotations.call(this);
};

CONTROLS.callback.scaling = function () {
  let value = parseFloat(this.DOM.children.scaling.value);

  // If the value is not a number (NaN), quit
  if (isNaN(value)) {
    return false;
  }

  SCALING = value;
};

CONTROLS.callback.speed = function () {
  let value = parseFloat(this.DOM.children.speed.value);

  // If the value is not a number (NaN), quit
  if (isNaN(value)) {
    return false;
  }


  SPEED = value;
};

CONTROLS.callback.distance = function () {
  let value = parseFloat(this.DOM.children.distance.value);

  // If the value is not a number (NaN), quit
  if (isNaN(value)) {
    return false;
  }

  DISTANCE = value;
};

CONTROLS.callback.isometric = function () {
  ISOMETRIC = this.DOM.children.isometric.checked;
};

CONTROLS.callback.rotations = function () {
  /*
                                           Note: Here I'm looping through all the rotation checkboxes
                                           If they are checked, add its rotation name (= elmt.value) to the global ROTATIONS variable
                                           */

  ROTATIONS = [];
  let checkbox;

  for (let i = 0; i < this.DOM.children.rotations.length; i++) {
    checkbox = this.DOM.children.rotations[i];
    if (checkbox.checked) {
      ROTATIONS.push(ALLROTATIONS[i]);
    }
  }
};

//
// Start everything
//

CONTROLS.init();