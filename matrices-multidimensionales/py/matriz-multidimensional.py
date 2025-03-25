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

    return [nombre, apellido, dni, telefonos]

def mostrar_datos(personas):
    print("\n--- Datos de las personas cargadas ---")

    if not personas:
        print("No se han cargado datos.")
        return

    for persona in personas:
        nombre, apellido, dni, telefonos = persona

        print(f"Nombre: {nombre}")
        print(f"Apellido: {apellido}")
        print(f"DNI: {dni}")

        if telefonos:
            print("Teléfonos:")
            for telefono in telefonos:
                print(f"- {telefono}")
        else:
            print("No se registraron teléfonos.")
        print("-" * 20)

def main():
    personas = []
    while True:
        print("\n--- Menú ---")
        print("1. Cargar nueva persona")
        print("2. Mostrar datos cargados")
        print("3. Salir")
        opcion = input("Seleccione una opción: ")

        if opcion == '1':
            persona = cargar_persona()
            personas.append(persona)
            print("Persona cargada exitosamente.")
        elif opcion == '2':
            mostrar_datos(personas)
        elif opcion == '3':
            print("Saliendo del programa.")
            break
        else:
            print("Opción inválida. Intente nuevamente.")

main()
