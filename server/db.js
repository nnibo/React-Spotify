import mongoose from "mogoose";

export default async function conectaNaDb(){
    mongoose.connect('mongodb+srv://admin:admin@cluster0.pm4dw.mongodb.net/spotify?retryWrites=true&w=majority&appName=Cluster0')

    return mongoose.connection;
}