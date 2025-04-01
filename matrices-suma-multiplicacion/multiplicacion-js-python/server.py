from fastapi import FastAPI, HTTPException # type: ignore
from fastapi.responses import FileResponse # type: ignore
from pydantic import BaseModel # type: ignore
from typing import List
import os

app = FastAPI()

class Matrices(BaseModel):
    matrix1: List[List[float]]
    matrix2: List[List[float]]

@app.get("/")
def serve_index():
    return FileResponse(os.path.join(os.getcwd(), "index.html"))

@app.post("/multiply")
def multiply_matrices(matrices: Matrices):
    matrix1 = matrices.matrix1
    matrix2 = matrices.matrix2

    if not matrix1 or not matrix2:
        raise HTTPException(status_code=400, detail="Las matrices no pueden estar vacías.")

    if len(matrix1[0]) != len(matrix2):
        raise HTTPException(status_code=400, detail="Dimensiones incompatibles para la multiplicación.")

    if not all(isinstance(num, (int, float)) for row in matrix1 for num in row) or \
       not all(isinstance(num, (int, float)) for row in matrix2 for num in row):
        raise HTTPException(status_code=400, detail="Las matrices deben contener solo números.")

    result = [[sum(matrix1[i][k] * matrix2[k][j] for k in range(len(matrix2)))
               for j in range(len(matrix2[0]))] for i in range(len(matrix1))]

    return {"result": result}
