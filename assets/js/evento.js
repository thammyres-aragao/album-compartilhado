let EVENTO = null;

async function carregarEvento() {

    const parametros = new URLSearchParams(window.location.search);

    const eventoId = parametros.get("evento");

    if (!eventoId) {

        throw new Error("Evento não informado na URL.");

    }

    const url = `${API_URL}?acao=validarEvento&e=${encodeURIComponent(eventoId)}`;

    const resposta = await fetch(url);

    const dados = await resposta.json();

    if (dados.status !== "ok") {

        throw new Error(dados.mensagem);

    }

    EVENTO = dados.evento;

    return EVENTO;

}