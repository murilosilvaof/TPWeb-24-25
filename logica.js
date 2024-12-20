document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();

  const tipoVoo = document.querySelector('input[name="tipo-voo"]:checked').value;
  const partida = document.querySelector('#partida').value;
  const destino = document.querySelector('#destino').value;
  const data = new Date(document.querySelector('#data').value);

  // Calcular número do voo
  const dia = data.getDate();
  const mes = data.getMonth() + 1; // Janeiro é 0
  const numeroVoo1 = `TP1 (${partida} -> ${destino})`;
  const numeroVoo2 = `TP2 (${partida} -> ${destino})`;

  // Determinar estado do voo
  let estado = '';
  if (tipoVoo === 'ida' && dia % 2 === 0) {
    estado = 'No horário';
  } else if (tipoVoo === 'ida') {
    estado = 'Atrasado';
  } else if (tipoVoo === 'regresso' && mes % 2 === 0) {
    estado = 'No horário';
  } else {
    estado = 'Chegou';
  }

  alert(`Voo: ${numeroVoo1} | Estado: ${estado}`);
});
