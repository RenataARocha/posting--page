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

// 
// EVENTO DE SUBMIT
// 
formPost.addEventListener('submit', (e) => {
    e.preventDefault();

    // Monta o objeto conforme a API espera
    const data = {
        title: inputTitulo.value,
        body: inputConteudo.value,
        userId: 1,
    };

    // 
    // FETCH — POST na API
    // 
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())

        .then((postRetornado) => {
            // Renderiza o retorno da API na página
            renderizadorTitulo.innerHTML = postRetornado.title;
            renderizadorConteudo.innerHTML = postRetornado.body;
            renderizadorId.innerHTML = `Post ID: ${postRetornado.id} · publicado com sucesso`;

            // Exibe a seção de resultado
            secaoPost.removeAttribute('hidden');

            // Rola suavemente até o resultado
            secaoPost.scrollIntoView({ behavior: 'smooth', block: 'start' });
        })

        .catch((erro) => {
            console.error('Erro ao publicar:', erro);
        });
});