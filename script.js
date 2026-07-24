// Verification ledger reveal — the page's only animation.
// Rows are fully present in the DOM; this only staggers their appearance.
// Skipped entirely when the visitor prefers reduced motion.
(function () {
  var ledger = document.querySelector('.ledger');
  if (!ledger) return;

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return;

  var rows = ledger.querySelectorAll('.ledger-row');
  rows.forEach(function (row, i) {
    row.style.setProperty('--row-index', i);
  });

  ledger.classList.add('is-armed');
  // Next frame, start the staggered fade so the armed state paints first.
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      ledger.classList.add('is-live');
    });
  });
})();

// Footer year.
(function () {
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
