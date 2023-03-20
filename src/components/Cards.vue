<template>
  <div class="container">
    <div class="card" v-for="objeto in filteredByStatusTasks" :key="objeto.id" style="width: 18rem">
      <div class="cardBody">
        <div>
          <p>ID: {{ objeto.id }}</p>
          <p>Nome: {{ objeto.name }}</p>
          <p>Descrição: {{ objeto.descricao }}</p>
          <p>Feito: {{ objeto.done }}</p>
          <p>Criado em: {{ objeto.createdAt }}</p>
          <div class="divButton">
            <button v-on:click="concluido(objeto.id)" class="buttonCard">Feito</button>
            <button v-on:click="excluir(objeto.id)" class="buttonCard">Deletar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Cards',
  data() {
    return {
      searchTerm: '',
      responseData: null,
      statusFilter: null,
      selectedStatus: ''
    }
  },
  computed: {
    filteredTasks() {
      if (this.responseData) {
        return this.responseData.filter((task) => {
          return task.name.toLowerCase().includes(this.$store.getters.searchTerm.toLowerCase())
        })
      } else {
        return null
      }
    },
    filteredByStatusTasks() {
    if (this.filteredTasks) {
      if (this.statusFilter === true) {
        return this.filteredTasks.filter(task => task.done === true)
      } else if (this.statusFilter === false) {
        return this.filteredTasks.filter(task => task.done === false)
      } else {
        return this.filteredTasks
      }
    } else {
      return null
    }
  }
  },
  methods: {
    concluido(id) {
      axios
        .put(`https://6415ac7e351c4aed490c5c4f.mockapi.io/api/v1/tasks/${id}`, {
          done: true
        })
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    excluir(id) {
      axios
        .delete(`https://6415ac7e351c4aed490c5c4f.mockapi.io/api/v1/tasks/${id}`)
        .then((response) => {
          console.log(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  mounted() {
    axios
      .get('https://6415ac7e351c4aed490c5c4f.mockapi.io/api/v1/tasks')
      .then((response) => {
        this.responseData = response.data
        console.log(this.responseData)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  gap: 20px;
  min-width: 700px;
}
.cardBody {
  width: 300px;
  height: 200px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  div {
    p {
      font-size: smaller;
      font-family: 'Noto Sans';
    }
    button {
      font-family: 'Noto Sans';
    }
  }
}
.divButton {
  display: flex;
  gap: 100px;
}
.buttonCard {
  background-color: $purple;
  font-family: 'Noto Sans';
  border: none;
  width: 60px;
  border-radius: 2px;
  color: white;
  height: 24px;
  cursor: pointer;
}
</style>
