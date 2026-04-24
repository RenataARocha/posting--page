// main.js — PostFlow (versão melhorada)

// ======================
// CONFIG
// ======================
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

// ======================
// SELETORES
// ======================

// Formulário
const formPost = document.querySelector('#form-post');

// Inputs
const inputTitulo = document.querySelector('#input-titulo');
const inputConteudo = document.querySelector('#input-conteudo');

// Botão
const btnPublicar = document.querySelector('#btn-publicar');

// Renderização
const secaoPost = document.querySelector('#secao-post');
const renderizadorTitulo = document.querySelector('#renderizador-titulo');
const renderizadorConteudo = document.querySelector('#renderizador-conteudo');
const renderizadorId = document.querySelector('#renderizador-id');

// Erro
const formErro = document.querySelector('#form-erro');

// ======================
// FUNÇÕES AUXILIARES
// ======================

// Mostrar erro
function mostrarErro(msg) {
    formErro.textContent = msg;
    formErro.classList.add('visivel');
}

// Esconder erro
function esconderErro() {
    formErro.textContent = '';
    formErro.classList.remove('visivel');
}

// Loading botão
function setLoading(isLoading) {
    if (isLoading) {
        btnPublicar.disabled = true;
        btnPublicar.textContent = 'Publicando...';
    } else {
        btnPublicar.disabled = false;
        btnPublicar.textContent = 'Publicar post';
    }
}

// ======================
// EVENTO SUBMIT
// ======================

formPost.addEventListener('submit', async (e) => {
    e.preventDefault();

    esconderErro();

    // ======================
    // VALIDAÇÃO
    // ======================
    const titulo = inputTitulo.value.trim();
    const conteudo = inputConteudo.value.trim();

    if (!titulo || !conteudo) {
        mostrarErro('Preencha todos os campos antes de publicar.');
        return;
    }

    // ======================
    // OBJETO DA API
    // ======================
    const data = {
        title: titulo,
        body: conteudo,
        userId: 1,
    };

    try {
        setLoading(true);

        // ======================
        // FETCH
        // ======================
        const response = await fetch(API_URL, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        // Verifica erro HTTP
        if (!response.ok) {
            throw new Error('Erro na requisição');
        }

        const postRetornado = await response.json();

        // ======================
        // RENDERIZAÇÃO
        // ======================
        renderizadorTitulo.textContent = postRetornado.title;
        renderizadorConteudo.textContent = postRetornado.body;
        renderizadorId.textContent = `Post ID: ${postRetornado.id} · publicado com sucesso`;

        secaoPost.removeAttribute('hidden');

        // Scroll suave
        secaoPost.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });

        // Limpa formulário
        formPost.reset();

    } catch (erro) {
        console.error(erro);
        mostrarErro('Erro ao publicar. Tente novamente.');
    } finally {
        setLoading(false);
    }
});