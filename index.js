document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  function lazyLoad() {
    const iframes = document.querySelectorAll('iframe[data-src]');
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(function (image) {
      if (
        image.getBoundingClientRect().top < window.innerHeight &&
        !image.loaded
      ) {
        image.src = image.getAttribute('data-src');
        image.loaded = true;
      }
    });
    iframes.forEach(function (iframe) {
      if (
        iframe.getBoundingClientRect().top < window.innerHeight &&
        !iframe.loaded
      ) {
        iframe.src = iframe.getAttribute('data-src');
        iframe.loaded = true;
      }
    });
  }
  // Initial load
  lazyLoad();

  // Add a scroll event listener to load images, iframes, and background images as the user scrolls
  window.addEventListener('scroll', lazyLoad);
});
