let newGrupo = document.getElementById('form-grupos');

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
            id: Date.now(),
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

let paginaAtual = 1;
const itensPorPagina = 10;

function renderizarGrupo(lista = grupos) {

    const inicio = (paginaAtual - 1) * itensPorPagina;
    const fim = inicio + itensPorPagina;
    const pagina = lista.slice(inicio, fim);

    const tbody = document.getElementById('tabela-grupos');

    tbody.innerHTML = '';

    pagina.forEach((grupo, index) => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
        <td>${grupo.id}</td>
        <td>${grupo.nome}</td>
        <td class="celula-img">
            <button class="update-grupo-btn" data-id="${grupo.id}"><img src="../assets/edit.svg"></button>
            <button class="delete-grupo-btn" data-id="${grupo.id}"><img src="../assets/delete.svg"></button>
        </td>
    `

    tbody.appendChild(linha);
    });

    // eventos dos botões update
    const botoesUpdate = document.querySelectorAll('.update-grupo-btn');

    botoesUpdate.forEach(botao => {

        botao.addEventListener('click', (event) => {
            const id = Number(event.currentTarget.dataset.id);
            const index = grupos.findIndex(grupo => grupo.id == id);
            abrirModalUpdateGrupo(index)
            }
            
        );

    });

    const botoesDelete =
        document.querySelectorAll('.delete-grupo-btn');

    botoesDelete.forEach(botao => {

        botao.addEventListener('click', (event) => {
            const id = Number(event.currentTarget.dataset.id);
            const index = grupos.findIndex(grupo => grupo.id == id);
            
            abrirModalDeleteGrupo(index)
            }
            
        );

    });

    
    // atualizar Encontrados
    let total = lista.length;
    document.getElementById('encontrados').querySelector('span').innerText = total;
    fecharModalCreate();

    renderizarPaginacaoGrupos(lista);
}

function clearError() {
        const errorElement = document.querySelector('.input-pessoa p');
        if (errorElement) {
            errorElement.remove();
        }
    }