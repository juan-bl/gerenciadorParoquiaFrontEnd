function selectComunidades() {
    let select = document.getElementById('comunidade-post');

    select.innerHTML = '';

    comunidades.forEach(comunidade => {
        const option = document.createElement('option')

        option.value = comunidade.id;
        option.textContent = comunidade.nome;

        select.appendChild(option);
    });
}

function renderizarComunidades() {

    const select =
        document.getElementById('comunidade-post');

    select.innerHTML = `
        <option value="" selected disabled>
            Selecione uma comunidade
        </option>
    `;

    comunidades.forEach(comunidade => {

        const option =
            document.createElement('option');

        option.value = comunidade.id;

        option.textContent = comunidade.nome;

        select.appendChild(option);

    });
}

selectComunidades();
renderizarComunidades();