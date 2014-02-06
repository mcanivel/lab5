// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	console.log(data);
	res.render('index', data);
};


function projectClick(e) {
	e.preventDefault();

	var text = $(this).text();
	var newText = anagrammedName(name);

	$(this).text(newText);
}