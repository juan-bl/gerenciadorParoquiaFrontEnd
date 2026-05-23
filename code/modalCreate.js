//modal create
function abrirModalCreate() {
    const modal = document.querySelector('.modal-create');
    modal.style.visibility = 'visible';
    atualizarTextoSelect();


    const modalFundo = document.querySelector('.modal-fundo');
    modalFundo.style.visibility = 'visible';
}

function fecharModalCreate() {
    const modal = document.querySelector('.modal-create');
    modal.style.visibility = 'hidden';
    atualizarTextoSelect();

    const modalFundo = document.querySelector('.modal-fundo');
    modalFundo.style.visibility = 'hidden';
}

const btnAbrirModalCreate = document.querySelector('.post-btn');
const btnFecharModalCreate = document.querySelector('.btn-cancel');

btnAbrirModalCreate.addEventListener('click', abrirModalCreate);
btnFecharModalCreate.addEventListener('click', fecharModalCreate);