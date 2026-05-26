let indexPessoaDeletando = null;

function abrirModalDeletePessoa(index) {

    indexPessoaDeletando = index;

    const pessoa = pessoas[index];

    document.querySelector(
        '.modal-delete-pessoa'
    ).style.visibility = 'visible';

    document.querySelector(
        '.modal-fundo'
    ).style.visibility = 'visible';

    document.getElementById('nome-delete-pessoa').innerText = pessoa.nome;

}

function fecharModalDeletePessoa() {

    document.querySelector(
        '.modal-delete-pessoa'
    ).style.visibility = 'hidden';

    document.querySelector(
        '.modal-fundo'
    ).style.visibility = 'hidden';

}

const formDeletePessoa =
    document.getElementById(
        'form-delete-pessoa'
    );

formDeletePessoa.addEventListener(
    'submit',
    (e) => {

        e.preventDefault();

        pessoas.splice(
            indexPessoaDeletando,
            1
        );

        localStorage.setItem(
            'pessoas',
            JSON.stringify(pessoas)
        );

        renderizarPessoas();

        fecharModalDeletePessoa();

    }
);