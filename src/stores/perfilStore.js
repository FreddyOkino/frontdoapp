import { defineStore } from "pinia";
import { login } from "../api/login";
import { atualizarPerfil, buscarPerfil, cadastrar, listarUltimosPerfis } from "../api/perfil.js";

export const usePerfilStore = defineStore("perfil", {
    state: () => ({
        usuarioLogado: {},
        UltimosPerfis: [],
        
    }),
    actions: {
        async login(usuario) {
        this.usuarioLogado = await login(usuario)
        },
        async cadastrar(perfil) {
            await cadastrar(perfil)
        },
        async listarUltimosPerfis(){
          this.UltimosPerfis =  await listarUltimosPerfis()
        },
        async buscarPerfilLogado(){
           return await buscarPerfil(this.usuarioLogado.perfil)
        },
        async atualizarPerfil(perfil){
            return await atualizarPerfil(perfil)
        }
    },
})