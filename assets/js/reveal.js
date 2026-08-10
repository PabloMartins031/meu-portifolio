// =============================================
// ANIMAÇÃO AO ENTRAR NA TELA
// =============================================

function iniciarAnimacoes() {

    // Seleciona todos os elementos que terão animação
    const elementos = document.querySelectorAll(".reveal");

    // Cria o observador
    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    }, {
        threshold: 0.2
    });

    // Observa cada elemento
    elementos.forEach(elemento => {
        observer.observe(elemento);
    });

}