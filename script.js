document.addEventListener("DOMContentLoaded", function () {
  const chuva = document.getElementById("chuva-coracoes");
  const tocaMusica = document.querySelector("#musica");
  const images = document.querySelectorAll(".carousel img");
  const startDate = new Date(2025, 2, 5, 0, 0, 0); // 05 de Março de 2025

  let index = 0;

  setInterval(() => {
    images[index].classList.remove("active");
    index = (index + 1) % images.length;
    images[index].classList.add("active");
  }, 3000);


  // 🩷 Animação de corações
  function criarCoracao() {
    const coracao = document.createElement("div");
    coracao.classList.add("heart");
    coracao.innerText = "❤️";
    coracao.style.left = Math.random() * 100 + "vw";
    coracao.style.fontSize = Math.random() * 20 + 20 + "px";
    coracao.style.animationDuration = Math.random() * 3 + 3 + "s";
    chuva.appendChild(coracao);

    setTimeout(() => {
      coracao.remove();
    }, 6000);
  }

  setInterval(criarCoracao, 200);

  // 👉 Botão que leva para outra página
  const botao = document.getElementById("meubotao");
  if (botao) {
    botao.addEventListener("click", () => {
      window.location.href = "pagina1.html";
    });
  }

  // 🖼️ Carrossel de imagens
  let indiceAtual = 0;
  const imagens = document.querySelectorAll(".imagem");

  function mostrarImagem(indice) {
    imagens.forEach((img, i) => {
      img.classList.toggle("ativa", i === indice);
    });
  }

  window.proximaImagem = function () {
    indiceAtual = (indiceAtual + 1) % imagens.length;
    mostrarImagem(indiceAtual);
  };

  window.voltarImagem = function () {
    indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
    mostrarImagem(indiceAtual);
  };

  // Mostrar a primeira imagem se houver imagens
  if (imagens.length > 0) {
    mostrarImagem(indiceAtual);
  }

   function tocarMusica() {
    let Audio = document.getElementById("musica");
    Audio.play();
  }

  tocarMusica(); // chama a função assim que a página carrega

  function atualizarContador() {
  const now = new Date();

  let anos = now.getFullYear() - startDate.getFullYear();
  let meses = now.getMonth() - startDate.getMonth();
  let dias = now.getDate() - startDate.getDate();
  let horas = now.getHours() - startDate.getHours();
  let minutos = now.getMinutes() - startDate.getMinutes();
  let segundos = now.getSeconds() - startDate.getSeconds();

  // Ajustes caso algum valor esteja negativo
  if (segundos < 0) {
    segundos += 60;
    minutos--;
  }

  if (minutos < 0) {
    minutos += 60;
    horas--;
  }

  if (horas < 0) {
    horas += 24;
    dias--;
  }

  if (dias < 0) {
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0); // Último dia do mês anterior
    dias += prevMonth.getDate();
    meses--;
  }

  if (meses < 0) {
    meses += 12;
    anos--;
  }

  // Atualiza o texto na tela
  document.getElementById("counter").textContent =
    `${anos} ano(s), ${meses} mês(es), ${dias} dia(s), ` +
    `${horas}h ${minutos}min ${segundos}s`;
}

// Atualiza a cada segundo
setInterval(atualizarContador, 1000);

// Chamada inicial imediata
atualizarContador();

});

