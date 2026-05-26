let indexComunidadeDeletando = null;

function abrirModalDeleteComunidade(index) {

    indexComunidadeDeletando = index;

    const comunidade = comunidades[index];

    document.querySelector(
        '.modal-delete-comunidade'
    ).style.visibility = 'visible';

    document.querySelector(
        '.modal-fundo'
    ).style.visibility = 'visible';

    document.getElementById('nome-delete-comunidade').innerText = comunidade.nome;

}

function fecharModalDeleteComunidade() {

    document.querySelector(
        '.modal-delete-comunidade'
    ).style.visibility = 'hidden';

    document.querySelector(
        '.modal-fundo'
    ).style.visibility = 'hidden';

}

const formDeleteComunidade =
    document.getElementById(
        'form-delete-comunidade'
    );

formDeleteComunidade.addEventListener(
    'submit',
    (e) => {

        e.preventDefault();

        comunidades.splice(
            indexComunidadeDeletando,
            1
        );

        localStorage.setItem(
            'comunidades',
            JSON.stringify(comunidades)
        );

        renderizarComunidade();

        fecharModalDeleteComunidade();

    }
);