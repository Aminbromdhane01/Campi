const express = require('express')
const bodyParser = require ( 'body-parser')
const cors = require('cors')

const CommandeApi = require('./router/commande')

require('./config/connect')


require('dotenv').config();



const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())









app.use('/commande' , CommandeApi) ;


app.use('/getimage' , express.static('./uploads'));

app.listen(4000, () =>
{
    console.log(`App working on Port 4000`);
})