/** @module src/routers/routes_cliente{*}*/

const { Router } = require('express');
const router = Router();
//routes 
const clientes_controller = require('../controllers/clientes_controller');
router.get / '/cliente', (req, res) => {
    res.json({ message: 'Esta es la API para clientes' });
}
//router.get('/clientes', clientes_controller.listar);
//router.post('/clientes/login', clientes_controller.login);
router.post('/clientes/register', clientes_controller.register);
//router.post('/clientes/password', clientes_controller.password);
//router.put('/clientes/:id', clientes_controller.update);
//router.patch('/clientes/:id', clientes_controller.defuse);

module.exports = router;