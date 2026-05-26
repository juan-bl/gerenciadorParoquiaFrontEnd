let indexGrupoDeletando = null;

function abrirModalDeleteGrupo(index) {

    indexGrupoDeletando = index;

    const grupo = grupos[index];

    document.querySelector(
        '.modal-delete-grupo'
    ).style.visibility = 'visible';

    document.querySelector(
        '.modal-fundo'
    ).style.visibility = 'visible';

    document.getElementById('nome-delete-grupo').innerText = grupo.nome;

}

function fecharModalDeleteGrupo() {

    document.querySelector(
        '.modal-delete-grupo'
    ).style.visibility = 'hidden';

    document.querySelector(
        '.modal-fundo'
    ).style.visibility = 'hidden';

}

const formDeleteGrupo =
    document.getElementById(
        'form-delete-grupo'
    );

formDeleteGrupo.addEventListener(
    'submit',
    (e) => {

        e.preventDefault();

        grupos.splice(
            indexGrupoDeletando,
            1
        );

        localStorage.setItem(
            'grupos',
            JSON.stringify(grupos)
        );

        renderizarGrupo();

        fecharModalDeleteGrupo();

    }
);