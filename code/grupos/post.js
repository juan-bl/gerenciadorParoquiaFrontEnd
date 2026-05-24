let newGrupo = document.getElementById('form-grupos');
let cont = 0;

newGrupo.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (newGrupo.nome.value == '') {
        const form = document.querySelector('.input-pessoa');
        const error = document.createElement('p');
        error.innerText = 'Preencha o campo nome!';
        error.style.color = 'red';
        form.appendChild(error);
        return;

    } else {
        const grupo = {
            id: cont+=1,
            nome: newGrupo.nome.value
        }

        grupos.push(grupo)

        localStorage.setItem(
            'grupos',
            JSON.stringify(grupos)
        );

        renderizarGrupo();
        e.target.reset();
    }
});

function renderizarGrupo() {

    const tbody = document.getElementById('tabela-grupos');

    tbody.innerHTML = '';

    grupos.forEach((grupo, index) => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
        <td>${grupo.id}</td>
        <td>${grupo.nome}</td>
        <td class="celula-img">
            <button class="update-grupo-btn" data-index="${index}"><img src="../assets/edit.svg"></button>
            <button><img src="../assets/delete.svg"></button>
        </td>
    `

    tbody.appendChild(linha);
    });

    // eventos dos botões update
    const botoesUpdate = document.querySelectorAll('.update-grupo-btn');

    botoesUpdate.forEach(botao => {

        botao.addEventListener('click', (event) => {
            const index = event.currentTarget.dataset.index;
            abrirModalUpdateGrupo(index)
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