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

//Item
app.get("/item",function(req,res)
{
    res.render('item');
});

//Comment
app.get("/comment",function(req,res)
{
    res.render('comment');
});

//My recipe pages route
app.get("/myrecipe",function(req,res)
{
    res.render('myrecipe');
});

//Recommend
app.get("/recommend",function(req,res)
{
    res.render('recommend');
});

//Post recipe page's route
app.get("/postrecipe",function(req,res)
{
    res.render('postrecipe');
});

//view user's profile
app.get("/myprofile",function(req,res)
{
    res.render('myprofile');
});

// Page for setting
app.get("/setting",function(req,res)
{
    res.render('setting');
});