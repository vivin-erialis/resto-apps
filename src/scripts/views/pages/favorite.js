/* eslint-disable linebreak-style */
import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { restoItemTemplate } from '../templates/template-resto';
/* eslint-disable linebreak-style */
const Favorite = {
  async render() {
    return `
    <article class="container-dua">
        <h2 class="list-resto">List Resto Favorite</h2><hr>
        <div id="resto" class="resto">
        </div>
      </article>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestoIdb.getAllResto();
    const restoContainer = document.querySelector('#resto');

    restaurants.forEach((resto) => {
      restoContainer.innerHTML += restoItemTemplate(resto);
    });
  },
};

export default Favorite;
