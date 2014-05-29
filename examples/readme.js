"use strict";

var tempmail = require('../tempmail');

var provider = '10minutemail.net'; // or '10mm.net'

// Create a new temporary email
tempmail.new(provider).then(function(tempEmail) {
	// Retrieve emails from an email address
	return tempmail.get(provider, tempEmail);
}).done(function (inbox) {
	console.log(inbox);
});
