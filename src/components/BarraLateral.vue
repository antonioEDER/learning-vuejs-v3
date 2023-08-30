<template>
  <header>
      <h1>
        <img class="logo" src="../assets/logo.png" alt="">  
      </h1>
      <button class="button" @click="alterarTema">
        {{ textoBotao }}
      </button>
      <hr>
      <nav class="panel-link">
        <ul>
          <li>
            <router-link class="link" to="/">
              <i class="fas fa-tasks"></i>
              Tarefas
            </router-link>
          </li>
          <li>
            <router-link class="link" to="/projetos">
              <i class="fas fa-project-diagram"></i>
              Projetos
            </router-link>
          </li>
        </ul>
      </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BarraLateral',
  emits: ['aoTemaAlterado'],
  data () {
    return {
      modoEscuroAtivo: false
    }
  },
  computed: {
    textoBotao () {
      if (this.modoEscuroAtivo) {
        return 'Desativar modo escuro'
      }
      return 'Ativar modo escuro'
    }
  },
  methods: {
    alterarTema () {
      this.modoEscuroAtivo = !this.modoEscuroAtivo
      this.$emit('aoTemaAlterado', this.modoEscuroAtivo)
    }
  }
})
</script>

<style scoped>
.logo {
  border-radius: 10px;
}
header {
  padding: 1rem;
  background:#581ad5;
  width: 100%;
  height: 100vh;
  text-align: center;
}
@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}

.panel-link li {
    margin: 15px 0;
    text-align: left;
}
.link {
    color: #fff;
}
.link:hover {
    color: #FAF0CA;
}
.link.router-link-active {
    color: #FAF0CA;
}
.button {
  height: 15px;
  font-size: 10px;
  text-align: left;
}
hr {
    margin: 0;
}
</style>
