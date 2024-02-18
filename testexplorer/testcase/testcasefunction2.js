const { getMethod } = require("../apiserver/apiobjects")

//test suites
describe("testing API Restful", function () {
    //test case 1
    it("test GET from function", async function () {
        await getMethod();
    });
}) 