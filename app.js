

  // set up ========================
    var express  = require('express');
    var app = express();                              
    var bodyParser = require('body-parser');   
    
        
    const Request = require('request');

    app.use(bodyParser.json());                                     

   
    var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
    });

  
app.get('/', function(req, res) { //route all other  requests here
         
          res.status(200);
          res.send("Hello World");
                               
});

  app.get('/math/add', function(req, res) { //route all other  requests here

      if("numbers" in req.query){

          if(req.query.numbers instanceof Array){

              var total = 0;

              for(var i = 0; i < req.query.numbers.length;i++){

                  if(isNaN(req.query.numbers[i])){

                      res.status(500);
                      res.send("Non numerical value found");
                      return;

                  }

                  total += parseInt(req.query.numbers[i]);

              }

              res.status(200);
              res.send({answer:total});


          }else{
              res.status(422);
              res.send("Invalid parameters");
          }

      }else{
          res.status(422);
          res.send("Missing parameters");
      }

  });


module.exports = app;

     
     
