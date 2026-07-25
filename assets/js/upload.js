console.log("✔ upload.js carregado");

async function testarAPI() {

    try {

        const formData = new URLSearchParams();

        formData.append("acao", "uploadFoto");
        formData.append("eventoId", EVENTO.EventoId);
        formData.append("arquivo", gerarNomeArquivo());
        formData.append("legenda", document.getElementById("legenda").value);
        formData.append("imagem", imagemCapturada);

        const resposta = await fetch(API_URL, {

            method: "POST",
            body: formData

        });

        const dados = await resposta.json();

        console.log(dados);

        alert(dados.mensagem);

    }

    catch (erro) {

        console.error(erro);

        alert("Erro ao conectar com a API.");

    }

}