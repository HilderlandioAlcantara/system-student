const { Router } = require('express');
const routes = Router();

const controllers = require('../controllers');

routes.get('/students', controllers.read);
routes.post('/students', controllers.create);
routes.put('/students/:id', controllers.update);
routes.delete('/students/:id', controllers.delete);

module.exports = routes;