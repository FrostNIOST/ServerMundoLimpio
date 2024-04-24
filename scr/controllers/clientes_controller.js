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

    /**empresas (req, res) {
        const user = req.body; //Datos del usuario desde el front-end
        User.empresas(user, (err, data) => {
            if (err) {
                return res.status(501).json(
                    {
                        success: false,
                        message: 'Error al mostrar empresa',
                        error: err
                    }
                );
            }
            return res.status(201).json(
                {
                    success: true,
                    message: 'Empresas encontradas',
                    data: data //Datos desde Model 
                }
            );
        });
    } por verificar*/

    update(req, res) {
        const user = req.body; //Datos del usuario desde el front-end
        User.update(user, (err, data) => {
            if (err) {
                return res.status(501).json(
                    {
                        success: false,
                        message: 'Error al actualizar el los datos',
                        error: err
                    }
                );
            }
            return res.status(201).json(
                {
                    success: true,
                    message: 'Datos actualizados',
                    data: data //Datos desde Model 
                }
            );
        });
    },

    defuse(req, res) {
        const user = req.body; //Datos del usuario desde el front-end
        User.defuse(user, (err, data) => {
            if (err) {
                return res.status(501).json(
                    {
                        success: false,
                        message: 'Error al desactivar cuenta',
                        error: err
                    }
                );
            }
            return res.status(201).json(
                {
                    success: true,
                    message: 'Cuenta Desactivada',
                    data: data //Datos desde Model 
                }
            );
        });
    },

    recolectar(req, res) {
        const user = req.body; //Datos del usuario desde el front-end
        User.recolectar(user, (err, data) => {
            if (err) {
                return res.status(501).json(
                    {
                        success: false,
                        message: 'Error al desactivar cuenta',
                        error: err
                    }
                );
            }
            return res.status(201).json(
                {
                    success: true,
                    message: 'Cuenta Desactivada',
                    data: data //Datos desde Model 
                }
            );
        });
    },




}
