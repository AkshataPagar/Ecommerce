var exp = require('express');
var app = exp();

app.use(exp.static(__dirname+'/'));
app.get('/login.html',function(req,res){
     res.sendFile(__dirname+"/login.html");
});


app.all('/*',function(req,res){
      res.send("invalid URL");
});	
app.listen(8100, function() {
     console.log("server started on port 8100");

});


