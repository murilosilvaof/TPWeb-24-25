// Alternar as imagens automaticamente do carrossel
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index); // Mostra o slide atual
  });
}

function changeSlide() {
  currentIndex++; // Avança para o próximo slide
  if (currentIndex >= slides.length) {
    currentIndex = 0; // Volta ao início se passar do último slide
  }
  showSlide(currentIndex);
}

// Inicializar o carrossel
showSlide(currentIndex);

// Alternar slides automaticamente a cada 5 segundos
setInterval(changeSlide, 5000);



// Selecionando o formulário e o elemento de resultados
const formulario = document.querySelector('.form-busca form');
const resultadosDiv = document.getElementById('resultados-voo');

// Evento de submissão do formulário
formulario.addEventListener('submit', (e) => {
  e.preventDefault(); // Evita o recarregamento da página

  // Capturar tipo de voo selecionado
  const tipoVoo = document.querySelector('input[name="tipo-voo"]:checked').value;

  // Capturar os outros valores do formulário
  const cidadePartida = document.getElementById('partida').value;
  const cidadeDestino = document.getElementById('destino').value;
  const dataVoo = new Date(document.getElementById('data').value);

  // Validação de data
  if (isNaN(dataVoo)) {
    resultadosDiv.innerHTML = "<p style='color: red;'>Por favor, selecione uma data válida para o voo.</p>";
    return;
  }

  // Gerar informações da data
  const dia = dataVoo.getDate();
  const mes = dataVoo.getMonth() + 1; // Janeiro é 0
  const ano = dataVoo.getFullYear();

  // Configurando os números dos voos
  const voo1Numero = "TP1";

  // Determinando o estado do voo
  let estadoVoo;

  if (tipoVoo === "ida") {
    // Regras para o voo de ida
    estadoVoo = dia % 2 === 0 ? "No horário" : "Atrasado";

    // Exibir os resultados para ida
    resultadosDiv.innerHTML = `
      <h3>Resultados do Voo</h3>
      <p><strong>Tipo de Voo:</strong> Ida</p>
      <p><strong>Origem:</strong> ${cidadePartida}</p>
      <p><strong>Destino:</strong> ${cidadeDestino}</p>
      <p><strong>Data:</strong> ${dia}/${mes}/${ano}</p>
      <hr>
      <p><strong>Número do Voo 1 (Ida):</strong> ${voo1Numero}</p>
      <p><strong>Estado do Voo:</strong> ${estadoVoo}</p>
    `;
  } else if (tipoVoo === "regresso") {
    // Regras para o voo de regresso
    estadoVoo = mes % 2 === 0 ? "No horário" : "Chegou";

    // Exibir os resultados para regresso
    resultadosDiv.innerHTML = `
      <h3>Resultados do Voo</h3>
      <p><strong>Tipo de Voo:</strong> Regresso</p>
      <p><strong>Origem:</strong> ${cidadePartida}</p>
      <p><strong>Destino:</strong> ${cidadeDestino}</p>
      <p><strong>Data:</strong> ${dia}/${mes}/${ano}</p>
      <hr>
      <p><strong>Número do Voo 1 (Regresso):</strong> ${voo1Numero}</p>
      <p><strong>Estado do Voo:</strong> ${estadoVoo}</p>
    `;
  }
});

//Adiciona interatividade para abrir/fechar submenus do menu sandwich.
document.querySelectorAll('.titulo_menu_sand').forEach(item => {
  item.addEventListener('click', function () {
    this.classList.toggle('active');
    const submenu = this.nextElementSibling;
    if (submenu) {
      submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
    }
  });
});

//Muda a cor do butão do menu sandwich ao clicar
const botoes = document.querySelectorAll('.titulo_menu_sand');

botoes.forEach((botao) => {
  botao.addEventListener("click", function () {
    // Alterna entre a cor original e a nova cor nova
    if (botao.style.backgroundColor === "rgb(101, 201, 34)") {
      botao.style.backgroundColor = "rgb(245, 245, 245)";
    } else {
      botao.style.backgroundColor = "#65C922";
    }
  });
});

//Adiciona interatividade para abrir/fechar o do menu-sandwich quando se carrega no botão da barra de navegação.

document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu-sandwich-btn");
  const menuSandwich = document.getElementById("menu-sandwich"); menuButton.addEventListener("click", () => {
    menuSandwich.classList.toggle("active");

    const icon = menuButton.querySelector("i");
    if (menuSandwich.classList.contains("active")) {
      icon.classList.replace("fa-bars", "fa-times"); // Troca para o ícone "X"
    } else {
      icon.classList.replace("fa-times", "fa-bars"); // Troca para o ícone "☰"
    }
  });
});

//Adiciona interatividade para abrir/fechar submenus do menu reponsivo do footer.
document.querySelectorAll('.menu-item').forEach(item => {
  item.addEventListener('click', function () {
    this.classList.toggle('active');
    const submenu = this.nextElementSibling;
    if (submenu) {
      submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
    }
  });
});
