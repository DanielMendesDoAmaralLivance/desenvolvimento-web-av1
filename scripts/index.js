const editar = (id) => {
  const resposta = window.confirm(`Você quer editar #${id}?`);

  if (resposta) console.log("Editando...");
  else console.log("Cancelando edição...");
};

const deletar = (id) => {
  const resposta = window.confirm(`Você quer deletar #${id}?`);

  if (resposta) console.log("Deletando...");
  else console.log("Cancelando deleção...");
};

const dados = [
  {
    id: 1,
    placaDoVeiculo: "DKC9C63",
    nomeDoProprietario: "Daniel Amaral",
    numeroDoApartamento: 12,
    blocoDoApartamento: "A",
    modeloDoVeiculo: "Chevrolet Astra",
    corDoVeiculo: "Preto",
    numeroDaVagaDeEstacionamento: 1,
  },
  {
    id: 2,
    placaDoVeiculo: "ABC1D23",
    nomeDoProprietario: "Maria Silva",
    numeroDoApartamento: 34,
    blocoDoApartamento: "B",
    modeloDoVeiculo: "Fiat Palio",
    corDoVeiculo: "Vermelho",
    numeroDaVagaDeEstacionamento: 10,
  },
  {
    id: 3,
    placaDoVeiculo: "XYZ2E45",
    nomeDoProprietario: "João Pereira",
    numeroDoApartamento: 56,
    blocoDoApartamento: "B",
    modeloDoVeiculo: "Ford Focus",
    corDoVeiculo: "Azul",
    numeroDaVagaDeEstacionamento: 8,
  },
  {
    id: 4,
    placaDoVeiculo: "LMN4F67",
    nomeDoProprietario: "Fernanda Costa",
    numeroDoApartamento: 78,
    blocoDoApartamento: "A",
    modeloDoVeiculo: "Honda Civic",
    corDoVeiculo: "Prata",
    numeroDaVagaDeEstacionamento: 15,
  },
  {
    id: 5,
    placaDoVeiculo: "QWE5G89",
    nomeDoProprietario: "Carlos Lima",
    numeroDoApartamento: 90,
    blocoDoApartamento: "A",
    modeloDoVeiculo: "Volkswagen Golf",
    corDoVeiculo: "Branco",
    numeroDaVagaDeEstacionamento: 17,
  },
];

const listar = () => {
  const veiculosTable = window.document.getElementById("veiculos-table");

  dados.forEach((item, _index) => {
    const novaLinha = veiculosTable.insertRow();

    const celulaId = novaLinha.insertCell(0);
    const celulaPlacaDoVeiculo = novaLinha.insertCell(1);
    const celulaNomeDoProprietario = novaLinha.insertCell(2);
    const celulaNumeroDoApartamento = novaLinha.insertCell(3);
    const celulaBlocoDoApartamento = novaLinha.insertCell(4);
    const celulaModeloDoVeiculo = novaLinha.insertCell(5);
    const celulaCorDoVeiculo = novaLinha.insertCell(6);
    const celulaNumeroDaVagaDeEstacionamento = novaLinha.insertCell(7);
    const celulaAcoes = novaLinha.insertCell(8);

    celulaId.innerHTML = item.id;
    celulaPlacaDoVeiculo.innerHTML = item.placaDoVeiculo;
    celulaNomeDoProprietario.innerHTML = item.nomeDoProprietario;
    celulaNumeroDoApartamento.innerHTML = item.numeroDoApartamento;
    celulaBlocoDoApartamento.innerHTML = item.blocoDoApartamento;
    celulaModeloDoVeiculo.innerHTML = item.modeloDoVeiculo;
    celulaCorDoVeiculo.innerHTML = item.corDoVeiculo;
    celulaNumeroDaVagaDeEstacionamento.innerHTML =
      item.numeroDaVagaDeEstacionamento;

    const iconeEditar = document.createElement("i");
    iconeEditar.classList = "fa fa-pencil";
    iconeEditar.onclick = () => editar(item.id);

    const iconeDeletar = document.createElement("i");
    iconeDeletar.classList = "fa fa-trash";
    iconeDeletar.onclick = () => deletar(item.id);

    celulaAcoes.appendChild(iconeEditar);
    celulaAcoes.appendChild(iconeDeletar);
  });
};

const qtdVagas = 50;

const listarVagas = () => {
  const vagasSectionContainer = window.document.getElementById(
    "vagas-section-container"
  );

  let numeroDaVaga = 1;
  while (numeroDaVaga <= qtdVagas) {
    const div = document.createElement("div");
    div.innerHTML = numeroDaVaga
    const vagaOcupada = dados.some((x) => x.numeroDaVagaDeEstacionamento === numeroDaVaga);
    div.classList = `vaga ${vagaOcupada ? "indisponivel" : "disponivel"}`;

    vagasSectionContainer.appendChild(div);

    numeroDaVaga++
  }
};

window.onload = () => {
    listar()
    listarVagas()
};
