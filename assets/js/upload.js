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

        document.getElementById("progressBar").style.width = "0%";

        document.getElementById("loadingPercentual").textContent = "0%";

        document.getElementById("loadingTexto").textContent =
            "Preparando envio...";

        const total = imagensSelecionadas.length;

        for (let i = 0; i < total; i++) {

            document.getElementById("loadingTitulo").textContent =
                total > 1
                    ? "Enviando suas lembranças..."
                    : "Enviando sua lembrança...";

            document.getElementById("loadingTexto").textContent =
                `Enviando foto ${i + 1} de ${total}...`;

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

// Atualiza o progresso somente após a foto ser enviada

            const percentual = Math.round(((i + 1) / total) * 100);

            document.getElementById("progressBar").style.width =
                percentual + "%";

            document.getElementById("loadingPercentual").textContent =
                percentual + "%";

            document.getElementById("loadingTexto").textContent =
                `${i + 1} de ${total} fotos enviadas`;

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