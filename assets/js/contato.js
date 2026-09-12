
// =============================================
// FORMULÁRIO DE CONTATO
// =============================================

const formulario = document.querySelector("#contact-form");

const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const mensagem = document.querySelector("#mensagem");

// =============================================
// ENVIO DO FORMULÁRIO
// =============================================

formulario.addEventListener("submit", async (event) => {

    event.preventDefault();

    const nomeValor = nome.value.trim();
    const emailValor = email.value.trim();
    const mensagemValor = mensagem.value.trim();

    // =============================================
    // VALIDAÇÃO
    // =============================================

    if (
        nomeValor === "" ||
        emailValor === "" ||
        mensagemValor === ""
    ) {
        alert("Preencha todos os campos.");
        return;
    }

    // =============================================
    // DADOS DO FORMULÁRIO
    // =============================================

    const dados = {
        nome: nomeValor,
        email: emailValor,
        mensagem: mensagemValor
    };

    try {

        const resposta = await fetch(
            "https://formspree.io/f/mwlkjddj",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },

                body: JSON.stringify(dados)
            }
        );

        // =============================================
        // VERIFICAÇÃO DA RESPOSTA
        // =============================================

        if (!resposta.ok) {

            const erro = await resposta.json();

            console.error("Erro do Formspree:", erro);

            throw new Error("Erro ao enviar mensagem.");

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
