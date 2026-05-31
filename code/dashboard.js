function atualizarDashboard() {
    document.getElementById('total-pessoas').innerText = pessoas.length;

    document.getElementById('total-grupos').innerText = grupos.length;

    document.getElementById('total-comunidades').innerText = comunidades.length;

    document.getElementById('total-aniversariantes').innerText = obterAniversariantesMes().length;

    const maiorComunidade = obterComunidadeComMaisMembros();

    document.getElementById('valor-maior-comunidade').innerText = maiorComunidade.quantidade;

    document.getElementById('nome-maior-comunidade').innerText = maiorComunidade.comunidade?.nome || '-';

    const menorComunidade = obterComunidadeComMenosMembros();

    document.getElementById('valor-menor-comunidade').innerText = menorComunidade.quantidade;

    document.getElementById('nome-menor-comunidade').innerText = menorComunidade.comunidade?.nome || '-';

    const maiorGrupo = obterGrupoComMaisMembros();

    document.getElementById('valor-maior-grupo').innerText = maiorGrupo.quantidade;

    document.getElementById('nome-maior-grupo').innerText = maiorGrupo.grupo?.nome || '-';

    const menorGrupo = obterGrupoComMenosMembros();

    document.getElementById('valor-menor-grupo').innerText = menorGrupo.quantidade;

    document.getElementById('nome-menor-grupo').innerText = menorGrupo.grupo?.nome || '-';

    document.getElementById('btn-aniversariantes').addEventListener(
        'click', () => {
            abrirModalDashboard('Aniversariantes do mês', obterAniversariantesMes());
        }
    );

    document.getElementById('btn-maior-comunidade').addEventListener('click', () => {
        const resultado = obterComunidadeComMaisMembros();
        const membros = pessoas.filter(pessoa => pessoa.comunidade == resultado.comunidade.id);
        abrirModalDashboard(resultado.comunidade.nome, membros);
        }
    );

    document.getElementById('btn-menor-comunidade').addEventListener('click', () => {
        const resultado = obterComunidadeComMenosMembros();
        const membros = pessoas.filter(pessoa => pessoa.comunidade == resultado.comunidade.id);
        abrirModalDashboard(resultado.comunidade.nome, membros);
        }
    );

    document.getElementById('btn-maior-grupo').addEventListener('click', () => {
        const resultado = obterGrupoComMaisMembros();
        const membros = pessoas.filter(pessoa => pessoa.grupos.includes(resultado.grupo.id));
        abrirModalDashboard(resultado.grupo.nome, membros);
        }
    );

    document.getElementById('btn-menor-grupo').addEventListener('click', () => {
    const resultado = obterGrupoComMenosMembros();
    const membros = pessoas.filter(pessoa => pessoa.grupos.includes(resultado.grupo.id));
    abrirModalDashboard(resultado.grupo.nome, membros);
        }
    );

    document.getElementById('fechar-dashboard').addEventListener('click', fecharModalDashboard);
}


function obterAniversariantesMes() {
    const mesAtual =new Date().getMonth() + 1;

    return pessoas.filter(pessoa => {
        const mesNascimento = new Date(pessoa.dataDeNascimento).getMonth() + 1;
        return mesNascimento === mesAtual;
    });
}

function obterComunidadeComMaisMembros() {
    let maiorComunidade = null;
    let maiorQuantidade = 0;

    comunidades.forEach(comunidade => {
        const quantidade = pessoas.filter(pessoa => pessoa.comunidade == comunidade.id).length;

        if (quantidade > maiorQuantidade) {
            maiorQuantidade = quantidade;
            maiorComunidade = comunidade;
        }
    });

    return {
        comunidade: maiorComunidade,
        quantidade: maiorQuantidade};
}

function obterComunidadeComMenosMembros() {
    let menorComunidade = null;
    let menorQuantidade = Infinity;

    comunidades.forEach(comunidade => {
        const quantidade = pessoas.filter(pessoa => pessoa.comunidade == comunidade.id).length;

        if (quantidade < menorQuantidade) {
            menorQuantidade = quantidade;
            menorComunidade = comunidade;
        }
    });

    return {
        comunidade: menorComunidade,
        quantidade: menorQuantidade};
}

function obterGrupoComMaisMembros() {

    let maiorGrupo = null;

    let maiorQuantidade = 0;

    grupos.forEach(grupo => {

        const quantidade = pessoas.filter(pessoa => pessoa.grupos.includes(grupo.id)).length;

        if (quantidade > maiorQuantidade) {
            maiorQuantidade = quantidade;
            maiorGrupo = grupo;
        }

    });

    return {
        grupo: maiorGrupo,
        quantidade: maiorQuantidade
    };
}

function obterGrupoComMenosMembros() {

    let menorGrupo = null;

    let menorQuantidade = Infinity;

    grupos.forEach(grupo => {

        const quantidade = pessoas.filter(pessoa => pessoa.grupos.includes(grupo.id)).length;

        if (quantidade < menorQuantidade) {
            menorQuantidade = quantidade;
            menorGrupo = grupo;
        }

    });

    return {
        grupo: menorGrupo,
        quantidade: menorQuantidade
    };
}

function formatarData(data) {
    return new Date(data).toLocaleDateString('pt-BR');
}

function abrirModalDashboard(titulo, listaPessoas) {

    const modalFundo = document.querySelector('.modal-fundo');
    modalFundo.style.visibility = 'visible';

    document.getElementById('titulo-dashboard').innerText = titulo;

    const tbody = document.getElementById('tbody-dashboard');

    tbody.innerHTML = '';

    listaPessoas.sort((a, b) => {
        return new Date(a.dataDeNascimento).getDate() - new Date(b.dataDeNascimento).getDate()
    });

    listaPessoas.forEach(pessoa => {

        const linha = document.createElement('tr');

        linha.innerHTML = `
            <td>${pessoa.nome}</td>

            <td>${
                comunidades.find(
                    c => c.id == pessoa.comunidade
                )?.nome || '-'
            }</td>

            <td>${pessoa.whatsapp}</td>

            <td>${formatarData(pessoa.dataDeNascimento)}</td>
        `;

        tbody.appendChild(linha);

    });

    document.querySelector(
        '.modal-dashboard'
    ).style.visibility =
        'visible';

}

function fecharModalDashboard() {

    document.querySelector('.modal-dashboard').style.visibility ='hidden';

    const modalFundo = document.querySelector('.modal-fundo');
    modalFundo.style.visibility = 'hidden';

}

function atualizarDataAtual() {
    const hoje = new Date();
    const dataFormatada = hoje.toLocaleDateString('pt-BR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    document.getElementById('data-atual').innerText = dataFormatada;
}

atualizarDashboard();
atualizarDataAtual();