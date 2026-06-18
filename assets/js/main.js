/* DFORTH Technologies — interactions */
(function () {
  "use strict";

  /* ---- Mobile nav + scrolled state ---- */
  var nav = document.querySelector(".nav");
  var burger = document.querySelector(".nav__burger");
  if (burger && nav) {
    burger.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
    nav.querySelectorAll(".nav__links a").forEach(function (a) {
      a.addEventListener("click", function () { nav.classList.remove("open"); });
    });
  }
  function onScroll() {
    if (!nav) return;
    nav.classList.toggle("scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Reveal on scroll ---- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el, i) {
      el.style.transitionDelay = (i % 3) * 0.08 + "s";
      io.observe(el);
    });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---- Count-up stats ---- */
  var counters = document.querySelectorAll("[data-count]");
  if ("IntersectionObserver" in window && counters.length) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target;
        var target = parseFloat(el.getAttribute("data-count"));
        var suffix = el.getAttribute("data-suffix") || "";
        var dur = 1400, start = null;
        function tick(ts) {
          if (!start) start = ts;
          var p = Math.min((ts - start) / dur, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          var val = target * eased;
          el.textContent = (target % 1 ? val.toFixed(1) : Math.round(val)) + suffix;
          if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        cio.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach(function (c) { cio.observe(c); });
  }

  /* ---- FAQ accordion ---- */
  document.querySelectorAll(".faq__q").forEach(function (q) {
    q.addEventListener("click", function () {
      var item = q.closest(".faq__item");
      var ans = item.querySelector(".faq__a");
      var isOpen = item.classList.contains("open");
      document.querySelectorAll(".faq__item.open").forEach(function (o) {
        o.classList.remove("open");
        o.querySelector(".faq__a").style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add("open");
        ans.style.maxHeight = ans.scrollHeight + "px";
      }
    });
  });

  /* ---- Contact form (front-end demo handling) ---- */
  var form = document.querySelector("#contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = form.querySelector(".form-success");
      if (ok) ok.classList.add("show");
      form.reset();
      setTimeout(function () { if (ok) ok.classList.remove("show"); }, 5000);
    });
  }

  /* ---- Footer year ---- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
