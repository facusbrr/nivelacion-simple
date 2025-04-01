# Multiplicación de Matrices

---

## Servidor en Node.js

### Requisitos
- Node.js instalado en tu máquina.

### Pasos para iniciar
1. Navega al directorio del proyecto:
   ```bash
   cd /root/workspace/nivelacion-simple/matrices-suma-multiplicacion/multiplicacion-js-python
   ```
2. Instala las dependencias
   ```bash
   npm install
   ```
3. Inicia el servidor:
   ```bash
   npm run dev
   ```
4. Abre el navegador en: http://localhost:3000/index.html

---
## Servidor en Python con FastAPI

Las dependencias necesarias están en el archivo requirements.txt.

Pasos para iniciar
1. Crea un entorno virtual
    ```bash
    python3 -m venv venv
    source venv/bin/activate # En Windows: venv\Scripts\activate
    ```
2. Instala las dependencias
    ```bash
    pip install -r requeriments.txt
    ```
3. Inicia el servidor
    ```bash
    uvicorn server:app --reload
    ```
4. Abre el navegador: http://127.0.0.1:8000
