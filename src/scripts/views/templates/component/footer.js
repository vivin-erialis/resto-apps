/* eslint-disable linebreak-style */
class FooterApp extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="footer">
        Resto Apps &copy 2022-Vivin Erilais Puteri
    </div>
        `;
  }
}
customElements.define('footer-app', FooterApp);
