class textBlock extends HTMLElement {
    constructor() {
      super();
      this.image = this.querySelector('.text-block-image');
      this.handleMouse();
      window.addEventListener('resize', this.handleMouse.bind(this));
    }

    handleMouse() {
        if(window.matchMedia("(min-width: 1024px)") && !!this.image) {
            this.addEventListener('mousemove', this.setPosition.bind(this))
            this.addEventListener('mouseenter', this.showImage.bind(this));
            this.addEventListener('mouseleave', this.hideImage.bind(this));
        }
    }
    setPosition(e) {
        const {top, left} = e.currentTarget.getBoundingClientRect();
        const imageWidth = this.image.clientWidth;
        this.style.cssText = `--top: ${e.clientY - top}px; --left: ${(e.clientX - left) - imageWidth}px`;
    }

    showImage() {
        this.querySelector('.text-block-image').classList.add('show');
    }

    hideImage() {
        if(this.querySelector('.text-block-image').classList.contains('show')) this.querySelector('.text-block-image').classList.remove('show');
    }
  }

  customElements.define('text-hover-image', textBlock);