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

    const hijos = [];
    console.log("Ingrese el nombre de sus hijos (deje en blanco para finalizar):");
    while (true) {
        const hijo = await preguntar("> ")
        if (!hijo) {
            break;
        }
        hijos.push(hijo)
    }

    return [nombre, apellido, dni, telefonos, hijos];
}

function mostrarDatos() {
    console.log("\n--- Datos de las personas cargadas ---");

    if (personas.length === 0) {
        console.log("No se han cargado datos.");
        return;
    }

    personas.forEach(persona => {
        const [nombre, apellido, dni, telefonos, hijos] = persona;

        console.log(`Nombre: ${nombre}`);
        console.log(`Apellido: ${apellido}`);
        console.log(`DNI: ${dni}`);

        if (telefonos.length > 0) {
            console.log("Teléfonos:");
            telefonos.forEach(telefono => {
                console.log(`- ${telefono}`);
            });
            return "No se registraron telefonos."
        }

        if (hijos.length > 0) {
            console.log("Hijos:");
            hijos.forEach(hijo => {
                console.log(`- ${hijo}`);
            })
            return "No se registraron nombres de hijos"
        }

        console.log("-".repeat(20));
    });
}

async function main() {
    while (true) {
        console.log("\n--- Menú ---");
        console.log("1. Cargar nueva persona");
        console.log("2. Mostrar datos cargados");
        console.log("3. Filtrar por DNI");
        console.log("4. Salir");

        const opcion = await preguntar("Seleccione una opción: ");

        if (opcion === '1') {
            const persona = await cargarPersona();
            personas.push(persona);
            console.log("Persona cargada correctamente.");
            continue;
        }

        if (opcion === '2') {
            mostrarDatos();
            continue;
        }

        if (opcion === '3') {
            const persona = await preguntar("Ingrese el DNI a filtrar: ");
            if (persona) {
                console.log("\n--- Persona encontrada ---");
                mostrarDatos([persona]);
            }
            console.log("No se encontró ninguna persona con ese DNI.")
            continue;
        }

        if (opcion === '4') {
            console.log("Saliendo");
            readline.close();
            break;
        }

        console.log("Opcion invalida. Intente nuevamente.");
    }
}


main();
