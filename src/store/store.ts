import Vue from 'vue';
import Vuex from 'vuex';
import quotes from './quotes/quotes.store';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    quotes: null,
  },
  modules: {
    quotes,
  },
});
