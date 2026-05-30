let newComunidade = document.getElementById('form-comunidade');

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
            id: Date.now(),
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

let paginaAtual = 1;
const itensPorPagina = 10;

function renderizarComunidade(lista = comunidades) {

    lista.sort((a, b) =>
        a.nome.localeCompare(b.nome)
    );

    const inicio = (paginaAtual - 1) * itensPorPagina;
    const fim = inicio + itensPorPagina;
    const pagina = lista.slice(inicio, fim);

    const tbody = document.getElementById('tabela-comunidades');

    tbody.innerHTML = '';

    pagina.forEach((comunidade, index) => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
        <td>${comunidade.id}</td>
        <td>${comunidade.nome}</td>
        <td class="celula-img">
            <button class="update-comunidade-btn" data-id="${comunidade.id}"><img src="../assets/edit.svg"></button>
            <button class="delete-comunidade-btn" data-id="${comunidade.id}"><img src="../assets/delete.svg"></button>
        </td>
    `

    tbody.appendChild(linha);
    });

    // eventos dos botões update
    const botoesUpdate = document.querySelectorAll('.update-comunidade-btn');

    botoesUpdate.forEach(botao => {

        botao.addEventListener('click', (event) => {
            const id = Number(event.currentTarget.dataset.id);
            const index = comunidades.findIndex(comunidade => comunidade.id == id);
            abrirModalUpdateComunidade(index)
            }
            
        );

    });

    const botoesDelete =
        document.querySelectorAll('.delete-comunidade-btn');

    botoesDelete.forEach(botao => {

        botao.addEventListener('click', (event) => {
            const id = Number(event.currentTarget.dataset.id);
            const index = comunidades.findIndex(comunidade => comunidade.id == id);
            abrirModalDeleteComunidade(index)
            }
            
        );

    });

    
    // atualizar Encontrados
    let total = lista.length;
    document.getElementById('encontrados').querySelector('span').innerText = total;
    fecharModalCreate();
    renderizarPaginacaoComunidades(lista);
}

function clearError() {
        const errorElement = document.querySelector('.input-pessoa p');
        if (errorElement) {
            errorElement.remove();
        }
    }