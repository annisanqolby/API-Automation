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
async function postMethod() {
    const response = await request(url).post("/objects").send({
        "name": "Apple MacBook Pro 16",
        "data": {
           "year": 2019,
           "price": 1849.99,
           "CPU model": "Intel Core i9",
           "Hard disk size": "1 TB"
        },
     });
    //assertation / verifikasi
    expect(response.status).to.equal(200);
    console.log(response.body);
}

async function delMethod() {
    const response = await request(url).del("/objects/6")
    //assertation / verifikasi
    expect(response.status).to.equal(405);
    console.log(response);
}


module.exports = { getMethod, postMethod, delMethod };




