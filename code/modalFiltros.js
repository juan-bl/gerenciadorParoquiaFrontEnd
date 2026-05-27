//modal filtros
function abrirModalFiltros() {
    const modal = document.querySelector('.modal-filtros');
    modal.style.visibility = 'visible';

    const modalFundo = document.querySelector('.modal-fundo');
    modalFundo.style.visibility = 'visible';

    renderizarComunidadesFiltro();
    renderizarGruposFiltro();
}

function fecharModalFiltros() {
    const modal = document.querySelector('.modal-filtros');
    modal.style.visibility = 'hidden';

    const modalFundo = document.querySelector('.modal-fundo');
    modalFundo.style.visibility = 'hidden';
}

const btnAbrirModalFiltros = document.querySelector('.btn-abrir-filtros');
const btnFecharModalFiltros = document.querySelector('.btn-fechar-filtros');

btnAbrirModalFiltros.addEventListener('click', abrirModalFiltros);
btnFecharModalFiltros.addEventListener('click', fecharModalFiltros);

function renderizarComunidadesFiltro() {

    const select =
        document.getElementById(
            'filtro-comunidade'
        );

    select.innerHTML = `
        <option value="">
            Selecione...
        </option>
    `;

    comunidades.forEach(comunidade => {

        const option =
            document.createElement(
                'option'
            );

        option.value =
            comunidade.id;

        option.textContent =
            comunidade.nome;

        select.appendChild(option);

    });

}

function renderizarGruposFiltro() {

    const container = document.getElementById('options-grupos-filtro');

    container.innerHTML = '';

    grupos.forEach(grupo => {

        const div =
            document.createElement(
                'div'
            );

        div.classList.add(
            'option-item'
        );

        div.innerHTML = `
        
            <label class="option-label">

                <input
                    type="checkbox"
                    value="${grupo.id}"
                    class="grupo-checkbox-filtro"
                >

                ${grupo.nome}

            </label>
        `;

        container.appendChild(div);

    });

}

const selectBoxFiltro =
    document.getElementById(
        'select-box-filtro'
    );

const optionsFiltro =
    document.getElementById(
        'options-grupos-filtro'
    );

selectBoxFiltro.addEventListener(
    'click',
    (event) => {

        event.stopPropagation();

        optionsFiltro.classList.toggle(
            'active'
        );

    }
);

optionsFiltro.addEventListener(
    'click',
    (event) => {

        event.stopPropagation();

    }
);

document.addEventListener(
    'click',
    (event) => {

        const multiSelect =
            document.querySelector(
                '.multi-select-filtro'
            );

        const clicouDentro =
            multiSelect.contains(
                event.target
            );

        if (!clicouDentro) {

            optionsFiltro.classList.remove(
                'active'
            );

        }

    }
);


const formFiltros = document.querySelector('.modal-filtros form');

formFiltros.addEventListener('submit', (e) => {
    e.preventDefault();

    let filtradas = pessoas;

    const nome = formFiltros.nome.value.toLowerCase();
    if (nome !== '') {
        filtradas = filtradas.filter(pessoa => pessoa.nome.toLowerCase().includes(nome));
    }

    const whatsapp = formFiltros.whatsapp.value;
    if (whatsapp !== '') {
        filtradas = filtradas.filter(pessoa => pessoa.whatsapp.includes(whatsapp));
    }

    const endereco = formFiltros.endereco.value.toLowerCase();
    if (endereco !== '') {
        filtradas = filtradas.filter(pessoa => pessoa.endereco.toLowerCase().includes(endereco));
    }

    const comunidade = formFiltros.comunidade.value;
    if (comunidade !== '') {
        filtradas = filtradas.filter(pessoa => pessoa.comunidade == comunidade);
    }

    const data = formFiltros.data.value;
    if (data !== '') {
        filtradas = filtradas.filter(pessoa => pessoa.dataDeNascimento == data);
    }

    const gruposSelecionados = [...document.querySelectorAll('.grupo-checkbox-filtro:checked')].map(check => Number(check.value));

    if (gruposSelecionados.length > 0) {
        filtradas = filtradas.filter(pessoa => gruposSelecionados.some(id => pessoa.grupos.includes(id)));
    }

    renderizarPessoas(filtradas);

    fecharModalFiltros();
});