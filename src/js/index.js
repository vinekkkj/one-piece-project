// adicionar as caracteristicas de selected ao botao do perosnagem
const botoes = document.querySelectorAll(".botao");

botoes.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    desselecionarBotao();
    desselecionarPersonagem();

    botao.classList.add("selecionado");
    personagens[indice].classList.add("selecionado");
  });
});

// mudar o conteudo do personagem
const personagens = document.querySelectorAll(".personagem");

function desselecionarPersonagem() {
  const personagemSelecionado = document.querySelector(
    ".personagem.selecionado"
  );
  personagemSelecionado.classList.remove("selecionado");
}

//refatoração
function desselecionarBotao() {
  const botaoSelecionado = document.querySelector(".botao.selecionado");
  botaoSelecionado.classList.remove("selecionado");
}
