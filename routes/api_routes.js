const router = require('express').Router();
const express = require('express');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');



if (!fs.existsSync('db.json')) {
    fs.writeFile('db.json', JSON.stringify([]), function(error) {
        if (error) {
            return console.log(error);
        }
    });
}



router.get('/api/notes', (client_request, server_response) => {
    const notes = fs.readFileSync('db.json');
    server_response.send(notes);
});



router.post('/api/notes', express.json(), (client_request, server_response) => {
    const notes = JSON.parse(fs.readFileSync('db.json'));
    const note = client_request.body

    note.id = uuidv4();
    notes.push(note);
    fs.writeFile('db.json', JSON.stringify(notes), function(error) {
        if (error) {
            return console.log(error);
        }
    });
});



router.delete('/api/notes/:id', (client_request, server_response) => {
    const notes = JSON.parse(fs.readFileSync('db.json'));
    const filterNotes = notes.filter(note => note.id !== client_request.params.id)
    fs.writeFile('db.json', JSON.stringify(filterNotes), function(error) {
        if (error) {
            return console.log(error);
        }
    });
});



module.exports = router;