function enviarMensagem() {
    const modalMensagem = document.getElementById('modalSheet');
    const botaoEnviarFormulario = document.getElementById('btn-enviar');

    botaoEnviarFormulario.document.addEventListener('click', () =>{
        modalMensagem.style.display ='flex';
    })
}

function fecharMensagem(){
    const modalMensagem = document.getElementById('modalSheet');
    const botaoFecharMensagem = document.getElementById('btn-fechar');

    botaoFecharMensagem.document.addEventListener('click',() =>{
        modalMensagem.style.display = 'none'
    })
}
