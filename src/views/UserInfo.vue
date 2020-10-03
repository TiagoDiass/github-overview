<template>
  <div class="userinfo-view">
    <!-- User stats sections -->
    <section class="user-stats-section">
      <div class="container">
        <img :src="user.avatar_url" alt="User Profile Picture" />
        <h1>{{ user.name }}</h1>
        <a :href="user.html_url" target="_blank">@{{ user.login }}</a>
        <p>{{ user.bio }}</p>
        <UserStats />
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
  },

  computed: {
    ...mapGetters({
      user: 'user/getUser',
      repositories: 'user/getRepositories',
    }),
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

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
    padding: 1.5rem 0;
    padding-bottom: 5.5rem;

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
  }
}
</style>
