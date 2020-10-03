<template>
  <div class="userinfo-view">
    <!-- User stats sections -->
    <section class="user-stats-section">
      <div class="container">
        <div class="back-button" @click="navigateBack">
          <i class="fas fa-arrow-left"></i>
          Voltar
        </div>

        <img :src="user.avatar_url" alt="User Profile Picture" />

        <h1>{{ user.name }}</h1>

        <a :href="user.html_url" target="_blank">@{{ user.login }}</a>

        <p>{{ user.bio }}</p>

        <transition name="bounce">
          <UserStats v-if="pageLoaded" />
        </transition>
      </div>
    </section>

    <!-- Repositories section -->
    <section class="repositories-section">
      <div class="container">
        <RepoBlock v-for="(repository, index) in repositories" :key="index" :repository="repository" />
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserStats from '../components/UserStats.vue';
import RepoBlock from '../components/RepositoryBlock.vue';

export default {
  components: {
    UserStats,
    RepoBlock,
  },

  mounted() {
    if (!Object.keys(this.user).length) {
      this.$router.push({ path: '/' });
    }

    setTimeout(() => {
      this.pageLoaded = true;
    }, 1000);
  },

  data: () => ({
    pageLoaded: false,
  }),

  computed: {
    ...mapGetters({
      user: 'user/getUser',
      repositories: 'user/getRepositories',
    }),
  },

  methods: {
    navigateBack() {
      this.$router.push({ path: '/' });
    },
  },
};
</script>

<style lang="scss">
@import '../assets/styles/variables';

.user-stats-section {
  background: $primary;
  display: flex;
  justify-content: center;
  color: $white;
  z-index: 0;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
    padding: 1.5rem 0;

    .back-button {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.1rem;

      position: absolute;
      left: 1rem;
      top: 1rem;

      transition: color 0.2s ease;

      i {
        margin-right: 0.4rem;
      }

      &:hover {
        color: $blue;
        cursor: pointer;
      }
    }

    img {
      border: 0.5rem solid $blue;
      width: 220px;
      border-radius: 50%;
      margin-bottom: 1.15rem;

      transition: opacity 0.3s ease;

      &:hover {
        opacity: 0.85;
      }
    }

    h1 {
      font-weight: 500;
      font-size: 2.4rem;
    }

    a {
      display: inline-block;
      font-size: 1.5rem;
      text-decoration: none;
      color: $blue;
      font-family: 'Space Mono', monospace;
      margin-bottom: 0.2rem;

      transition: transform 0.2s ease;

      &:hover {
        transform: translateY(-0.25rem);
      }
    }

    p {
      display: inline-block;
      max-width: 50%;
      text-align: center;
    }
  }
}

.repositories-section {
  display: flex;
  justify-content: center;
  color: $primary;

  .container {
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 1rem;
  }
}
</style>
