const { Schema, model } = require("mongoose");

const TipoSchema = Schema({
    tipo: {
        type: String,
        required: [true, 'el nombre es obligatorio']
    }
})

module.exports = model('Tipo', TipoSchema);

