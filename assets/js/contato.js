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

    // Impede o recarregamento da página
    event.preventDefault();

    // Remove espaços extras
    const nomeValor = nome.value.trim();
    const emailValor = email.value.trim();
    const mensagemValor = mensagem.value.trim();


    // =========================================
    // VALIDAÇÃO
    // =========================================

    if (
        nomeValor === "" ||
        emailValor === "" ||
        mensagemValor === ""
    ) {
        alert("Preencha todos os campos.");
        return;
    }


    // =========================================
    // DADOS
    // =========================================

    const dados = {
        nome: nomeValor,
        email: emailValor,
        mensagem: mensagemValor
    };


    try {

        // =====================================
        // ENVIA PARA A API FASTAPI
        // =====================================

        const resposta = await fetch(
            "http://127.0.0.1:8000/contato/",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(dados)
            }
        );


        // =====================================
        // VERIFICA RESPOSTA
        // =====================================

        if (!resposta.ok) {

            throw new Error(
                "Erro ao enviar contato."
            );

        }


        const resultado = await resposta.json();


        // =====================================
        // SUCESSO
        // =====================================

        alert(resultado.mensagem);

        formulario.reset();


    } catch (erro) {

        console.error("Erro:", erro);

        alert(
            "Não foi possível enviar a mensagem. Verifique se a API está funcionando."
        );

    }

});