const nome = sessionStorage.getItem("nome");
const email = sessionStorage.getItem("email");
const idade = sessionStorage.getItem("idade");
const sexo = sessionStorage.getItem("sexo");

fetch("http://localhost:3000/resultado", {

    method: "POST",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify({

        nome: nome,
        email: email,
        idade: idade,
        sexo: sexo,
        pontos: pontos,
        total_questoes: 5,
        resultado: mensagem

    })

})
.then(resposta => resposta.json())

.then(dados => {

    console.log(dados);

})

.catch(erro => {

    console.error(
        "Erro ao salvar resultado:",
        erro
    );

});


// JOGAR NOVAMENTE

function jogarNovamente(){

    sessionStorage.clear();

    window.location.href = "1.html";

}