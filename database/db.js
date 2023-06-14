import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {

    const MONGODB_URL = `mongodb://${USERNAME}:${PASSWORD}@ac-fuywcwl-shard-00-00.jswv1z2.mongodb.net:27017,ac-fuywcwl-shard-00-01.jswv1z2.mongodb.net:27017,ac-fuywcwl-shard-00-02.jswv1z2.mongodb.net:27017/?ssl=true&replicaSet=atlas-aa7h50-shard-0&authSource=admin&retryWrites=true&w=majority`

    mongoose.connect(MONGODB_URL, { useNewUrlParser: true });

    mongoose.connection.on('connected', () => {
        console.log('Database connected Successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', () => {
        console.log('Error while connecting with the database ');
    })
}

export default Connection;