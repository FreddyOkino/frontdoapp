import { mande } from 'mande'
import { usePerfilStore } from '../stores/perfilStore'

const notificacao = mande('https://perfil-profissional.onrender.com/notificacao', {})
const notificacaoPerfil =mande('https://perfil-profissional.onrender.com/notificacao/perfil/', {})

function setToken(){
    const store = usePerfilStore()
    notificacao.options.headers.token = store.usuarioLogado.token
    notificacaoPerfil.options.headers.token = store.usuarioLogado.token
    
}

export function buscarNotificacoesPerfil(perfilId){
    setToken()
    return notificacaoPerfil.get(perfilId)
}
