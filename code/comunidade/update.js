let indexComunidadeEditando = null;

const formUpdateComunidade = document.getElementById('form-update-comunidade');

formUpdateComunidade.addEventListener('submit', (e) => {

        e.preventDefault();

        comunidades[indexComunidadeEditando].nome = formUpdateComunidade.nome.value;

        localStorage.setItem('comunidades', JSON.stringify(comunidades));
        
        renderizarComunidade();
        fecharModalUpdateComunidade();
    }
);

function abrirModalUpdateComunidade(index) {
    console.log('w');
    

    indexComunidadeEditando = index;

    const comunidade = comunidades[index];

    const modal = document.querySelector('.modal-update-comunidade');

    console.log(modal);
        

    modal.style.visibility = 'visible';

    document.querySelector('.modal-fundo').style.visibility = 'visible';

    document.querySelector('#form-update-comunidade input[name="nome"]').value = comunidade.nome;

}

function fecharModalUpdateComunidade() {

    document.querySelector(
        '.modal-update-comunidade'
    ).style.visibility =
        'hidden';

    document.querySelector(
        '.modal-fundo'
    ).style.visibility =
        'hidden';

}