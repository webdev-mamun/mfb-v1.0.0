class loginDrawer extends HTMLElement {
    constructor() {
      super();
      this.loginForm = this.querySelector('#account-drawer-login');
      this.recoverForm = this.querySelector('#account-drawer-recover');
      this.querySelector('#recoverBtn').addEventListener('click', this.handleRecoverBtnClick.bind(this));
      this.querySelector('#cancleBtn').addEventListener('click', this.handleCancleBtnClick.bind(this));
    }
    handleRecoverBtnClick() {
        this.loginForm.classList.add('hidden');
        this.recoverForm.classList.remove('hidden');
    }

    handleCancleBtnClick() {
        this.loginForm.classList.remove('hidden');
        this.recoverForm.classList.add('hidden');
    }
  }

  customElements.define('login-drawer', loginDrawer);