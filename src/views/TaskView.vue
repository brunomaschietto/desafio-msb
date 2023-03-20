<template>
  <div class="tasks">
    <div class="inputsContainer">
      <input class="inputTarefa" v-model="searchTerm" placeholder="Filtrar tarefas" />
      <div>
        <select v-model="selectedStatus" @change="updateStatusFilter">
          <option value="">Todos</option>
          <option value="true">Feito</option>
          <option value="false">Não feito</option>
        </select>
      </div>
      <form @submit.prevent="handleSubmit">
        <div class="divInputs">
          <div class="divInterna">
            <input type="text" class="inputTarefa" id="id" placeholder="ID" v-model="id" />
            <input type="text" class="inputTarefa" id="name" placeholder="Name" v-model="name" />
          </div>
          <div class="divInterna">
            <input
              type="text"
              class="inputTarefa"
              id="descricao"
              placeholder="Descrição"
              v-model="descricao"
            />
            <button type="submit" class="botaoAdicionar">Adicionar Tarefa</button>
          </div>
        </div>
      </form>
    </div>
    <div class="allCards">
      <div class="todosOsCards">
        <h1>Todas as tarefas</h1>
        <Cards />
      </div>
      <div class="linha-vertical"></div>
      <div class="done-cards">
        <h1>Tarefas realizadas</h1>
        <CardsDone />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import Cards from '../components/Cards.vue'
import CardsDone from '../components/CardsDone.vue'

export default {
  name: 'TaskView',
  data() {
    return {
      id: '',
      name: '',
      descricao: '',
      searchTerm: '',
      selectedStatus: null
    }
  },
  watch: {
    searchTerm: {
      handler() {
        this.updatedSearchTerm()
      },
      immediate: true
    }
  },
  methods: {
    updatedSearchTerm() {
      this.$store.commit('updateSearchTerm', this.searchTerm)
    },
    updateStatusFilter() {
      switch (this.selectedStatus) {
        case 'true':
          this.statusFilter = true
          break
        case 'false':
          this.statusFilter = false
          break
        default:
          this.statusFilter = null
      }
    },
    handleSubmit() {
      axios
        .post('https://6415ac7e351c4aed490c5c4f.mockapi.io/api/v1/tasks', {
          id: this.id,
          name: this.name,
          descricao: this.descricao
        })
        .then((response) => {
          console.log(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  components: {
    Cards,
    CardsDone
  }
}
</script>

<style lang="scss" scoped>
.tasks {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  width: 1440px;
  margin: 0 auto;
  min-height: 100vh;
  box-shadow: -2px 3px 30px -7px rgba(0, 0, 0, 0.75);
  /* @media (max-width: 800px){
    background-color: blue;
  } */
}
.inputsContainer {
  height: 250px;
  width: 1440px;
  display: flex;
  gap: 18px;
  justify-content: space-around;
  align-items: center;
  background-color: $purple;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  @media (max-width: 500px) {
    flex-wrap: wrap;
    justify-content: center;
  }
}
.inputTarefa {
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: none;
  font-size: 16px;
  font-family: 'Noto Sans';
}
.botaoAdicionar {
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: none;
  font-family: 'Noto Sans';
  font-size: 16px;
  cursor: pointer;
}
.allCards {
  display: flex;
  @media (max-width: 500px) {
    justify-content: start;
    flex-direction: column-reverse;
  }
}
.todosOsCards {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  h1 {
    font-family: 'Noto Sans';
    color: $purple;
  }
  @media (max-width: 500px) {
    width: 300px;
  }
}
.done-cards {
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-family: 'Noto Sans';
    color: $purple;
  }
}
.linha-vertical {
  border: 1px solid gray;
  height: auto;
  @media (max-width: 500px) {
    display: none;
  }
}
.divInputs {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.divInterna {
  display: flex;
  gap: 10px;
}
</style>
