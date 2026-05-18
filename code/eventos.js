function abrirModal() {
    const modal = document.querySelector('.modal-create');
    modal.style.visibility = 'visible';
}

function fecharModal() {
    const modal = document.querySelector('.modal-create');
    modal.style.visibility = 'hidden';
}

const btnAbrirModal = document.querySelector('.post-btn');
const btnFecharModal = document.querySelector('.btn-cancel');

btnAbrirModal.addEventListener('click', abrirModal);
btnFecharModal.addEventListener('click', fecharModal);