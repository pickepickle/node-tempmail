"use strict";
/* global describe */
/* global it */

var tempmail = require('../tempmail')
, chai = require('chai')
, chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

describe('tempmail', function() {
	it('should create a new email', function() {
		return tempmail.new('tenminutemail.net').then(function(email) {
			expect(email).to.be.instanceof(String);
			expect(email.indexOf('@')).to.not.equal(-1);
		});
	});

	it('should not create a new email (invalid provider)', function() {
		expect(function() {
			tempmail.new('foobar');
		}).to.throw('Invalid provider specified');
	});

	it('should get the contents of the inbox', function() {
		return tempmail.new('tenminutemail.net').then(function(email) {
			return tempmail.get('tenminutemail.net', email);
		}).then(function(inbox) {
			return expect(inbox).to.be.instanceof(Array);
		});
	});

	it('should fail to get the inbox of an invalid email', function() {
		return expect(tempmail.get('tenminutemail.net', 'invalid@foo.bar'))
			.to.eventually.be.rejectedWith('Invalid Email');
	});
});
