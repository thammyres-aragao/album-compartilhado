function gerarNomeArquivo() {

    const agora = new Date();

    const data = agora.toISOString().replace(/[-:.TZ]/g, "");

    const aleatorio = Math.random().toString(36).substring(2, 8).toUpperCase();

    return `${EVENTO.EventoId}_${data}_${aleatorio}.jpg`;

}