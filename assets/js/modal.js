/*function mostrarModal(titulo, mensagem, callback = null) {

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

}*/

function mostrarModal(titulo, mensagem, tipo = "sucesso", callback = null) {

    document.getElementById("modalTitulo").textContent = titulo;
    document.getElementById("modalTexto").textContent = mensagem;

    const icone = document.getElementById("modalIcone");

    switch (tipo) {

        case "erro":
            icone.textContent = "🔒";
            icone.style.background = "#fde8e8";
            icone.style.color = "#c62828";
            break;

        case "aviso":
            icone.textContent = "⚠️";
            icone.style.background = "#fff4d6";
            icone.style.color = "#f57c00";
            break;

        case "info":
            icone.textContent = "ℹ️";
            icone.style.background = "#e3f2fd";
            icone.style.color = "#1565c0";
            break;

        default:
            icone.textContent = "✔";
            icone.style.background = "#e8f5e9";
            icone.style.color = "#2e7d32";
            break;

    }

    document.getElementById("modalMensagem").style.display = "flex";

    const botao = document.getElementById("btnModalOk");

    botao.onclick = async () => {

        document.getElementById("modalMensagem").style.display = "none";

        if (callback) {

            await callback();

        }

    };

}