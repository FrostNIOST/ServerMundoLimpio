/** @module src/routers/routes_empresa{*}*/

const { Router } = require('express');
const router = Router();
//routes 
const empresas_controller = require('../controllers/empresas_controller');
router.get('/clientes/empresas', clientes_controller.empresas);//mostrar la lista de las empresas /*dejar en empresa*/
router.post('/empresas/register', empresas_controller.register); //registrar un usuario tipo empresa /checked
router.post('/empresas/password', empresas_controller.updatePassword);//cambia la contraseña de una empresa //checked
//router.put('/empresas/:id', empresas_controller.update);actualiza  los datos del cliente con el id que le pasen por parametro
//router.patch('/empresas/:id', empresas_controller.defuse);cambia el status del cliente para desctivar la cuenta
//router.get('/empresas/:nit', empresas_controller.search); // no tiene sentido
//router.post('clientes/recolecion), clientes_controller.recolectar;//el cliente hace  una recoleccion y la solicita
//router.get('clientes/recolecion), clientes_controller.recolectar;// se muestra los datos  que el cliente tiene en recoleccion



module.exports = router;