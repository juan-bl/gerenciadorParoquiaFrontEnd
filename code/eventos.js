//choices js
const elemento1 = document.getElementById('grupos-post');

const choices1 = new Choices(elemento1, {
    removeItemButton: true,
    searchEnabled: true,
    placeholder: true,
    placeholderValue: 'Selecione os grupos'
});

const elemento2 = document.getElementById('grupos-filtro');

const choices2 = new Choices(elemento2, {
    removeItemButton: true,
    searchEnabled: true,
    placeholder: true,
    placeholderValue: 'Selecione os grupos'
});