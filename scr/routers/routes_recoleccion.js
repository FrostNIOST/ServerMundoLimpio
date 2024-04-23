const { Router } = require('express'); 
const router = Router(); //routes 
const usersController = require('../controllers/recoleciones_controller');
//por ver si se nesecita esta tabla
router.post('/recoleciones/listado', cliente_controller.listado);
router.post('/recoleciones/login', cliente_controller.login);
router.post('/recoleciones/register', cliente_controller.register);
router.post('/recoleciones/password', cliente_controller.password);
router.put('/recoleciones/update', cliente_controller.update);
router.delete('/recoleciones', cliente_controller.delete);

module.exports = router;