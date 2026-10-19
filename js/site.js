/*
  Fills the pages with what's in content.js.
  You should not need to edit this file to update the site.
  Edit content.js instead (see CLAUDE.md).

  Rule for every block below: if content.js doesn't have the info yet,
  the block hides itself. Visitors never see "coming soon" notes or
  instructions meant for the team.
*/
(function () {
  "use strict";

  var SITE = window.SITE || {};
  var CONTACT = SITE.contact || {};
  var LINKS = SITE.links || {};
  var HAS_EMAIL = !!CONTACT.email;

  /* Yellow DRAFT tags only show when content.js says so */
  if (SITE.showDraftMarkers) document.documentElement.classList.add("show-drafts");

  /* Phosphor Icons (MIT), regular weight. See icons/LICENSE-Phosphor.txt */
  var ICONS = {
    arrow: "M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z",
    download: "M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,124.69V32a8,8,0,0,0-16,0v92.69L93.66,98.34a8,8,0,0,0-11.32,11.32Z",
    mail: "M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z",
    pin: "M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z",
    calendar: "M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z",
    gear: "M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm109.94-52.79a8,8,0,0,0-3.89-5.4l-29.83-17-.12-33.62a8,8,0,0,0-2.83-6.08,111.91,111.91,0,0,0-36.72-20.67,8,8,0,0,0-6.46.59L128,41.85,97.88,25a8,8,0,0,0-6.47-.6A112.1,112.1,0,0,0,54.73,45.15a8,8,0,0,0-2.83,6.07l-.15,33.65-29.83,17a8,8,0,0,0-3.89,5.4,106.47,106.47,0,0,0,0,41.56,8,8,0,0,0,3.89,5.4l29.83,17,.12,33.62a8,8,0,0,0,2.83,6.08,111.91,111.91,0,0,0,36.72,20.67,8,8,0,0,0,6.46-.59L128,214.15,158.12,231a7.91,7.91,0,0,0,3.9,1,8.09,8.09,0,0,0,2.57-.42,112.1,112.1,0,0,0,36.68-20.73,8,8,0,0,0,2.83-6.07l.15-33.65,29.83-17a8,8,0,0,0,3.89-5.4A106.47,106.47,0,0,0,237.94,107.21Zm-15,34.91-28.57,16.25a8,8,0,0,0-3,3c-.58,1-1.19,2.06-1.81,3.06a7.94,7.94,0,0,0-1.22,4.21l-.15,32.25a95.89,95.89,0,0,1-25.37,14.3L134,199.13a8,8,0,0,0-3.91-1h-.19c-1.21,0-2.43,0-3.64,0a8.08,8.08,0,0,0-4.1,1l-28.84,16.1A96,96,0,0,1,67.88,201l-.11-32.2a8,8,0,0,0-1.22-4.22c-.62-1-1.23-2-1.8-3.06a8.09,8.09,0,0,0-3-3.06l-28.6-16.29a90.49,90.49,0,0,1,0-28.26L61.67,97.63a8,8,0,0,0,3-3c.58-1,1.19-2.06,1.81-3.06a7.94,7.94,0,0,0,1.22-4.21l.15-32.25a95.89,95.89,0,0,1,25.37-14.3L122,56.87a8,8,0,0,0,4.1,1c1.21,0,2.43,0,3.64,0a8.08,8.08,0,0,0,4.1-1l28.84-16.1A96,96,0,0,1,188.12,55l.11,32.2a8,8,0,0,0,1.22,4.22c.62,1,1.23,2,1.8,3.06a8.09,8.09,0,0,0,3,3.06l28.6,16.29A90.49,90.49,0,0,1,222.9,142.12Z",
    ticket: "M232,104a8,8,0,0,0,8-8V64a16,16,0,0,0-16-16H32A16,16,0,0,0,16,64V96a8,8,0,0,0,8,8,24,24,0,0,1,0,48,8,8,0,0,0-8,8v32a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V160a8,8,0,0,0-8-8,24,24,0,0,1,0-48ZM32,167.2a40,40,0,0,0,0-78.4V64H88V192H32Zm192,0V192H104V64H224V88.8a40,40,0,0,0,0,78.4Z",
    plane: "M185.33,114.21l29.14-27.42.17-.17a32,32,0,0,0-45.26-45.26c0,.06-.11.11-.17.17L141.79,70.67l-83-30.2a8,8,0,0,0-8.39,1.86l-24,24a8,8,0,0,0,1.22,12.31l63.89,42.59L76.69,136H56a8,8,0,0,0-5.65,2.34l-24,24A8,8,0,0,0,29,175.42l36.82,14.73,14.7,36.75.06.16a8,8,0,0,0,13.18,2.47l23.87-23.88A8,8,0,0,0,120,200V179.31l14.76-14.76,42.59,63.89a8,8,0,0,0,12.31,1.22l24-24a8,8,0,0,0,1.86-8.39Zm-.07,97.23-42.59-63.88A8,8,0,0,0,136.8,144c-.27,0-.53,0-.79,0a8,8,0,0,0-5.66,2.35l-24,24A8,8,0,0,0,104,176v20.69L90.93,209.76,79.43,181A8,8,0,0,0,75,176.57l-28.74-11.5L59.32,152H80a8,8,0,0,0,5.66-2.34l24-24a8,8,0,0,0-1.22-12.32L44.56,70.74l13.5-13.49,83.22,30.26a8,8,0,0,0,8.56-2L180.78,52.6A16,16,0,0,1,203.4,75.23l-32.87,30.93a8,8,0,0,0-2,8.56l30.26,83.22Z",
    heart: "M230.33,141.06a24.34,24.34,0,0,0-18.61-4.77C230.5,117.33,240,98.48,240,80c0-26.47-21.29-48-47.46-48A47.58,47.58,0,0,0,156,48.75,47.58,47.58,0,0,0,119.46,32C93.29,32,72,53.53,72,80c0,11,3.24,21.69,10.06,33a31.87,31.87,0,0,0-14.75,8.4L44.69,144H16A16,16,0,0,0,0,160v40a16,16,0,0,0,16,16H120a7.93,7.93,0,0,0,1.94-.24l64-16a6.94,6.94,0,0,0,1.19-.4L226,182.82l.44-.2a24.6,24.6,0,0,0,3.93-41.56ZM119.46,48A31.15,31.15,0,0,1,148.6,67a8,8,0,0,0,14.8,0,31.15,31.15,0,0,1,29.14-19C209.59,48,224,62.65,224,80c0,19.51-15.79,41.58-45.66,63.9l-11.09,2.55A28,28,0,0,0,140,112H100.68C92.05,100.36,88,90.12,88,80,88,62.65,102.41,48,119.46,48ZM16,160H40v40H16Zm203.43,8.21-38,16.18L119,200H56V155.31l22.63-22.62A15.86,15.86,0,0,1,89.94,128H140a12,12,0,0,1,0,24H112a8,8,0,0,0,0,16h32a8.32,8.32,0,0,0,1.79-.2l67-15.41.31-.08a8.6,8.6,0,0,1,6.3,15.9Z",
    instagram: "M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z",
    youtube: "M164.44,121.34l-48-32A8,8,0,0,0,104,96v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,145.05V111l25.58,17ZM234.33,69.52a24,24,0,0,0-14.49-16.4C185.56,39.88,131,40,128,40s-57.56-.12-91.84,13.12a24,24,0,0,0-14.49,16.4C19.08,79.5,16,97.74,16,128s3.08,48.5,5.67,58.48a24,24,0,0,0,14.49,16.41C69,215.56,120.4,216,127.34,216h1.32c6.94,0,58.37-.44,91.18-13.11a24,24,0,0,0,14.49-16.41c2.59-10,5.67-28.22,5.67-58.48S236.92,79.5,234.33,69.52Zm-15.49,113a8,8,0,0,1-4.77,5.49c-31.65,12.22-85.48,12-86,12H128c-.54,0-54.33.2-86-12a8,8,0,0,1-4.77-5.49C34.8,173.39,32,156.57,32,128s2.8-45.39,5.16-54.47A8,8,0,0,1,41.93,68c30.52-11.79,81.66-12,85.85-12h.27c.54,0,54.38-.18,86,12a8,8,0,0,1,4.77,5.49C221.2,82.61,224,99.43,224,128S221.2,173.39,218.84,182.47Z"
  };

  /* ---------- tiny helpers ---------- */
  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        if (attrs[k] === undefined || attrs[k] === null || attrs[k] === false) return;
        if (k === "text") node.textContent = attrs[k];
        else if (k === "class") node.className = attrs[k];
        else node.setAttribute(k, attrs[k]);
      });
    }
    (children || []).forEach(function (c) {
      if (c === null || c === undefined || c === "") return;
      node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return node;
  }

  function icon(name) {
    var ns = "http://www.w3.org/2000/svg";
    var svg = document.createElementNS(ns, "svg");
    svg.setAttribute("viewBox", "0 0 256 256");
    svg.setAttribute("fill", "currentColor");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");
    var path = document.createElementNS(ns, "path");
    path.setAttribute("d", ICONS[name]);
    svg.appendChild(path);
    return svg;
  }

  function list(name) {
    return Array.isArray(SITE[name]) ? SITE[name] : [];
  }

  /* "2026-10-20" -> "Oct 20, 2026". Anything else is shown as typed. */
  function formatDate(value) {
    if (!value) return "";
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
    if (!m) return value;
    var d = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
    return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(d);
  }

  function slot(name) {
    return Array.prototype.slice.call(document.querySelectorAll('[data-render="' + name + '"]'));
  }

  function hideSection(root) {
    var s = root.closest("section") || root;
    s.hidden = true;
  }

  function arrowLink(href, label) {
    return el("a", { class: "link-arrow", href: href }, [label, icon("arrow")]);
  }

  function statusPill(status) {
    return status ? el("span", { class: "status" + (status === "Done" ? " status--done" : ""), text: status }) : null;
  }

  /* ---------- renderers ---------- */
  var render = {};

  render.stats = function (root) {
    list("stats").forEach(function (s) {
      root.appendChild(el("li", null, [
        el("span", { class: "stats__value", text: s.value }),
        el("span", { class: "stats__label", text: s.label })
      ]));
    });
  };

  render.route = function (root) {
    root.appendChild(el("li", { class: "route__stop route__stop--home" }, [
      el("p", { class: "route__week mono", text: "Home base" }),
      el("h3", { class: "route__name", text: "Kona" }),
      el("p", { class: "route__city", text: "Hawaiʻi Island" }),
      el("p", { class: "route__note", text: "Where we build" })
    ]));
    list("events").forEach(function (e) {
      var when = [e.week, e.dates].filter(Boolean).join(", ");
      root.appendChild(el("li", { class: "route__stop" }, [
        el("p", { class: "route__week mono", text: when }),
        el("h3", { class: "route__name", text: e.name }),
        el("p", { class: "route__city", text: e.city }),
        e.note ? el("p", { class: "route__note" + (e.draft ? " draft" : ""), text: e.note }) : null
      ]));
    });
  };
  render.events = render.route;

  function updateNode(u) {
    var media = u.photo
      ? el("figure", { class: "photo" }, [
          el("img", { src: u.photo, alt: u.photoAlt || "", loading: "lazy", decoding: "async", width: "1200", height: "1200" })
        ])
      : null;
    var copy = el("div", null, [
      u.date ? el("p", { class: "update__date mono" }, [el("time", { datetime: u.date, text: formatDate(u.date) })]) : null,
      el("h3", { text: u.title }),
      u.text ? el("p", { class: u.draft ? "draft" : null, text: u.text }) : null
    ]);
    return el("article", { class: "update" + (media ? " update--has-photo" : "") }, [copy, media]);
  }

  render.updates = function (root) {
    var all = list("updates");
    if (!all.length) { hideSection(root); return; }
    all.forEach(function (u) { root.appendChild(updateNode(u)); });
  };

  /* Home: latest update + latest community story, side by side */
  render["home-news"] = function (root) {
    var u = list("updates")[0];
    var o = list("outreach").filter(function (x) { return (x.photos || []).length; })[0];
    var cards = [];

    function card(kicker, title, text, draft, img, alt, href, cta) {
      return el("article", { class: "news-card" }, [
        img ? el("figure", { class: "photo news-card__photo" }, [
          el("img", { src: img, alt: alt || "", loading: "lazy", decoding: "async", width: "1200", height: "1200" })
        ]) : null,
        el("div", { class: "news-card__body" }, [
          el("p", { class: "news-card__kicker mono", text: kicker }),
          el("h3", { text: title }),
          text ? el("p", { class: draft ? "draft" : null, text: text }) : null,
          arrowLink(href, cta)
        ])
      ]);
    }

    if (u) cards.push(card(["Latest Update", formatDate(u.date)].filter(Boolean).join(" · "),
      u.title, u.text, u.draft, u.photo, u.photoAlt, "robot.html#updates", "All Updates"));
    if (o) cards.push(card(["In the Community", o.when].filter(Boolean).join(" · "),
      o.title, o.text, o.draft, o.photos[0].src, o.photos[0].alt, "outreach.html", "Our Outreach"));

    if (!cards.length) { hideSection(root); return; }
    cards.forEach(function (c) { root.appendChild(c); });
  };

  render["logo-wall"] = function (root) {
    list("sponsors").forEach(function (s) {
      var inner = s.logo
        ? el("img", { src: s.logo, alt: s.name, loading: "lazy", decoding: "async", width: "320", height: "160" })
        : el("span", { text: s.name });
      var cls = "logo-tile" + (s.logo ? "" : " logo-tile--name");
      var tile = s.url
        ? el("a", { class: cls, href: s.url, rel: "noopener" }, [inner])
        : el("div", { class: cls }, [inner]);
      root.appendChild(el("li", null, [tile]));
    });
    if (root.hasAttribute("data-open-slot")) {
      root.appendChild(el("li", null, [
        el("a", { class: "logo-tile logo-tile--open", href: HAS_EMAIL ? "mailto:" + CONTACT.email + "?subject=" + encodeURIComponent("Sponsoring Turtle Ctrl") : "sponsors.html" }, [
          el("span", { text: "Your Logo Here" }),
          el("em", null, ["Sponsor Us", icon("arrow")])
        ])
      ]));
    }
  };

  render["footer-contact"] = function (root) {
    var items = [];
    if (CONTACT.email) items.push(el("li", null, [el("a", { href: "mailto:" + CONTACT.email }, [icon("mail"), CONTACT.email])]));
    if (CONTACT.instagram) items.push(el("li", null, [el("a", { href: CONTACT.instagram, rel: "noopener" }, [icon("instagram"), "Instagram"])]));
    if (CONTACT.youtube) items.push(el("li", null, [el("a", { href: CONTACT.youtube, rel: "noopener" }, [icon("youtube"), "YouTube"])]));
    if (!items.length) {
      var col = root.closest("#contact");
      if (col) col.hidden = true;
      return;
    }
    root.appendChild(el("ul", { class: "footer-list" }, items));
  };

  render.year = function (root) {
    root.textContent = String(new Date().getFullYear());
  };

  /* Sponsor carousel (Home): logo if there is one, otherwise the name.
     Repeats the sponsors until they fill the strip, then adds one copy so
     the loop is seamless. Speed and direction are set in css/pages.css (.marquee). */
  render["sponsor-carousel"] = function (root) {
    var sponsors = list("sponsors");
    if (!sponsors.length) { hideSection(root); return; }

    function item(s) {
      // logo (if there is one) next to the name, so small logos are still easy to recognize
      var inner = [
        s.logo ? el("img", { src: s.logo, alt: "", height: "56", decoding: "async" }) : null,
        el("span", { text: s.name })
      ];
      return el("li", null, [
        s.url
          ? el("a", { class: "marquee__item", href: s.url, rel: "noopener" }, inner)
          : el("span", { class: "marquee__item" }, inner)
      ]);
    }

    var track = el("div", { class: "marquee__track" });
    var setA = el("ul", { class: "marquee__set" });
    track.appendChild(setA);
    root.appendChild(track);
    var toggle = root.parentNode.querySelector(".marquee__toggle");

    function build() {
      root.classList.remove("is-running");
      setA.innerHTML = "";
      Array.prototype.slice.call(track.querySelectorAll(".marquee__set[aria-hidden]")).forEach(function (n) { n.remove(); });
      sponsors.forEach(function (s) { setA.appendChild(item(s)); });
      // keep repeating until one set is at least as wide as the strip
      var guard = 0;
      while (setA.scrollWidth < root.clientWidth && guard++ < 20) {
        sponsors.forEach(function (s) { setA.appendChild(item(s)); });
      }
      var setB = setA.cloneNode(true);
      setB.setAttribute("aria-hidden", "true");
      Array.prototype.forEach.call(setB.querySelectorAll("a"), function (a) { a.tabIndex = -1; });
      track.appendChild(setB);

      // one set + the gap, measured to the sub-pixel so the loop has no jump
      var shift = setB.getBoundingClientRect().left - setA.getBoundingClientRect().left;
      var speed = parseFloat(getComputedStyle(root).getPropertyValue("--marquee-speed")) || 40;
      root.style.setProperty("--marquee-shift", shift + "px");
      root.style.setProperty("--marquee-duration", (shift / speed) + "s");
      root.classList.add("is-running");
    }

    build();
    // logos change width once loaded, and the strip changes width on resize
    window.addEventListener("load", build);
    var t;
    window.addEventListener("resize", function () { clearTimeout(t); t = setTimeout(build, 200); });

    if (toggle && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      toggle.hidden = false;
      toggle.addEventListener("click", function () {
        var paused = root.classList.toggle("is-paused");
        toggle.classList.toggle("is-paused", paused);   // swaps the II / play icon
        toggle.setAttribute("aria-label", (paused ? "Play" : "Pause") + " sponsor carousel");
      });
    }
  };

  /* Sponsor names in the footer of every page */
  render["footer-sponsors"] = function (root) {
    var s = list("sponsors");
    if (!s.length) { root.hidden = true; return; }
    root.appendChild(el("span", { text: "Supported by" }));
    root.appendChild(el("ul", null, s.map(function (x) {
      return el("li", null, [x.url ? el("a", { href: x.url, rel: "noopener" }, [x.name]) : x.name]);
    })));
  };

  /* Team page: headshots + mentors. Hidden until content.js has names. */
  render.headshots = function (root) {
    var people = list("roster").filter(function (p) { return p && p.name; });
    var mentors = list("mentors").filter(function (p) { return p && p.name; });
    if (!people.length && !mentors.length) { hideSection(root); return; }
    if (!people.length) { root.hidden = true; }
    people.forEach(function (p) {
      var pic = p.headshot
        ? el("figure", { class: "photo", style: "--ratio: 4 / 5" }, [
            el("img", { src: p.headshot, alt: p.name, loading: "lazy", decoding: "async", width: "800", height: "1000" })
          ])
        : el("div", { class: "headshot__key", "aria-hidden": "true", text: p.name.charAt(0) });
      root.appendChild(el("li", { class: "headshot" }, [
        pic,
        el("p", { class: "headshot__name", text: p.name }),
        p.role ? el("p", { class: "headshot__role", text: p.role }) : null
      ]));
    });
  };

  render.mentors = function (root) {
    var mentors = list("mentors").filter(function (p) { return p && p.name; });
    if (!mentors.length) { root.hidden = true; return; }
    root.appendChild(el("h3", { text: "Mentors" }));
    root.appendChild(el("ul", { class: "mentor-list" }, mentors.map(function (m) {
      return el("li", null, [el("strong", { text: m.name }), m.role ? " · " + m.role : ""]);
    })));
  };

  /* Outreach: stories with photos are featured; the rest become "Coming Up" cards */
  render.outreach = function (root) {
    var all = list("outreach");
    var featured = all.filter(function (o) { return (o.photos || []).length; });
    var next = all.filter(function (o) { return !(o.photos || []).length; });

    function meta(o) {
      return el("p", { class: "outreach-item__meta" }, [
        statusPill(o.status),
        o.when ? el("span", null, [icon("calendar"), o.when]) : null,
        o.place ? el("span", null, [icon("pin"), o.place]) : null
      ]);
    }

    featured.forEach(function (o) {
      var photos = o.photos.slice(0, 4);
      root.appendChild(el("article", { class: "outreach-item outreach-item--photos" }, [
        el("div", null, [
          meta(o),
          el("h2", { text: o.title }),
          o.text ? el("p", { class: o.draft ? "draft" : null, text: o.text }) : null
        ]),
        el("div", { class: "outreach-photos" }, photos.map(function (ph) {
          return el("figure", { class: "photo" }, [
            el("img", { src: ph.src, alt: ph.alt || "", decoding: "async", width: "1200", height: "1200" })
          ]);
        }))
      ]));
    });

    if (next.length) {
      root.appendChild(el("div", { class: "outreach-next" }, [
        el("h2", { text: "Coming Up" }),
        el("ul", { class: "next-cards" }, next.map(function (o) {
          return el("li", { class: "next-card" }, [
            meta(o),
            el("h3", { text: o.title }),
            o.text ? el("p", { class: o.draft ? "draft" : null, text: o.text }) : null
          ]);
        }))
      ]));
    }
  };

  /* Click-to-load video: nothing from YouTube loads until someone presses play */
  render.video = function (root) {
    var id = LINKS.firstVideo;
    if (!id) { root.hidden = true; return; }
    var frame = el("div", { class: "video__frame" });
    var btn = el("button", { class: "video__play", type: "button" }, [
      el("img", { src: "https://i.ytimg.com/vi/" + id + "/hqdefault.jpg", alt: "", loading: "lazy" }),
      el("span", { text: "Play video" })
    ]);
    btn.addEventListener("click", function () {
      frame.innerHTML = "";
      frame.appendChild(el("iframe", {
        src: "https://www.youtube-nocookie.com/embed/" + id + "?autoplay=1",
        title: "What is FIRST Robotics Competition?",
        allow: "autoplay; encrypted-media; picture-in-picture",
        allowfullscreen: "true"
      }));
    });
    frame.appendChild(btn);
    root.appendChild(frame);
  };

  /* Sponsor packet: download if there's a PDF, "request" by email if not,
     and hide the whole block if neither is possible yet. */
  render.packet = function (root) {
    if (HAS_EMAIL) {
      root.appendChild(el("a", { class: "btn btn--primary", href: "mailto:" + CONTACT.email + "?subject=" + encodeURIComponent("Sponsoring Turtle Ctrl") }, ["Sponsor Us"]));
    }
    if (LINKS.sponsorPacket) {
      root.appendChild(el("a", { class: "btn btn--secondary", href: LINKS.sponsorPacket, download: "" }, [icon("download"), "Download Packet"]));
    } else if (HAS_EMAIL) {
      root.appendChild(el("a", { class: "btn btn--secondary", href: "mailto:" + CONTACT.email + "?subject=" + encodeURIComponent("Sponsor packet request") }, [icon("mail"), "Request the Packet"]));
    } else {
      hideSection(root);
    }
  };

  /* ---------- links that depend on content.js ---------- */
  function wireLinks() {
    // Contact buttons: email if we have one. Without an email they'd go nowhere, so they hide.
    Array.prototype.forEach.call(document.querySelectorAll("[data-contact]"), function (a) {
      var subject = a.getAttribute("data-contact");
      if (HAS_EMAIL) {
        a.href = "mailto:" + CONTACT.email + (subject ? "?subject=" + encodeURIComponent(subject) : "");
      } else if (!(a.hasAttribute("data-join") && LINKS.joinForm)) {
        (a.closest(".nav-contact") || a).hidden = true;
      }
    });
    // Join buttons go to the join form when there is one
    Array.prototype.forEach.call(document.querySelectorAll("[data-join]"), function (a) {
      if (LINKS.joinForm) { a.href = LINKS.joinForm; a.rel = "noopener"; a.hidden = false; }
    });
    // Blocks that only make sense with an email (e.g. "invite us to your event")
    if (!HAS_EMAIL) {
      Array.prototype.forEach.call(document.querySelectorAll("[data-needs-email]"), function (n) { n.hidden = true; });
    }
    // "Sponsor Packet" jump link: only when the packet block will show
    if (!LINKS.sponsorPacket && !HAS_EMAIL) {
      Array.prototype.forEach.call(document.querySelectorAll("[data-packet-link]"), function (n) { n.hidden = true; });
    }
  }

  /* ---------- run ---------- */
  Object.keys(render).forEach(function (name) {
    slot(name).forEach(function (root) {
      try { render[name](root); }
      catch (err) { if (window.console) console.error("Could not show " + name + ". Check content.js.", err); }
    });
  });

  wireLinks();

  /* Inline icons on static markup: <span data-icon="arrow"></span> */
  Array.prototype.forEach.call(document.querySelectorAll("[data-icon]"), function (span) {
    var name = span.getAttribute("data-icon");
    if (!ICONS[name]) return;
    if (span.className) { span.appendChild(icon(name)); span.removeAttribute("data-icon"); }
    else span.replaceWith(icon(name));
  });
})();
