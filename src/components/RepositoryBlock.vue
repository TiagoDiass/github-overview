<template>
  <div class="repo-block">
    <a class="repo-title" :href="repository.html_url" target="_blank">
      <h3>{{ repository.name }}</h3>

      <i class="fas fa-external-link-alt"></i>
    </a>

    <p class="repo-desc">
      {{ repository.description }}
    </p>

    <div class="stats-row">
      <p>
        {{ repository.language }}
      </p>

      <span>
        <i class="fas fa-star"></i>
        {{ repository.stargazers_count }}
      </span>

      <span>
        <i class="fas fa-code-branch"></i>
        {{ repository.forks_count }}
      </span>

      <span> {{ repository.size }} KB </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RepoBlock',
  props: {
    repository: {
      required: true,
      type: Object,
    },
  },
};
</script>

<style lang="scss">
@import '../assets/styles/variables';

.repo-block {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 380px;
  min-height: 200px;
  padding: 25px;
  box-shadow: $shadow-primary;
  margin: 0.5rem;
  border-radius: 0.3rem;
  background: $white;

  transition: transform 0.2s ease, box-shadow 0.2s ease;

  .repo-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;

    &:hover {
      h3 {
        color: $blue;
      }

      i {
        color: $blue;
      }
    }

    h3 {
      font-family: 'Space Mono', monospace;
      font-weight: 400;
      transition: color 0.2s ease;

      color: $primary;
    }

    i {
      color: $secondary;

      transition: color 0.2s ease;
    }
  }

  p.repo-desc {
    opacity: 1;
    font-size: 0.9rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .stats-row {
    display: flex;
    justify-content: space-between;
    opacity: 0.8;
  }

  &:hover {
    box-shadow: $shadow-secondary;
  }
}

@media (max-width: 450px) {
  .repo-block {
    width: 100%;
  }
}
</style>
