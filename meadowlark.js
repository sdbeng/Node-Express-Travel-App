var express = require('express');

var app = express();

//set up handlebars view engine
var handlebars = require('express3-handlebars')
.create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');


app.set('port', process.env.PORT || 3003);

//add static middleware
app.use(express.static(__dirname + '/public'));

//add new routes to our new views
app.get('/', function(req, res){
	res.render('home');
	// res.type('text/plain');
	// res.send('Meadowlark Travel Tourism');
});

app.get('/about', function(req, res){
	var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
	res.render('about', {fortune: randomFortune});
	//res.type('text/plain');
	//res.send('About Meadowlark Travel Tourism');
});

// 404 catch-all handler (middleware)
app.use(function(req, res){
	//res.type('text/plain');
	res.status(404);
	//res.send('404 - Not Found');
	res.render('404');
});

//500 error handler (middleware)
app.use(function(err, req, res, next){
	console.error(err.stack);
	//res.type('text/plain');
	res.status(500);
	//res.send('500 - Server Error');
	res.render('500');
});

app.listen(app.get('port'), function(){
	console.log('Express started on http//localhost:' +
		app.get('port') + '; press Ctrl-C to terminate.');
});

//array to show dynamic content views
var fortunes = [
	"Pray will help you more than anything",
	"God is good",
	"Keep it simple, teach your kids to love",
	"Work hard, give out your hert but not desperate for those who don't believe in you"
];




