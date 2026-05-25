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

    document.querySelector('.update-comunidade').value = pessoa.comunidade.id;
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

//     checkbox.addEventListener(
//     'change',
//     atualizarTextoSelectUpdate
// );


    // pessoa.grupos.forEach(idGrupo => {

    // console.log('ID salvo:', idGrupo);

    // document.querySelectorAll(
    //     '.grupo-checkbox-update'
    // ).forEach(check => {

    //     console.log(
    //         'Checkbox:',
    //         check.value
    //     );

    //     if (
    //         Number(check.value) === Number(idGrupo)
    //     ) {

    //         console.log('MATCH');

    //         check.checked = true;

    //     }

    // });

// });

    document.getElementById('update-data').value = pessoa.dataDeNascimento;
}

function fecharModalUpdate() {
    const modal = document.querySelector('.modal-update-pessoa');
    modal.style.visibility = 'hidden';

    const modalFundo = document.querySelector('.modal-fundo');
    modalFundo.style.visibility = 'hidden';
}

// const btnAbrirModalUpdate = document.querySelector('.update-btn');
const btnFecharModalUpdate = document.getElementById('btn-fechar-update');

// btnAbrirModalUpdate.addEventListener('click', abrirModalUpdate);
btnFecharModalUpdate.addEventListener('click', fecharModalUpdate);