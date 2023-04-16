<template>
    <h1 class="text-center titulo">Nova conta</h1>

    <form class="form-login label">
        <label for="Nome">Nome</label>
        <input id="Nome" v-model="perfil.nome" type="text" placeholder="Digite seu nome">

        <label for="email">E-mail</label>
        <input id="email" v-model="perfil.usuario.email" type="email" placeholder="Email">

        <label for="senha">Senha</label>
        <input id="senha" v-model="perfil.usuario.senha" type="password" placeholder="Senha">

        <label for="datanascimento">Data de Nascimento</label>
        <input id="datanascimento" v-model="perfil.dataNascimento" type="date">

        <div class="flex width">
            <label for="mudanca"> Disponibilidade de Mudança</label>
            <input id="mudanca" v-model="perfil.disponibilidadeMudanca" type="checkbox">

        </div>

        <div>
            <label for="horario">Disponibilidade de Horário</label><br>
            <select v-model="perfil.disponibilidadeHorario" name="" id="horario">
                <option value="Integral">Integral</option>
                <option value="Meio Período">Meio Período</option>
            </select>
        </div>


        <button class="mt-3" @click="cadastrarPerfil()" type="button">CRIAR CONTA</button>
        <button class="mt-3" @click="voltar()" type="button">VOLTAR</button>
    </form>
</template>
<script>
import { mapActions } from 'pinia';
import { usePerfilStore } from './../stores/perfilStore'
import { useAlertaStore } from '../stores/alertaStore';
export default {
    data: () => ({
        perfil: { usuario: {} }
    }),
    methods: {
        ...mapActions(usePerfilStore, ["cadastrar"]),
        ...mapActions(useAlertaStore, ["exibirErro", "exibirSucesso"]),
        cadastrarPerfil() {
            try {
                this.cadastrar(this.perfil)

                this.exibirSucesso("Peril cadastrado com sucesso")
                this.$router.push({ name: "Login" })

            } catch (error) {
                console.log(error)
                this.exibirErro("Erro ao efetuar cadastro: confira se os dados estão corretos ou se o e-mail já não é  cadastrado")
            }
        },
        voltar() {
            this.$router.push({ name: "Login" })
        }
    }
}
</script>