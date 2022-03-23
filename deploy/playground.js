const query = require("./index.js")
query.list()
const filename = "./dist/db.json"

async function test() {

    let getAll = await query.getAll(filename, "hourglass")
    let getCount = await query.getObjectCount(filename, "hourglass", { difficulty: 2 })
    let getById = await query.getOneById(filename, "hourglass", 2)
    let getByObj = await query.getByObject(filename, "hourglass", { difficulty: 2 })
    let post = await query.post(filename, "problem", { problem: "Wahtsup", difficulty: 2 })
    console.log("🚀 ~ file: playground.js ~ line 18 ~ post", post)
    let update = await query.update(filename, "problem", 1, { whatshouldbe: "okay" })
    let updateOne = await query.updateOne(filename, "problem", 1, "whatactuallyis", "fuck")
}
// test()