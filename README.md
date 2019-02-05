# TDD-Express-Routes
Basic tutorial on unit testing express routes

## Create a basic express App
This tutorial assumes you have a basic knowledge of Javascript, Node and Express. 

Run the following commands 
```bash
mkdir "TDD_SAMPLE_APP"
cd TDD_SAMPLE_APP
```
Create two files under the TDD_SAMPLE_APP app folder you just created:  
*package.json*
*app.js*

  add the following code to *app.js*
  
  ```js
  

  // set up ========================
    var express  = require('express');
    var app = express();                              
    var morgan = require('morgan');             
    var bodyParser = require('body-parser');   
    
        
    const Request = require('request');

    app.use(morgan('dev'));                                         
    app.use(bodyParser.json());                                     

   
    var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
    });

  
app.get('/', function(req, res) { //route all other  requests here
         
          res.status(200);
          res.send("Hello World");
                               
});


module.exports = app;

  ```


