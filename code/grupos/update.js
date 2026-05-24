let indexGrupoEditando = null;

const formUpdateGrupo =
    document.getElementById(
        'form-update-grupo'
    );

formUpdateGrupo.addEventListener(
    'submit',
    (e) => {

        e.preventDefault();

        grupos[
            indexGrupoEditando
        ].nome =
            formUpdateGrupo.nome.value;

        localStorage.setItem(
            'grupos',
            JSON.stringify(grupos)
        );

        renderizarGrupo();

        fecharModalUpdateGrupo();

    }
);

function abrirModalUpdateGrupo(index) {

    indexGrupoEditando = index;

    const grupo = grupos[index];

    const modal =
        document.querySelector(
            '.modal-update'
        );

        console.log(modal);
        

    modal.style.visibility =
        'visible';

    document.querySelector(
        '.modal-fundo'
    ).style.visibility =
        'visible';

    document.querySelector(
        '#form-update-grupo input[name="nome"]'
    ).value = grupo.nome;

}

function fecharModalUpdateGrupo() {

    document.querySelector(
        '.modal-update'
    ).style.visibility =
        'hidden';

    document.querySelector(
        '.modal-fundo'
    ).style.visibility =
        'hidden';

}