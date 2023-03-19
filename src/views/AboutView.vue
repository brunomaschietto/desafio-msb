<template>
  <div class="about">
    <div class="inputsContainer">
      <input class="inputTarefa" placeholder="Adicione uma tarefa" />
      <button class="botaoAdicionar">Adicionar</button>
    </div>
    <div class="allCards">
      <div class="todosOsCards">
        <h1>Todas as tarefas</h1>
        <Cards />
      </div>
      <div class="linha-vertical"></div>
      <div class="done-cards">
        <h1>Tarefas feitas</h1>
        <Cards />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Cards from '../components/Cards.vue'

export default {
  name: 'AboutView',
  components: {
    Cards
  }
}
</script>

<style lang="scss" scoped>
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1440px;
  margin: 0 auto;
  min-height: 100vh;
  box-shadow: -2px 3px 30px -7px rgba(0, 0, 0, 0.75);
}
.inputsContainer {
  height: 150px;
  width: 1440px;
  display: flex;
  gap: 18px;
  justify-content: center;
  align-items: center;
  background-color: $purple;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
}
.inputTarefa {
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: none;
  font-size: 16px;
  font-family: 'Times New Roman', Times, serif;
}
.botaoAdicionar {
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: none;
  font-family: 'Times New Roman', Times, serif;
  font-size: 16px;
  cursor: pointer;
}
.allCards {
  display: flex;
}
.todosOsCards {
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-family: 'Times New Roman', Times, serif;
  }
}
.done-cards {
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-family: 'Times New Roman', Times, serif;
  }
}
.linha-vertical {
  border: 1px solid gray;
  height: auto;
}
/* @media (min-width: 1024px) {
  .about {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 700px;
    margin: 0 auto;
    min-height: 100vh;
    box-shadow: -2px 3px 30px -7px rgba(0, 0, 0, 0.75);
  }
  .inputsContainer {
    height: 150px;
    width: 700px;
    display: flex;
    gap: 18px;
    justify-content: center;
    align-items: center;
    background-color: $purple;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
  }
  .inputTarefa {
    padding: 0.75rem;
    border-radius: 0.5rem;
    border: none;
    font-size: 16px;
    font-family: 'Times New Roman', Times, serif;
  }
  .botaoAdicionar {
    padding: 0.75rem;
    border-radius: 0.5rem;
    border: none;
    font-family: 'Times New Roman', Times, serif;
    font-size: 16px;
    cursor: pointer;
  }
} */
</style>
