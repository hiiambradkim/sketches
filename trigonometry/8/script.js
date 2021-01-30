const PARAMS = {
  unit: 'rad',
};
const BG = '#000';
const FG = '#fff';
const FG_SUB = '#111';
const FG_SUB2 = '#222';
const SIN = '#29a329';
const COS = '#e69100';
const ANGLE = '#d92635';
let hovered = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100);
  rectMode(CENTER);
  const pane = new Tweakpane();
  pane.addInput(PARAMS, 'unit', {
    label: 'Unit',
    options: {
      'Radian': 'rad',
      'Degree': 'deg',
    },
  });
}

function drawGuides(r) {
  stroke(FG_SUB);
  noFill();
  line(-r, 0, +r, 0);
  line(0, -r, 0, +r);
  ellipse(0, 0, r * 2, r * 2);
  
  noStroke();
  fill(FG_SUB);
  textAlign(LEFT, TOP);
  text('-1', -r + 4, 4);
  textAlign(RIGHT, TOP);
  text('+1', r - 4, 4);
  textAlign(LEFT, TOP);
  text('-1', 4, -r + 4);
  textAlign(LEFT, BOTTOM);
  text('+1', 4, r - 4);
}

function formatSinCos(sinCos) {
  const sign = sinCos < 0 ? '-' : '+';
  return `${sign}${abs(sinCos).toFixed(2)}`;
}

function formatAngle(angle) {
  return (PARAMS.unit === 'rad') ?
    `${(angle / PI).toFixed(2)}π` :
    `${round(degrees(angle))}°`;
}

function drawSinCos(angle, r) {
  const dx = cos(angle) * r;
  const dy = sin(angle) * r;
  const sinx = -(r + 8);
  const cosy = +(r + 8);
  
  // 補助線
  stroke(FG_SUB2);
  line(dx, dy, dx, cosy);
  line(dx, dy, sinx, dy);
  
  // cos
  stroke(COS);
  line(0, cosy, dx, cosy);
  line(0, cosy - 4, 0, cosy + 4);
  if (abs(dx) > 4) {
    line(dx, cosy, dx - 4 * Math.sign(dx), cosy - 4);
    line(dx, cosy, dx - 4 * Math.sign(dx), cosy + 4);
  } else {
    line(dx, cosy - 4, dx, cosy + 4);
  }
  
  // sin
  stroke(SIN);
  line(sinx, 0, sinx, dy);
  line(sinx - 4, 0, sinx + 4, 0);
  if (abs(dy) > 4) {
    line(sinx, dy, sinx - 4, dy - 4 * Math.sign(dy));
    line(sinx, dy, sinx + 4, dy - 4 * Math.sign(dy));
  } else {
    line(sinx - 4, dy, sinx + 4, dy);
  }
  
  // 文字
  noStroke();
  fill(COS);
  textAlign(CENTER, TOP);
  text(`cos(${formatAngle(angle)})`, dx / 2, cosy + 8);
  text(`= ${formatSinCos(cos(angle))}   `, dx / 2, cosy + 24);
  
  fill(SIN);
  textAlign(RIGHT, CENTER);
  text(`sin(${formatAngle(angle)})`, sinx - 8, dy / 2 - 8);
  text(`= ${formatSinCos(sin(angle))}   `, sinx - 8, dy / 2 + 8);
}

function drawLine(angle, r) {
  const dx = cos(angle) * r;
  const dy = sin(angle) * r;
  
  // 角度（背景）
  noStroke();
  fill(FG_SUB2);
  const ar = r * 2;
  if (angle < 2 * PI) {
    arc(0, 0, ar, ar, 0, angle);
  } else {
    ellipse(0, 0, ar, ar);
  }

  // 角度（前景）
  noStroke();
  stroke(FG);
  noFill();
  const arr = r * 0.2; 
  arc(0, 0, arr, arr, 0, angle);
  if (angle > 0.25 * PI) {
    const arox = cos(angle) * arr / 2;
    const aroy = sin(angle) * arr / 2;
    line(
      arox, aroy,
      arox + cos(angle - PI * 3 / 8) * 8,
      aroy + sin(angle - PI * 3 / 8) * 8
    );
    line(
      arox, aroy,
      arox + cos(angle - PI * 3 / 4) * 8,
      aroy + sin(angle - PI * 3 / 4) * 8
    );
  }
  noStroke(); 
  fill(FG);
  const aa = min(angle, PI / 2);
  textAlign(CENTER, TOP);
  text(
    formatAngle(angle),
    cos(aa) * arr / 4,
    sin(aa) * arr / 4 + arr / 2
  );

  // 矢印
  stroke(FG);
  line(0, 0, dx, dy);

  // 先端
  noStroke();
  fill(FG);
  ellipse(dx, dy, 8, 8);
}

function getAngle() {
  if (hovered) {
    const angle = atan2(mouseY - height / 2, mouseX - width / 2);
    return (angle + 2 * PI) % (2 * PI);
  }
  
  return pow(sin((frameCount * 0.002) % (PI)), 2) * 2 * PI;
}

function draw() {
  background(BG);
  textStyle(BOLD);
  textFont('Roboto Mono', 13);
  
  strokeWeight(2);
  push();
  translate(width / 2, height / 2);
  
  const r = height * 0.35;
  const angle = getAngle();

  drawGuides(r);
  drawSinCos(angle, r);
  drawLine(angle, r);
  
  pop();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

const body = document.body;
body.addEventListener('mouseenter', () => {
  hovered = true;
});
body.addEventListener('mouseleave', () => {
  hovered = false;
});