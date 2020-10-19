var exp = require('express');

var app = exp();

app.listen(8100, function() {
     console.log("server started on port 8100");
});
app.get('/greet',function(req,res){
      res.send("<h1>Welcome to web App</h1>");	
});
app.get('/login/:userid/:pwd',function(req,res){
var user=req.params.userid;
var pwd=req.params.pwd;
if(user=='object' && pwd=='knowit'){
      res.send("<h1>login successful</h1>");
	}
else
{
      res.send("<h1>login fail</h1>");
	}
});


app.all('/*',function(req,res){
      res.send("invalid URL");	
});



