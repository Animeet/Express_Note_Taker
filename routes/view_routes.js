const router = require('express').Router();
//Router variable is going to be equal to a router object
//CREATING ROUTES HERE, ADD THE ROUTES IN SERVER.JS

const path = require('path')
//Create the paths



//app.get is setting up a route, or listener  //  Everytime we visit a url, we are using a GET request
router.get('/notes', (client_request, server_response) => {
    server_response.sendFile(path.join(process.cwd(), 'public/notes.html'));
});




module.exports = router;