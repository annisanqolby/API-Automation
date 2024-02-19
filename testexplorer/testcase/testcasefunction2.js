const { getMethod, postMethod, deleteMethod} = require("../apiserver/apiobjects")

//test suites
describe("testing API Restful", function () {
    let id;
    //test case 1
    it("test GET from function", async function () {
        await getMethod();
    });
    it("test POST from function", async function () {
         await postMethod(id);
    })
    it("test DELETE from function", async function () {
        await deleteMethod(id);
    })
}) 