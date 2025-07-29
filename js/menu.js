function calcularTotal() {

    const precios = {
    combo1: 25000,
    combo2: 20000,
    combo3: 40000
};

    const cantidad1 = parseInt(document.getElementById('combo1').value) || 0;
    const cantidad2 = parseInt(document.getElementById('combo2').value) || 0;
    const cantidad3 = parseInt(document.getElementById('combo3').value) || 0;

    const cantidades = [cantidad1, cantidad2, cantidad3]; 
    const cantidadDeOpcionesElegidas = cantidades.filter(c => c > 0).length;

    const resultadoDiv = document.getElementById('resultado');

if (cantidadDeOpcionesElegidas === 0) {
    resultadoDiv.textContent = "Por favor, selecciona al menos una unidad de un combo.";
    resultadoDiv.style.color = "red";
    return;
  }

  if (cantidadDeOpcionesElegidas > 1) {
    resultadoDiv.textContent = "Solo puedes elegir UNA opción del menú.";
    resultadoDiv.style.color = "red";
    return;
  }

  let total = 0;

  if (cantidad1 > 0) total = cantidad1 * precios.combo1;
  else if (cantidad2 > 0) total = cantidad2 * precios.combo2;
  else if (cantidad3 > 0) total = cantidad3 * precios.combo3;

  resultadoDiv.textContent = "Total a pagar: $" + total.toLocaleString('es-CO');
  resultadoDiv.style.color = "green";
    
}

