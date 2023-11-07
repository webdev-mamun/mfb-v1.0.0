class newsletterPopup extends HTMLElement {
    constructor() {
      super();
      this.closeBtn = this.querySelector('#popupClose');
      this.newsletter = this.querySelector('.newsletter-popup');
      this.submitBtn = this.querySelector('#Subscribe--popup');
      this.cName = 'newsletterClose';
      this.cValue = 'yes';
      this.days = this.dataset.frequency;
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

      this.submitBtn.addEventListener('click', this.handleSubmit.bind(this));
      window.addEventListener('click', this.clickHandler.bind(this));
      let t = 100;
      if(this.getCookie('challenge') === 'true') {
        if(!window.location.pathname.includes('/challenge')){
          this.initNewsletterPopup(false);
          document.cookie = `challenge=false;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
          // Get the current URL
          const currentURL = window.location.href;

          // Create a URL object
          const url = new URL(currentURL);

          // Remove the 'customer_posted' query parameter
          url.searchParams.delete('customer_posted');

          // Get the updated URL
          const updatedURL = url.toString();

          // Update the URL without reloading the page
          window.history.replaceState({}, document.title, updatedURL);
        }
      } else {
        const showTime = setInterval(() => {
          if(this.getScrollPercent() && t >= this.delay) {
              this.initNewsletterPopup(this.cookieFound);
              clearInterval(showTime);
          }
          t += 100
        }, 100);
      }
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
      const _location = window.location.pathname;
      if(!_location.includes('/challenge')){
        if((event.target !== this.newsletter && !this.newsletter.contains(event.target)) || (event.target === this.closeBtn || this.closeBtn.contains(event.target))) {
          this.setCookie(this.cName, this.cValue, this.days);
          this.closeNewsletterPopup();
        }
      }
      // if (!event.target.closest('.newsletter-popup') || event.target.closest('#popupClose')) {
      //   this.setCookie(this.cName, this.cValue, this.days);
      //   this.closeNewsletterPopup();
      // }
    }

    showNewsletterPopup() {
      this.ariaHidden = false;
    }

    closeNewsletterPopup() {
      this.ariaHidden = true;
    }

    setCookie(name, value, days) {
      const expires = `expires=${new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString()}`;
      document.cookie = `${name}=${value};${expires};path=/`;
    }

    handleSubmit() {
      this.setCookie('challenge', true, 1);
    }

    checkCookie(name) {
      return document.cookie.split(';').some((item) => item.trim().startsWith(`${name}=`));
    }

    getCookie(name){
      const regex = new RegExp(`(^| )${name}=([^;]+)`)
      const match = document.cookie.match(regex)
      if (match) {
        return match[2]
      }
    }
  }
  customElements.define('newsletter-popup', newsletterPopup);