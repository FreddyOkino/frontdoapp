import { defineStore } from "pinia"

export const useAlertaStore = defineStore("alerta", {
    state: () => ({
        exibir: false,
        mensagem: "mensagem...",
        erro:false,
        info: false,
        aviso:false,
        sucesso:false
    }),
    actions: {
        abrir(mensagem) {
            this.exibir = true
            this.mensagem = mensagem
        },
        fechar() {
            this.exibir = false
            this.mensagem = ""
            this.erro=false,
            this.info=false,
            this.aviso=false,
            this.sucesso=false
        },
        exibirErro(mensagem){
            this.erro=true
            this.abrir(mensagem)
        },
        exibirInfo(mensagem){
            this.info=true
            this.abrir(mensagem)
        },
        exibirAviso(mensagem){
            this.aviso=true
            this.abrir(mensagem)
        },
        exibirSucesso(mensagem){
            this.sucesso =true
            this.abrir(mensagem)
        }
    }
})