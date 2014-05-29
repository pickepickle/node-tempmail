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

### As a module:

```javascript
var Tempmail = require('tempmail');

// using 10minutemail as our provider
var provider = new Tempmail('10minutemail.net');

// Create a new temporary email
provider.newEmail().then(function(tempEmail) {
	console.log(tempEmail);
	var emailAddress = tempEmail.getAddress();

	// Retrieve emails from an email address
	provider.getEmail(emailAddress).then(function(inbox) {
		console.log(inbox); // an array of inbox message objects
	});
}).done();
```

## Providers

Providers are services that provide temporary emails.

 - [10minutemail.net](http://10minutemail.net/)
 - More if requested
