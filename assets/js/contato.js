// =============================================
// FORMULÁRIO DE CONTATO
// =============================================

// Seleciona o formulário
const formulario = document.querySelector("#contact-form");

// Seleciona os campos
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const mensagem = document.querySelector("#mensagem");

// =============================================
// ENVIO DO FORMULÁRIO
// =============================================

formulario.addEventListener("submit", (event) => {

    // Impede o recarregamento da página
    event.preventDefault();

    // Remove espaços extras
    const nomeValor = nome.value.trim();
    const emailValor = email.value.trim();
    const mensagemValor = mensagem.value.trim();

    // Validação
    if (
        nomeValor === "" ||
        emailValor === "" ||
        mensagemValor === ""
    ) {
        alert("Preencha todos os campos.");
        return;
    }

    // Simulação de envio
    alert("Mensagem enviada com sucesso!");

    // Limpa o formulário
    formulario.reset();

});