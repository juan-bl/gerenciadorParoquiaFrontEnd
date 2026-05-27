const btnMostrarTodos = document.getElementById('btn-mostrar-todos-grupos');

btnMostrarTodos.addEventListener('click', () => {
    renderizarGrupo()
});


const buscaGrupos = document.getElementById('input-busca-grupos');

buscaGrupos.addEventListener('input', () => {
    const texto = buscaGrupos.value.toLowerCase();

    const filtradas = grupos.filter(grupo => grupo.nome.toLowerCase().includes(texto));

    renderizarGrupo(filtradas)
})

const btnClean = document.getElementById('claen-busca-grupos');

btnClean.addEventListener('click', () => {
    buscaGrupos.value = '';
    renderizarGrupo();
})