console.log('slider produ');
class producersSlider extends HTMLElement {
    constructor() {
      super();
      this.setUpslider();
    }

    setUpslider() {
        console.log(this.querySelector('.splide'))
        //new Splide( this.querySelector('.splide') ).mount( window.splide.Extensions );
        const splide = new Splide(this.querySelector('.splide'), {
            type   : 'loop',
            drag   : 'free',
            focus  : 'center',
            cloneStatus: false,
            autoWidth: true,
            arrows: false,
            pagination: false,
            fixedHeight: 260,
            gap: '5rem',
            clones: 5,
            breakpoints: {
                1024: {
                    fixedHeight: 166,
                    gap: '1.7rem'
                },
          },
            autoScroll: {
              speed: 1,
            },
          });

          splide.mount(window.splide.Extensions);

          
    }
  }

  customElements.define('producers-slider', producersSlider);