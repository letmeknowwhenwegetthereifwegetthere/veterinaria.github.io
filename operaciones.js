const fs = require('fs');

const registrar = (nombre, edad, animal, color, enfermedad) => {
    fs.readFile('citas.json', 'utf8', (err, data) => {
        if (err) {
            console.log('Error al leer el archivo citas.json:', err);
            return;
        }

        const citas = JSON.parse(data);

        const nuevaCita = {
            nombre,
            edad,
            animal,
            color,
            enfermedad
        };

        citas.push(nuevaCita);

        const citasJSON = JSON.stringify(citas);

        fs.writeFile('citas.json', citasJSON, 'utf8', (err) => {
            if (err) {
                console.log('Error al escribir en el archivo citas.json:', err);
                return;
            }

            console.log('Cita registrada correctamente.');
        });
    });
};

const leer = () => {
    fs.readFile('citas.json', 'utf8', (err, data) => {
        if (err) {
            console.log('Error al leer el archivo citas.json:', err);
            return;
        }

        const citas = JSON.parse(data);

        citas.forEach((cita, index) => {
            console.log(`Cita ${index + 1}:`);
            console.log('Nombre:', cita.nombre);
            console.log('Edad:', cita.edad);
            console.log('Tipo de animal:', cita.animal);
            console.log('Color:', cita.color);
            console.log('Enfermedad:', cita.enfermedad);
            console.log('----------------------------');
        });
    });
};

const limpiar = () => {
    const citas = [];

    const citasJSON = JSON.stringify(citas);

    fs.writeFile('citas.json', citasJSON, 'utf8', (err) => {
        if (err) {
            console.log('Error al limpiar las citas:', err);
            return;
        }

        console.log('Todas las citas han sido eliminadas.');
    });
};



module.exports = { registrar, leer, limpiar };
