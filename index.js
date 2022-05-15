const express = require('express');
const expressLayout = require('express-ejs-layouts');
const port =process.env.PORT || 8000;
const app = express();
const db= require('./config/mongoose');
app.use(express.urlencoded({extended:true}));
app.set('view engine' , 'ejs');
app.set('views' , './views');
app.use(expressLayout);
app.use(express.static('./assets'))
app.use('/' , require('./route/index'));
app.listen(port , function(error){
    if(error){
        console.log("Error in running Server");
    }
    console.log("Server is running");
});