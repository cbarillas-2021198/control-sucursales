
const {request, response,} = require('express')
const jwt = require('jsonwebtoken')

const Empresa = require('../models/empresa');

const validarJWT =async (req =request, res = response , next) =>{

    const token = req.header('x-token')

    if (!token) {
        return res.status(401).json({
            msg: "no hay token en la peticion"
        })
    }

    try {

        const {uid} = jwt.verify(token, process.env.SECRET_OR_PRIVATE_KEY)

       
        const empresa = await Empresa.findById(uid)

      
        if(!empresa){
            return res.status(404).json({
                msg: "token no valido no existe en la base de datos"
            })
        }

    req.empresa = empresa;
    next();
        


    } catch (error) {
        console.log(error)
        res.status(401).json({
            msg: "token no valido"
        })
    }
   

}

module.exports ={
    validarJWT
}