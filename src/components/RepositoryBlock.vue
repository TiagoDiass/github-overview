<template>
  <div class="repo-block">
    <h3>{{ repository.name }}</h3>

    <p>
      {{ repository.description }}
    </p>

    <!-- {{ repository.html_url }} -->

    <div class="stats-row">
      <p>
        {{ repository.language }}
      </p>

      <span>
        {{ repository.stargazers_count }}
      </span>

      <span>
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

<style lang="scss"></style>
