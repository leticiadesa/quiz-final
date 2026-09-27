function registrarUsuario() {

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const idade = document.getElementById("idade").value;

    const sexoSelecionado = document.querySelector(
        'input[name="sexo"]:checked'
    );

    const mensagem = document.getElementById("mensagem");

    if (!sexoSelecionado) {

        mensagem.innerText = "Selecione uma opção de sexo.";

        return;
    }

    sessionStorage.setItem("nome", nome);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("idade", idade);
    sessionStorage.setItem("sexo", sexoSelecionado.value);

    window.location.href = "./html/1.html";
}