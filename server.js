const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());

let tareas = [
    { id: 1, titulo: 'Aprender Express', completada: false },
    { id: 2, titulo: 'Hacer una API REST', completada: false},
    { id: 3, titulo: 'Subir a Github', completada: false},
];

let proximoId = 4;

app.get('/', (req, res) => {
    res.send('Hola mundo desde Express')
});

app.get('/tareas', (req, res) => {
    res.json(tareas)
});

app.get('/tareas/:id', (req, res) => {
    const id = Number(req.params.id);
    const tarea = tareas.find(t => t.id === id);

    if(!tarea) {
        return res.status(404).json({ error: `No existe una tarea con id ${id}` })
    }

    res.json(tarea);
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
});