(function () {
  var root = document.documentElement;
  var toggle = document.querySelector('.theme-toggle');
  var stored = null;

  try { stored = localStorage.getItem('theme'); } catch (e) { /* storage disabled */ }

  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  var theme = stored || (prefersDark ? 'dark' : 'light');
  root.setAttribute('data-theme', theme);

  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) { /* ignore */ }
    });
  }

  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
