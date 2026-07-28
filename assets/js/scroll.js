// =============================================
// SCROLL SUAVE
// =============================================

function iniciarScrollSuave() {

    const links = document.querySelectorAll('a[href^="#"]');

    
    links.forEach(link => {

        link.addEventListener("click", (event) => {

            event.preventDefault();

            const destino = link.getAttribute("href");

            const secao = document.querySelector(destino);

            if (secao) {

                secao.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });

}