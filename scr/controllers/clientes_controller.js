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


    /*update(req, res) {
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
    },*/


    update(req, res) {
        const id = req.body; //Datos del usuario desde el front-end
        User.update(id, (err, data) => {
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
                        message: 'Error solicitar recolección',
                        error: err
                    }
                );
            }
            return res.status(201).json(
                {
                    success: true,
                    message: 'Se solicito recolección',
                    data: data //Datos desde Model 
                }
            );
        });
    },

    recolectarMaterial(req, res) {
        const user = req.body; //Datos del usuario desde el front-end
        //console.log('Controlador', user);
        User.recolectarMaterial(user, (err, data) => {
            if (err) {
                return res.status(501).json(
                    {
                        success: false,
                        message: 'Error solicitar recolección',
                        error: err
                    }
                );
            }
            return res.status(201).json(
                {
                    success: true,
                    message: 'Se solicito recolección',
                    data: data //Datos desde Model 
                }
            );
        });
    },

    list(req, res) {
        //verifica si existe parametro id por query
        const idClient = req.query.id || null;
        if (idClient) {
            User.listOne(idClient, (err, data) => {
                if (err) {
                    return res.status(501).json(
                        {
                            success: false,
                            message: 'Error al listar las recolecciones del cliente',
                            error: err
                        }
                    );
                }
                return res.status(201).json(
                    {
                        success: true,
                        message: 'Recolecciones listadas',
                        data: data //Datos desde Model 
                    }
                );
            });
        }
        else { //los consulta todos
            User.listAll((err, data) => {
                if (err) {
                    return res.status(501).json(
                        {
                            success: false,
                            message: 'Error al listar todas las recolecciones',
                            error: err
                        }
                    );
                }
                return res.status(201).json(
                    {
                        success: true,
                        message: 'Recolecciones listadas',
                        data: data //Datos desde Model 
                    }
                );
            });
        }
    },


    listarMaterial(req, res) {
        const user = req.query; //Datos del usuario desde el front-end
        User.listarMaterial(user, (err, data) => {
            if (err) {
                return res.status(501).json(
                    {
                        success: false,
                        message: 'Error solicitar recolección',
                        error: err
                    }
                );
            }
            return res.status(201).json(
                {
                    success: true,
                    message: 'Se solicito recolección',
                    data: data //Datos desde Model 
                }
            );
        });
    },





}
