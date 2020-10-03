<template>
  <div class="user-stats">
    <div class="stat-block">
      <div class="number">
        <p>{{ user.public_repos }}</p>
      </div>
      <div class="label">
        <span>Repositórios</span>
      </div>
    </div>
    <div class="stat-block">
      <div class="number">
        <p>{{ user.followers }}</p>
      </div>
      <div class="label">
        <span>Seguidores</span>
      </div>
    </div>
    <div class="stat-block">
      <div class="number">
        <p>{{ user.following }}</p>
      </div>
      <div class="label">
        <span>Seguindo</span>
      </div>
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
  margin-top: 0.3rem;
  display: flex;
  justify-content: center;

  .stat-block {
    background: $secondary;
    color: $white;
    border-radius: 0.3125rem;
    width: 150px;
    padding: 15px 20px;
    margin-right: 0.5rem;

    &:nth-of-type(2) {
      .label {
        text-align: center;
      }
    }

    &:last-of-type {
      margin-right: 0;

      .label {
        text-align: center;
      }
    }

    .number {
      text-align: center;

      p {
        font-size: 1.5rem;
      }
    }

    .label {
      text-align: left;
      width: 100%;

      span {
        text-transform: uppercase;
      }
    }
  }
}
</style>
