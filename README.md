# tempmail

Easily create temporary emails and fetch their inbox.

## Usage & Installation

```
npm install tempmail
```

to use the CLI interface, install globally with `-g`


### From the command line

```bash
./tempmail <provider> [emailAddress]
```

- Specifying only a provider will create a new temporary email address.
- Specifying a provider + email will return the inbox (in JSON format).

### As a Node.js module

It follows the same concept:

```javascript
var tempmail = require('tempmail');

var provider = '10minutemail.net'; // or '10mm.net'

// Create a new temporary email
tempmail.new(provider).then(function(tempEmail) {
	// Retrieve emails from an email address
	return tempmail.get(provider, emailAddress);
}).done(function (inbox) {
	console.log(inbox)
});
```

## Providers

Providers are services that provide temporary emails.

 - [10minutemail.net](http://10minutemail.net/)
 - That's it for now.
