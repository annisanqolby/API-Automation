// const request = require("supertest") // import supertest
// const { expect } = require("chai") // import chai
// const baseurl = require("../globalvariable/baseurl")

// // const url = supertest("https://restful-api.dev/") // global variable url
// const url = `${baseurl}`; // define global variable

// //test suites
// describe("Testing API Restful",function () {
//     // test case 1
//     it("Test GET", async function () {
//         const response = await request(url).get("/objects");
//         //assertation / verifikasi
//         expect(response.status).to.equal(200);
//         console.log(response.body)
    
//     })
//     // test case 2
//     it("Test POST", async function () {
//         const response = await request(url).post("/objects").send ({
//             "name": "Apple MacBook Pro 16",
//             "data": {
//                "year": 2019,
//                "price": 1849.99,
//                "CPU model": "Intel Core i9",
//                "Hard disk size": "1 TB"
//             }
//          });
//         //assertation / verifikasi
//         expect(response.status).to.equal(200);
//         console.log(response.body)
//     } )
//     // test case 3
//     it("Test DEL", async function () {
//         const response = await request(url).del("/objects/6");
//         //assertation / verifikasi
//         expect(response.status).to.equal(200);
//         console.log(response.body)
//     } )
// })