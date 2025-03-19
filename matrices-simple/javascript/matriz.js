(() => {

    let people = [];
    let numPeople = parseInt(prompt("Cuantas personas desea registrar?: "));

    for (let i = 0; i < numPeople; i++) {

        alert(`Persona ${i + 1}: `);
        let name = String(prompt("Nombre: "));
        let age = parseInt(prompt("Edad: "));
        let note = parseFloat(prompt("Nota: "));

        people.push([name, age, note]);
    }

    console.log('Registro de personas')
    for (let i = 0; i < people.length; i++) {
        console.log(`Nombre: ${people[i][0]}, Edad: ${people[i][1]}, Nota: ${people[i][2]}`)
    }
    console.log('------')
    console.log('Orden por nota')
    people.sort((a, b) => b[2] - a[2]);
    for (let i = 0; i < people.length; i++) {
        console.log(`Nombre: ${people[i][0]}, Edad: ${people[i][1]}, Nota: ${people[i][2]}`);
    }


})();
