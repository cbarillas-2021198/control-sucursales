const mongoose = require('mongoose');

const dbConection = async () =>{
    try {
        mongoose.set("strictQuery", false)
        await mongoose.connect(process.env.MONGODB_CNN)
        console.log("base de datos conectada")
    } catch (error) {
        console.log(error)
        throw new Error("no se pudo conectar a la base de datos")
    }
}
module.exports ={
    dbConection
};