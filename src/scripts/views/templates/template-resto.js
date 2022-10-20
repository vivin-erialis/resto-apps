/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const detailRestoTemplate = (resto) => `
<style>
  .text-title {
    font-size : 15px;
    color: brown;
    margin-bottom: 3px;
  }

  .list-review {
    border-radius: 10px;
    box-shadow: 0 1px 2px 0 #6D8B74;
    margin-top: 5px;
    padding : 5px;
  }

  .review-name {
    text-decoration : dashed;
  }
  
</style>
<article class="detail-resto">
    <h2 class="detail-resto-name">${resto.name} (${resto.city})</h2>
    <p class="detail-resto-address">${resto.address} </p>
    <p class="detail-resto-rating">⭐️ ${resto.rating}</p>
    
<div class="detail-section">
    <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" 
    alt="Gambar suasana restoran yang berada di ${resto.city}"/>
   
    <p class="detail-resto-description">${resto.description}</p>
</div><hr>

<div class="detail-item">
    <section>
    <h4 class="text-title">Foods Menu:</h4>
        ${resto.menus.foods.reduce((show, value) => show.concat(`<li>${value.name}</li>`), '')}
    </section>
    <section>
    <h4 class="text-title">Drinks Menu:</h4>
        ${resto.menus.drinks.reduce((show, value) => show.concat(`<li>${value.name}</li>`), '')}
    </section>
    <section>
    ${resto.customerReviews.reduce((show, value) => show.concat(`<br>
    <div class="list-review">
    <p class="review-name">${value.name}</p>
          <p class="review-description">${value.review}</p>
          <p class="review-date">${value.date}</p>
    </div>
          `), '<h4 class="text-title">Customer Reviews:</h4>')}
    </section>
</div>

`;

const restoItemTemplate = (resto) => `
<article class="resto-item">
    <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" 
    alt="Gambar suasana restoran yang berada di ${resto.city}"/>
    <h1 class="resto-name"><a href="/#/detail/${resto.id}">${resto.name} (${resto.city})</a></h1>
    <p class="resto-description">${resto.description}</p>
    <p class="resto-rating">Rating ${resto.rating}</p>
</article>
`;

const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  restoItemTemplate,
  detailRestoTemplate,
  createLikeRestoButtonTemplate,
  createUnlikeButtonTemplate,
};
