console.log("✔ upload.js carregado");

async function testarAPI() {

    try {

        const formData = new URLSearchParams();

        formData.append("acao", "uploadFoto");
        formData.append("eventoId", EVENTO.EventoId);
        formData.append("arquivo", gerarNomeArquivo());
        formData.append("legenda", document.getElementById("legenda").value);
        formData.append("imagem", imagemCapturada);

        document.getElementById("loading").style.display = "flex";

        const resposta = await fetch(API_URL, {

            method: "POST",
            body: formData

        });

        const dados = await resposta.json();

        document.getElementById("loading").style.display = "none";

        console.log(dados);

        if (dados.status === "ok") {

            mostrarModal(

                "Obrigado!",

                EVENTO.MensagemAgradecimento || dados.mensagem,

                reiniciarAplicacao

            );

        } else {

            mostrarModal(

                "Ops!",

                dados.mensagem

            );

        }

    }

    catch (erro) {

        document.getElementById("loading").style.display = "none";

        console.error(erro);

        mostrarModal(

            "Erro",

            "Não foi possível enviar sua foto. Tente novamente."

        );

    }

}