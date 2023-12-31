const path = require('path');
const express = require('express');
const { log } = require('console');

const app = express()
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static('public'));
app.use(require('./routes'));


app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
