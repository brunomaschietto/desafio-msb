<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <div class="container">
    <header>
      <img src="../assets/lista_de_tarefas.png" />
    </header>
    <RouterLink to="/tasks">
      <button class="botaoEntrar">Entrar</button>
    </RouterLink>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: $purple;
  min-height: 98vh;
  img {
    width: 1000px;
    height: 100%;
  }
}
.botaoEntrar {
  height: 50px;
  width: 150px;
  border-radius: 12px;
  font-family: 'Times New Roman', Times, serif;
  font-size: large;
  font-weight: 700;
  cursor: pointer;
}
</style>
