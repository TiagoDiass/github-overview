<template>
  <div class="username-input-view">
    <div class="username-input">
      <h1>Procure por algum perfil</h1>
      <div class="input">
        <input type="text" />
        <button>
          <i class="fas fa-paper-plane"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UsernameInput',
  components: {},
};
</script>

<style lang="scss">
@import '../assets/styles/variables';

.username-input-view {
  background-color: $primary;
  color: $white;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  .username-input {
    display: inline-block;

    h1 {
      font-weight: 400;
      margin-bottom: 1rem;
      font-size: 1.8rem;
      padding: 0 0.9rem;
    }

    .input {
      display: flex;
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
      }

      button {
        width: 20%;
        border: none;
        outline: none;
        display: block;
        height: 100%;
        background-color: $white;
        color: $primary;
        font-size: 1.1rem;
        cursor: pointer;

        i {
          transition: transform 0.3s;
        }

        transition: background 0.15s;

        &:hover {
          background-color: #eee;

          i {
            transform: scale(1.2);
          }
        }
      }
    }
  }
}
</style>
