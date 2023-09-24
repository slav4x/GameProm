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
});
