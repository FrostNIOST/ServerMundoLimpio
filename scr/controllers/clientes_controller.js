const User = require('../models/clientes');
module.exports = {

    register(req, res) {
        const user = req.body; //Datos del usuario desde el front-end
        User.register(user, (err, data) => {
            if (err) {
                return res.status(501).json(
                    {
                        success: false,
                        message: 'Error al registrar el usuario',
                        error: err
                    }
                );
            }
            console.log('Usuario registrado: ', data); //for debugging
            return res.status(201).json(
                {
                    success: true,
                    message: 'Usuario registrado',
                    data: data //Datos desde Model 
                }
            );
        });
    },

    login(req, res) {

        const user = req.body; //Datos del usuario desde el front-end

        User.login(user, (err, data) => {
            if (err) {
                return res.status(501).json(
                    {
                        success: false,
                        message: 'Error al consultar el usuario',
                        error: err
                    }
                );
            }
            console.log('Controller Usuarios encontrados: ', data.length); //for debugging
            return res.status(201).json(
                {
                    success: true,
                    message: 'Usuarios encontrados:' + data.length,
                    data: data //Datos desde Model 
                }
            );
        });
    },

    updatePassword(req, res) {
        const user = req.body; //Datos del usuario desde el front-end
        User.updatePassword(user, (err, data) => {
            if (err) {
                return res.status(501).json(
                    {
                        success: false,
                        message: 'Error al actualizar el password',
                        error: err
                    }
                );
            }
            return res.status(201).json(
                {
                    success: true,
                    message: 'Password actualizado',
                    data: data //Datos desde Model 
                }
            );
        });
    },






}
