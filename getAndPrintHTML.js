var https = require("https");

function getAndPrintHTML() {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function(response){
    response.setEncoding('utf8');

  response.on("data", function(data){
    var x = data;
    console.log(x);
  });



  });




}






getAndPrintHTML ();
