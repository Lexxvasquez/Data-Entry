const path = require('path');
const express = require('express');
const { log } = require('console');

const app = express()
const PORT = 3000;

app.use(require('./routes'));

app.use(express.static('public'));
// app.use(index_routes)
// app.use(api_routes)

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
