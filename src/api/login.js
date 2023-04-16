import { mande } from 'mande'
const api = mande('https://perfil-profissional.onrender.com/login', {})

export function login(usuario){
return api.post(usuario)
}
