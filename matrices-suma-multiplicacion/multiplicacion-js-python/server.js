import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.resolve('./')));

app.post('/multiply', (req, res) => {
    const { matrix1, matrix2 } = req.body;

    if (!matrix1 || !matrix2 || !matrix1.length || !matrix2.length) {
        return res.status(400).json({ error: 'Las matrices no pueden estar vacías.' });
    }

    if (matrix1[0].length !== matrix2.length) {
        return res.status(400).json({ error: 'Dimensiones incompatibles para la multiplicación.' });
    }

    if (!matrix1.every(row => row.every(num => typeof num === 'number')) ||
        !matrix2.every(row => row.every(num => typeof num === 'number'))) {
        return res.status(400).json({ error: 'Las matrices deben contener solo números.' });
    }

    const result = [];
    for (let i = 0; i < matrix1.length; i++) {
        result[i] = [];
        for (let j = 0; j < matrix2[0].length; j++) {
            let sum = 0;
            for (let k = 0; k < matrix2.length; k++) {
                sum += matrix1[i][k] * matrix2[k][j];
            }
            result[i][j] = sum;
        }
    }

    res.json({ result });
});

app.listen(3000, () => console.log('Server en http://localhost:3000'));
