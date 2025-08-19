<template>
  <div  class="default-layout">
    <Header/>

    <main>
      main
    </main>

    <Footer/>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/footer.vue';

</script>

<style lang="scss" scoped>
.default-layout {
  min-height: 100vh;

  display: grid;
  grid-template-rows: auto 1fr auto;
}
</style>