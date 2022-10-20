/* eslint-disable linebreak-style */
/* eslint-disable no-prototype-builtins */
/* eslint-disable consistent-return */
/* eslint-disable linebreak-style */
/* eslint-disable no-empty-function */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const FavoriteRestoIdb = {
  async getResto(id) {
    if (!id) {
      return;
    }

    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },
  async getAllResto() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putResto(resto) {
    if (!resto.hasOwnProperty('id')) {
      return;
    }

    return (await dbPromise).put(OBJECT_STORE_NAME, resto);
  },
  async deleteResto(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },

  async searchResto() {

  },
};

export default FavoriteRestoIdb;
