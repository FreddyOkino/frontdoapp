<template>
    <h1 class="text-center titulo">Login</h1>

    <form class="form-login">
        <input v-model="usuario.email" type="email" placeholder="Email"><br>
        <input v-model="usuario.senha" type="password" placeholder="Senha">
        <button type="button" @click="logar()">Entrar</button>
        <button @click="novaconta()"  class="mt-3" type="button">CRIAR CONTA</button>
    </form>
</template>

<script>
import { mapActions } from 'pinia';
import { usePerfilStore } from '../stores/perfilStore';
import { useAlertaStore } from '../stores/alertaStore';
export default {
    data: () => ({
        usuario: {}
    }),
    methods: {
        ...mapActions(usePerfilStore, ["login"]),
        ...mapActions(useAlertaStore,["exibirErro"]),
        async logar() {
            try {
                await this.login(this.usuario)
                this.$router.push('/home')
            } catch (error) {

                this.exibirErro(error.body.message)
            }
        },
        novaconta(){
            this.$router.push("/novaconta")
        }
    },
};
</script>