<template>
  <div class="username-input-view">
    <a href="http://github.com/TiagoDiass/github-overview" target="_blank" rel="noopener noreferrer" class="repo-link">
      Código Fonte
      <i class="fas fa-file-code"></i>
    </a>

    <div class="username-input" v-if="!loading">
      <h1>Procure por algum perfil</h1>
      <div class="input">
        <input type="text" v-model="username" placeholder="Nome de usuário" @keydown.enter="fetchUser" />
        <button @click="fetchUser" :class="{ disabled: !username }">
          <i class="fas fa-search"></i>
        </button>
      </div>
      <small v-if="error">
        {{ error }}
      </small>
    </div>
    <Loading v-else />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Loading from '../components/Loading.vue';

export default {
  name: 'UsernameInput',

  components: { Loading },

  data: () => ({
    username: '',
    error: '',
  }),

  computed: {
    ...mapGetters({
      loading: 'user/getLoadingState',
    }),
  },

  methods: {
    ...mapActions({
      fetchUserAction: 'user/fetchUser',
      fetchRepositories: 'user/fetchRepositories',
    }),

    async fetchUser() {
      if (!this.username) {
        return (this.error = 'Você deve digitar um nome de usuário');
      }

      try {
        const resposta = await this.fetchUserAction({ username: this.username });

        if (resposta.status == 200) {
          this.fetchRepositories({ username: this.username });
          this.$router.push({ path: `/user/${this.username}` });
        }
      } catch (error) {
        this.error = error.message;
      }
    },
  },
};
</script>

<style lang="scss">
@import '../assets/styles/variables';

@keyframes slide-from-left {
  0% {
    opacity: 0;
    transform: translateX(-8rem);
  }
  50% {
    opacity: 0.65;
    transform: translateX(+4.5rem);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.username-input-view {
  background-color: $primary;
  color: $white;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  .repo-link {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
    color: $white;
    text-decoration: none;

    position: absolute;
    right: 1.1rem;
    top: 1.1rem;

    transition: color 0.2s ease;

    i {
      margin-left: 0.4rem;
    }

    &:hover {
      color: $blue;
      cursor: pointer;
    }
  }

  .username-input {
    display: inline-block;
    animation: slide-from-left 1s ease;

    h1 {
      font-weight: 400;
      margin-bottom: 1rem;
      font-size: 1.8rem;
      padding: 0 0.9rem;
    }

    .input {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      height: 3.2rem;

      input {
        width: 80%;
        border: none;
        outline: none;
        height: 100%;
        background-color: $input-bg;
        color: $white;
        font-size: 1.4rem;
        padding: 0.8rem;
        font-family: 'Poppins', sans-serif;
      }

      button {
        width: 20%;
        border: none;
        outline: none;
        display: block;
        height: 100%;
        background-color: $white;
        color: $primary;
        font-size: 1.2rem;
        cursor: pointer;

        i {
          transition: transform 0.3s;
        }

        &.disabled {
          background-color: #ddd;
          cursor: initial;

          &:hover {
            background-color: #ddd;

            i {
              transform: initial;
            }
          }
        }

        transition: background 0.15s;

        &:hover {
          background-color: #eee;

          i {
            transform: scale(1.15) scaleX(-1);
          }
        }
      }
    }
  }
}

@media (max-width: 500px) {
  .username-input {
    overflow-y: hidden;
    h1 {
      margin-bottom: 0.8rem;
    }

    padding: 0 0.8rem;
  }
}
</style>
