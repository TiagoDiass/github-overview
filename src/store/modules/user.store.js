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

  getRepositories: state => state.repositories,
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

          if (response.status == 200) {
            commit('setUser', response.data);
            resolve({
              status: 200,
              message: 'Usuário encontrado com sucesso',
            });
          }
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
          console.error(err);
          commit('setLoading', false);
          reject({
            status: err.response.status,
            message: 'Não conseguimos encontrar um usuário com este nome',
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

  setLoading(state, data) {
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
