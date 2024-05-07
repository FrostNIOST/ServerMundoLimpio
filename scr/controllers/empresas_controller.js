const Company = require('../models/empresas');
module.exports = {

    register(req, res) {
        const company = req.body; //Datos del usuario desde el front-end

        Company.register(company, (err, data) => {
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

        const company = req.body; //Datos del usuario desde el front-end

        Company.login(company, (err, data) => {
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
        const company = req.body; //Datos del usuario desde el front-end
        Company.updatePassword(company, (err, data) => {
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

    empresas (req, res) {
        const id = req.query.id || null;
        const nit  = req.query.nit || null;
        const nombre =  req.query.nombre  || null;
        const esp = req.query.esp || null;
        
        Company.empresas(id, nit, nombre, esp, (err, data) => {
            if (err) {
                return res.status(501).json(
                    {
                        success: false,
                        message: 'Error al mostrar empresas',
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
    },

    update(req, res) {
        const id = req.body; //Datos del usuario desde el front-end
        Company.update(id, (err, data) => {
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
        const company = req.body; //Datos del usuario desde el front-end
        Company.defuse(company, (err, data) => {
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

    list(req, res) {
        //verifica si existe parametro id por query
        const idClient = req.query.id || null;
        if (idClient) {
            Company.listOne(idClient, (err, data) => {
                if (err) {
                    return res.status(501).json(
                        {
                            success: false,
                            message: 'Error al listar las recolecciones de la empresa',
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
            Company.listAll((err, data) => {
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
    }


}