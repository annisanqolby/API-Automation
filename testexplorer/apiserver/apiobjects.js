const request = require("supertest") // import supertest
const { expect } = require("chai") // import chai
const baseurl = require("../globalvariable/baseurl")

const url = `${baseurl}`;

async function getMethod() {
    const response = await request(url).get("/objects")
    //assertation / verifikasi
    expect(response.status).to.equal(200);
    console.log(response);
}


module.exports = { getMethod };




