const inserir = (event) => {
  event.preventDefault();

  const placaDoVeiculo =
    window.document.getElementById("placa-do-veiculo").value;
  const nomeDoProprietario = window.document.getElementById(
    "nome-do-proprietario"
  ).value;
  const numeroDoApartamento = window.document.getElementById(
    "numero-do-apartamento"
  ).value;
  const blocoDoApartamento = window.document.getElementById(
    "bloco-do-apartamento"
  ).value;
  const modeloDoVeiculo =
    window.document.getElementById("modelo-do-veiculo").value;
  const corDoVeiculo = window.document.getElementById("cor-do-veiculo").value;
  const numeroDaVagaDeEstacionamento = window.document.getElementById(
    "numero-da-vaga-de-estacionamento"
  ).value;

  console.log("Inserindo os dados...", {
    placaDoVeiculo,
    nomeDoProprietario,
    numeroDoApartamento,
    blocoDoApartamento,
    modeloDoVeiculo,
    corDoVeiculo,
    numeroDaVagaDeEstacionamento
  })

  window.alert("Dados inseridos com sucesso!")
};

const cadastrarVeiculoButton = window.document.querySelector(
  "#cadastrar-veiculo-button"
);
cadastrarVeiculoButton.addEventListener("click", inserir);
