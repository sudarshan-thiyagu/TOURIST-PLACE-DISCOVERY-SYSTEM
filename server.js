const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors =require('cors');
const userApi = require('./Server/routes/userApi');
const favorateApi = require('./Server/routes/favorateApi');
const registerApi=require('./server/routes/registerApi');
connectionString = "mongodb://localhost:27017/google";
const PORT = 5000;
mongoose.connect(connectionString,(err)=>{
if(err)
    console.log(err);
else
    console.log("Connection Has Successfull");
});

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(logger('dev'));

app.use('/api/user',userApi);
app.use('/api/favorate',favorateApi);
app.use('/api/register',registerApi);

app.listen(PORT,()=>{
    console.log(`Server Started Successfully on Port ${PORT}`);
})
