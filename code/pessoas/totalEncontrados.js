function atualizarEncontrados() {
    const tbody = document.getElementById('tabela-pessoas');
    let total = tbody.children.length;

    document.getElementById('encontrados').querySelector('span').innerText = total;
}