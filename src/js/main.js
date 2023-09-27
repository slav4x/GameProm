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
        breakpoints: {
          768: {
            destroy: true,
          },
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
      breakpoints: {
        1024: {
          gap: 24,
        },
        768: {
          perPage: 1,
        },
      },
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
      focus: 'center',
      breakpoints: {
        1200: {
          perPage: 2,
          focus: false,
        },
        1024: {
          gap: 24,
        },
        768: {
          perPage: 1,
        },
      },
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

  const burger = document.querySelector('.header-burger');
  const nav = document.querySelector('.header-nav');
  burger.addEventListener('click', function () {
    burger.classList.toggle('open');
    nav.classList.toggle('open');
  });

  if (document.querySelector('.tabs-switch')) {
    const tabs = document.querySelector('.tabs-switch');
    const contentItems = document.querySelector('.content');
    const btnWrap = document.querySelector('.btn-wrap');

    function showCategory(category) {
      contentItems.querySelectorAll('li').forEach((item) => {
        const itemCategory = item.dataset.category;
        item.classList.toggle('hidden', category !== 'all' && itemCategory !== category);
      });
    }

    tabs.addEventListener('click', function (event) {
      const tab = event.target.closest('li');
      if (!tab) return;

      const category = tab.dataset.category;

      tabs.querySelectorAll('li').forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      showCategory(category);

      contentItems.classList.add('full');
      btnWrap.style.display = 'none';
    });

    btnWrap.addEventListener('click', function () {
      contentItems.classList.add('full');
      btnWrap.style.display = 'none';
    });
  }

  if (document.querySelector('.media-page')) {
    const content = document.querySelector('.media-grid');
    const btnWrap = document.querySelector('.btn-wrap');

    btnWrap.addEventListener('click', function () {
      content.classList.add('full');
      btnWrap.style.display = 'none';
    });
  }
});
