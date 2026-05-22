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

        console.log(grupos);
        

        renderizarGrupo();
        e.target.reset();
    }
});

function renderizarGrupo() {

    const tbody = document.getElementById('tabela-grupos');

    tbody.innerHTML = '';

    grupos.forEach(grupo => {
        const linha = document.createElement('tr');

        linha.innerHTML = `
        <td>${grupo.id}</td>
        <td>${grupo.nome}</td>
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