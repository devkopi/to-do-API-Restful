const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Create a new Task - Crear una nueva tarea

router.post('/', async (req, res) => {
    try {
        const task = new Task(req.body);
        await task.save();
        res.status(201).send(task);
    } catch (err) {
        res.status(400).send(err);
    }
});


// Give all Task - Obtener todas las Tareas

router.get('/', async (req, res) => {
    try{
        const tasks = await Task.find();
        res.status(200).send(tasks);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Give a "ID" task - Obtener una tarea por ID

router.get('/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).send();
        }
        res.status(200).send(task);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Actualizar una tarea por ID - Update a task for ID

router.put('/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true});
        if (!task) {
            return res.status(404).send();
        }
        res.status(200).send(task);
    } catch (err) {
        res.status(400).send(err);
    }
});


// Delete a task for ID - Eliminar una tarea por ID

router.delete('/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) {
            return res.status(404).send();
        }
        res.status(200).send(task);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;