import axios from 'axios';

export default {
  install(Vue) {
    Vue.prototype.$httpClient = axios.create({
      baseURL: 'https://api.github.com/',
    });
  },
};
