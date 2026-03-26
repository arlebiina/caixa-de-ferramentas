/**
 * Script para gerenciamento da Caixa de Ferramentas
 */

document.addEventListener("DOMContentLoaded", () => {
    gerarListaDeEfeitos();
});

function gerarListaDeEfeitos() {
    const tocList = document.getElementById("toc-list");
    const cards = document.querySelectorAll(".effect-card");

    // Limpa a lista antes de gerar (evita duplicatas)
    tocList.innerHTML = "";

    cards.forEach(card => {
        // Pega o ID do card e o título dentro dele
        const id = card.getAttribute("id");
        const titulo = card.querySelector("h3") ? card.querySelector("h3").innerText : "Efeito sem nome";

        if (id) {
            const li = document.createElement("li");
            const a = document.createElement("a");

            a.href = `#${id}`;
            a.textContent = titulo;
            
            // Adiciona uma classe para estilização via CSS se necessário
            a.className = "toc-link";

            li.appendChild(a);
            tocList.appendChild(li);
        }
    });
}

// Opcional: Efeito de busca simples na barra de pesquisa
const searchBar = document.querySelector(".search-bar");
if (searchBar) {
    searchBar.addEventListener("input", (e) => {
        const termo = e.target.value.toLowerCase();
        const cards = document.querySelectorAll(".effect-card");

        cards.forEach(card => {
            const textoCard = card.innerText.toLowerCase();
            card.style.display = textoCard.includes(termo) ? "block" : "none";
        });
    });
}
