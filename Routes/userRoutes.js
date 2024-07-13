const express = require('express');
const { create, getAllUser, getUserByid, updateUser, deleteUser } = require('../Controller/userController.js');

const route = express.Router();

route.post('/route', create);
route.get('/routes', getAllUser);
route.get('/route/:id', getUserByid);
route.put('/update/user/:id', updateUser);
route.delete('/delete/user/:id', deleteUser);

module.exports = route; // Correct way to export in CommonJS
