<template>
    <table border="1">
            <thead>
                <th>Nome</th>
                <th>Disponibilidade de Mudança</th>
                <th>Disponibilidade de Hórario</th>
            </thead>
            <tbody>
                <tr v-for="item in UltimosPerfis">
                    <td>{{ item.nome }}</td>
                    <td>{{ item.disponibilidadeMudanca ? "Sim" : "Não" }}</td>
                    <td>{{ item.disponibilidadeHorario }}</td>
                </tr>
            </tbody>
        </table>

</template>

<script>
import { mapState } from 'pinia';
import { usePerfilStore } from '../stores/perfilStore';
export default{
    computed:{
        ...mapState(usePerfilStore,['UltimosPerfis'])
    }
}
</script>