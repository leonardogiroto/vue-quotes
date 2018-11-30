import * as types from './types';
import { Quote } from '@/interfaces/quote.interface';

const state = {
  quotes: null,
};

const getters = {
  [types.GET_QUOTE]: (currState) => {
    return currState.quotes;
  },
};

const mutations = {
  [types.MUTATE_SET_QUOTE]: (currState, payload: Quote) => {
    currState.quotes = payload;
  },
};

const actions = {
  [types.UPDATE_VALUE]: ({ commit }, payload: Quote) => {
    commit(types.MUTATE_SET_QUOTE, payload);
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
