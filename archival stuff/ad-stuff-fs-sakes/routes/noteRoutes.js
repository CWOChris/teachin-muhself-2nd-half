const express = require('express');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();

router.get('/', (req, res) => {
    fs.readFile('./db.json', 'utf8', (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
    });
});

router.post('/', (req, res) => {
    fs.readFile('./db.json', 'utf8', (err, data) => {
        if (err) throw err;
        const notes = JSON.parse(data);
        const newNote = req.body;
        newNote.id = uuidv4();
        notes.push(newNote);
        fs.writeFile('./db.json', JSON.stringify(notes), 'utf8', (err) => {
            if (err) throw err;
            res.json(newNote);
        });
    });
});

router.delete('/:id', (req, res) => {
    const noteId = req.params.id;
    fs.readFile('./db.json', 'utf8', (err, data) => {
        if (err) throw err;
        let notes = JSON.parse(data);
        notes = notes.filter(note => note.id !== noteId);
        fs.writeFile('./db.json', JSON.stringify(notes), 'utf8', (err) => {
            if (err) throw err;
            res.send('Note deleted');
        });
    });
});

module.exports = router;