const express = require ("express");
const MongoClient = require("mongodb").MongoClient;
var mongoURL = "mongodb://127.0.0.1:27017/";
var db;
const bodyParser = require('body-parser');

//connect with DB

MongoClient.connect(mongoURL,{useNewUrlParser:true})
.then(client =>{
    // connect or create DB-instance
    db = client.db('dashboardEduApp');
    console.log('database connected')
})

const app = express ();
const port = 3000;
const collectionName = 'userList';
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(){
    console.log(`server is running at - `,port);
})

app.get('/',function(req,res){
    res.send(`Server is up and running`)
})

// create with MONGODB



