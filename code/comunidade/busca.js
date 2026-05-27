const btnMostrarTodos = document.getElementById('btn-mostrar-todos-comunidades');

btnMostrarTodos.addEventListener('click', () => {
    renderizarComunidade()
});

const buscaComunidades = document.getElementById('input-busca-comunidades');

buscaComunidades.addEventListener('input', () => {
    const texto = buscaComunidades.value.toLowerCase();

    const filtradas = comunidades.filter(comunidade => comunidade.nome.toLowerCase().includes(texto));

    renderizarComunidade(filtradas)
})

const btnClean = document.getElementById('claen-busca-comunidades');

btnClean.addEventListener('click', () => {
    buscaComunidades.value = '';
    renderizarComunidade();
})