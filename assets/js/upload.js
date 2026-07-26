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

        document.getElementById("progressContainer").style.display = "block";

        document.getElementById("loadingTitulo").textContent =
            "Enviando suas lembranças...";

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

            // Na última foto, mantém os 100% visíveis por um instante
            if (i === total - 1) {

                document.getElementById("progressContainer").style.display = "none";

                document.getElementById("loadingTitulo").textContent =
                    "✅ Envio concluído!";

                document.getElementById("loadingPercentual").textContent = "";

                document.getElementById("loadingTexto").textContent =
                    total === 1
                        ? "Seu momento foi compartilhado com sucesso!"
                        : "Seus momentos foram compartilhados com sucesso!";

                await new Promise(resolve => setTimeout(resolve, 1200));

            }

        }

        document.getElementById("loading").style.display = "none";

        mostrarModal(

            "Obrigado(a)!",

            EVENTO.MensagemAgradecimento ||

            (total === 1
                ? "Obrigado(a) por compartilhar este momento especial!"
                : "Obrigado(a) por compartilhar seus momentos especiais!"),

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