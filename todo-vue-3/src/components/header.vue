<template>
  <div class="header">
    <div class="header-content">
      <p>LOGO</p>
      <menu>menu</menu>
      <button>Выйти</button>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.header {
  height: 80px;
  width: 100vw;
  display: flex;
  justify-content: center;

  border-bottom: 2px solid var(--color-text);

  &-content {
    width: 1400px;
    display: flex;
    justify-content: space-between;
  }
}
</style>