// Define a estrutura de dados dos serviços
const servicos = {
  revisao: {
    imagem: "./assets/img/revisao-veicular.jpeg",
    titulo: "Revisão Completa",
    conteudo: [
      "A revisão veicular é uma vistoria dos componentes mais importantes do automóvel.",
      "Geralmente, a revisão deve ser feita a cada 6 meses ou a cada 10 mil quilômetros rodados.",
    ],
  },
  alinhamento: {
    imagem: "./assets/img/alinhamento-3d.webp",
    titulo: "Alinhamento 3D",
    conteudo: [
      "O alinhamento 3D é uma tecnologia avançada que proporciona uma precisão incomparável no ajuste das rodas de um veículo.",
      "O recomendado é fazer o alinhamento a cada 10 mil quilômetros.",
    ],
  },
  pneu: {
    imagem: "./assets/img/troca_de_pneu.jpg",
    titulo: "Troca de Pneu",
    conteudo: [
      "Nossas oficinas oferecem uma ampla variedade de modelos de pneus de alta qualidade para atender às necessidades específicas do seu veículo.",
      "Nossa equipe de profissionais altamente treinados está pronta para ajudá-lo a escolher o pneu ideal.",
    ],
  },
  freios: {
    imagem: "./assets/img/freios.webp",
    titulo: "Freios",
    conteudo: [
      "O período de manutenção dos freios varia de acordo com o uso do automóvel e as condições.",
      "A manutenção regular dos freios não apenas garante a segurança do motorista e dos passageiros, mas também pode prolongar a vida útil do sistema de frenagem.",
    ],
  },
  suspensao: {
    imagem: "./assets/img/suspensao-carro.jpg",
    titulo: "Suspensão",
    conteudo: [
      "A manutenção regular da suspensão é essencial para o funcionamento e segurança do veículo.",
      "A frequência ideal varia conforme o modelo do veículo, condições de uso e tipo de estradas.",
    ],
  },
  arCondicionado: {
    imagem: "./assets/img/ar-condicionado-carro.webp",
    titulo: "Ar Condicionado",
    conteudo: [
      "É recomendado realizar verificações periódicas, que incluem a troca do filtro de cabine, a verificação do nível de gás refrigerante, a limpeza do sistema e inspeção de vazamentos.",
      "A manutenção deve ser feita pelo menos uma vez por ano ou sempre que houver problemas, como falta de refrigeração.",
    ],
  },
  injecaoEle: {
    imagem: "./assets/img/injecao-eletrica.jfif",
    titulo: "Injeção Eletrônica",
    conteudo: [
      "A injeção eletrônica é um sistema que garante o envio controlado de combustível ao motor do veículo.",
      "A revisão do sistema de injeção eletrônica deve ser feita a cada 40 mil quilômetros. ",
    ],
  },
  oleo: {
    imagem: "./assets/img/oleo.jpg",
    titulo: "Troca de óleo",
    conteudo: [
      "A troca de óleo é necessária para manter o motor funcionando em condições adequadas.",
      "O intervalo recomendado para a troca varia, mas geralmente é a cada 10 mil km",
    ],
  },
  acessorios: {
    imagem: "./assets/img/acessorios.png",
    titulo: "Acessórios",
    conteudo: [
      "Todos os acessórios para o seu carro estão disponíveis em nossas oficinas, com a garantia de qualidade e instalação especializada..",
    ],
  },
};

// Função para atualizar o conteúdo
function atualizarConteudo(idServico) {
  const servico = servicos[idServico];
  const imagem = document.getElementById("minhaImagem");
  const titulo = document.getElementById("meuTitle");
  const texto = document.getElementById("meuTexto");

  imagem.src = servico.imagem;
  titulo.textContent = servico.titulo;
  texto.innerHTML = servico.conteudo
    .map((texto) => `<span>- ${texto}</span>`)
    .join("<br><br>");
}

// Adiciona os eventos de clique
Object.keys(servicos).forEach((idServico) => {
  const elemento = document.getElementById(idServico);
  if (elemento) {
    elemento.addEventListener("click", (e) => {
      e.preventDefault();
      atualizarConteudo(idServico);
    });
  }
});
