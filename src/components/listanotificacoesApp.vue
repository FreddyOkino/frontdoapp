<template>
<table border="1">
            <thead>
                <th>Tipo</th>
                <th>Título</th>
                <th>Lida</th>
            </thead>
            <tbody>
                <tr v-for="item in notificacoes">
                    <td>{{ item.tipo}}</td>
                    <td>{{ item.titulo }}</td>
                    <td>{{ item.lida ? "Sim" : "Não" }}</td>
                </tr>
            </tbody>
        </table>

</template>

<script>
import { mapActions } from 'pinia';
import { useNotificacaoStore } from '../stores/notificacaoStore';
export default{
    methods:{
        ...mapActions(useNotificacaoStore,['buscarNotificacoesPerfil'])
    }
}
</script>