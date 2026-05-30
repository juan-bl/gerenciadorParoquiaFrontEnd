let indexEditando = null;

//modal update
function abrirModalUpdate(index) {
    indexEditando = index;

    const pessoa = pessoas[index];

    const modalUpdate =
    document.querySelector('.modal-update-pessoa');

    modalUpdate.querySelectorAll('.grupo-checkbox-update')
    .forEach(check => {check.checked = false;});

    const modal = document.querySelector('.modal-update-pessoa');
    modal.style.visibility = 'visible';

    const modalFundo = document.querySelector('.modal-fundo');
    modalFundo.style.visibility = 'visible';

     // preencher inputs
    document.getElementById('update-nome').value = pessoa.nome;

    document.getElementById('update-whatsapp').value = pessoa.whatsapp;

    document.getElementById('update-endereco').value = pessoa.endereco;

    document.querySelector('.update-comunidade').value = pessoa.comunidade;
    console.log("!");
    
        // limpa texto anterior
    const selectBoxUpdate =
        document.getElementById(
            'select-box-update'
        );

    selectBoxUpdate.innerText =
        'Selecionar grupos';

    // desmarca todos
    modalUpdate.querySelectorAll(
        '.grupo-checkbox-update'
    ).forEach(check => {

        check.checked = false;

    });

    
    pessoa.grupos.forEach(idGrupo => {
        modalUpdate.querySelectorAll('.grupo-checkbox-update').forEach(check => {
            if (Number(check.value) === Number(idGrupo)) {
                check.checked = true
            }
        })

    });
    atualizarTextoSelectUpdate();

    document.getElementById('update-data').value = pessoa.dataDeNascimento;
}

function fecharModalUpdate() {
    const modal = document.querySelector('.modal-update-pessoa');
    modal.style.visibility = 'hidden';

    const modalFundo = document.querySelector('.modal-fundo');
    modalFundo.style.visibility = 'hidden';
}

const btnFecharModalUpdate = document.getElementById('btn-fechar-update');

btnFecharModalUpdate.addEventListener('click', fecharModalUpdate);