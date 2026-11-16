// Fade-in on scroll (like the Wix entrance animations)
(function () {
  var els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) { els.forEach(function (e) { e.classList.add('in'); }); return; }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { threshold: 0.15 });
  els.forEach(function (e) { io.observe(e); });
})();

// Gallery lightbox with Previous / Next / Close
(function () {
  var lb = document.getElementById('lightbox');
  if (!lb) return;
  var links = Array.prototype.slice.call(document.querySelectorAll('.g-link'));
  var img = lb.querySelector('img'), cap = lb.querySelector('figcaption'), i = 0;
  function show(n) {
    i = (n + links.length) % links.length;
    img.src = links[i].href;
    cap.textContent = links[i].dataset.num + '  ' + links[i].dataset.caption;
    lb.hidden = false;
  }
  links.forEach(function (a, n) { a.addEventListener('click', function (e) { e.preventDefault(); show(n); }); });
  lb.querySelector('.lb-close').onclick = function () { lb.hidden = true; };
  lb.querySelector('.lb-prev').onclick = function () { show(i - 1); };
  lb.querySelector('.lb-next').onclick = function () { show(i + 1); };
  lb.addEventListener('click', function (e) { if (e.target === lb) lb.hidden = true; });
  document.addEventListener('keydown', function (e) {
    if (lb.hidden) return;
    if (e.key === 'Escape') lb.hidden = true;
    if (e.key === 'ArrowLeft') show(i - 1);
    if (e.key === 'ArrowRight') show(i + 1);
  });
})();
