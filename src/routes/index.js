import Home from './../pages/home.vue'
import Perfil from './../pages/perfil.vue'
import Login from './../pages/login.vue'
import novaConta from './../pages/novaConta.vue'
import Notificacoes from './../pages/notificacoes.vue'

export default [
    {path:'/home', component: Home, name:"Home"},
    {path:'/perfil', component: Perfil, name:"Perfil"},
    {path:'/', component: Login, name:"Login"},
    {path:'/novaconta', component: novaConta, name:"novaConta"},
    {path:'/notificacoes', component: Notificacoes, name: "Notificacoes"}
]