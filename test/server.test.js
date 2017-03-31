
var supertest = require("supertest");
var should = require("should");
var app = require('../server.js');
// var expect = require('expect');

var server = supertest.agent("http://localhost:3000");

describe('Tasks CRUD integration testing', function () {

	describe('Get the message', function () {
        it('Should get message successfully ', function (done) {
			server
				.get("/")
				.end(function (err, results) {
				 // console.log(results);
					results.status.should.equal(200);
					done();
				});
		});
 	});
	});
