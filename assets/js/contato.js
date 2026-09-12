// =============================================
// FORMULÁRIO DE CONTATO
// =============================================

const formulario = document.querySelector("#contact-form");

// =============================================
// ENVIO DO FORMULÁRIO
// =============================================

formulario.addEventListener("submit", async (event) => {

    event.preventDefault();

    // =============================================
    // VALIDAÇÃO
    // =============================================

    const nome = document.querySelector("#nome");
    const email = document.querySelector("#email");
    const mensagem = document.querySelector("#mensagem");

    if (
        nome.value.trim() === "" ||
        email.value.trim() === "" ||
        mensagem.value.trim() === ""
    ) {
        alert("Preencha todos os campos.");
        return;
    }

    try {

        // =============================================
        // DADOS DO FORMULÁRIO
        // =============================================

        const dados = new FormData(formulario);

        // =============================================
        // ENVIO PARA O FORMSPREE
        // =============================================

        const resposta = await fetch(
            "https://formspree.io/f/mwlkjddj",
            {
                method: "POST",
                body: dados,
                headers: {
                    "Accept": "application/json"
                }
            }
        );

        // =============================================
        // RESPOSTA
        // =============================================

        const resultado = await resposta.json();

        console.log("Resposta do Formspree:", resultado);

        if (!resposta.ok) {
            throw new Error(
                resultado.error ||
                "Erro ao enviar mensagem."
            );
        }

        // =============================================
        // SUCESSO
        // =============================================

        alert("Mensagem enviada com sucesso!");

        formulario.reset();

    } catch (erro) {

        console.error("Erro:", erro);

        alert(
            "Não foi possível enviar a mensagem. " +
            "Tente novamente mais tarde."
        );
    }
});