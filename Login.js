const emailsPermitidos = ["programadorjunior25@gmail.com", "harahelguilherme@gmail.com"];
const senhasPermitidas = ["@Aquamarine2023", "@AiYoshino2023*", "@Frederica22*", "@PecoPeco17*", "@Emilia18*", "@Subaru17*"];

function validateEmail() {
  const email = document.getElementById("email").value;
  const senhaInput = document.getElementById("senha");
  const entrarBtn = document.getElementById("entrar");
  const msg = document.getElementById("mensagem");

  if (emailsPermitidos.includes(email)) {
    senhaInput.style.display = "block";
    entrarBtn.style.display = "block";
    msg.textContent = "";
  } else {
    msg.textContent = "Email incorreto.";
  }
}

function validateSenha() {
  const senha = document.getElementById("senha").value;
  const msg = document.getElementById("mensagem");

  if (senhasPermitidas.includes(senha)) {
    window.location.href = "Menu Game.html";
  } else {
    msg.textContent = "Senha incorreta.";
  }
}
