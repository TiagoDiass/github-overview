<template>
  <div class="loading-animation">
    <h1>
      <i class="fas fa-spinner"></i>
    </h1>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.loading-animation {
  background-color: $white-darker;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: $primary;
    display: inline-block;
    font-size: 3rem;
    animation: rotate 1.3s linear infinite;
  }
}
</style>
