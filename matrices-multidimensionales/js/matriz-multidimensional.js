const readline = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let personas = [];

function preguntar(pregunta) {
    return new Promise(resolve => {
        readline.question(pregunta, resolve);
    });
}

async function cargarPersona() {
    const nombre = await preguntar("Ingrese el nombre: ");
    const apellido = await preguntar("Ingrese el apellido: ");
    const dni = await preguntar("Ingrese el DNI: ");

    const telefonos = [];
    console.log("Ingrese los números de teléfono (deje en blanco para finalizar):");
    while (true) {
        const telefono = await preguntar("> ");
        if (!telefono) {
            break;
        }
        telefonos.push(telefono);
    }

    return [nombre, apellido, dni, telefonos];
}

function mostrarDatos() {
    console.log("\n--- Datos de las personas cargadas ---");

    if (personas.length === 0) {
        console.log("No se han cargado datos.");
        return;
    }

    personas.forEach(persona => {
        const [nombre, apellido, dni, telefonos] = persona;

        console.log(`Nombre: ${nombre}`);
        console.log(`Apellido: ${apellido}`);
        console.log(`DNI: ${dni}`);

        if (telefonos.length > 0) {
            console.log("Teléfonos:");
            telefonos.forEach(telefono => {
                console.log(`- ${telefono}`);
            });
        } else {
            console.log("No se registraron telefonos.");
        }
        console.log("-".repeat(20));
    });
}

async function main() {
    while (true) {

        console.log("\n--- Menu ---");
        console.log("1. Cargar nueva persona");
        console.log("2. Mostrar datos cargados");
        console.log("3. Salir");

        const opcion = await preguntar("Seleccione una opcion: ");

        if (opcion === '1') {
            const persona = await cargarPersona();
            personas.push(persona);
            console.log("Persona cargada correctamente.");
        } else if (opcion === '2') {
            mostrarDatos();
        } else if (opcion === '3') {
            console.log("Saliendo");
            readline.close();
            break;
        } else {
            console.log("Intente nuevamente.");
        }
    }
}

main();
