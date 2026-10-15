/*
  "New to FRC?" field band: the kitbot shoots yellow fuel over the text into the hub.
  - Mouse: hovering the band keeps the robot shooting. Clicking the robot fires once.
  - Touch screens: it shoots on its own while the band is near the middle of the screen.
  - Reduced motion: nothing moves.
  Styles: css/shooter.css. Motion rules: DESIGN.md > Motion.
*/
(function () {
  "use strict";

  var EVERY_MS = 950;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var touchOnly = window.matchMedia("(hover: none)").matches;

  Array.prototype.forEach.call(document.querySelectorAll("[data-shooter]"), function (band) {
    if (reduce) return;

    var layer = band.querySelector(".frc-field__balls");
    var robotSvg = band.querySelector(".frc-field__robot");
    var robot = band.querySelector(".sh-robot");
    var muzzle = band.querySelector(".sh-muzzle");
    var mouth = band.querySelector(".sh-mouth");
    var hub = band.querySelector(".sh-hub");
    var screen = band.querySelector(".sh-screen-num");
    var score = 0;
    var timer = null;

    function center(node, box) {
      var r = node.getBoundingClientRect();
      return { x: r.left + r.width / 2 - box.left, y: r.top + r.height / 2 - box.top };
    }

    function restart(node, cls) {
      node.classList.remove(cls);
      void node.getBoundingClientRect();
      node.classList.add(cls);
    }

    function shoot() {
      var box = band.getBoundingClientRect();
      var a = center(muzzle, box);
      var b = center(mouth, box);
      b.x += (Math.random() - 0.5) * 16;               // a little variety, always in

      var scale = robotSvg.getBoundingClientRect().width / 236;
      var dist = Math.abs(b.x - a.x);
      var arc = Math.min(Math.max(80, dist * 0.32), Math.min(a.y, b.y) - 20);
      var duration = 550 + dist * 0.75;

      restart(robot, "is-shooting");
      var ball = document.createElement("span");
      ball.className = "fuel-ball";
      ball.style.setProperty("--ball", Math.round(26 * scale) + "px");
      layer.appendChild(ball);

      var t0 = null;
      function step(now) {
        if (t0 === null) t0 = now;
        var t = Math.min(1, (now - t0) / duration);
        var x = a.x + (b.x - a.x) * t;
        var y = a.y + (b.y - a.y) * t - arc * 4 * t * (1 - t);
        ball.style.transform = "translate(" + x + "px," + y + "px)";
        if (t < 1) {
          requestAnimationFrame(step);
        } else {
          ball.remove();
          score += 1;
          screen.textContent = String(score);
          restart(hub, "is-scored");
        }
      }
      requestAnimationFrame(step);
    }

    function start() { if (!timer) { shoot(); timer = setInterval(shoot, EVERY_MS); } }
    function stop() { clearInterval(timer); timer = null; }

    robotSvg.addEventListener("click", function () { if (!timer) shoot(); });
    document.addEventListener("visibilitychange", function () { if (document.hidden) stop(); });

    if (touchOnly && "IntersectionObserver" in window) {
      // fire while the band sits in the middle 40% of the screen
      new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) start(); else stop(); });
      }, { rootMargin: "-30% 0px -30% 0px" }).observe(band);
    } else {
      band.addEventListener("pointerenter", function (e) { if (e.pointerType === "mouse") start(); });
      band.addEventListener("pointerleave", stop);
    }
  });
})();
