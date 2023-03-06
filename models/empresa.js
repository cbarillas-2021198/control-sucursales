const { Schema, model } = require("mongoose")

const EmpresaSchema = Schema({
    
    nombre: {
        type: String,
        required: [true, 'el nombre es obligatorio']
    },
    correo: {
        type: String,
        required: [true, 'el corre es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'el contraseña es obligatorio']
        
    },
    tipo: {
        type: String,
        required: true,
    },
  
    sucursal :[{
        type: Schema.Types.ObjectId,
        ref: 'Sucursal',
        required: true
    }],

})

module.exports = model('Empresa', EmpresaSchema);
