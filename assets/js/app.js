console.log("✔ app.js carregado");

document.addEventListener("DOMContentLoaded", async () => {

    console.log("🚀 Celebre Moments iniciado.");

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

        alert("Foto aprovada!");

    });

});