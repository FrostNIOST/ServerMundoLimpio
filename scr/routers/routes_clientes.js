const { Router } = require('express'); 
const router = Router(); //routes 
const usersController = require('../controllers/cliente_controller');
router.post('/clientes/listado', cliente_controller.listado);
router.post('/clientes/login', cliente_controller.login);
router.post('/clientes/register', cliente_controller.register);
router.post('/clientes/password', cliente_controller.password);
router.put('/clientes/update', cliente_controller.update);
router.delete('/clientes', cliente_controller.delete);

module.exports = router;