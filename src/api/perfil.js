import { mande } from 'mande'
import { usePerfilStore } from '../stores/perfilStore'
const api = mande('https://perfil-profissional.onrender.com/perfil/', {})


function setToken() {
    const store = usePerfilStore()
    api.options.headers.token = store.usuarioLogado.token


}
export function cadastrar(perfil) {
    return api.post(perfil)
}

export function listarUltimosPerfis() {
    return api.get()
}

export function buscarPerfil(Id) {
    return api.get(Id)
}

export function atualizarPerfil(perfilAtualizado) {
    setToken()
    return api.put(perfilAtualizado._id, perfilAtualizado)
}