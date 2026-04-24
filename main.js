// main.js — PostFlow

// 
// SELETORES
// 

// Formulário
const formPost = document.querySelector('#form-post');

// Entrada de dados
const inputTitulo = document.querySelector('#input-titulo');
const inputConteudo = document.querySelector('#input-conteudo');

// Botão de publicar
const btnPublicar = document.querySelector('#btn-publicar');

// Saída — onde o post será renderizado
const secaoPost = document.querySelector('#secao-post');
const renderizadorTitulo = document.querySelector('#renderizador-titulo');
const renderizadorConteudo = document.querySelector('#renderizador-conteudo');
const renderizadorId = document.querySelector('#renderizador-id');

// Mensagem de erro
const formErro = document.querySelector('#form-erro');

// 
// EVENTO DE SUBMIT
// 
formPost.addEventListener('submit', (e) => {
    e.preventDefault(); // impede o comportamento padrão do formulário (recarregar a página)

    console.log('Formulário enviado!');
    console.log('Título:', inputTitulo.value);
    console.log('Conteúdo:', inputConteudo.value);

    // Próximo commit: aqui entra o fetch
});