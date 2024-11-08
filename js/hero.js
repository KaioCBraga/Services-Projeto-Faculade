const linkOne = document.getElementById("linkOne");
linkOne.addEventListener("click", function (e) {
  e.preventDefault();

  const imagem = document.getElementById("minhaImagem");
  imagem.src = "../assets/img/serviceOF/revisao-veicular.jpeg";

  const title = document.getElementById("meuTitle");
  title.textContent = "Revisão Completa";

  const texto = document.getElementById("meuTexto");
  texto.innerHTML =
    "<span>- A revisão veicular é uma vistoria dos componentes mais importantes do automóvel.</span><br><br> <span>- Geralmente, a revisão deve ser feita a cada 6 meses ou a cada 10 mil quilômetros rodados.</span><br><br>";
});

const linkTwo = document.getElementById("linkTwo");
linkTwo.addEventListener("click", function (e) {
  e.preventDefault();

  const imagem = document.getElementById("minhaImagem");
  imagem.src = "../assets/img/serviceOF/alinhamento-3d.webp";

  const title = document.getElementById("meuTitle");
  title.textContent = "Alinhamento 3D";

  const texto = document.getElementById("meuTexto");
  texto.innerHTML =
    "- <span>O alinhamento 3D é uma tecnologia avançada que proporciona uma precisão incomparável no ajuste das rodas de um veículo.</span><br><br> <span>- O recomendado é fazer o alinhamento a cada 10 mil quilômetros.<br></span>";
});

const linkThree = document.getElementById("linkThree");
linkThree.addEventListener("click", function (e) {
  e.preventDefault();

  const imagem = document.getElementById("minhaImagem");
  imagem.src = "../assets/img/serviceOF/troca_de_pneu.jpg";

  const title = document.getElementById("meuTitle");
  title.textContent = "Troca de Pneu";

  const texto = document.getElementById("meuTexto");
  texto.innerHTML =
    "- <span>Nossas oficinas  oferecem uma ampla variedade de modelos de pneus de alta qualidade para atender às necessidades específicas do seu veículo.</span><br><br> <span>- Nossa equipe de profissionais altamente treinados está pronta para ajudá-lo a escolher o pneu ideal.<br> </span>";
});

const linkFour = document.getElementById("linkFour");
linkFour.addEventListener("click", function (e) {
  e.preventDefault();

  const imagem = document.getElementById("minhaImagem");
  imagem.src = "../assets/img/serviceOF/freios.webp";

  const title = document.getElementById("meuTitle");
  title.textContent = "Freios";

  const texto = document.getElementById("meuTexto");
  texto.innerHTML =
    "- <span>O período de manutenção dos freios varia de acordo com o uso do automóvel e as condições.</span><br><br> <span>- A manutenção regular dos freios não apenas garante a segurança do motorista e dos passageiros, mas também pode prolongar a vida útil do sistema de frenagem.</span>";
});

const linkFive = document.getElementById("linkFive");
linkFive.addEventListener("click", function (e) {
  e.preventDefault();

  const imagem = document.getElementById("minhaImagem");
  imagem.src = "../assets/img/serviceOF/suspensao-carro.jpg";

  const title = document.getElementById("meuTitle");
  title.textContent = "Suspensão";

  const texto = document.getElementById("meuTexto");
  texto.innerHTML =
    "<span>- A manutenção regular da suspensão é essencial para o funcionamento e segurança do veículo.</span><br><br><span>- A frequência ideal varia conforme o modelo do veículo, condições de uso e tipo de estradas.<br><br></span>";
});

const linkSix = document.getElementById("linkSix");
linkSix.addEventListener("click", function (e) {
  e.preventDefault();

  const imagem = document.getElementById("minhaImagem");
  imagem.src = "../assets/img/serviceOF/ar-condicionado-carro.webp";

  const title = document.getElementById("meuTitle");
  title.textContent = "Ar Condicionado";

  const texto = document.getElementById("meuTexto");
  texto.innerHTML =
    "<span>- É recomendado realizar verificações periódicas, que incluem a troca do filtro de cabine, a verificação do nível de gás refrigerante, a limpeza do sistema e inspeção de vazamentos. </span><br><br><span>-A manutenção deve ser feita pelo menos uma vez por ano ou sempre que houver problemas, como falta de refrigeração.<br></span>";
});

const Onelink = document.getElementById("Onelink");
Onelink.addEventListener("click", function (e) {
  e.preventDefault();

  const imagem = document.getElementById("minhaImagem");
  imagem.src = "../assets/img/serviceOF/diagnosticos.webp";

  const title = document.getElementById("meuTitle");
  title.textContent = "Diagnósticos";

  const texto = document.getElementById("meuTexto");
  texto.innerHTML =
    "<span>- A revisão veicular é uma vistoria dos componentes mais importantes do automóvel.</span><br><br> <span>- Geralmente, a revisão deve ser feita a cada 6 meses ou a cada 10 mil quilômetros rodados.</span><br><br>";
});
