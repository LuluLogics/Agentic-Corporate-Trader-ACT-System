import mongoose from 'mongoose';
import debug from 'debug';
import cors from 'cors';
import models from './models/index.js';
import routes from './routes/index.js'
import express from 'express';
import { MongoClient, ServerApiVersion } from 'mongodb';
import * as dotenv from 'dotenv' 
dotenv.config()

//Initialise our app by creating express object
const app = express();
// To parse JSON we use express.json
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// Initialise the routes
routes(app);
// Establish the connection with DB
function database() {
    const connectionParams = {
        useNewUrlParser : true,
        useUnifiedTopology : true
    }
    try{
        mongoose.connect(process.env.MONGO_URI, connectionParams);
        console.log('Database connected successfully');
    } catch(error){
        console.log(error);
        console.log("Database connection failed");
    }
}

database();

// const uri = "mongodb+srv://JAMS:NEUWebDesignJAMS@stock.7r94bfe.mongodb.net/?retryWrites=true&w=majority";
// mongodb+srv://JAMS:<password>@stock.7r94bfe.mongodb.net/?retryWrites=true&w=majority
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// // // client.connect(err => {
// // //     const collection = client.db("cluster0").collection("users");
// // //     // perform actions on the collection object
// // //     // client.close();
// // //   });
// client.connect();
// await listDatabases(client);

// mongoose.connect('mongodb+srv://JAMS:WebDesignJAMS@cluster0.cmrmfun.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// mongoose.connect('mongodb://localhost:27017/projecttestdb');
export default app;