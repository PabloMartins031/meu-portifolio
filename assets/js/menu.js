// =============================================
// MENU ATIVO
// =============================================

function iniciarMenuAtivo() {

    // Seleciona todas as seções que possuem um id
    const secoes = document.querySelectorAll("section[id]");

    // Seleciona todos os links do menu
    const links = document.querySelectorAll(".sidebar nav a");

    // Sempre que o usuário fizer scroll...
    window.addEventListener("scroll", () => {

        // Posição atual da página
        const scroll = window.scrollY;

        // Percorre cada seção
        secoes.forEach(secao => {

            // Pega o id da seção
            const id = secao.getAttribute("id");

            // Onde a seção começa
            const topo = secao.offsetTop - 150;

            // Altura da seção
            const altura = secao.offsetHeight;

            // Verifica se estamos dentro da seção
            if (scroll >= topo && scroll < topo + altura) {

                // Remove a classe active de todos os links
                links.forEach(link => {
                    link.classList.remove("active");
                });

                // Procura o link correspondente
                const linkAtivo = document.querySelector(
                    `.sidebar nav a[href="#${id}"]`
                );

                // Se existir...
                if (linkAtivo) {
                    linkAtivo.classList.add("active");
                }

            }

        });

    });

}