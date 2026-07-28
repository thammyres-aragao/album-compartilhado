let EVENTO = null;
let TOKEN = null;

async function carregarEvento() {

    const parametros = new URLSearchParams(window.location.search);

    const eventoId = parametros.get("evento");
    const token = parametros.get("token");

    if (!eventoId) {

        throw new Error("Evento não informado na URL.");

    }

    if (!token) {

        throw new Error("Token não informado na URL.");

    }

    const url =
        `${API_URL}?acao=validarEvento` +
        `&e=${encodeURIComponent(eventoId)}` +
        `&token=${encodeURIComponent(token)}`;

    const resposta = await fetch(url);

    const dados = await resposta.json();

    if (dados.status !== "ok") {

        throw new Error(dados.mensagem);

    }

    EVENTO = dados.evento;

    TOKEN = token;

    return EVENTO;

}