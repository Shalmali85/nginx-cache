var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

var app = express();
const notify= require('./service/notify')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/group-notification',async (req,res)=>{
    try {
        const notification = new notify();
        const data = await notification.getNotificationData();
        return res.json(data);
    }catch(err){console.log(err);
    return res.status(err.statusCode).send(err.message)}
})

app.get('/user-notification/:name',async (req,res)=>{
    try {
        const notification = new notify();
        const data = await notification.getNotificationDataForUser(req.params.name);
        return res.json(data);
    }catch(err){console.log(err);
        return res.status(err.statusCode).send(err.message)}
})




module.exports = app;
