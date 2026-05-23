//choices js
// const elemento1 = document.getElementById('grupos-post');

// const choices1 = new Choices(elemento1, {
//     removeItemButton: true,
//     searchEnabled: true,
//     placeholder: true,
//     placeholderValue: 'Selecione os grupos'
// });

// const elemento2 = document.getElementById('grupos-filtro');

// const choices2 = new Choices(elemento2, {
//     removeItemButton: true,
//     searchEnabled: true,
//     placeholder: true,
//     placeholderValue: 'Selecione os grupos'
// });

const selectBox =
    document.getElementById('select-box');

const options =
    document.getElementById('options-grupos');

selectBox.addEventListener("click", () => {
    event.stopPropagation();
    options.classList.toggle('active');
});

options.addEventListener('click', (event) => {

    event.stopPropagation();

});

document.addEventListener('click', (event) => {

    const multiSelect =
        document.querySelector('.multi-select');

    const clicouDentro =
        multiSelect.contains(event.target);

    if (!clicouDentro) {

        options.classList.remove('active');

    }

});
// selectBox.addEventListener('click', () => {
//     options.classList.toggle('active');
// });

function renderizarGrupos() {

    console.log(grupos)

    const container = document.getElementById('options-grupos');

    console.log(container);
    

    container.innerHTML = '';

    grupos.forEach(grupo => {

        const div = document.createElement('div');

        div.classList.add('option-item');

        div.innerHTML = `
            <label class="option-label">
                <input
                    type="checkbox"
                    value="${grupo.id}"
                    class="grupo-checkbox">

                ${grupo.nome}
            </label>
        `;

        container.appendChild(div);

        const checkbox = div.querySelector('.grupo-checkbox');

        checkbox.addEventListener(
            'change',
            atualizarTextoSelect
        );
    });
}

function obterSelecionados() {

    return [...document.querySelectorAll(
        '.grupo-checkbox:checked'
    )]
    .map(check => Number(check.value))
    .map(id =>
        grupos.find(grupo => grupo.id == id)
    );;

}

function atualizarTextoSelect() {

    

    const selecionados =
        document.querySelectorAll(
            '.grupo-checkbox:checked'
        );

    const total = selecionados.length;

    if (total === 0) {

        selectBox.innerText =
            'Selecionar grupos';

    }

    else if (total === 1) {

        selectBox.innerText =
            '1 grupo selecionado';

    }

    else {

        selectBox.innerText =
            `${total} grupos selecionados`;

    }

}

renderizarGrupos();