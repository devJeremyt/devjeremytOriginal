const express = require('express'),
      app = express(),
      ejsLint = require('ejs-lint');
      ejsLint("./views/index.js");


//Require Routes
const indexRoutes = require('./routes/index');


//Setup

app.use(express.static(__dirname + "/public"));
app.use(indexRoutes);
app.set('view engine', 'ejs');



//Start Server
app.listen(process.env.PORT || 3000, ()=>{
    console.log('Server is running');
});