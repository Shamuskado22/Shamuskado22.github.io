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

const accordionHeaders = document.querySelectorAll('.accordion__header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const accordionItem = header.parentElement;
    const accordionActive = accordionItem.classList.contains('active');

    accordionActive ? accordionItem.classList.remove('active') : accordionItem.classList.add('active');
  });
});