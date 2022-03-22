const test_waters = require("./index.js")

function justPrint(input) {
    return "waters" + input;
}
let getAll = test_waters.testAllTypes("just print", justPrint)
console.log("🚀 ~ file: playground.js ~ line 7 ~ getAll", getAll)

let inputs = [
    { id: 1, name: "lesley" }, { id: 2, name: "ryan" }
]

function addToDatabase(object) {
    object["added"] = "done"
    return object;
}

function resolveAfter2Seconds(object) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(object);
        }, 2000);
    });
}


async function asyncTest(object) {
    let testThis = await resolveAfter2Seconds(object);
    return testThis;
}

let result = test_waters.testFunction("add to database", addToDatabase, inputs)
console.log("🚀 ~ file: playground.js ~ line 34 ~ result", result)

// console.log("🚀 ~ file: playground.js ~ line 19 ~ result", result)

async function getTest() {
    let results = await test_waters.testAsyncFunction("async", asyncTest, inputs)
    console.log(results)
}
getTest()