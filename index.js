const { registrar, leer, limpiar } = require('./operaciones');
const fs = require('fs');

const args = process.argv.slice(2);
const operacion = args[0];

if (operacion === 'registrar') {
    const nombre = args[1];
    const edad = args[2];
    const animal = args[3];
    const color = args[4];
    const enfermedad = args[5];

    registrar(nombre, edad, animal, color, enfermedad);
} else if (operacion === 'leer') {
    leer();
} else if (operacion === 'limpiar') {
    limpiar();
} else {
    console.log('Operación inválida');
}
