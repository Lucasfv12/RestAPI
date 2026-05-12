const express = require('express');
const db = require('./db');
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

app.post('/tareas', (req, res) => {
    const { titulo } = req.body;

    if (!titulo || titulo.trim() === '') {
        return res.status(400).json({ error: 'El campo "titulo" es obligatorio' });
    }
    const nuevaTarea = {
        id: proximoId++,
        titulo: titulo.trim(),
        completada: false
        };

    tareas.push(nuevaTarea);
    res.status(201).json(nuevaTarea);
    
});

app.put('/tareas/:id', (req, res) => {
    const id    = Number(req.params.id);
    const tarea = tareas.find(t => t.id === id);

    if (!tarea) {
        return res.status(404).json({ error: `No existe una tarea con id ${id}` });
    }

    const { titulo, completada } = req.body;

    if (titulo     !== undefined) tarea.titulo     = titulo.trim();
    if (completada !== undefined) tarea.completada = completada;

    res.json(tarea);
});

app.delete('/tareas/:id', (req, res) => {
    const id    = Number(req.params.id);
    const index = tareas.findIndex(t => t.id === id);

    if (index === -1) {
        return res.status(404).json({ error: `No existe una tarea con id ${id}` });
    }

    tareas.splice(index, 1);
    res.json({ mensaje: `Tarea ${id} eliminada correctamente` });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
});