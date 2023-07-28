class featuredCollectionSlider extends HTMLElement {
    constructor() {
      super();
      this.setUpslider();
    }

    setUpslider() {
        console.log(this.querySelector('.splide'))
        const splide = new Splide(this.querySelector('.splide'), {
            type   : 'slide',
            perPage: 2,
            drag   : true,
            cloneStatus: false,
            arrows: false,
            pagination: false,
            gap: '1rem',
            clones: 5,
            mediaQuery: 'min',
            breakpoints: {
                768: {
                    perPage: 3,
                },
                1024: {
                    destroy: true,
                },
            }
          });

          splide.mount();

          
    }
  }

  customElements.define('featured-collection-slider', featuredCollectionSlider);