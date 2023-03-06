const Empresa = require('../models/empresa')
const Sucursal = require('../models/sucursal')
const Tipo = require('../models/tipo')

const emailExiste = async(correo = '') =>{
    
    const existeEmailDeEmpresa = await Empresa.findOne({correo})
    if (existeEmailDeEmpresa ) {
        throw new Error(`el correo ${correo}, ya existe`)
    }
        
}

const exiteTipo =async(tipo = '') =>{

    const exiteTipo = await Tipo.findOne({tipo});
    if (!exiteTipo) {
        throw new Error(`el tipo ${tipo}, no existe en la db`)
    }
}

const exiteMunicipio =async(municipio = '') =>{

    const exiteMunicipio = await Sucursal.findOne({municipio});
    if (!exiteMunicipio) {
        throw new Error(`el tipo ${municipio}, no existe en la db`)
    }
}

const existIdOfEmpresa = async(id)=>{
    const existIdOfEmpresa = await Empresa.findById(id)
    if (!existIdOfEmpresa) {
        throw new Error(`el id ${id}, no existe en la db`)  
    }
}
const idSucursal = async(id)=>{
    const idSucursal = await Sucursal.findById(id)
    if (!idSucursal) {
        throw new Error(`el id ${id}, no existe en la db`)  
    }
}


module.exports ={
    emailExiste,
    existIdOfEmpresa,
    idSucursal,
    exiteTipo,
    exiteMunicipio
}