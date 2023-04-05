const express = require('express');
const view_routes = require('./routes/view_routes.js')
const api_routes = require('./routes/api_routes.js')
const PORT = process.env.PORT || 3000;

const app = express();


app.use(express.static('public'));

app.use('/', view_routes);
app.use('/', api_routes);

// The setup to LISTEN for the GET
app.listen(PORT, () => {
    console.log('Listening on port %s', PORT)
})