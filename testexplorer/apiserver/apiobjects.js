const request = require("supertest") // import supertest
const { expect } = require("chai") // import chai
const baseurl = require("../globalvariable/baseurl")

const url = `${baseurl}`;

async function getMethod() {
    const response = await request(url).get(`/objects`);

    //assertation / verifikasi
    expect(response.status).to.equal(200);

    console.log(response);
}

async function postMethod() {
    const response = await request(url).post("/objects").send({
        "name": "Apple MacBook Pro 16",
        "data": {
           "year": "2019",
           "price": "1849.99",
           "CPU model": "Intel Core i9",
           "Hard disk size": "1 TB"
        },
     }); //request body
    //assertation / verifikasi
    expect(response.status).to.equal(200);
    expect(response.body.name).to.equal( "Apple MacBook Pro 16");
    expect(response.body.data.year).to.equal( "2019");
    expect(response.body.data.price).to.equal( "1849.99");
    expect(response.body.data.CPU).to.equal("Intel Core i9");
    expect(response.body.data.Hard).to.equal("1 TB");
    
    expect(response.body.createdAt).to.not.be.null;
    //simpan id after post
    const id = response.body.id;
    console.log("id after POST:", id);
    return id; //return the id
    console.log(response.body);

}

async function deleteMethod(id) {
    const response = await request(url).delete(`/objects/${id}`)
    //assertation / verifikasi
    expect(response.body.message).to.equal(`object with id = ${id} has been deleted.`
    );
    expect(response.body.error).to.equal(`object with id = ${id} was not found.`
    );
    console.log(response.body.message);
    console.log(response.body);

}


module.exports = { getMethod, postMethod, deleteMethod };




