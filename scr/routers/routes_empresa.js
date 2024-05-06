/** @module src/routers/routes_empresa{*}*/

const { Router } = require('express');
const router = Router();
//routes 
const empresas_controller = require('../controllers/empresas_controller');
const { empresas } = require('../models/clientes');

router.get('/user/empresas', empresas_controller.empresas);             //mostrar la lista de las empresas  segun filtro  empresa PK (id), nit, nombre y/o especialidad (esp) /*dejar en empresa*/
router.post('/empresas/register', empresas_controller.register);        //registrar un usuario tipo empresa /checked
router.post('/empresas/password', empresas_controller.updatePassword);  //cambia la contraseña de una empresa //checked
router.put('/empresas', empresas_controller.update);                    //actualiza  los datos del cliente con el id que le pasen por parametro
router.patch('/empresas', empresas_controller.defuse);                  //cambia el status del cliente para desctivar la cuenta
//router.get('empresas/recolecion), empresas_controller.recolectar;     // se muestra los datos  que el cliente tiene en recoleccion



module.exports = router;