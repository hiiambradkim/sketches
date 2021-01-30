(function(exports, global) {
    function animate() {
        animation = true;
        animationInProgress(true);
        draw();
        if (outCanvasRight() && speed > 0) {
            currentAngle = 0;
        } else if (outCanvasLeft()) {
            currentAngle = width / offset.angle;
        }
        if (zoomValues.previous < zoomValues.new) {
            zoomValues.previous = ++offset.angle;
        } else if (zoomValues.previous > zoomValues.new) {
            zoomValues.previous = --offset.angle;
        }
        range.value = currentAngle;
        currentAngle = +currentAngle + speed;
        requestAnimation = requestAnimationFrame(animate);
    }

    function stopAnimation() {
        animation = false;
        updateGridInput();
        updateZoomInput();
        animationInProgress(false);
        cancelAnimationFrame(requestAnimation);
    }

    function toggleGrid() {
        grid = !grid;
        draw();
    }

    function outCanvasRight() {
        var currentX = currentAngle * offset.angle;
        return currentX > width - marker.radius * 2;
    }

    function outCanvasLeft() {
        var currentX = currentAngle * offset.angle;
        return currentX < 0 - marker.radius * 2;
    }

    function restart() {
        animation = false;
        context.restore();
        stopBtn.disabled = false;
        initData();
        draw();
        stopAnimation();
        animationRandomInProgress(false);
    }

    function disableButtons(buttonsId) {
        buttonsId.forEach(disableButton);
    }

    function disableButton(button) {
        button.disabled = true;
    }

    function enableButtons(buttonsId) {
        buttonsId.forEach(enableButton);
    }

    function enableButton(button) {
        button.disabled = false;
    }

    function drawCircle() {
        context.beginPath();
        context.arc(circle.centerX, circle.centerY, circle.radius, circle.start, circle.finnish);
        context.moveTo(circle.centerX, circle.centerY - circle.radius);
        context.lineTo(circle.centerX, circle.centerY + circle.radius);
        context.moveTo(circle.centerX - circle.radius, circle.centerY);
        context.lineTo(circle.centerX + circle.radius, circle.centerY);
        context.stroke();
    }

    function updateCircle(angle) {
        var x = circle.centerX + Math.cos(angle) * circle.radius,
            y = circle.centerY + Math.sin(angle) * circle.radius;
        context.beginPath();
        context.moveTo(circle.centerX, circle.centerY);
        context.lineTo(x, y);
        context.lineTo(x, circle.centerY);
        context.arc(x, y, 1, circle.start, circle.finnish);
        context.fill();
        context.stroke();
    }

    function functionList() {
        var container = document.createElement("div"),
            p = null,
            label = null,
            input = null,
            span = null;
        container.className = "collection";
        for (var i = 0; i < graphics.length; i++) {
            p = document.createElement("p");
            p.className = "collection-item";
            p.setAttribute("data-index", i);
            p.setAttribute("data-action", "select-function");
            if (graphics[i].checked) {
                p.classList.toggle("checked");
            }
            label = document.createElement("label");
            label.appendChild(document.createTextNode(graphics[i].name));
            label.setAttribute("data-index", i);
            label.setAttribute("data-action", "check-function");
            label.setAttribute("for", "checkbox-" + i);
            input = document.createElement("input");
            input.type = "checkbox";
            input.checked = graphics[i].checked;
            input.className = "filled-in";
            input.setAttribute("id", "checkbox-" + i);
            span = document.createElement("span");
            span.className = "color";
            span.style.backgroundColor = graphics[i].color;
            p.appendChild(input);
            p.appendChild(label);
            p.appendChild(span);
            container.appendChild(p);
        }
        container.addEventListener("click", controlFunctionItemClick);
        list.appendChild(container);
    }

    function controlFunctionItemClick(event) {
        event.stopPropagation();
        var target = event.target,
            index = target.getAttribute("data-index");
        if (!index) {
            return;
        }
        index = +index;
        if (target.getAttribute("data-action") === "check-function") {
            toggleFunction(index, target, event);
        } else if (target.getAttribute("data-action") === "select-function") {
            highlightFunction(index, target);
        }
    }

    function toggleFunction(index, target, event) {
        var x = graphics.filter(function(graph) {
            return graph.checked;
        });
        if (x.length === 1 && graphics[index].checked) {
            event.preventDefault();
            return;
        }
        graphics[index].checked = !graphics[index].checked;
        draw();
        target.parentNode.classList.toggle("checked");
    }

    function highlightFunction(index, target) {
        if (!graphics[index].checked) {
            return;
        }
        if (graphics[index].selected) {
            target.classList.remove("selected");
            graphics[index].selected = !graphics[index].selected;
            lastGraphicSelected = null;
        } else {
            var x = document.getElementsByClassName("selected")[0];
            if (x) {
                x.classList.remove("selected");
                graphics[lastGraphicSelected].selected = !graphics[lastGraphicSelected].selected;
            }
            target.classList.add("selected");
            graphics[index].selected = !graphics[index].selected;
            lastGraphicSelected = index;
        }
        draw();
    }

    function drawGraphic(graphic) {
        var angle = 0,
            x = null;
        y = null;
        context.fillStyle = graphic.color;
        for (; x <= width; angle += speedBase) {
            x = Math.floor(angle * offset.angle);
            y = Math.floor(graphic.fn(angle) * offset.angle);
            if (!graphic.selected) {
                context.fillRect(x + offset.x, y + offset.y, graphicStyle.width, graphicStyle.width);
            } else {
                context.fillRect(x + offset.x, y + offset.y, graphicStyle.width * graphicStyle.highlightMult, graphicStyle.width * graphicStyle.highlightMult);
            }
        }
    }

    function drawGraphics(functions) {
        var blank = true,
            selectedGraphic = null;
        for (var i = 0; i < functions.length; i++) {
            var fn = functions[i];
            if (fn.checked) {
                blank = false;
                if (fn.selected) {
                    selectedGraphic = fn;
                } else {
                    drawGraphic(fn);
                    drawMarker(fn);
                }
            }
        }
        if (selectedGraphic) {
            drawGraphic(selectedGraphic);
            drawMarker(selectedGraphic);
        }
        if (blank) {
            context.fillStyle = "black";
            context.font = "60px Arial";
            context.fillText("No graphics", 10, 90, 200);
            stopAnimation();
        }
    }

    function drawGrid() {
        if (!grid) {
            return;
        }
        var canvasMiddle = height / 2;
        context.beginPath();
        context.moveTo(0, canvasMiddle);
        context.lineTo(width, canvasMiddle);
        for (var angle = 0; angle <= width; angle += Math.PI / 2) {
            if (Math.abs(Math.sin(angle)) === 1 || Math.abs(Math.cos(angle)) === 1) {
                context.moveTo(Math.floor(angle * offset.angle + offset.x), 0);
                context.lineTo(Math.floor(angle * offset.angle + offset.x), height);
            }
        }
        context.stroke();
    }

    function updateSpeedInput() {
        speedInput.value = speed;
        speedInput.placeholder = "Default: " + iniSpeed;
    }

    function updateZoomInput() {
        zoomInput.value = offset.angle;
        zoomInput.placeholder = "Default: " + iniOffsetAngle + " Min: " + offset.minAngle;
    }

    function updateGridInput() {
        toggleGridInput.checked = grid;
    }

    function changeSpeed() {
        var nextSpeed = +speedInput.value;
        speed = nextSpeed ? nextSpeed : iniSpeed;
    }

    function changeZoom() {
        throttleFunction("zoomInput", setZoom);
    }

    function setZoom() {
        var zoom = zoomInput.value && zoomInput.value > offset.minAngle ? Math.floor(zoomInput.value) : offset.minAngle;
        if (!animation) {
            offset.angle = zoom;
            draw();
        } else {
            zoomValues.new = zoom;
        }
    }
    var canvas = document.getElementById("canvas"),
        header = document.getElementById("header"),
        intro = document.getElementById("intro"),
        list = document.getElementById("list");
    initDimensions();
    var range = document.getElementById("angle"),
        speedInput = document.getElementById("speed"),
        toggleGridInput = document.getElementById("toggle-grid"),
        zoomInput = document.getElementById("zoom"),
        animateBtn = document.getElementById("animate"),
        stopBtn = document.getElementById("stop"),
        restartBtn = document.getElementById("restart"),
        randomBtn = document.getElementById("random"),
        context = canvas.getContext("2d"),
        angle = 0,
        iniSpeed = .05,
        speed = iniSpeed,
        speedBase = .06,
        iniOffsetAngle = 80,
        throttleTime = 300,
        grid = false,
        currentAngle = null,
        requestAnimation = null,
        lastGraphicSelected = null,
        animation = false,
        zoomValues = {
            previous: iniOffsetAngle,
            new: iniOffsetAngle
        };
    throttle = {
        time: 300,
        zoomInput: null,
        scroll: null,
        resize: null
    }, offset = {
        y: height / 2,
        x: 20,
        angle: iniOffsetAngle,
        minAngle: 20
    }, marker = {
        radius: 20
    }, graphicStyle = {
        width: 3,
        highlightMult: 2.5
    }, circle = {
        centerX: 150,
        centerY: 300,
        radius: 100,
        start: 0,
        finnish: 2 * Math.PI
    }, random = {
        zoom: {
            counter: 0,
            increment: true,
            minAngle: 30,
            maxAngle: 200,
            steps: 5,
            maxRandom: 300,
            minRandom: 60
        },
        rotation: {
            counter: 0,
            increment: true,
            steps: .05,
            value: null,
            maxRandom: 200,
            minRandom: 60
        },
        grid: {
            counter: 0
        },
        angle: {
            counter: 0,
            increment: true,
            steps: .05,
            maxRandom: 700,
            minRandom: 360
        }
    }, graphics = [{
        name: "Sine",
        fn: Math.sin,
        color: "red",
        checked: true,
        selected: false
    }, {
        name: "Cosecant",
        fn: function(angle) {
            return 1 / Math.sin(angle);
        },
        color: "pink",
        checked: false,
        selected: false
    }, {
        name: "Cosine",
        fn: Math.cos,
        color: "blue",
        checked: false,
        selected: false
    }, {
        name: "Secant",
        fn: function(angle) {
            return 1 / Math.cos(angle);
        },
        color: "purple",
        checked: false,
        selected: false
    }, {
        name: "Tangent",
        fn: Math.tan,
        color: "green",
        checked: false,
        selected: false
    }, {
        name: "Cotangent",
        fn: function(angle) {
            return 1 / Math.tan(angle);
        },
        color: "orange",
        checked: false,
        selected: false
    }];
    range.addEventListener("input", render);
    animateBtn.addEventListener("click", animate);
    stopBtn.addEventListener("click", stopAnimation);
    restartBtn.addEventListener("click", restart);
    speedInput.addEventListener("input", changeSpeed);
    toggleGridInput.addEventListener("change", toggleGrid);
    zoomInput.addEventListener("input", changeZoom);
    window.addEventListener("scroll", watchScroll);
    window.addEventListener("resize", resize);
    randomBtn.addEventListener("click", function random() {
        context.save();
        animationInProgress(true);
        stopBtn.disabled = true;
        initRandom();
        animateRandom();
    });
    initData();
    functionList();
    draw();

    function rotateCanvas(angle) {
        context.translate(width / 2, height / 2);
        context.rotate(angle * (Math.PI / 180));
        context.translate(-width / 2, -height / 2);
    }

    function render() {
        if (!outCanvasRight()) {
            draw();
        }
        currentAngle = +range.value;
    }

    function draw() {
        iniCanvas();
        drawGrid();
        drawGraphics(graphics);
    }

    function initData() {
        currentAngle = range.value = 0;
        updateSpeedInput();
        updateZoomInput();
        updateGridInput();
        animationInProgress(false);
    }

    function animationInProgress(inProgress) {
        var buttons = [randomBtn, animateBtn, range];
        if (inProgress) {
            disableButtons(buttons);
            enableButton(stopBtn);
        } else {
            enableButtons(buttons);
            disableButton(stopBtn);
        }
    }

    function animationRandomInProgress(inProgress) {
        var buttons = [speedInput, toggleGridInput, zoomInput];
        if (inProgress) {
            disableButtons(buttons);
        } else {
            enableButtons(buttons);
        }
    }

    function iniCanvas() {
        var spaceToErase = width > height ? width : height,
            initialPoint = -spaceToErase,
            finalPoint = spaceToErase * 2.2;
        context.clearRect(initialPoint, initialPoint, finalPoint, finalPoint);
    }

    function drawMarker(fn) {
        var x = Math.floor(currentAngle * offset.angle),
            y = Math.floor(fn.fn(currentAngle) * offset.angle);
        context.beginPath();
        context.fillStyle = fn.color;
        context.arc(x + offset.x, y + offset.y, marker.radius, 0, circle.finnish, false);
        context.fill();
    }

    function initRandom() {
        offset.angle = getRandomInt(200, 70);
        random.rotation.value = getRandomFloat(1, 0);
    }

    function randomness(randomObject, currentValue, additionalCondition) {
        var result = null,
            condition = additionalCondition ? randomObject.counter > getRandomInt(randomObject.maxRandom, randomObject.minRandom) || additionalCondition() : randomObject.counter > getRandomInt(randomObject.maxRandom, randomObject.minRandom);
        if (condition) {
            randomObject.increment = !randomObject.increment;
            randomObject.counter = 0;
        }
        result = randomObject.increment ? currentValue + randomObject.steps : currentValue - randomObject.steps;
        randomObject.counter++;
        return result;
    }

    function animateRandom() {
        iniCanvas();
        rotateCanvas(random.rotation.value);
        draw();
        animationRandomInProgress(true);
        random.rotation.value = randomness(random.rotation, random.rotation.value);
        offset.angle = Math.floor(randomness(random.zoom, offset.angle, zoomRandomCondition));
        currentAngle = randomness(random.angle, currentAngle, angleRandomCondition);
        range.value = currentAngle;
        randomGrid();
        requestAnimation = requestAnimationFrame(animateRandom);
    }

    function angleRandomCondition() {
        return currentAngle < 0;
    }

    function zoomRandomCondition() {
        return offset.angle < random.zoom.minAngle || offset.angle > random.zoom.maxAngle;
    }

    function randomGrid() {
        if (random.grid.counter > getRandomInt(500, 60)) {
            if (getRandomInt(100, 0) > 100 / 3) {
                grid = !grid;
            }
            random.grid.counter = 0;
        }
        random.grid.counter++;
    }

    function getRandomInt(max, min) {
        return Math.random() * (max - min) + min;
    }

    function getRandomFloat(max, min) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function watchScroll() {
        throttleFunction("scroll", setCanvasLocation, 10);
    }

    function setCanvasLocation() {
        if (window.scrollY > canvasToTop) {
            intro.style.marginBottom = canvasComputedHeight;
            canvas.className = "canvas-fixed z-depth-4";
        } else {
            intro.style.marginBottom = 0;
            canvas.className = "";
        }
    }

    function initDimensions() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight / 1.3;
        canvasToTop = getCanvasToTop();
        canvasComputedHeight = getComputedStyle(canvas, null).height;
        canvasDimensions = canvas.getBoundingClientRect();
    }

    function resize() {
        initDimensions();
        offset.y = height / 2;
        throttleFunction("resize", draw);
    }

    function getCanvasToTop() {
        return header.offsetHeight + intro.offsetHeight;
    }

    function throttleFunction(throttleVar, fn, time) {
        clearTimeout(throttle[throttleVar]);
        throttle[throttleVar] = setTimeout(fn, time || throttle.time);
    }
    global["Inmaga"] = exports;
})({}, function() {
    return this;
}());