import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  isActive: false,

};

const mutations = {
  updateMessage (state, payload) {
    state.isActive = payload.isActive;
  }
}

export default new Vuex.Store({
  state,
  mutations
});