import Vue from 'vue';

const initialState = () => ({
  user: {},
  repositories: [],
  loading: null,
});

const state = initialState();

const getters = {
  getUser: state => state.user,

  getLoadingState: state => state.loading,
};

const actions = {
  fetchUser({ commit }, { username }) {
    return new Promise(async (resolve, reject) => {
      const url = `/users/${username}`;
      const api = Vue.prototype.$httpClient;

      commit('setLoading', true);

      await api
        .get(url)
        .then(response => {
          commit('setLoading', false);
          commit('setUser', response.data);
          resolve({
            status: response.status,
            message: 'Usuário encontrado com sucesso',
          });
        })
        .catch(err => {
          commit('setLoading', false);
          reject({
            status: err.response.status,
            message: 'Usuário não encontrado',
          });
        });
    });
  },

  fetchRepositories({ commit }, { username }) {
    return new Promise(async (resolve, reject) => {
      const url = `/users/${username}/repos`;
      const api = Vue.prototype.$httpClient;

      commit('setLoading', true);
      await api
        .get(url)
        .then(response => {
          commit('setLoading', false);
          commit('setRepositories', response.data);
          resolve({
            status: response.status,
            message: 'Usuário encontrado com sucesso',
          });
        })
        .catch(err => {
          commit('setLoading', false);
          reject({
            status: err.response.status,
            message: 'Usuário não encontrado',
          });
        });
    });
  },
};

const mutations = {
  setUser(state, data) {
    state.user = data;
  },

  setRepositories(state, data) {
    state.repositories = data;
  },

  setLoadingState(state, data) {
    state.loading = data;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};