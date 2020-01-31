const express = require('express'),
      app = express();


//Require Routes
const indexRoutes = require('./routes/index');


//Setup

app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));
app.use(indexRoutes);



//Start Server
app.listen(process.env.PORT || 3000, ()=>{
    console.log('Server is running');
});