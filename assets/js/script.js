const toggleTheme = document.querySelector('#toggleTheme');
const rootHtml = document.documentElement;

toggleTheme.addEventListener('click', () => {
  const currentTheme = rootHtml.getAttribute('data-theme');

  if(currentTheme === 'dark') {
    rootHtml.setAttribute('data-theme', 'light');
  } else {
    rootHtml.setAttribute('data-theme', 'dark');
  };

  toggleTheme.classList.toggle('bi-sun');
  toggleTheme.classList.toggle('bi-moon-stars');
});