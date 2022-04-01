const express = require('express');
const cors = require('cors');

const mysqlc = require('./config/dbconfig')


var app = express();

//middleware prevention

app.use(cors());
app.options('*',cors())


// sending json data
app.use(express.json());

//pair req of content type
app.use(express.urlencoded({extended: true}))

//connection to the db

mysqlc.connect((err) => {
    if(!err)
    {
        console.log('Connected!');
    }
    else
    {
        console.log('Db Connection Failed');
    }
})

//routes

const eventroutes = require('./routes/api')

app.use('/events_ief',eventroutes);



const port = 5000;
app.listen(port,()=>{
    console.log("Live on 3000")
})