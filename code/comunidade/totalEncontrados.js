function atualizarEncontrados() {
    const tbody = document.getElementById('tabela-comunidades');
    let total = tbody.children.length;

    document.getElementById('encontrados').querySelector('span').innerText = total;
}