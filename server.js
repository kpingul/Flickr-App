var express 	= require('express'),
	app 		= express(),
	port 		= 8080;




app.use(express.static(__dirname + '/'));

app.listen(port, function(){
	console.log('Server running on port ' + port);
});