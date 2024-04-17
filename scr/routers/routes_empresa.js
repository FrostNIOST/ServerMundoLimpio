const { Router } = require('express'); 
const router = Router(); 
//routes 
const usersController = require('../controllers/empresas_controller');
router.get('/empresas', empresas_controller.listar);
router.post('/empresas/register', empresas_controller.register);
router.post('/empresas/password', empresas_controller.password);
router.put('/empresas/:id', empresas_controller.update);
router.patch('/empresas/:id', empresas_controller.defuse);
router.get('/empresas/:nit', empresas_controller.search);



module.exports = router;