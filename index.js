const textPdfEl = document.querySelector('.footer-box h5');
const pdfLinkEl = document.querySelector('.footer-link');
const pushtoTopEl = document.querySelector('.pushtoTop');

pdfLinkEl.addEventListener('mouseover', () => {
  textPdfEl.classList.add('runin');
  textPdfEl.classList.remove('runout');
});
pdfLinkEl.addEventListener('mouseout', () => {
  textPdfEl.classList.remove('runin');
  textPdfEl.classList.add('runout');
});

document.addEventListener('scroll', () => {
  const pageY = window.pageYOffset;
  if (pageY >= 390) {
    pushtoTopEl.style.opacity = '1';
  } else {
    pushtoTopEl.style.opacity = '0';
  }
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector(`${anchor.getAttribute('href')}`).scrollIntoView({
      behavior: 'smooth',
    });
  });
});
