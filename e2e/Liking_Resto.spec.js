/* eslint-disable no-undef */
Feature('Liking resto');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('like and unlike resto', ({ I }) => {
  I.seeElement('#resto');
  I.see('', '#resto');

  pause();
});
