/* eslint-disable operator-linebreak */
/* eslint-disable no-inner-declarations */

const viewportFix = (width) => {
  const meta = document.querySelector('meta[name="viewport"]');
  meta.setAttribute('content', `user-scalable=no, width=${screen.width <= width ? width : 'device-width'}`);
};

viewportFix(360);

document.addEventListener('DOMContentLoaded', function () {
  const maskPhone = () => {
    const maskedElements = document.querySelectorAll('.masked');
    const maskOptions = {
      mask: '+7 (000) 000-00-00',
      onFocus: () => {
        if (this.value === '') this.value = '+7 ';
      },
      onBlur: () => {
        if (this.value === '+7 ') this.value = '';
      },
    };

    maskedElements.forEach((item) => {
      new IMask(item, maskOptions);
    });
  };

  maskPhone();

  Fancybox.bind('[data-fancybox]', {
    dragToClose: false,
    autoFocus: false,
    placeFocusBack: false,
    Thumbs: false,
  });

  const sliderClasses = ['.company-slider-1', '.company-slider-2'];

  sliderClasses.forEach((sliderClass) => {
    const sliderElement = document.querySelector(sliderClass);

    if (sliderElement) {
      const companySlider = new Splide(sliderClass, {
        type: 'loop',
        rewind: false,
        direction: 'ttb',
        pagination: false,
        arrows: false,
        pauseOnHover: false,
        autoHeight: true,
        height: '100%',
        gap: 24,
        center: true,
        autoScroll: {
          speed: 0.5,
        },
      });

      companySlider.mount(window.splide.Extensions);
    }
  });

  if (document.querySelector('.projects-slider')) {
    const arrowNext = document.querySelector('.projects-next');
    const arrowPrev = document.querySelector('.projects-prev');
    const bar = document.querySelector('.projects-bar');

    const projectsSlider = new Splide('.projects-slider', {
      type: 'loop',
      perPage: 2,
      perMove: 1,
      pagination: false,
      arrows: false,
      gap: 30,
    });

    arrowNext.addEventListener('click', (e) => {
      projectsSlider.go('+1');
    });

    arrowPrev.addEventListener('click', (e) => {
      projectsSlider.go('-1');
    });

    projectsSlider.on('mounted move', function () {
      const end = projectsSlider.Components.Controller.getEnd() + 1;
      const rate = Math.min((projectsSlider.index + 1) / end, 1);
      bar.style.width = String(100 * rate) + '%';
    });

    projectsSlider.mount();
  }

  if (document.querySelector('.media-slider')) {
    const arrowNext = document.querySelector('.media-next');
    const arrowPrev = document.querySelector('.media-prev');
    const bar = document.querySelector('.media-bar');

    const mediaSlider = new Splide('.media-slider', {
      type: 'loop',
      perPage: 3,
      perMove: 1,
      pagination: false,
      arrows: false,
      gap: 30,
    });

    arrowNext.addEventListener('click', (e) => {
      mediaSlider.go('+1');
    });

    arrowPrev.addEventListener('click', (e) => {
      mediaSlider.go('-1');
    });

    mediaSlider.on('mounted move', function () {
      const end = mediaSlider.Components.Controller.getEnd() + 1;
      const rate = Math.min((mediaSlider.index + 1) / end, 1);
      bar.style.width = String(100 * rate) + '%';
    });

    mediaSlider.mount();
  }

  if (document.querySelector('.media-single__slider')) {
    const arrowNext = document.querySelector('.media-single-next');
    const arrowPrev = document.querySelector('.media-single-prev');
    const bar = document.querySelector('.media-single-bar');

    const mediaSingleSlider = new Splide('.media-single__slider', {
      type: 'loop',
      pagination: false,
      arrows: false,
      autoScroll: false,
      gap: 30,
      grid: {
        rows: 3,
        cols: 3,
        gap: {
          row: 30,
          col: 30,
        },
      },
    });

    arrowNext.addEventListener('click', (e) => {
      mediaSingleSlider.go('+1');
    });

    arrowPrev.addEventListener('click', (e) => {
      mediaSingleSlider.go('-1');
    });

    mediaSingleSlider.on('mounted move', function () {
      const end = mediaSingleSlider.Components.Controller.getEnd() + 1;
      const rate = Math.min((mediaSingleSlider.index + 1) / end, 1);
      bar.style.width = String(100 * rate) + '%';
    });

    mediaSingleSlider.mount(window.splide.Extensions);
  }

  document.querySelectorAll('.media-single__slider a[data-fancybox="video"]').forEach(function (item) {
    const video = item.getAttribute('href');
    const videoID = video.match(/^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);
    item.querySelector('img').setAttribute('src', 'https://i.ytimg.com/vi/' + videoID[2] + '/sd1.jpg');
  });
});
