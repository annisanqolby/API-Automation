const { getMethod, postMethod, delMethod} = require("../apiserver/apiobjects")

//test suites
describe("testing API Restful", function () {
    //test case 1
    it("test GET from function", async function () {
        await getMethod();
    });
    it("test POST from function", async function () {
         await postMethod();
    })
    it("test DEL from function", async function () {
        await delMethod();
    })
}) 