/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
import ListResto from "../views/pages/list-resto";
import Detail from "../views/pages/detail";
import Favorite from "../views/pages/favorite";

const routes = {
  '/': ListResto,
  '/list-resto': ListResto,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
