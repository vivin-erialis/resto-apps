/* eslint-disable linebreak-style */
class HeaderApp extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <style>
    .jumbotron {
      padding: 10px;
      background-color: #6D8B74;
      color:#fff;
    }

    nav {
      text-align: center;
    }
    
    nav li {
      display: inline;
      list-style-type: none;
      margin-right: 20px;
    }
    nav a:hover {
      color: #5F7161 ;
    }
    
    nav a {
      font-size: 18px;
      text-decoration: none;
      color: white;
    }
    </style>
        <div class="jumbotron">
        <a href="#" id="hamburgerMenu" class="header-menu" aria-label="navigation-menu">☰</a>
          <h1 class="name-apps">Resto Apps</h1>
          <nav id="drawerNavigation" class="navbar">
            <ul class="nav-list">
              <li class="nav-item"><a href="/">Home</a></li>
              <li class="nav-item"><a href="#/favorite">Favorite</a></li>
              <li class="nav-item"><a href="#/list-resto">List Resto</a></li>
              <li class="nav-item"><a href="https://github.com/vivin-erialis/BelajarGitHub">About Us</a></li>
            </ul>
          </nav>
      </div>
        `;
  }
}

customElements.define('header-app', HeaderApp);
