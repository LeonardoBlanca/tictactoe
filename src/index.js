var simbolo = "X";
var selecoes = [];
var vitoria = false;

var tabela = {
  A1: null,
  A2: null,
  A3: null,
  B1: null,
  B2: null,
  B3: null,
  C1: null,
  C2: null,
  C3: null,
};

function marcar(input) {
  if (vitoria) {
    document.querySelector("#mensagem").innerHTML = "Partida Já Finalizada!";
    return;
  }

  if (tabela[input.id] !== null) {
    document.querySelector("#mensagem").innerHTML = "Campo Já Selecionado";
    return;
  }

  document.getElementById(input.id).innerHTML = simbolo;
  tabela[input.id] = simbolo;

  console.log(tabela);

  // Atribui o valor de retorno da função para a variável vitoria.
  vitoria = validaVencedor(simbolo);

  if (simbolo === "X") {
    simbolo = "O";
  } else {
    // Se o simbolo for diferente de X ele vai cair aqui no Else
    simbolo = "X";
  }
}

function validaVencedor(selecionado) {
  if (
    tabela.A1 === selecionado &&
    tabela.A2 === selecionado &&
    tabela.A3 === selecionado
  ) {
    document.querySelector("#vencedor").innerHTML = "Player 1 Venceu!";
    // Este return true vai passa o true para o vitoria = validaVencedor na linha 33.
    return true;
  } else if (
    tabela.B1 === selecionado &&
    tabela.B2 === selecionado &&
    tabela.B3 === selecionado
  ) {
    document.querySelector("#vencedor").innerHTML = "Player 1 Venceu!";
    return true;
  } else if (
    tabela.C1 === selecionado &&
    tabela.C2 === selecionado &&
    tabela.C3 === selecionado
  ) {
    document.querySelector("#vencedor").innerHTML = "Player 1 Venceu!";
    return true;
  }
}
