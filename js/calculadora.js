 function calcularEdadPerruna() {
            let edadHumana = parseInt(document.getElementById("edad").value);
            let sexo = document.getElementById("sexo").value;
            let nombre = document.getElementById("nombre").value;
            let edadPerruna = 0;
            let i = 0;

            while (i < edadHumana) {
                if (sexo === "mujer") {
                    edadPerruna += 5;
                } else if (sexo === "hombre") {
                    edadPerruna += 7;
                }
                i++;
            }
 }
