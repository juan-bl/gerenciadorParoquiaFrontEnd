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

function renderizarComunidade() {

    const tbody = document.getElementById('tabela-comunidades');

    tbody.innerHTML = '';

    comunidades.forEach(comunidade => {
        const linha = document.createElement('tr');

        linha.innerHTML = `
        <td>${comunidade.id}</td>
        <td>${comunidade.nome}</td>
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