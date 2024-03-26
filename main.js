const form = document.getElementById("form-deposito");
const nomeBeneficiario = document.getElementById("nome-beneficiario");
let formValido = false;

function validarNome(fullName){
    const nomeCompleto = fullName.split(" ");
    return nomeCompleto.length >= 2; 
}

form.addEventListener("submit", function(cancelEvent){ 
    cancelEvent.preventDefault();

    const numeroConta = document.getElementById("numero-conta");
    const valorDeposito = document.getElementById("valor-deposito");
    const enviado = `Montante de: <b>${valorDeposito.value}</b> enviado para o cliente: <b>${nomeBeneficiario.value}</b> - conta: <b>${numeroConta.value}</b>`;


    formValido = validarNome(nomeBeneficiario.value);
    if (formValido) {
        const mensagemSucesso = document.querySelector(".success-message")
        mensagemSucesso.innerHTML = enviado
        mensagemSucesso.style.display = "block";

        nomeBeneficiario.value = "";
        numeroConta.value = "";
        valorDeposito.value = "";

    } else {
        nomeBeneficiario.style.border = "1px solid red"
        document.querySelector(".error-message").style.display = "block";
    }
});
    nomeBeneficiario.addEventListener("keyup", function(event){
        console.log(event.target.value);
        formValido = validarNome(event.target.value);
        if (!formValido) {
            nomeBeneficiario.style.border = "1px solid red"
            document.querySelector(".error-message").style.display = "block";
        } else {
            nomeBeneficiario.style = ""
            document.querySelector(".error-message").style.display = "none";
        }
    })
