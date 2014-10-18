//array to show dynamic content views
var fortuneCookies = [
	"Pray will help you more than anything",
	"God is good",
	"Keep it simple, teach your kids to love",
	"Work hard, give out your hert but not desperate for those who don't believe in you"
];

exports.getFortune = function(){
	var idx = Math.floor(Math.random() * fortuneCookies.length);
	return fortuneCookies[idx];
};