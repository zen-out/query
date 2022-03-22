const query = require("./index.js")

const filename = "./dist/db.json"

async function test() {

    let getAll = await query.getAll(filename, "hourglass")
        // console.log("🚀 ~ file: playground.js ~ line 2 ~ getAll", getAll)

    // let getCount = await query.getObjectCount(filename, "hourglass", { difficulty: 2 })
    // console.log("🚀 ~ file: playground.js ~ line 8 ~ getCount", getCount)

    let getById = await query.getOneById(filename, "hourglass", 2)
        // console.log("🚀 ~ file: playground.js ~ line 11 ~ getById", getById)
        // console.log("done")

    // let getByObj = await query.getByObject(filename, "hourglass", { difficulty: 2 })
    // console.log(getByObj)

    // let post = await query.post(filename, "problem", { problem: "Wahtsup", difficulty: 2 })
    // console.log("🚀 ~ file: playground.js ~ line 18 ~ post", post)
    let update = await query.update(filename, "problem", 1, { whatshouldbe: "okay" })
    console.log("done")
    let updateOne = await query.updateOne(filename, "problem", 1, "whatactuallyis", "fuck")
    console.log("🚀 ~ file: playground.js ~ line 25 ~ test ~ updateOne", updateOne)
}
test()