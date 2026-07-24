console.log("✔ camera.js carregado");

let stream = null;

let cameraFrontal = false;

async function iniciarCamera() {

    try {

        if (stream) {

            stream.getTracks().forEach(track => track.stop());

        }

        const video = document.getElementById("camera");

        stream = await navigator.mediaDevices.getUserMedia({

            video: {

                facingMode: cameraFrontal
                    ? "user"
                    : "environment"

            },

            audio: false

        });

        video.srcObject = stream;

        await video.play();

        console.log("📷 Câmera iniciada.");

    }

    catch(error){

        console.error(error);

    }

}

async function trocarCamera(){

    cameraFrontal = !cameraFrontal;

    await iniciarCamera();

}