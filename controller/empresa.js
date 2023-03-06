const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

const Empresa = require('../models/empresa');

const { Promise } = require('mongoose');


const getEmpresa = async (req = request, res = response) => {

    const listaEmpresa = await Promise.all([
        Empresa.countDocuments(),
        Empresa.find()
    ])

    res.json({
        msg: 'Get Api de ',
        listaEmpresa
    })

}
const PostEmpresa = async (req = request, res = response) => {

    const { nombre, correo, password, tipo } = req.body;
    const empresaDB = new Empresa({ nombre, correo, password, tipo });
    const salt = bcryptjs.genSaltSync();
    empresaDB.password = bcryptjs.hashSync(password, salt);
    await empresaDB.save();

    res.status(201).json({
        msg: 'Se agrego la empresa correctamente',
        empresaDB
    })

}

const PutEmpresa = async (req = request, res = response) => {

    const { id } = req.params;
    const { id_, sucursal, ...resto } = req.body;

    if (resto.password) {
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync(resto.password, salt);
    }

    const empresaEditar = await Empresa.findByIdAndUpdate(id, resto, { new: true });

    res.json({
        msg: 'Empresa Editada correctamente',
        empresaEditar
    });

}

const DeleteEmpresa = async (req = request, res = response) => {

    const { id } = req.params;
    const empresaEditar = await Empresa.findByIdAndDelete(id);

    res.json({
        msg: 'Se elimino la empresa correctamente',
        empresaEditar
    })

}

const getSucursales = async (req = request, res = response) => {

    const { id } = req.params
    const empresa = await Empresa.findById(id).populate({
        path: 'sucursal',
        select: 'nombre direccion municipio',
      });
    const sucursalEmpresa = empresa.sucursal


    res.json({
        sucursalEmpresa

    })
}

module.exports = {

    getEmpresa,
    PostEmpresa,
    PutEmpresa,
    DeleteEmpresa,
    getSucursales

}