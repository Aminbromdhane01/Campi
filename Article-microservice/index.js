const express = require('express')
const bodyParser = require ( 'body-parser')
const cors = require('cors')

const articleApi = require('./router/article')

require('./config/connect')


require('dotenv').config();



const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())









app.use('/article' , articleApi) ;


app.use('/getimage' , express.static('./uploads'));

app.listen(5000, () =>
{
    console.log(`App workin on Port 5000`);
})