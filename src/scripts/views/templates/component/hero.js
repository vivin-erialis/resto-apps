/* eslint-disable linebreak-style */
class HeroElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    </style>
        <article class="container-satu">
            <h1 class="resto-des">Welcome to Restaurant Apps</h1><br>
            <p class="resto-des">Manjakan lidahmu  dengan wisata kuliner khas Indonesia :)</p>
            <picture>
            <source media="(max-width: 600px)" srcset="./images/hero-image_2-small.jpg">
            <img src='./images/hero-image_2-large.jpg' 
                 alt="dirt rally poster">
          </picture>
        </article>
        `;
  }
}

customElements.define('hero-element', HeroElement);
