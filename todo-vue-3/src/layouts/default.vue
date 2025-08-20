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
import { ref } from 'vue';
import { onMounted } from 'vue';
import { getAllTodos } from '../api/todos';
import Header from '@/components/app-header.vue';
import Footer from '@/components/app-footer.vue';

const allTodos = ref([]);

const getTodos = async () => {
  getAllTodos().then(res => allTodos.value = res);
}

onMounted(() => {
  getTodos();
})

</script>

<style lang="scss" scoped>
.default-layout {
  min-height: 100vh;

  display: grid;
  grid-template-rows: auto 1fr auto;
}
</style>