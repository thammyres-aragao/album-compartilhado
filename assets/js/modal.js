function mostrarModal(titulo, mensagem, callback = null) {

    document.getElementById("modalTitulo").textContent = titulo;

    document.getElementById("modalTexto").textContent = mensagem;

    document.getElementById("modalMensagem").style.display = "flex";

    const botao = document.getElementById("btnModalOk");

    botao.onclick = async () => {

        document.getElementById("modalMensagem").style.display = "none";

        if(callback){

            await callback();

        }

    };

}