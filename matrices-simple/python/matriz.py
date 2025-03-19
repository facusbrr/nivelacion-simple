people = []

num_people = int(input("¿Cuántas personas desea registrar?: "))

for i in range(num_people):
    print(f"\nPersona {i + 1}:")
    name = input("Nombre: ")
    age = int(input("Edad: "))
    note = float(input("Nota: "))

    people.append([name, age, note])

print("\nRegistro de personas:")
for person in people:
    print(f"Nombre: {person[0]}, Edad: {person[1]}, Nota: {person[2]}")

people.sort(key=lambda x: x[2], reverse=True)

print("\n------")
print("Orden por nota:")
for person in people:
    print(f"Nombre: {person[0]}, Edad: {person[1]}, Nota: {person[2]}")
