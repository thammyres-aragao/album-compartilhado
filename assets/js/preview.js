let imagensSelecionadas = [];

console.log("✔ preview.js carregado");

function capturarFoto() {

    const video = document.getElementById("camera");
    const canvas = document.getElementById("canvas");
    const img = document.getElementById("fotoCapturada");

    const ctx = canvas.getContext("2d");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const imagem = canvas.toDataURL("image/jpeg", 0.9);

    imagensSelecionadas = [imagem];

    img.src = imagem;

    video.style.display = "none";
    img.style.display = "block";

    mostrarEtapa("etapaAprovacao");

}

function novaFoto() {

    imagensSelecionadas = [];

    document.getElementById("camera").style.display = "block";

    document.getElementById("fotoCapturada").style.display = "none";

    document.getElementById("fotoCapturada").src = "";

    mostrarEtapa("etapaCaptura");

}

function mostrarEtapa(etapa) {

    document.getElementById("etapaCaptura").style.display = "none";
    document.getElementById("etapaAprovacao").style.display = "none";
    document.getElementById("etapaEnvio").style.display = "none";

    document.getElementById(etapa).style.display = "block";

}

function abrirGaleria() {

    document
        .getElementById("inputGaleria")
        .click();

}

function carregarImagemGaleria(evento) {

    const arquivo = evento.target.files[0];

    if (!arquivo) {

        return;

    }

    const leitor = new FileReader();

    leitor.onload = function(e) {

        imagensSelecionadas = [e.target.result];

        const img = document.getElementById("fotoCapturada");

        img.src = e.target.result;

        document.getElementById("camera").style.display = "none";

        img.style.display = "block";

        mostrarEtapa("etapaAprovacao");

    };

    leitor.readAsDataURL(arquivo);

}