//modal filtros
function abrirModalFiltros() {
    const modal = document.querySelector('.modal-filtros');
    modal.style.visibility = 'visible';

    const modalFundo = document.querySelector('.modal-fundo');
    modalFundo.style.visibility = 'visible';
}

function fecharModalFiltros() {
    const modal = document.querySelector('.modal-filtros');
    modal.style.visibility = 'hidden';

    const modalFundo = document.querySelector('.modal-fundo');
    modalFundo.style.visibility = 'hidden';
}

const btnAbrirModalFiltros = document.querySelector('.btn-abrir-filtros');
const btnFecharModalFiltros = document.querySelector('.btn-fechar-filtros');

btnAbrirModalFiltros.addEventListener('click', abrirModalFiltros);
btnFecharModalFiltros.addEventListener('click', fecharModalFiltros);