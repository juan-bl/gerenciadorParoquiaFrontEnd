function renderizarPaginacaoGrupos(lista) {
    const totalPaginas = Math.ceil(lista.length / itensPorPagina);

    const container = document.getElementById('paginacao');

    container.innerHTML = '';

    for (let i = 1; i <= totalPaginas; i++) {
        const botao = document.createElement('button');

        botao.innerText = i;

        if (i === paginaAtual) {
            botao.classList.add('pagina-ativa');
        }

        botao.addEventListener('click', () => {
            paginaAtual = i;
            renderizarGrupo(lista);
        });

        container.appendChild(botao);
    }
}