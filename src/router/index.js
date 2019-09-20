import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

import movie from "./movie";
import mine from "./mine";
import cinema from "./cinema";
import city from "./city";
import search from "./search";

export default new Router({
  routes: [   
  	{
  		path:"/",
  		redirect:"/movie"
  	},
    movie,     
    mine,
    cinema,
    city,
    search,
  ]
})
