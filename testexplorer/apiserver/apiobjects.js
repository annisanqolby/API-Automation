const request = require("supertest") // import supertest
const { expect } = require("chai") // import chai
const baseurl = require("../globalvariable/baseurl")
const id = response.body.id
return id;

const url = `${baseurl}`;

async function getMethod() {
    const payloadPath = path.join(__dirname,"..","payload","payloadGET.json");
    const payload = require (payloadPath);

    const response = await request(url).get(`/objects/${id}`).send(payload)

    //assertation / verifikasi
    expect(response.status).to.equal(200);

    expect(response.body).to.deep.include(payload);

    expect(response.body.createdAt).to.not.be.null;
        
        const id = response.body.id;
        console.log(response.body);
        return id;
    
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

async function deleteMethod(id) {
    const response = await request(url).delete(`/objects/${id}`)
    //assertation / verifikasi
    expect(response.body.message).to.equal(`object with id = ${id} has been deleted.`
    );
    expect(response.body.message).to.equal(`object with id = ${id} was not found.`
    );
    console.log(response.body.mesagge);

}


module.exports = { getMethod, postMethod, deleteMethod };




