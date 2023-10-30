class newsletterPopup extends HTMLElement {
    constructor() {
      super();
      this.closeBtn = this.querySelector('#popupClose');
      this.cName = 'newsletterClose';
      this.cValue = 'yes';
      this.days = 15;
      this.cookieFound = this.checkCookie(this.cName);
      this.id = this.dataset.id;
      this.scrollPercent = 10;
      this.delay = 5000;

      document.addEventListener('shopify:section:select', (e) => {
        if (e.detail.sectionId === this.id) {
          this.showNewsletterPopup();
          return;
        }
        this.closeNewsletterPopup();
      });

      document.addEventListener('shopify:section:deselect', (e) => {
        if (e.detail.sectionId === this.id) this.closeNewsletterPopup();
      });

      document.addEventListener('shopify:inspector:activate', () => {
        this.closeNewsletterPopup();
      });

      window.addEventListener('click', this.clickHandler.bind(this));
      let t = 100;
      const showTime = setInterval(() => {
        if(this.getScrollPercent() && t >= this.delay) {
             this.initNewsletterPopup(this.cookieFound);
            clearInterval(showTime);
        }
        t += 100
      }, 100);

    }

    getScrollPercent() {
        let h = document.documentElement,
          b = document.body,
          st = 'scrollTop',
          sh = 'scrollHeight';
        return Math.floor(((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100) >= this.scrollPercent;
    }

    initNewsletterPopup(found) {
      if (found) {
        this.closeNewsletterPopup();
        return;
      }
      this.showNewsletterPopup();
    }

    clickHandler(event) {
      if (!event.target.closest('.newsletter-popup') || !event.target.closest('#Subscribe--popup') || event.target.closest('#popupClose')) {
        this.setCookie(this.cName, this.cValue, this.days);
        this.closeNewsletterPopup();
      }
    }

    showNewsletterPopup() {
      this.ariaHidden = false;
    }

    closeNewsletterPopup() {
      this.ariaHidden = true;
    }

    setCookie(name, value, days) {
      const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
      document.cookie = `${name}=${value};${expires};path=/`;
    }

    checkCookie(name) {
      return document.cookie.split(';').some((item) => item.trim().startsWith(`${name}=`));
    }
  }
  customElements.define('newsletter-popup', newsletterPopup);