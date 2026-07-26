let imagensSelecionadas = [];

let indiceImagemAtual = 0;

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

    indiceImagemAtual = 0;

    exibirImagemAtual();

    video.style.display = "none";
    img.style.display = "block";
    document.getElementById("previewInfo").style.display = "block";

    document.getElementById("tituloPreview").textContent =
        "Confira sua foto";

    mostrarEtapa("etapaAprovacao");

}

function novaFoto() {

    imagensSelecionadas = [];

    document.getElementById("camera").style.display = "block";

    document.getElementById("fotoCapturada").style.display = "none";

    document.getElementById("fotoCapturada").src = "";

    document.getElementById("previewInfo").style.display = "none";

    document.getElementById("miniaturas").style.display = "none";

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

    const arquivos = Array.from(evento.target.files);

    if (arquivos.length === 0) {

        return;

    }

    imagensSelecionadas = [];

    indiceImagemAtual = 0;

    let arquivosCarregados = 0;

    arquivos.forEach((arquivo) => {

        const leitor = new FileReader();

        leitor.onload = function (e) {

            imagensSelecionadas.push(e.target.result);

            arquivosCarregados++;

            if (arquivosCarregados === arquivos.length) {

                exibirImagemAtual();

                document.getElementById("camera").style.display = "none";

                document.getElementById("fotoCapturada").style.display = "block";

                document.getElementById("previewInfo").style.display = "block";

                document.getElementById("tituloPreview").textContent =
                    arquivos.length > 1
                        ? "Confira suas fotos"
                        : "Confira sua foto";

                mostrarEtapa("etapaAprovacao");

            }

        };

        leitor.readAsDataURL(arquivo);

    });

}

function atualizarContadorPreview() {

    document.getElementById("contadorPreview").textContent =
        `Foto ${indiceImagemAtual + 1} de ${imagensSelecionadas.length}`;

}

function atualizarNavegacaoPreview() {

    const mostrar = imagensSelecionadas.length > 1;

    document.getElementById("btnAnterior").style.display =
        mostrar ? "block" : "none";

    document.getElementById("btnProximo").style.display =
        mostrar ? "block" : "none";

}

function exibirImagemAtual() {

    const img = document.getElementById("fotoCapturada");

    img.src = imagensSelecionadas[indiceImagemAtual];

    atualizarContadorPreview();

    atualizarNavegacaoPreview();

}

function proximaImagem() {

    if (indiceImagemAtual < imagensSelecionadas.length - 1) {

        indiceImagemAtual++;

        exibirImagemAtual();

    }

}

function imagemAnterior() {

    if (indiceImagemAtual > 0) {

        indiceImagemAtual--;

        exibirImagemAtual();

    }

}