//modal update
function abrirModalUpdate() {
    const modal = document.querySelector('.modal-update');
    modal.style.visibility = 'visible';

    const modalFundo = document.querySelector('.modal-fundo');
    modalFundo.style.visibility = 'visible';
}

function fecharModalUpdate() {
    const modal = document.querySelector('.modal-update');
    modal.style.visibility = 'hidden';

    const modalFundo = document.querySelector('.modal-fundo');
    modalFundo.style.visibility = 'hidden';
}

// const btnAbrirModalUpdate = document.querySelector('.update-btn');
const btnFecharModalUpdate = document.getElementById('btn-fechar-update');

// btnAbrirModalUpdate.addEventListener('click', abrirModalUpdate);
btnFecharModalUpdate.addEventListener('click', fecharModalUpdate);