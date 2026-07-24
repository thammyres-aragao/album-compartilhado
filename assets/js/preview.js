console.log("✔ preview.js carregado");

function capturarFoto() {

    const video = document.getElementById("camera");
    const canvas = document.getElementById("canvas");
    const img = document.getElementById("fotoCapturada");

    const ctx = canvas.getContext("2d");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    img.src = canvas.toDataURL("image/jpeg", 0.9);

    video.style.display = "none";
    img.style.display = "block";

    // Esconde os botões da câmera
    document.getElementById("btnCapturar").style.display = "none";
    document.getElementById("btnTrocar").style.display = "none";

    // Mostra os botões da foto
    document.getElementById("btnNovaFoto").style.display = "block";
    document.getElementById("btnContinuar").style.display = "block";

}

function novaFoto() {

    document.getElementById("camera").style.display = "block";
    document.getElementById("fotoCapturada").style.display = "none";

    document.getElementById("btnCapturar").style.display = "block";
    document.getElementById("btnTrocar").style.display = "block";

    document.getElementById("btnNovaFoto").style.display = "none";
    document.getElementById("btnContinuar").style.display = "none";

}