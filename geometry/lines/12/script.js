var sky = document.querySelector("#sky");
var ctxSky = sky.getContext("2d");
var mount = document.querySelector("#mountain");
var ctxMount = mount.getContext("2d");
var w = Math.round(Math.min(window.innerWidth, window.innerHeight) * 0.85);
var w2 = w / 2;

var scale = 10;
var offset = 11;
var river = 0;

var grad = ctxMount.createLinearGradient(0, w2, 0, w);
grad.addColorStop(0, "#d3d4d8");
grad.addColorStop(0.33, "#7990b4");
grad.addColorStop(0.66, "#323d54");
grad.addColorStop(1, "#282a2e");
var gradSky = ctxSky.createLinearGradient(0, 0, 0, w);
gradSky.addColorStop(0, "#2E112D");
gradSky.addColorStop(0.25, "#540032");
gradSky.addColorStop(0.5, "#820333");
gradSky.addColorStop(0.75, "#C9283E");
gradSky.addColorStop(1, "#F0433A");
noise.seed(0.2);
function render(a) {
  offset = w / scale;
  ctxMount.lineCap = "round";
  ctxSky.lineCap = "round";
  a *= -0.0001;

  ctxSky.clearRect(0, 0, w, w);
  ctxMount.clearRect(0, 0, w, w);

  var rows = w / scale;
  ctxSky.save();
  ctxSky.beginPath();

  ctxMount.save();
  ctxMount.beginPath();
  for (var i = offset * -1; i < rows; i++) {
    river = Math.abs(noise.simplex2(0, i / 30 + a + 100)) * (w / 6) + w / 6;
    var dist = w / 3 + river;

    ctxSky.moveTo(i * scale + scale * offset * 0.8, 0);
    ctxSky.lineTo(i * scale + scale * offset, dist);
    
    ctxMount.moveTo(i * scale + scale * offset, dist);
    ctxMount.lineTo(i * scale, w);
  }
  ctxSky.stroke();
  ctxSky.fillStyle = gradSky;
  ctxSky.rect(0, 0, w, w);
  ctxSky.globalCompositeOperation = "source-atop";
  ctxSky.fill();
  ctxSky.restore();

  ctxMount.stroke();
  ctxMount.strokeStyle = grad;
  ctxMount.fillStyle = grad;
  ctxMount.rect(0, w2, w, w);
  ctxMount.globalCompositeOperation = "source-atop";
  ctxMount.fill();
  ctxMount.restore();
  window.requestAnimationFrame(render);
}
function onResize() {
  w = Math.round(Math.min(window.innerWidth, window.innerHeight) * 0.85);
  w2 = w / 2;
  sky.width = w;
  sky.height = w;
  mount.width = w;
  mount.height = w;
  sky.style.width = w + "px";
  sky.style.height = w + "px";
  mount.style.width = w + "px";
  mount.style.height = w + "px";

  grad = ctxMount.createLinearGradient(0, w2, 0, w);
  grad.addColorStop(0, "#d3d4d8");
  grad.addColorStop(0.33, "#7990b4");
  grad.addColorStop(0.66, "#323d54");
  grad.addColorStop(1, "#282a2e");

  gradSky = ctxSky.createLinearGradient(0, 0, 0, w);
  gradSky.addColorStop(0, "#2E112D");
  gradSky.addColorStop(0.25, "#540032");
  gradSky.addColorStop(0.5, "#820333");
  gradSky.addColorStop(0.75, "#C9283E");
  gradSky.addColorStop(1, "#F0433A");
}
onResize();
window.requestAnimationFrame(render);
window.addEventListener("resize", onResize);