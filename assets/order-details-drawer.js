class orderDetails extends HTMLElement {
    constructor() {
      super();
      this.querySelector('.details-button').addEventListener('click', this.detailsButtonClickHandler.bind(this));
      this.querySelector('.back-button').addEventListener('click', this.backButtonClickHandler.bind(this));
      this.details = this.querySelector('.account-single-order-details');
      console.log(this.details.offsetHeight, this.offsetHeight);
    }

    detailsButtonClickHandler() {
        this.classList.add('active-next');
        if(this.details && this.details.offsetHeight > this.offsetHeight) this.style.height = `${this.details.offsetHeight}px`;
    }

    backButtonClickHandler() {
        if(this.classList.contains('active-next')) this.classList.remove('active-next');
        if(this.hasAttribute('style')) this.removeAttribute('style'); 
    }
  }

  customElements.define('order-details', orderDetails);