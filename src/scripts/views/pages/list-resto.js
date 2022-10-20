/* eslint-disable linebreak-style */
/* eslint-disable no-shadow */
/* eslint-disable import/named */
/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable no-empty-function */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */

import TheRestoDbSource from '../../data/therestodb-source';
import { restoItemTemplate } from '../templates/template-resto';
/* eslint-disable linebreak-style */
const ListResto = {
  async render() {
    return `
      <article tabindex="0" class="container-dua">
        <h2 class="list-resto">List Resto</h2><hr>
        <div id="resto" class="resto">
        </div>
      </article>
        `;
  },

  async afterRender() {
    const resto = await TheRestoDbSource.listResto();
    const restoContainer = document.querySelector('#resto');

    resto.forEach((restaurant) => {
      restoContainer.innerHTML += restoItemTemplate(restaurant);
    });
  },
};

export default ListResto;
