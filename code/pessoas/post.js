let newPessoa = document.getElementById('form-pessoas');

newPessoa.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (newPessoa.nome.value == '') {
        const form = document.querySelector('.input-pessoa');
        const error = document.createElement('p');
        error.innerText = 'Preencha o campo nome!';
        error.style.color = 'red';
        form.appendChild(error);
        return;

    } else {
        const pessoa = {
            id: Date.now(),
            nome: newPessoa.nome.value,
            whatsapp: newPessoa.whatsapp.value,
            endereco: newPessoa.endereco.value,
            comunidade: parseInt(newPessoa.comunidade.value),
            grupos: obterSelecionados(),
            dataDeNascimento: newPessoa.data.value,
        }

        pessoas.push(pessoa)

        localStorage.setItem(
            'pessoas',
            JSON.stringify(pessoas)
        );

        renderizarPessoas();
        e.target.reset();
        document.getElementById('select-box').innerText = 'Selecionar grupos';
        // atualizarTextoSelect();
    }
});

let paginaAtual = 1;
const itensPorPagina = 3;

function renderizarPessoas(lista = pessoas) {

    const inicio = (paginaAtual - 1) * itensPorPagina;

    const fim = inicio + itensPorPagina;

    const pagina = lista.slice(inicio, fim);

    const tbody = document.getElementById('tabela-pessoas');
    tbody.innerHTML = '';
    pagina.forEach((pessoa, index) => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
        <td>${pessoa.nome}</td>
        <td>${pessoa.whatsapp}</td>
        <td>${pessoa.endereco}</td>
        <td>${(() => {
            const comunidadeEncontrada = comunidades.find(c => c.id == pessoa.comunidade);
            return comunidadeEncontrada ? comunidadeEncontrada.nome : '';
        })
        ()}</td>
        <td>${pessoa.grupos.map(id => {
            const grupo = grupos.find(g => g.id == id);
            return grupo ? grupo.nome : '';
            })
            .join(', ')
            }
        </td>
        <td>${pessoa.dataDeNascimento}</td>
        <td class="celula-img">
            <button class="update-btn" data-id="${pessoa.id}"><img src="../assets/edit.svg"></button>
            <button class="delete-btn" data-id="${pessoa.id}"><img src="../assets/delete.svg"></button>
        </td>
    `
    tbody.appendChild(linha);
    });

    // eventos dos botões update
    const botoesUpdate =
        document.querySelectorAll('.update-btn');

        botoesUpdate.forEach(botao => {

            botao.addEventListener('click', (event) => {
                const id = Number(event.currentTarget.dataset.id);

                const index = pessoas.findIndex(pessoa => pessoa.id == id);

                console.log(index);
                console.log(pessoas);
                
                
                abrirModalUpdate(index)
                }
            );

    });

    const botoesDelete =
        document.querySelectorAll('.delete-btn');

    botoesDelete.forEach(botao => {

        botao.addEventListener('click', (event) => {
            const id = Number(event.currentTarget.dataset.id);

            const index = pessoas.findIndex(pessoa => pessoa.id == id);
            abrirModalDeletePessoa(index)
            }
            
        );

    });

    
    // atualizar Encontrados
    let total = lista.length;
    document.getElementById('encontrados').querySelector('span').innerText = total;
    fecharModalCreate();

    renderizarPaginacao(lista)
}

function clearError() {
        const errorElement = document.querySelector('.input-pessoa p');
        if (errorElement) {
            errorElement.remove();
        }
    }