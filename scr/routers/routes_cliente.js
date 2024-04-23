/** @module src/routers/routes_cliente{*}*/

const { Router } = require('express');
const router = Router();
//routes 
const clientes_controller = require('../controllers/clientes_controller');
/**router.get / '/cliente', (req, res) => {
    res.json({ message: 'Esta es la API para clientes' });
}*/
//router.get('/clientes', clientes_controller.empresas);//mostrar la lista de las empresas las empresas
router.post('/clientes/login', clientes_controller.login); //iniciar sesion de un usuario y busca que tipo es, empresa o cliente /checked
router.post('/clientes/register', clientes_controller.register); //registrar un usuario tipo cliente /checked
router.post('/clientes/password', clientes_controller.updatePassword); //cambia la contraseña de un cliente /checked
//router.put('/clientes/:id', clientes_controller.update);//actualiza  los datos del cliente con el id que le pasen por parametro
//router.patch('/clientes/:id', clientes_controller.defuse);//cambia el status del cliente para desactivar la cuenta
//router.post('clientes/recolecion), clientes_controller.recolectar;//el cliente hace  una recoleccion y la solicita
//router.get('clientes/recolecion), clientes_controller.recolectar;// se muestra los datos  que el cliente tiene en recoleccion


module.exports = router;