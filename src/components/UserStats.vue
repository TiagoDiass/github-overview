<template>
  <div class="user-stats">
    <div class="stat-block">
      <h4>{{ user.public_repos }}</h4>
      <p>Repositórios</p>
    </div>
    <div class="stat-block">
      <h4>{{ user.followers }}</h4>
      <p>Seguidores</p>
    </div>
    <div class="stat-block">
      <h4>{{ user.following }}</h4>
      <p>Seguindo</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters({
      user: 'user/getUser',
    }),
  },
};
</script>

<style lang="scss">
@import '../assets/styles/variables';
.user-stats {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .stat-block {
    background: $secondary;
    color: $white;
    border-radius: 0.3125rem;
    margin: 0.35rem;
    width: 150px;
    padding: 15px 20px;

    h4 {
      font-size: 1.5rem;
      text-align: center;
    }

    p {
      font-weight: 400;
      font-size: 1rem;
      opacity: 0.8;
      text-transform: uppercase;
      display: inline-block;
      width: 100%;
    }
  }
}
</style>
