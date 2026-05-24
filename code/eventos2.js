const selectBox =
    document.getElementById('select-box-filtro');

const options =
    document.getElementById('options-grupos-filtro');

selectBox.addEventListener("click", () => {
    event.stopPropagation();
    options.classList.toggle('active');
});

options.addEventListener('click', (event) => {

    event.stopPropagation();

});

document.addEventListener('click', (event) => {

    const multiSelect =
        document.querySelector('.multi-select-filtro');

    const clicouDentro =
        multiSelect.contains(event.target);

    if (!clicouDentro) {

        options.classList.remove('active');

    }

});

function renderizarGruposFiltro() {

    console.log(grupos)

    const container = document.getElementById('options-grupos-filtro');

    console.log(container);
    

    container.innerHTML = '';

    grupos.forEach(grupo => {

        const div = document.createElement('div');

        div.classList.add('option-item-filtro');

        div.innerHTML = `
            <label class="option-label-filtro">
                <input
                    type="checkbox"
                    value="${grupo.id}"
                    class="grupo-checkbox-filtro">

                ${grupo.nome}
            </label>
        `;

        container.appendChild(div);

        const checkbox = div.querySelector('.grupo-checkbox-filtro');

        checkbox.addEventListener(
            'change',
            atualizarTextoSelect
        );
    });
}

function obterSelecionadosFiltro() {

    return [...document.querySelectorAll(
        '.grupo-checkbox-filtro:checked'
    )]
    .map(check => Number(check.value))
    .map(id =>
        grupos.find(grupo => grupo.id == id)
    );;

}

function atualizarTextoSelectFiltro() {

    

    const selecionados =
        document.querySelectorAll(
            '.grupo-checkbox-filtro:checked'
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

renderizarGruposFiltro();