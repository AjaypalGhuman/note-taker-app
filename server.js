const express = require('express');
const fs = require('fs');
const path = require('path');
const allNotes = require('./db/db.json');
const uuid = require('uuid');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// used to store and retrieve notes
app.get('/api/notes', (req, res) => {
    res.sendFile(
        path.join(__dirname, '/db/db.json'))
});

app.post('/api/notes', (req, res) => {
    const allNotes = JSON.parse(
        fs.readFileSync('./db/db.json')
    );
    const newNotes = req.body;
    newNotes.id
})

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});