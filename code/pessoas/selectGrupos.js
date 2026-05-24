function selectGrupos() {
    let select = document.getElementById('grupos-post');

    select.innerHTML = '';

    grupos.forEach(grupo => {
        const option = document.createElement('option')

        option.value = grupo.id;
        option.textContent = grupo.nome;

        select.appendChild(option);
    });
}

function selectGruposFiltro() {
    let select = document.getElementById('grupos-post-filtro');

    select.innerHTML = '';

    grupos.forEach(grupo => {
        const option = document.createElement('option-filtro')

        option.value = grupo.id;
        option.textContent = grupo.nome;

        select.appendChild(option);
    });
}

selectGrupos();
selectGruposFiltro();