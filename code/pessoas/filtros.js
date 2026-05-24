//CRIAR LOGICA DE FILTRAGEM

let getPessoa = document.getElementById('form-modal');

getPessoa.addEventListener('submit', async (e) => {
    e.preventDefault();



    pessoas.filter(pessoa => )
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
            <button><img src="../assets/edit.svg"></button>
            <button><img src="../assets/delete.svg"></button>
        </td>
    `
    tbody.appendChild(linha);
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