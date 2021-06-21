const express = require('express');
const path = require('path');
const port = '8000';

const db = require('./config/mongoose');
const Contact = require('./models/contact');

const app = express();

app.set('view engine','ejs'); 
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static("assets"));

var contactList=[
    {
        Name:"Himanshu",
        Number:"8967345781"
    },
    {
        Name:"Akash",
        Number:"6283988746"
    },
    {
        Name:"Kartik",
        Number:"1234567890"
    }
];




app.get('/', function(req,res){
    
    Contact.find({},function(err,contacts){
        if(err){
            console.log("error while fetching data from db");
            return;
        }
        return res.render('home',{ 
            title : "views" ,
            contact_list : contacts
    });

});
});


app.post('/create-contact', function(req,res){
    // contactList.push({
    //     Name :req.body.Name,
    //     Number:req.body.Number
    // });
    Contact.create({
        Name :req.body.Name,
        Number:req.body.Number
    }, function(err, NewContact){
        if(err) {console.log("Error while creating a new contact")
        return;}
        console.log("bhaiya maa hi chod diye app to");
        return res.redirect('back');
    });

});

app.listen(port, function(err){
    if(err){ console.log("ERROR while running the server", err) };
    console.log("Server started perfectly on port", port);
});