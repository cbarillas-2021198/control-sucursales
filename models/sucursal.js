const { Schema, model } = require("mongoose")

const SucursalSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'el nombre es obligatorio']

    },
    municipio: {
        type: String,
        required: true
    },

    direccion: {
        type: String,
        required: [false, 'la direccion es obligatorio']
    },

    empresa: {
        type: Schema.Types.ObjectId,
        ref: 'Empresa',
        required: true
    },
  
})

module.exports = model('Sucursal', SucursalSchema)
