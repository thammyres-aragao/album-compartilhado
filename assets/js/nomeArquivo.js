function gerarNomeArquivo() {

    const agora = new Date();

    const data = agora.toISOString().replace(/[-:.TZ]/g, "");

    return `${EVENTO.id}_${data}.jpg`;

}