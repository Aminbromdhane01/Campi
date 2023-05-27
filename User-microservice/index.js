const express = require('express')
const bodyParser = require ( 'body-parser')
const cors = require('cors')

const userApi = require('./router/user')
const cassandra = require('cassandra-driver');

require('./config/connect')


require('dotenv').config();



const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())









app.use('/user' , userApi) ;


app.use('/getimage' , express.static('./uploads'));

app.listen(3000, () =>
{
    console.log(`App working on Port 3000 `);
})