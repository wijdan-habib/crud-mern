const express = require('express');
const { create } = require('../Controller/userController.js');

const route = express.Router();

route.post('/route', create);

module.exports = route; // Correct way to export in CommonJS
