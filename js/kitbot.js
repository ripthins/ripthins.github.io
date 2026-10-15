/*
  Kitbot motion graphic: an FRC kitbot-style robot drawn with CSS 3D boxes.
  Styles live in css/kitbot.css. To change the robot, edit PARTS below.

  Units are pixels at full size. Axes: x = right, y = DOWN (so "up" is
  negative), z = toward the viewer. The floor is y = 0.
*/
(function () {
  "use strict";

  var BUMPER = "#2457C5";   // FRC blue bumpers
  var ALU = "#AEB8C2";      // aluminum
  var GREEN = "#00AD67";    // HTA green
  var NAVY = "#0D1F33";
  var DARK = "#1D232B";

  /*
    Layout, seen from above (front of robot = bottom of this sketch):

        [breaker] [RSL]
     [battery]          [roboRIO]
     gearbox   |tower|   gearbox
          [PDH]   [MCs]  [radio]
       motor              motor
        ======= intake =======
  */
  var PARTS = [
    // Bumpers, team number on all four sides
    { w: 230, h: 32, d: 200, x: 0, y: -40, z: 0, c: BUMPER,
      label: "12113", labelFaces: ["front", "back", "left", "right"] },

    // Aluminum frame rails (sit inside the bumpers, top at y = -60)
    { w: 206, h: 10, d: 8, x: 0, y: -55, z: 92, c: ALU },
    { w: 206, h: 10, d: 8, x: 0, y: -55, z: -92, c: ALU },
    { w: 8, h: 10, d: 176, x: -101, y: -55, z: 0, c: ALU },
    { w: 8, h: 10, d: 176, x: 101, y: -55, z: 0, c: ALU },
    // Electronics board, flush with the rails
    { w: 194, h: 3, d: 176, x: 0, y: -58.5, z: 0, c: "#D5DCE3" },

    // Battery (12 V) with red and black terminals
    { w: 32, h: 34, d: 48, x: -66, y: -77, z: -50, c: DARK },
    { w: 8, h: 4, d: 8, x: -66, y: -96, z: -64, c: "#D93A3A" },
    { w: 8, h: 4, d: 8, x: -66, y: -96, z: -36, c: "#4A5563" },
    // Main breaker with its red button
    { w: 16, h: 12, d: 12, x: -30, y: -66, z: -78, c: DARK },
    { w: 8, h: 4, d: 8, x: -30, y: -74, z: -78, c: "#D93A3A" },
    // Robot signal light (blinks)
    { w: 12, h: 10, d: 12, x: 0, y: -65, z: -82, c: "#F28C28", cls: "kb-rsl" },

    // roboRIO
    { w: 46, h: 12, d: 38, x: 42, y: -66, z: -46, c: "#E3E8ED",
      label: "roboRIO", labelFaces: ["top"], labelColor: NAVY, labelSize: 9 },
    // Power Distribution Hub
    { w: 54, h: 12, d: 40, x: -38, y: -66, z: 30, c: "#24303D",
      label: "PDH", labelFaces: ["top"], labelSize: 10 },
    // Radio
    { w: 30, h: 9, d: 22, x: 50, y: -64.5, z: 26, c: "#F4F6F8" },
    // Motor controllers
    { w: 12, h: 10, d: 26, x: 0, y: -65, z: 52, c: "#3B4A63" },
    { w: 12, h: 10, d: 26, x: 16, y: -65, z: 52, c: "#3B4A63" },
    { w: 12, h: 10, d: 26, x: 0, y: -65, z: 18, c: "#3B4A63" },
    { w: 12, h: 10, d: 26, x: 16, y: -65, z: 18, c: "#3B4A63" },

    // Drive gearboxes + motors, one per side
    { w: 12, h: 22, d: 32, x: -86, y: -71, z: 0, c: "#4A5563" },
    { w: 12, h: 22, d: 32, x: 86, y: -71, z: 0, c: "#4A5563" },
    { w: 12, h: 12, d: 36, x: -86, y: -66, z: 34, c: "#9AA3AD" },
    { w: 12, h: 12, d: 36, x: 86, y: -66, z: 34, c: "#9AA3AD" },

    // Intake: two side plates and a roller, out over the front bumper
    { w: 6, h: 28, d: 30, x: -88, y: -70, z: 104, c: ALU },
    { w: 6, h: 28, d: 30, x: 88, y: -70, z: 104, c: ALU },
    { w: 170, h: 12, d: 12, x: 0, y: -72, z: 112, c: NAVY },

    // Tower: two uprights and a crossbar
    { w: 10, h: 104, d: 10, x: -52, y: -112, z: -12, c: ALU },
    { w: 10, h: 104, d: 10, x: 52, y: -112, z: -12, c: ALU },
    { w: 114, h: 10, d: 10, x: 0, y: -169, z: -12, c: ALU },
    // Shooter, tilted forward, with the Ctrl key on top
    { w: 96, h: 32, d: 58, x: 0, y: -166, z: 12, rx: -20, c: GREEN,
      label: "Ctrl", labelFaces: ["top"], labelColor: NAVY }
  ];

  // Wheels: 3 per side, tucked inside the bumpers
  var WHEEL_X = 100, WHEEL_Y = -24, WHEEL_Z = [-62, 0, 62];

  var SEAM = 1;

  var FACES = {
    front:  function (p) { return { fw: p.w, fh: p.h, t: "translateZ(" + p.d / 2 + "px)" }; },
    back:   function (p) { return { fw: p.w, fh: p.h, t: "rotateY(180deg) translateZ(" + p.d / 2 + "px)" }; },
    right:  function (p) { return { fw: p.d, fh: p.h, t: "rotateY(90deg) translateZ(" + p.w / 2 + "px)" }; },
    left:   function (p) { return { fw: p.d, fh: p.h, t: "rotateY(-90deg) translateZ(" + p.w / 2 + "px)" }; },
    top:    function (p) { return { fw: p.w, fh: p.d, t: "rotateX(90deg) translateZ(" + p.h / 2 + "px)" }; },
    bottom: function (p) { return { fw: p.w, fh: p.d, t: "rotateX(-90deg) translateZ(" + p.h / 2 + "px)" }; }
  };

  function div(cls) {
    var n = document.createElement("div");
    n.className = cls;
    return n;
  }

  function box(p) {
    var b = div("kb-box" + (p.cls ? " " + p.cls : ""));
    b.style.transform = "translate3d(" + p.x + "px," + p.y + "px," + p.z + "px)" + (p.rx ? " rotateX(" + p.rx + "deg)" : "");
    Object.keys(FACES).forEach(function (name) {
      var f = FACES[name](p);
      var face = div("kb-face kb-face--" + name);
      // Each face is 1px larger than the box so neighbouring faces overlap
      // at the edges. Without this, the background shows through the seams.
      var fw = f.fw + SEAM, fh = f.fh + SEAM;
      face.style.width = fw + "px";
      face.style.height = fh + "px";
      face.style.left = -fw / 2 + "px";
      face.style.top = -fh / 2 + "px";
      face.style.transform = f.t;
      face.style.backgroundColor = p.c;
      if (p.label && p.labelFaces.indexOf(name) !== -1) {
        face.textContent = p.label;
        face.classList.add("kb-face--label");
        if (p.labelColor) face.style.color = p.labelColor;
        if (p.labelSize) face.style.fontSize = p.labelSize + "px";
      }
      b.appendChild(face);
    });
    return b;
  }

  function wheel(side, z) {
    var w = div("kb-wheel kb-wheel--" + side);
    var x = side === "left" ? -WHEEL_X : WHEEL_X;
    w.style.transform = "translate3d(" + x + "px," + WHEEL_Y + "px," + z + "px) rotateY(90deg)";
    // two discs give the wheel some thickness
    [-4, 4].forEach(function (offset) {
      var disc = div("kb-disc");
      disc.style.transform = "translateZ(" + offset + "px)";
      disc.appendChild(div("kb-hub"));
      w.appendChild(disc);
    });
    return w;
  }

  function build(world) {
    var spin = div("kb-spin");
    PARTS.forEach(function (p) { spin.appendChild(box(p)); });
    WHEEL_Z.forEach(function (z) {
      spin.appendChild(wheel("left", z));
      spin.appendChild(wheel("right", z));
    });
    world.appendChild(spin);
  }

  Array.prototype.forEach.call(document.querySelectorAll("[data-kitbot]"), function (stage) {
    var world = stage.querySelector(".kb-world");
    if (!world) return;
    build(world);
    stage.classList.add("is-ready");

    // Pause / play button
    var btn = stage.querySelector(".kb-toggle");
    var userPaused = false;
    function setPaused(paused) {
      stage.classList.toggle("is-paused", paused);
    }
    if (btn) {
      btn.addEventListener("click", function () {
        userPaused = !userPaused;
        setPaused(userPaused);
        btn.classList.toggle("is-paused", userPaused);   // swaps the II / play icon
        btn.setAttribute("aria-label", userPaused ? "Play animation" : "Pause animation");
      });
    }

    // Save battery: only animate while on screen
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { setPaused(userPaused || !e.isIntersecting); });
      }).observe(stage);
    }
  });
})();
