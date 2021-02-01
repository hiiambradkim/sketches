var c = document.querySelector('canvas'),
    w = c.width,
    h = c.height,
    cw = Math.floor(w * 0.5),
    ch = Math.floor(h * 0.5),
    ctx = c.getContext('2d');


var Ball = function(xs, ys, offset, size, range) {
  this.x = 0;
  this.y = 0;
  this.offset = offset || 0;
  this.xs = xs || 10;
  this.ys = ys || 10;
  this.size = size || 20;
  this._hsize = Math.floor(this.size * 0.5);
  this.range = range || 200;
 
  this.update = function(t) {
    this.x = cw + Math.sin((t + offset) * this.xs) * this.range;
    this.y = ch + Math.sin((t + offset) * this.ys) * this.range;
  };
  
  // I think this is off a bit.
  this.render = function() {
  	ctx.beginPath();
    ctx.arc(this.x - this._hsize, 
            this.y - this._hsize, 
            this._hsize, 0, 2 * Math.PI, 
            false);
    ctx.fill();
  }
};

var balls = {};

function update() {
  var t = 0.0001 * Date.now();
  for(var col in balls) {
    balls[col].forEach(function(b) {
      b.update(t);
    });
  }
}

function render() {
  ctx.clearRect(0,0,w,h);
  // Draw the balls in batches, so we can optimize a bit
  // by only changing the fillStyle when needed.
  for(var col in balls) {
    ctx.fillStyle = col;
    balls[col].forEach(function(b) {
      b.render();
    });
  }
}

function mainloop() {
  requestAnimationFrame(mainloop);
  update();
  render();
}


balls['red'] = [
  new Ball(20, 10, 0, 50, 100),
  new Ball(20, 10, 1, 50, 100),
  new Ball(20, 10, 1, 50, 100),
  new Ball(20, 10, 1, 50, 164)
];

balls['silver'] = [
  new Ball(30, 40, 0, 20),
  new Ball(30, 40, 0.2, 20),
  new Ball(30, 40, 0.4, 20),
  new Ball(30, 40, 0.6, 20),
  new Ball(30, 40, 0.8, 40),
  new Ball(30, 40, 0.99, 60)
];

balls['gold'] = [
  new Ball(25, 20, 0, 10),
  new Ball(25, 20, 0.2, 10, 150),
  new Ball(25, 20, 0.4, 10),
  new Ball(25, 20, 0.6, 10, 150)
];

mainloop();