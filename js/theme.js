const toggle = document.getElementById('theme-toggle');
const stored = localStorage.getItem('theme');

// init
if (stored === 'dark') document.body.classList.add('dark');

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});
