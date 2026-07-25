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

}