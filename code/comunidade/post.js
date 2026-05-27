let newComunidade = document.getElementById('form-comunidade');
let cont = 0;

newComunidade.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (newComunidade.nome.value == '') {
        const form = document.querySelector('.input-pessoa');
        const error = document.createElement('p');
        error.innerText = 'Preencha o campo nome!';
        error.style.color = 'red';
        form.appendChild(error);
        return;

    } else {
        const comunidade = {
            id: cont+=1,
            nome: newComunidade.nome.value
        }

        comunidades.push(comunidade)

        localStorage.setItem(
            'comunidades',
            JSON.stringify(comunidades)
        );

        renderizarComunidade();
        e.target.reset();
    }
});

function renderizarComunidade(lista = comunidades) {

    const tbody = document.getElementById('tabela-comunidades');

    tbody.innerHTML = '';

    lista.forEach((comunidade, index) => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
        <td>${comunidade.id}</td>
        <td>${comunidade.nome}</td>
        <td class="celula-img">
            <button class="update-comunidade-btn" data-index="${index}"><img src="../assets/edit.svg"></button>
            <button class="delete-comunidade-btn" data-index="${index}"><img src="../assets/delete.svg"></button>
        </td>
    `

    tbody.appendChild(linha);
    });

    // eventos dos botões update
    const botoesUpdate = document.querySelectorAll('.update-comunidade-btn');

    botoesUpdate.forEach(botao => {

        botao.addEventListener('click', (event) => {
            const index = event.currentTarget.dataset.index;
            abrirModalUpdateComunidade(index)
            }
            
        );

    });

    const botoesDelete =
        document.querySelectorAll('.delete-comunidade-btn');

    botoesDelete.forEach(botao => {

        botao.addEventListener('click', (event) => {
            const index = event.currentTarget.dataset.index;
            
            abrirModalDeleteComunidade(index)
            }
            
        );

    });

    
    // atualizar Encontrados
    let total = tbody.children.length;
    document.getElementById('encontrados').querySelector('span').innerText = total;
    fecharModalCreate();
}

function clearError() {
        const errorElement = document.querySelector('.input-pessoa p');
        if (errorElement) {
            errorElement.remove();
        }
    }