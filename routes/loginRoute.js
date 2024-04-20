const express = require('express');
const middlewareControllers = require('../controllers/middlewareControllers');

const app = express.Router();
const auth = new middlewareControllers();

app.get('/login', auth.auth);
app.post('/register', auth.register);

module.exports = app;