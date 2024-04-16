const { Router } = require('express'); 
const router = Router(); 
//routes 
const usersController = require('../controllers/empresas_controller');
router.post('/empresa/profile', empresas_controller.profile);
router.post('/empresa/login', empresas_controller.login);
router.post('/empresa/register', empresas_controller.register);
router.put('/empresa/update', empresas_controller.update);
router.post('/empresa/password', empresas_controller.password);
router.delete('/empresa', empresas_controller.delete);
router.get('/empresa/{nombre}', empresas_controller.delete);
router.get('/empresa/{nit}', empresas_controller.delete);



module.exports = router;