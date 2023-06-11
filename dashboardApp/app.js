import express from 'express';
const MongoClient = require("mongodb").MongoClient;
var mongoURL = "mongodb://127.0.0.1:27017/";
var db;
const bodyParser = require('body-parser');

//connect with DB

MongoClient.connect(mongoURL,{useNewUrlParser:true})
.then(client =>{
    // connect or create DB-instance
    db = client.db('newDashboardSession6');
    console.log('database connected')
})

const app = express ();
const port = 3000;
const collectionName = 'userList';

app.use(express.static(__dirname+'/public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(){
    console.log(`server is running at - `,port);
})

app.get('/',function(req,res){
    db.collection(collectionName)
    .find().toArray()
    .then((data)=>{
        res.render('index',{data:data})
    }
    ) 
})

// create with MONGODB
app.get('/addUser',(req,res)=>{
    res.render('admin');
})

app.post('/addData',(req,res)=>{
    db.collection(collectionName)
    .insertOne(req.body)
    .then((result)=>{
        res.redirect('/');
    })
    .catch(err =>{
        res.send(500);
    })
})

app.post('/find_by_name',(req,res)=>{
    let name = req.body.name;
    db.collection(collectionName)
    .find({name:name})
    .toArray()
    .then((result)=>{
        console.log(result);
        res.send(result);
    })
})

app.put('/update_user',(req,res)=>{
    console.log(req.body);
    db.collection(collectionName)
    .findOneAndUpdate({"name":req.body.oldName},{
        $set:{
            name:req.body.name,
            phone:req.body.phone,
            email:req.body.email
        }
    },
    )
    .then(result =>{
        res.send(result);
    })
})

app.delete('/delete_user',(req,res)=>{
    db.collection(collectionName)
    .findOneAndDelete({"name":req.body.name})
    .then(()=>{
        res.send({message:'succesfully deleted'});
    })
})



// apis
