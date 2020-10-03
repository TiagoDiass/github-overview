<template>
  <div id="app">
    <transition name="slide" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style lang="scss">
@import './assets/styles/main.scss';
</style>
