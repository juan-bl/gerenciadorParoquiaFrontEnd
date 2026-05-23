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
        
        console.log(pessoa.grupos);
        
        // console.log(obterSelecionados().forEach(check => grupos.filter(grupo => grupo.id == check.id)));
        // console.log(obterSelecionados());
        // obterSelecionados().forEach(check => console.log(check.id))
        // console.log(pessoa.grupos);
        
        // obterSelecionados().forEach(check => console.log(check));
        // console.log(comunidades);


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
    `

    tbody.appendChild(linha);
    });

    
    atualizarEncontrados();
    fecharModalCreate();
}

function clearError() {
        const errorElement = document.querySelector('.input-pessoa p');
        if (errorElement) {
            errorElement.remove();
        }
    }