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
            nome: newPessoa.nome.value,
            whatsapp: newPessoa.whatsapp.value,
            endereco: newPessoa.endereco.value,
            comunidade: (comunidades.find(comunidade => comunidade.id == newPessoa.comunidade.value)).nome,
            grupos: obterSelecionados().map(check => check.nome),
            dataDeNascimento: newPessoa.data.value,
        }

        pessoas.push(pessoa)

        localStorage.setItem(
            'pessoas',
            JSON.stringify(pessoas)
        );

        renderizarPessoas();
        e.target.reset();
        // atualizarTextoSelect();
    }
});

function renderizarPessoas() {

    const tbody = document.getElementById('tabela-pessoas');
    tbody.innerHTML = '';
    pessoas.forEach(pessoa => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
        <td>${pessoa.nome}</td>
        <td>${pessoa.whatsapp}</td>
        <td>${pessoa.endereco}</td>
        <td>${pessoa.comunidade}</td>
        <td>${pessoa.grupos}</td>
        <td>${pessoa.dataDeNascimento}</td>
        <td class="celula-img">
            <button class="update-btn"><img src="../assets/edit.svg"></button>
            <button><img src="../assets/delete.svg"></button>
        </td>
    `
    tbody.appendChild(linha);
    });

    // eventos dos botões update
    const botoesUpdate =
        document.querySelectorAll('.update-btn');

    botoesUpdate.forEach(botao => {

        botao.addEventListener(
            'click',
            abrirModalUpdate
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