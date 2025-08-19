<template>
  <div class="auth-page">
    <div class="auth-form">
      <p  class="auth-title">Авторизация</p>
      <form class="auth-inputs">
        <input type="text" name="" id="text">
        <input type="password" name="" id="passord">
        <input type="button" value="Войти" @click="signIn">
      </form>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';


const router = useRouter();

const signIn = () => {
  router.push("/default")
  
}

</script>

<style lang="scss" scoped>
.auth {

  &-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px;
    border: 2px solid var(--color-text);
    border-radius: 12px;
  }

  &-title {
    margin-bottom: 12px;
  }

  &-inputs {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}

</style>