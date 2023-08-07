class marqueeComponent extends HTMLElement {
    constructor() {
      super();
      this.setUpslider();
    }
    setUpslider() {
        const splide = new Splide(this.querySelector('.splide'), {
            type   : 'loop',
            drag   : 'free',
            cloneStatus: false,
            autoWidth: true,
            arrows: false,
            pagination: false,
            gap: '5rem',
            clones: 10,
            autoScroll: {
              speed: 1,
            },
          });

        splide.mount(window.splide.Extensions);
    }
  }

  customElements.define('marquee-component', marqueeComponent);