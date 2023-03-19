<template>
  <div class="container">
    <div class="card" v-for="objeto in responseData" :key="objeto.cpf" style="width: 18rem">
      <div class="cardBody">
        <div>
          <p>ID: {{ objeto.id }}</p>
          <p>Nome: {{ objeto.name }}</p>
          <p>Descrição: {{ objeto.descricao }}</p>
          <p>Feito: {{ objeto.done }}</p>
          <p>Criado em: {{ objeto.createdAt }}</p>
          <button>Feito</button>
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
      responseData: null
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
        font-family: 'Times New Roman', Times, serif;
    }
    button {
        font-family: 'Times New Roman', Times, serif;
    }
  }
}
</style>
