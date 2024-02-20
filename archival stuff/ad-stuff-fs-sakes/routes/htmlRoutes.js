const express = require('express');
const path = require('path');

const router = express.Router();

router.get('../public/notes.html', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));;
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

module.exports = router;