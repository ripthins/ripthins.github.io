/*
  Mini robot scenes (css/minibots.css).
  Each scene plays when it scrolls into view, runs a few times, then rests.
  Hover (mouse) or tap replays it.
*/
(function () {
  "use strict";

  function play(stage) {
    stage.classList.remove("is-playing");
    void stage.getBoundingClientRect();   // restart the CSS animations
    stage.classList.add("is-playing");
  }

  Array.prototype.forEach.call(document.querySelectorAll("[data-minibot]"), function (stage) {
    if ("IntersectionObserver" in window) {
      var seen = false;
      new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (e) {
          if (e.isIntersecting && !seen) { seen = true; play(stage); obs.disconnect(); }
        });
      }, { threshold: 0.4 }).observe(stage);
    } else {
      play(stage);
    }
    stage.addEventListener("pointerenter", function (e) { if (e.pointerType === "mouse") play(stage); });
    stage.addEventListener("click", function () { play(stage); });
  });
})();
