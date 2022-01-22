let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../app");
var models = require("../models");
//Assertion Style
chai.should();

chai.use(chaiHttp);

after(function (done) {
    process.exit(0);
});

describe('Tasks API', () => {

    /**
     * Test the GET route
     */
    describe("GET /", () => {
        it("healthcheck", (done) => {
            chai.request(server)
                .get("/")
                .end((err, response) => {
                    response.should.have.status(200);
                done();
                });
        });        
    });

    describe("GET /devices", () => {
        it("get all devices", (done) => {
            chai.request(server)
                .get("/devices")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                done();
                });
        });        
    });


    describe("POST /devices", () => {
        it("POST 1", (done) => {
            chai.request(server)
                .post("/devices")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.have.property('id');
                done();
                });
        });        
    });

    describe("GET /devices/1", () => {
        it("GET 1", (done) => {
            chai.request(server)
                .get("/devices/1")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.have.property('id');
                    response.body.should.have.property('name');
                    response.body.should.have.property('owner');
                    response.body.should.have.property('productType');    
                done();
                });
        });        
    });

    describe("DELETE /devices/1", () => {
        it("DELETE 1", (done) => {
            chai.request(server)
                .delete("/devices/1")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.text.should.be.eq("1");
                done();
                });
        });        
    });

    describe("DELETE /devices/1", () => {
        it("DELETE 1 AGAIN", (done) => {
            chai.request(server)
                .delete("/devices/1")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.text.should.be.eq("0");
                done();
                });
        });        
    });


 });

