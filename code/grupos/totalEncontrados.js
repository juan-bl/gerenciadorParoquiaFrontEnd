function atualizarEncontrados() {
    const tbody = document.getElementById('tabela-grupos');
    let total = tbody.children.length;

    document.getElementById('encontrados').querySelector('span').innerText = total;
}