const notasTable = document.getElementById('notasTable').getElementsByTagName('tbody')[0];
const promedioTotalCell = document.getElementById('promedioTotal');
const studentNameElement = document.createElement('h2');

const studentName = prompt("Ingrese el nombre del estudiante:");
studentNameElement.textContent = `Nombre del Estudiante: ${studentName}`;
document.body.insertBefore(studentNameElement, document.getElementById('notasTable'));

let totalNotas = 0;
let cantidadNotas = 0;

function agregarNota() {
    while (true) {
        const ramo = prompt("Ingrese el nombre del ramo:");
        if (!ramo) {
            alert("El nombre del ramo no puede estar vacío.");
            continue;
        }
        const nota = parseFloat(prompt(`Ingrese la nota de ${ramo}:`));

        if (isNaN(nota) || nota < 1 || nota > 7) {
            alert("Por favor, ingrese una nota válida entre 1 y 7.");
            continue;
        }

        const row = notasTable.insertRow(-1);
        const ramoCell = row.insertCell(0);
        const notaCell = row.insertCell(1);
        ramoCell.textContent = ramo;
        notaCell.textContent = nota.toFixed(2);

        totalNotas += nota;
        cantidadNotas++;

        const continuar = prompt("¿Desea añadir otra asignatura? (sí/no):").toLowerCase();
        if (continuar !== 'sí' && continuar !== 'si') {
            mostrarPromedio();
            break;
        }
    }
}
l
function mostrarPromedio() {
    if (cantidadNotas === 0) {
        promedioTotalCell.textContent = '0';
    } else {
        const promedioTotal = totalNotas / cantidadNotas;
        promedioTotalCell.textContent = promedioTotal.toFixed(2);
    }
}

agregarNota();
