def cargar_persona():
    nombre = input("Ingrese el nombre: ")
    apellido = input("Ingrese el apellido: ")
    dni = input("Ingrese el DNI: ")

    telefonos = []
    print("Ingrese los números de teléfono (deje en blanco para finalizar):")
    while True:
        telefono = input("> ")
        if not telefono:
            break
        telefonos.append(telefono)
    hijos  = []

    print('Ingrese el nombre de sus hijos (deje en blanco para finalizar):')
    while True:
        hijo = input("> ")
        if not hijo:
            break
        hijos.append(hijo)

    return [nombre, apellido, dni, telefonos, hijos]

def mostrar_datos(personas):
    print("\n--- Datos de las personas cargadas ---")

    if not personas:
        print("No se han cargado datos.")
        return

    for persona in personas:
        nombre, apellido, dni, telefonos, hijos = persona

        print(f"Nombre: {nombre}")
        print(f"Apellido: {apellido}")
        print(f"DNI: {dni}")

        if telefonos:
            print(f"Teléfonos({len(telefonos)}):")
            for telefono in telefonos:
                print(f"- {telefono}")
        else:
            print("No se registraron teléfonos.")

        if hijos:
            print(f"Hijos({len(telefonos)}):")
            for hijo in hijos:
                print(f"- {hijo}")
        else:
            print("No se registraron nombre de hijos")
        print("-" * 20)


def main():
    personas = []
    while True:
        print("\n--- Menú ---")
        print("1. Cargar nueva persona")
        print("2. Mostrar datos cargados")
        print("3. Filtrar por DNI")
        print("4. Salir")
        opcion = input("Seleccione una opción: ")

        if opcion == '1':
            persona = cargar_persona()
            personas.append(persona)
            print("Persona cargada exitosamente.")
        elif opcion == '2':
            mostrar_datos(personas)
        elif opcion == '3':
            dni = input('Ingrese DNI a filtrar: ')
            encontrado = False
            for persona in personas:
                if persona[2] == dni:
                    print("\n--- Persona encontrada ---")
                    mostrar_datos([persona])
                    encontrado = True
                    break
            if not encontrado:
                print("No se encontró ninguna persona con ese DNI.")
        elif opcion == '4':
            print("Saliendo del programa")
            break
        else:
            print("Opción inválida. Intente nuevamente.")

main()
