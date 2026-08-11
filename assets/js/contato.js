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
    // DADOS QUE SERÃO ENVIADOS PARA A API
    // =============================================

    const dados = {
        nome: nomeValor,
        email: emailValor,
        mensagem: mensagemValor
    };

    try {

        const resposta = await fetch(
            "https://meu-portifolio-production-dd2b.up.railway.app/contato/",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(dados)
            }
        );

        // =============================================
        // VERIFICA SE A API RESPONDEU COM ERRO
        // =============================================

        if (!resposta.ok) {

            const erro = await resposta.text();

            console.error("Erro da API:", erro);

            throw new Error("Erro ao enviar contato.");

        }

        const resultado = await resposta.json();

        console.log("Resposta da API:", resultado);

        // =============================================
        // SUCESSO
        // =============================================

        alert("Mensagem enviada com sucesso!");

        formulario.reset();

    } catch (erro) {

        console.error("Erro:", erro);

        alert(
            "Não foi possível enviar a mensagem. " +
            "Verifique se a API está funcionando."
        );
    }
});