import mongoose from 'mongoose';

export class Database{
    constructor(){
        this.conectar();
    }

    conectar(){
        mongoose
        .connect(`mongodb+srv://admin:1234@bts.8famhto.mongodb.net/admindb`) //Asincrona
        .then(result=>console.log('Se conecto a mongodb'))
        .catch(error=>console.log(error));
    }
}