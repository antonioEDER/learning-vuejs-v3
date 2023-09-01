<template>
  <section class="is-flex is-align-items-center is-justify-content-space-between">
    <Cronometro :tempoEmSegundos="tempoEmSegundos"/>
    <button class="button" @click="iniciar" :disabled="cronometroRodando">
      <span class="icon">
        <i class="fas fa-play"></i>
      </span>
      <span>play</span>
    </button>
    <button class="button" @click="finalizar" :disabled="!cronometroRodando">
      <span class="icon">
        <i class="fas fa-stop"></i>
      </span>
      <span>stop</span>
    </button>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from 'vuex'
import { key } from '@/store'

import { TipoNotificacao } from "@/interfaces/INotificacao";
import { NOTIFICAR } from "@/store/tipo-mutacoes";
import Cronometro from "./Cronometro.vue";

export default defineComponent({
  name: "Temporizador",
  emits: ['aoFinalizarTarefa'],
  components: {
    Cronometro,
  },
  props: {
    idProjeto: {
      type: String,
      default: 0
    },
  },
  data () {
    return {
      tempoEmSegundos: 0,
      cronometroRodando: false,
      cronometro: 0 
    }
  },
  methods: {
    iniciar (): void {
      if (!this.idProjeto) {
        this.store.commit(NOTIFICAR, {
          titulo: 'Selecione um projeto',
          texto: 'Ops! Selecione um projeto para essa tarefa.',
          tipo: TipoNotificacao.ATENCAO
          })
        return
      }

      this.cronometroRodando = true
      this.cronometro = setInterval(() => {
        this.tempoEmSegundos += 1
      }, 1000)
    },
    finalizar () : void {
      this.$emit('aoFinalizarTarefa', this.tempoEmSegundos)
      this.tempoEmSegundos = 0
      this.cronometroRodando = false
      clearInterval(this.cronometro)
    }
  },
  setup () {
    const store = useStore(key)
    return {
      store
    }
  }
});
</script>
<style scoped>
.button {
  margin-left: 8px;
}
</style>