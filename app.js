import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import Connection from './database/db.js';
import Routes from './routes/todoRoute.js';
import path from 'path';

const app = express();


app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, './todo/build')))

app.use('/', Routes);

app.use("*", function(req,res){
    res.sendFile(path.join(__dirname, "./todo/build/index.html"))
});

const PORT = 8000;

Connection();

app.listen(PORT, () => console.log(`Your server is running successfully on PORT ${PORT}`));