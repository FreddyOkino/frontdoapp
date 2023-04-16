<template>
    <h1>Home</h1>
    <h2>Olá! {{ usuarioLogado.nome }}</h2>

    <section>
        <h3>Últimos Perfis Cadastrados</h3>

        <listaperfisApp></listaperfisApp>

    </section>
    <section>
        <h3>Últimas Notificações</h3>
        <listanotificacoesApp></listanotificacoesApp>

    </section>
</template>

<script>
import { mapState } from 'pinia';
import { usePerfilStore } from '../stores/perfilStore';
import { mapActions } from 'pinia';
import { useNotificacaoStore} from '../stores/notificacaoStore'
import listaperfisApp from '../components/listaperfisApp.vue';
import listanotificacoesApp from '../components/listanotificacoesApp.vue';
export default {
    components:{
        listaperfisApp,
        listanotificacoesApp
    },
    computed: {
        ...mapState(usePerfilStore, ["usuarioLogado"]),
        ...mapState(useNotificacaoStore,['notificacoes'])
    },
    methods: {
        ...mapActions(usePerfilStore, ['listarUltimosPerfis']),
        ...mapActions(useNotificacaoStore,['buscarNotificacoesPerfil'])
    },
    mounted() {
        this.listarUltimosPerfis(),
        this.buscarNotificacoesPerfil(this.usuarioLogado.perfil)
    }   
}
</script>