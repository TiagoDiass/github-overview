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
      <h1>user repos</h1>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserStats from '../components/UserStats.vue';
export default {
  components: {
    UserStats,
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
    padding-bottom: 5rem;
    border: 1px solid red;

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
</style>
