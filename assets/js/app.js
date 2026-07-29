console.log("✔ app.js carregado");

document.addEventListener("DOMContentLoaded", async () => {

    try {

        console.log("🚀 Celebre Moments iniciado.");

        // Carrega os dados do evento
        await carregarEvento();

        console.log(EVENTO);

        // Aplica a personalização
        atualizarTelaEvento();

        // Inicializa a câmera
        await iniciarCamera();

        // Somente agora exibe a aplicação
        document.getElementById("splashScreen").style.display = "none";
        document.getElementById("app").style.display = "block";

        document
            .getElementById("btnTrocar")
            .addEventListener("click", trocarCamera);

        document
            .getElementById("btnCapturar")
            .addEventListener("click", capturarFoto);

        document
            .getElementById("btnGaleria")
            .addEventListener("click", abrirGaleria);

        document
            .getElementById("btnAdicionarFotos")
            .addEventListener("click", abrirGaleria);

        document
            .getElementById("btnNovaFoto")
            .addEventListener("click", novaFoto);

        document
            .getElementById("btnContinuar")
            .addEventListener("click", () => {

                mostrarEtapa("etapaEnvio");

            });

        document
            .getElementById("btnEnviar")
            .addEventListener("click", testarAPI);

        document
            .getElementById("btnAnterior")
            .addEventListener("click", imagemAnterior);

        document
            .getElementById("btnProximo")
            .addEventListener("click", proximaImagem);

        document
            .getElementById("btnMiniAnterior")
            .addEventListener("click", miniaturasAnterior);

        document
            .getElementById("btnMiniProximo")
            .addEventListener("click", miniaturasProximo);

        document
            .getElementById("inputGaleria")
            .addEventListener("change", carregarImagemGaleria);

    }

    catch (erro) {

    console.error(erro);

    document.getElementById("splashScreen").style.display = "none";

    mostrarModal(
        "Acesso não autorizado",
        erro.message || "Não foi possível carregar o evento.",
        "erro"
    );

}

});

function atualizarTelaEvento() {

    document.title = EVENTO.NomeEvento;

    document.getElementById("nomeEvento").textContent =
        EVENTO.NomeEvento;

    document.getElementById("mensagemBoasVindas").textContent =
        EVENTO.MensagemBoasVindas || "";

    document.documentElement.style.setProperty(
        "--cor-primaria",
        EVENTO.CorPrimaria || "#6d55a5"
    );

    document.documentElement.style.setProperty(
        "--cor-secundaria",
        EVENTO.CorSecundaria || "#ece2fc"
    );

    document.documentElement.style.setProperty(
        "--cor-texto",
        EVENTO.CorPrimaria || "#503a87"
    );

    const logo = document.getElementById("logoEvento");
    const marcaSistema = document.getElementById("marcaSistema");

    if (EVENTO.Logo && EVENTO.Logo.trim() !== "") {

        logo.src = EVENTO.Logo;
        logo.style.display = "block";

        marcaSistema.style.display = "none";

    } else {

        logo.style.display = "none";

        marcaSistema.style.display = "block";

    }

}

async function reiniciarAplicacao() {

    imagemCapturada = null;

    document.getElementById("legenda").value = "";

    document.getElementById("btnAnterior").style.display = "none";

    document.getElementById("btnProximo").style.display = "none";

    novaFoto();

    await iniciarCamera();

}