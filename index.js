var express = require("express");
var app = express();
require("dotenv").config();
let port=process.env.PORT||3000;


app.listen(port);

app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('./public'));
//app.use(express.static('./views'))

//Trang Chu
app.get("/",function(req,res)
{
    res.render('greeting');
});

//Sign up
app.get("/signup",function(req,res)
{
    res.render('signup');
});


//Sign in
app.get("/signin",function(req,res)
{
    res.render('signin');
});

//Home
app.get("/home",function(req,res)
{
    res.render('home');
});