class ageVerification extends HTMLElement {
    constructor() {
      super();
      this.id = this.dataset.id
      this.cName = 'isAdalt';
      this.cValue = 'yes';
      this.cookieFound = this.checkCookie(this.cName);
      this.redirectUrl = this.dataset.redirecUrl;
      this.redirectPage = window.location.href.indexOf(this.redirectUrl) !== -1;

      if (!this.cookieFound && !this.redirectPage) {
        this.showPopup();
      } else {
        this.closePopup();
      }

    document.addEventListener('shopify:section:select', (e) => {
        if(e.detail.sectionId === this.id) {
            this.showPopup();
            return;
        }
        this.closePopup();
    });

    document.addEventListener('shopify:section:deselect', (e) => {
        if(e.detail.sectionId === this.id) this.closePopup();
    });

    document.addEventListener('shopify:inspector:activate', () => {
        this.closePopup();
    });

      this.querySelector('#accept').addEventListener('click', this.acceptButtonHandler.bind(this));
      this.querySelector('#refuse').addEventListener('click', this.refuseButtonHandler.bind(this));
    }

    acceptButtonHandler() {
      this.setCookie(this.cName, this.cValue);
      this.closePopup();
    }

    refuseButtonHandler() {
      this.redirect();
      this.closePopup();
    }

    setCookie(cName, cValue) {
      const days = 14;
      const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
      document.cookie = `${cName}=${cValue};${expires};path=/`;
    }

    redirect() {
        this.redirectUrl !== 'null' ? (window.location = this.redirectUrl) : (window.location = 'https://www.google.com/');
    }

    checkCookie(name) {
      return document.cookie.split(';').some((item) => item.trim().startsWith(`${name}=`));
    }

    showPopup() {
        
      this.ariaHidden = false;
      document.body.classList.add('overflow-hidden');
    }

    closePopup() {
        this.ariaHidden = true;
      if (this.classList.contains('block')) this.classList.remove('block');
      if (document.body.classList.contains('overflow-hidden')) document.body.classList.remove('overflow-hidden');
    }
  }

  customElements.define('age-verification', ageVerification);