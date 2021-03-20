const chai = require("chai");
const expect = require("chai").expect;
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
require('dotenv').config()

const api = chai.request(process.env.BASE_URL);

module.exports = function (){
	describe("Test Login", function () {
		it("Success login", function (done) {
			api.post("/api/login")
	      	.set("Content-type", "application/json")
	      	.send({
		    	"email": "eve.holt@reqres.in",
    			"password": "cityslicka"
		    })
		    .end(function (err, res) {
		        expect(res.status).to.equals(200);
		        done();
		    });
		});
	})
}