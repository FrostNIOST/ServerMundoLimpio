/** @module src/routers/routes_cliente{*}*/

const { Router } = require('express'); 
const router = Router(); 
//routes 
const clientes_controller = require('../controllers/clientes_controller');
router.get/'/cliente', (req, res) => {
    res.json({ message: 'Esta es la API para clientes' });
}
//router.get('/clientes', cliente_controller.listar);
//router.post('/clientes/login', cliente_controller.login);
//router.post('/clientes/register', cliente_controller.register);
//router.post('/clientes/password', cliente_controller.password);
//router.put('/clientes/:id', cliente_controller.update);
//router.patch('/clientes/:id', cliente_controller.defuse);

module.exports = router;