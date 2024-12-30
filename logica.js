// Alternar as imagens automaticamente do carrossel
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
let currentIndex = 0;

function changeSlide() {
  currentIndex++; // Avança para a próxima imagem
  if (currentIndex >= images.length) {
    currentIndex = 0; // Volta para a primeira imagem se passar do limite
  }
  const offset = -currentIndex * 100; // Calcula o deslocamento
  slides.style.transform = `translateX(${offset}%)`;
}

// Altere as imagens automaticamente a cada 5 segundos
setInterval(changeSlide, 5000);


// Selecionando os elementos do formulário e da área de resultados
const formulario = document.querySelector('.form-busca form');
const resultadosDiv = document.getElementById('resultados-voo');

// Evento de submissão do formulário
formulario.addEventListener('submit', (e) => {
  e.preventDefault(); // Evita o recarregamento da página

  // Capturando os dados do formulário
  const tipoVoo = document.querySelector('input[name="tipo-voo"]:checked') ? "Ida e volta" : "Ida";
  const cidadePartida = document.getElementById('partida').value;
  const cidadeDestino = document.getElementById('destino').value;
  const dataVoo = new Date(document.getElementById('data').value);

  // Verificando se a data foi preenchida
  if (isNaN(dataVoo)) {
    resultadosDiv.innerHTML = "<p style='color: red;'>Por favor, selecione uma data válida para o voo.</p>";
    return;
  }

  // Gerar informações dos voos
  const dia = dataVoo.getDate();
  const mes = dataVoo.getMonth() + 1; // Janeiro é 0
  const ano = dataVoo.getFullYear();

  // Configurando os números dos voos
  const voo1Numero = "TP1";
  const voo2Numero = "TP2";

  // Configurando os horários dos voos
  const horario1 = cidadePartida === "Lisboa, Portugal" ? "10:05" : "12:10";
  const horario2 = cidadePartida === "Lisboa, Portugal" ? "18:05" : "20:10";

  // Determinando o estado do voo
  let estadoVoo1, estadoVoo2;

  if (tipoVoo === "Ida e volta") {
    // Lógica para voo de ida
    estadoVoo1 = dia % 2 === 0 ? "No horário" : "Atrasado";

    // Lógica para voo de regresso
    estadoVoo2 = mes % 2 === 0 ? "No horário" : "Chegou";
  } else {
    estadoVoo1 = dia % 2 === 0 ? "No horário" : "Atrasado";
    estadoVoo2 = "Sem regresso";
  }

  // Atualizando a área de resultados dinamicamente
  resultadosDiv.innerHTML = `
    <h3>Resultados do Voo</h3>
    <p><strong>Tipo de Voo:</strong> ${tipoVoo}</p>
    <p><strong>Origem:</strong> ${cidadePartida}</p>
    <p><strong>Destino:</strong> ${cidadeDestino}</p>
    <p><strong>Data:</strong> ${dia}/${mes}/${ano}</p>
    <hr>
    <p><strong>Número do Voo 1:</strong> ${voo1Numero}</p>
    <p><strong>Horário do Voo 1:</strong> ${horario1}</p>
    <p><strong>Estado do Voo 1:</strong> ${estadoVoo1}</p>
    <hr>
    ${tipoVoo === "Ida e volta" ? `
    <p><strong>Número do Voo 2:</strong> ${voo2Numero}</p>
    <p><strong>Horário do Voo 2:</strong> ${horario2}</p>
    <p><strong>Estado do Voo 2:</strong> ${estadoVoo2}</p>
    ` : ""}
  `;
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
  const menuSandwich = document.getElementById("menu-sandwich");menuButton.addEventListener("click", () => {
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