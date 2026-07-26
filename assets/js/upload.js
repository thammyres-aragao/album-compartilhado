console.log("✔ upload.js carregado");

async function testarAPI() {

    try {

        if (imagensSelecionadas.length === 0) {

            mostrarModal(

                "Atenção",

                "Nenhuma imagem foi selecionada."

            );

            return;

        }

        document.getElementById("loading").style.display = "flex";

        const total = imagensSelecionadas.length;

        for (let i = 0; i < total; i++) {

            document.getElementById("loadingTitulo").textContent =
                total > 1
                    ? "Enviando fotos..."
                    : "Enviando foto...";

            document.getElementById("loadingTexto").textContent =
                `Foto ${i + 1} de ${total}`;

            const formData = new URLSearchParams();

            formData.append("acao", "uploadFoto");
            formData.append("eventoId", EVENTO.EventoId);
            formData.append("arquivo", gerarNomeArquivo());
            formData.append(
                "legenda",
                document.getElementById("legenda").value
            );
            formData.append(
                "imagem",
                imagensSelecionadas[i]
            );

            const resposta = await fetch(API_URL, {

                method: "POST",
                body: formData

            });

            const dados = await resposta.json();

            console.log(`Foto ${i + 1}:`, dados);

            if (dados.status !== "ok") {

                throw new Error(dados.mensagem);

            }

        }

        document.getElementById("loading").style.display = "none";

        mostrarModal(

            "Obrigado!",

            total === 1
                ? (EVENTO.MensagemAgradecimento || "Foto enviada com sucesso.")
                : `${total} fotos foram compartilhadas com sucesso!`,

            reiniciarAplicacao

        );

    }

    catch (erro) {

        document.getElementById("loading").style.display = "none";

        console.error(erro);

        mostrarModal(

            "Erro",

            erro.message || "Não foi possível enviar as fotos."

        );

    }

}