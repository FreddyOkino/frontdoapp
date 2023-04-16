<template>
    <h1>Meu Perfil</h1>
    <h2>Informações Pessoais</h2>
    <section>
        <form>
            <div>
                <label for="nome">Nome: </label>
                <input v-model="perfil.nome" type="text">
            </div>
            <div>
                <label for="e-mail">E-mail: </label>
                <input v-model="perfil.usuario.email" type="text" disabled>
            </div>
            <div>
                <label for="dataNascimento">Data Nascimento: </label>
                <input v-model="perfil.dataNascimento" type="date">
            </div>
            <div>
                <label for="disponibilidadeMudanca">Disponibilidade de Mudança: </label>
                <input v-model="perfil.disponibilidadeMudanca" type="checkbox" name="" id="disponibilidadeMudanca">
            </div>
            <div>
                <label for="disponibilidadeHorario">Disponibilidade de Horário: </label>
                <select v-model="perfil.disponibilidadeHorario" id="disponibilidadeHorario">
                    <option value="Integral">Integral</option>
                    <option value="Meio Período"> Meio Período</option>
                </select>
            </div>
            <fieldset>
                <legend>Escolaridade</legend>
                <button v-show="!formEducacao" @click="formEducacao=true" type="button">Novo</button>
                <div v-show="formEducacao">
                    
                    <label for="intituicao">Instituição de Ensino: </label>
                    <input v-model="educacao.instituicao" type="text" id="instituicao" placeholder="Instituição">
                    
                    <label for="dataIngresso">Data de Ingresso: </label>
                    <input v-model="educacao.ingresso" id="dataIngresso" type="date" placeholder="Data de Ingresso">
                    
                    <label for="dataconclusao">Data de Conclusão</label>
                    <input v-model="educacao.conclusao" type="date" placeholder="Data de Conclusão" id="dataconclusao">

                    <label for="ensino">Nivel de Escolaridade: </label>
                    <select v-model="educacao.nivelEscolaridade" id="ensino">
                        <option value="Ensino Fundamental">Ensino Fundamental</option>
                        <option value="Ensino Médio">Ensio Médio</option>
                        <option value="Ensino Superior">Ensino Superior</option>
                        <option value="Pós-graduação">Pós-graduação</option>
                        <option value="Mestrado">Mestrado</option>
                        <option value="Doutorado">Doutorado</option>
                    </select>
                    <button @click="adicionarEducacao" type="button">Adicinonar</button>
                    <button @click="formEducacao=false" type="button">Cancelar</button>
                </div>
                <section>
                    <table border="1">
                        <thead>
                            <th>Instituição</th>
                            <th>Nível</th>
                            <th>Ingresso</th>
                            <th>Conclusão</th>
                        </thead>
                        <tbody>
                            <tr v-for="item in perfil.educacao" :key="item.ingresso">
                            <td>{{item.instituicao}}</td>
                            <td>{{item.nivelEscolaridade}}</td>
                            <td>{{item.ingresso}}</td>
                            <td>{{item.conclusao}}</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </fieldset>
        </form>
       
    </section>
    <div>
        <button @click="atualizar" type="button"> Salvar Alterações</button>
    </div>
</template>

<script>
import { mapState } from 'pinia';
import { usePerfilStore } from '../stores/perfilStore';
import { mapActions } from 'pinia';
export default {
    data: () => ({
        perfil: { usuario: {} },
        educacao:{},
        formEducacao: false
    }),
    computed: {
        ...mapState(usePerfilStore, ['usuarioLogado', 'perfilLogado'])
    },
    methods: {
        ...mapActions(usePerfilStore, ['buscarPerfilLogado', 'atualizarPerfil']),
        atualizar() {
            this.atualizarPerfil(this.perfil)
        },
        adicionarEducacao(){
            this.perfil.educacao.push(this.educacao)
            this.educacao={}
            this.formEducacao=false
        }
    },
    async mounted() {
        this.perfil = await this.buscarPerfilLogado()
    }
}
</script>