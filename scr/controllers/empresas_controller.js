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
        const company = req.body; //Datos del usuario desde el front-end
        Company.empresas(company, (err, data) => {
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
    }





}