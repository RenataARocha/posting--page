// ======================
// CONFIG
// ======================
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

// ======================
// SELETORES
// ======================
const formPost = document.querySelector('#form-post');
const inputTitulo = document.querySelector('#input-titulo');
const inputConteudo = document.querySelector('#input-conteudo');
const btnPublicar = document.querySelector('#btn-publicar');

const secaoPost = document.querySelector('#secao-post');
const listaPosts = document.querySelector('#lista-posts');

const formErro = document.querySelector('#form-erro');

// ======================
// STORAGE
// ======================
function salvarNoLocalStorage(posts) {
    localStorage.setItem('posts', JSON.stringify(posts));
}

function obterPosts() {
    return JSON.parse(localStorage.getItem('posts')) || [];
}

// ======================
// UI
// ======================
function mostrarErro(msg) {
    formErro.textContent = msg;
    formErro.classList.add('visivel');
}

function esconderErro() {
    formErro.textContent = '';
    formErro.classList.remove('visivel');
}

function setLoading(isLoading) {
    btnPublicar.disabled = isLoading;
    btnPublicar.textContent = isLoading ? 'Publicando...' : 'Publicar post';
}

// ======================
// RENDER
// ======================
function criarPostHTML(post) {
    return `
        <div class="post-card">
            <div class="post-card__cabecalho">
                <span class="post-card__badge">✦ Publicado</span>
            </div>

            <h2 class="post-card__titulo">${post.title}</h2>
            <p class="post-card__conteudo">${post.body}</p>

            <footer class="post-card__rodape">
                <span class="post-card__meta">
                    Post ID: ${post.id}
                </span>
            </footer>
        </div>
    `;
}

function renderizarPosts() {
    const posts = obterPosts();

    if (posts.length === 0) {
        secaoPost.setAttribute('hidden', true);
        return;
    }

    secaoPost.removeAttribute('hidden');

    const htmlPosts = posts
        .map((post) => criarPostHTML(post))
        .join('');

    listaPosts.innerHTML = htmlPosts;
}

// ======================
// EVENTO SUBMIT
// ======================
formPost.addEventListener('submit', async (e) => {
    e.preventDefault();

    esconderErro();

    const titulo = inputTitulo.value.trim();
    const conteudo = inputConteudo.value.trim();

    if (!titulo || !conteudo) {
        mostrarErro('Preencha todos os campos!');
        return;
    }

    const data = {
        title: titulo,
        body: conteudo,
        userId: 1,
    };

    try {
        setLoading(true);

        const response = await fetch(API_URL, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        const novoPost = await response.json();

        // ======================
        // SALVAR
        // ======================
        const posts = obterPosts();
        posts.unshift(novoPost); // adiciona no topo

        salvarNoLocalStorage(posts);

        // ======================
        // RENDER
        // ======================
        renderizarPosts();

        formPost.reset();

        secaoPost.scrollIntoView({ behavior: 'smooth' });

    } catch (erro) {
        mostrarErro('Erro ao publicar.');
    } finally {
        setLoading(false);
    }
});

// ======================
// INICIALIZAÇÃO
// ======================
renderizarPosts();