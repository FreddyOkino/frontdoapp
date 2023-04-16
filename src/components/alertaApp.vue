<template>
    <div v-show="exibir" class="alerta-app" :class="[{ erro: erro }, { info: info }, { sucesso: sucesso }]">
        <p>{{ mensagem }}</p>
        <button @click="fechar()">FECHAR</button>
    </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useAlertaStore } from "./../stores/alertaStore"
export default {
    computed: {
        ...mapState(useAlertaStore, ["exibir", "mensagem", "erro", "info", "sucesso"])
    },
    methods: {
        ...mapActions(useAlertaStore, ["fechar"])
    }
}
</script>