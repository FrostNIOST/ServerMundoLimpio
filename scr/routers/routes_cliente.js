/** @module rc/routes/routes_clientes{*} */

const { Router } = require('express'); 
const router = Router(); //routes 
const cliente_controller = require('../controllers/clientes_controller');
router.get('/clientes', cliente_controller.listar);
router.post('/clientes/login', cliente_controller.login);
router.post('/clientes/register', cliente_controller.register);
router.post('/clientes/password', cliente_controller.password);
router.put('/clientes/:id', cliente_controller.update);
router.patch('/clientes/:id', cliente_controller.defuse);

module.exports = router;