console.log("✔ app.js carregado");

document.addEventListener("DOMContentLoaded", async () => {

    try {

        console.log("🚀 Celebre Moments iniciado.");

        await carregarEvento();

        console.log(EVENTO);

        atualizarTelaEvento();

        await iniciarCamera();

        document
            .getElementById("btnTrocar")
            .addEventListener("click", trocarCamera);

        document
            .getElementById("btnCapturar")
            .addEventListener("click", capturarFoto);

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

    }

    catch (erro) {

        console.error(erro);

        alert(erro.message);

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

    if (EVENTO.Logo) {

        const logo = document.getElementById("logoEvento");

        logo.src = EVENTO.Logo;

        logo.style.display = "block";

        document.getElementById("logoPadrao").style.display = "none";

    }

}