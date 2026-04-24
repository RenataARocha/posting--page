# ✦ PostFlow — Publicador de Posts

> Página web que simula a criação e publicação de posts, consumindo uma API real.
> Projeto de certificação 2 — Trilha Dev.

---

## 📸 Preview

![PostFlow](https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200)

---

## 📋 Sobre o projeto

O **PostFlow** é uma aplicação web que permite ao usuário criar um post com título e conteúdo, enviá-lo via `fetch` para a API pública [JSONPlaceholder](https://jsonplaceholder.typicode.com/) e renderizar o resultado na própria página — simulando o fluxo real de uma rede social como LinkedIn ou Facebook.

---

## ⚙️ Como funciona

1. O usuário preenche o **título** e o **conteúdo** do post
2. Ao clicar em "Publicar post", o JS monta o objeto `data` e faz uma requisição **POST** para a API
3. A API retorna o post criado (com ID gerado)
4. O resultado é **renderizado dinamicamente** na página, sem recarregar

---

## ✅ Requisitos atendidos

- [x] Input para título e textarea para conteúdo
- [x] Botão de submit com `addEventListener` e `preventDefault`
- [x] Objeto `data` com `title`, `body` e `userId` conforme especificado
- [x] `fetch` com `method: POST`, `JSON.stringify` e `Content-type` correto
- [x] Renderização do retorno no segundo `.then()`
- [x] Renderizadores com `id` únicos (`#renderizador-titulo`, `#renderizador-conteudo`)
- [x] Validação dos campos antes de enviar
- [x] Estado de carregamento no botão durante a requisição
- [x] Tratamento de erro com `.catch()` e mensagem ao usuário
- [x] HTML semântico: `<header>`, `<main>`, `<section>`, `<form>`, `<footer>`
- [x] Acessibilidade: `aria-label`, `aria-required`, `aria-live`, `aria-describedby`

---

## 🚀 Como executar

```bash
git clone https://github.com/RenataARocha/posting--page.git
```

Abra o arquivo `index.html` no navegador — ou use a extensão **Live Server** no VS Code.

---

## 🛠 Tecnologias

- **HTML5** — estrutura semântica
- **CSS3** — variáveis, flexbox, animações
- **JavaScript** — DOM, eventos, Fetch API, Promises

---

## 📁 Estrutura de arquivos

```
posting--page/
├── index.html
├── style.css
├── main.js
└── README.md
```

---

## 🔗 API utilizada

**JSONPlaceholder** — `https://jsonplaceholder.typicode.com/posts`

API pública gratuita para testar requisições HTTP. O POST é simulado — a API retorna os dados enviados com um ID gerado, mas não salva de verdade.

---

## 👩‍💻 Autora

**Renata Rocha**

Projeto desenvolvido durante a Trilha Dev — Projeto de Certificação 2.
