//modal filtros
function abrirModalFiltros() {

    const modal = document.querySelector('.modal-filtros');
    modal.style.visibility = 'visible';

    const modalFundo = document.querySelector('.modal-fundo');
    modalFundo.style.visibility = 'visible';

    renderizarComunidadesFiltro();
    
    renderizarGruposFiltro();

    formFiltros.nome.value = filtrosAtivos.nome;

    formFiltros.whatsapp.value = filtrosAtivos.whatsapp;

    formFiltros.endereco.value = filtrosAtivos.endereco;

    formFiltros.comunidade.value = filtrosAtivos.comunidade;

    formFiltros.data.value = filtrosAtivos.data;

    document.querySelectorAll('.grupo-checkbox-filtro')
    .forEach(check => {
        check.checked = filtrosAtivos.grupos.includes(Number(check.value))});

    atualizarTextoFiltro();
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

function atualizarTextoFiltro() {

    const checkboxes =

        document.querySelectorAll(
            '.grupo-checkbox-filtro:checked'
        );

    const selectBox =
        document.getElementById(
            'select-box-filtro'
        );

    const total =
        checkboxes.length;

    if (total === 0) {

        selectBox.innerText =
            'Selecionar grupos';

    } else if (total === 1) {

        selectBox.innerText = '1 grupo selecionado';
    } else {
        selectBox.innerText = `${total} grupos selecionados`;
    }

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

        div.querySelector('input').addEventListener('change', atualizarTextoFiltro);

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


let filtrosAtivos = {
        nome: '',
        whatsapp: '',
        endereco: '',
        comunidade: '',
        grupos: [],
        data: ''
    };

const formFiltros = document.querySelector('.modal-filtros form');

formFiltros.addEventListener('submit', (e) => {
    e.preventDefault();
    let contadorFiltros = 0;

    let filtradas = pessoas;

    const nome = formFiltros.nome.value.toLowerCase();
    if (nome !== '') {
        filtradas = filtradas.filter(pessoa => pessoa.nome.toLowerCase().includes(nome));
        contadorFiltros+=1;
    }

    const whatsapp = formFiltros.whatsapp.value;
    if (whatsapp !== '') {
        filtradas = filtradas.filter(pessoa => pessoa.whatsapp.includes(whatsapp));
        contadorFiltros+=1;
    }

    const endereco = formFiltros.endereco.value.toLowerCase();
    if (endereco !== '') {
        filtradas = filtradas.filter(pessoa => pessoa.endereco.toLowerCase().includes(endereco));
        contadorFiltros+=1;
    }

    const comunidade = formFiltros.comunidade.value;
    if (comunidade !== '') {
        filtradas = filtradas.filter(pessoa => pessoa.comunidade == comunidade);
        contadorFiltros+=1;
    }

    const data = formFiltros.data.value;
    if (data !== '') {
        filtradas = filtradas.filter(pessoa => pessoa.dataDeNascimento == data);
        contadorFiltros+=1;
    }

    const gruposSelecionados = [...document.querySelectorAll('.grupo-checkbox-filtro:checked')].map(check => Number(check.value));

    if (gruposSelecionados.length > 0) {
        filtradas = filtradas.filter(pessoa => gruposSelecionados.some(id => pessoa.grupos.includes(id)));
        contadorFiltros+=1;
    }

    const contFiltros = document.getElementById('cont-filtros');
    contFiltros.innerText =`${contadorFiltros}`;

    filtrosAtivos.nome = formFiltros.nome.value;

    filtrosAtivos.whatsapp = formFiltros.whatsapp.value;

    filtrosAtivos.endereco = formFiltros.endereco.value;

    filtrosAtivos.comunidade = formFiltros.comunidade.value;

    filtrosAtivos.data = formFiltros.data.value;

    filtrosAtivos.grupos = gruposSelecionados;

    renderizarPessoas(filtradas);

    fecharModalFiltros();
});