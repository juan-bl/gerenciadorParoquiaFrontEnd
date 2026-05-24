const selectBoxUpdate = document.getElementById('select-box-update');

const optionsUpdate = document.getElementById('options-grupos-update');

selectBoxUpdate.addEventListener(
    'click',
    (event) => {

        event.stopPropagation();

        optionsUpdate.classList.toggle(
            'active'
        );

    }
);

optionsUpdate.addEventListener(
    'click',
    (event) => {

        event.stopPropagation();

    }
);

document.addEventListener('click', () => {

    optionsUpdate.classList.remove(
        'active'
    );

});

function renderizarComunidadesUpdate() {

    const select =
        document.querySelector('.update-comunidade');

    select.innerHTML = `
        <option value="" disabled>
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

function renderizarGruposUpdate() {

    const container = document.getElementById('options-grupos-update');

    container.innerHTML = '';

    grupos.forEach(grupo => {

        const div = document.createElement('div');

        div.classList.add('option-item');

        div.innerHTML = `
            <label class="option-label">

                <input
                    type="checkbox"
                    value="${grupo.id}"
                    class="grupo-checkbox-update">

                ${grupo.nome}

            </label>
        `;

        container.appendChild(div);

        const checkbox =
            div.querySelector(
                '.grupo-checkbox-update'
            );

        checkbox.addEventListener(
            'change',
            atualizarTextoSelectUpdate
        );

    });

}

function atualizarTextoSelectUpdate() {

    const selecionados =
        document.querySelectorAll(
            '.grupo-checkbox-update:checked'
        );

    const total = selecionados.length;

    const selectBox =
        document.getElementById(
            'select-box-update'
        );

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

renderizarComunidadesUpdate();

renderizarGruposUpdate();