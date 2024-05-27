/** @module src/routers/routes_cliente{*}*/

const { Router } = require('express');
const router = Router();
//routes 
const clientes_controller = require('../controllers/clientes_controller');
/**router.get / '/cliente', (req, res) => {
    res.json({ message: 'Esta es la API para clientes' });
}*/
router.post('/user/login', clientes_controller.login);                  //iniciar sesion de un usuario y busca que tipo es, empresa o cliente /checked navegacion
router.post('/clientes/register', clientes_controller.register);        //registrar un usuario tipo cliente /checked navegacion
router.post('/clientes/password', clientes_controller.updatePassword);  //cambia la contraseña de un cliente /checked
router.put('/clientes', clientes_controller.update);                    //actualiza  los datos del cliente con el id que le pasen por parametro
router.patch('/clientes', clientes_controller.defuse);                  //cambia el status del cliente para "desactivar" la cuenta

router.post('/clientes/recoleccion', clientes_controller.recolectar);     //el cliente hace  una recoleccion y la solicita (ingresa datos en la tabla de recolecion)
router.post('/clientes/recolectarMaterial', clientes_controller.recolectarMaterial); //inserta datos en la tabla de materiales para asociarlos a la recolecion

router.get('/clientes/recoleccion', clientes_controller.list);     // se muestra los datos  que el cliente tiene en recoleccion
//router.post('clientes/recolecion'), clientes_controller.recolectar;   //el cliente hace  una recoleccion y la solicita CON LAS DE ARRIBA ESTA NO TENDRIA SENTIDO



//Solo los get van por el metodo params


module.exports = router;