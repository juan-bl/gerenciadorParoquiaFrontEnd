const btnMostrarTodos = document.getElementById('btn-mostrar-todos');

btnMostrarTodos.addEventListener('click', () => {
    renderizarPessoas();
});


const inputBusca = document.getElementById('input-busca');

inputBusca.addEventListener('input', () => {
    const texto = inputBusca.value.toLowerCase();

    const filtradas = pessoas.filter(pessoa => pessoa.nome.toLowerCase().includes(texto));

    renderizarPessoas(filtradas)
})

const btnClean = document.getElementById('claen-busca');

btnClean.addEventListener('click', () => {
    inputBusca.value = '';
    renderizarPessoas();
})