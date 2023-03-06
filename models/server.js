const express = require('express')
const cors = require('cors');
const { dbConection } = require('../database/config');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.paths ={
           sucursal : '/api/sucursal',
            empresa :'/api/empresa',
            auth : '/api/auth',
        
        }

     
        this.conectarDB();
        this.middlewares();
        this.routes();

    }

    async conectarDB(){
        await dbConection();
    }

    middlewares(){
        //cors
        this.app.use(cors());


        //lECTURA Y PARSEO DEL BODY
        this.app.use( express.json());
        
        //Directorio publico del Proyecto
        this.app.use( express.static('public'));
    
    
    }
    
    routes(){
        this.app.use(this.paths.auth , require('../routes/auth'))
        this.app.use(this.paths.sucursal , require('../routes/sucursal'))
        this.app.use(this.paths.empresa , require('../routes/empresa'))
       
      
    }


    listen() {
        this.app.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}`)
        })
    }
}

module.exports = Server;