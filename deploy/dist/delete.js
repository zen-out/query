const ccc = require("clear_concise_creative")
const arrz = require("array_helperz")

async function delById(filename, table, id) {
    let data = await ccc.readJSON(filename)
    let getArray = data[table]

    function deleteById(object) {
        if (object.id !== id) {
            return true;
        }
    }
    let filtered = arrz.removeByFunction(getArray, deleteById)
    data[table] = filtered;
    await ccc.writeJSON(filename, data)
    return true;
}

async function delByKeyValue(filename, table, key, value) {
    let data = await ccc.readJSON(filename)
    let getArray = data[table]

    function deleteById(object) {
        if (object[key] !== value) {
            return true;
        }
    }
    let filtered = arrz.removeByFunction(getArray, deleteById)
    data[table] = filtered;
    await ccc.writeJSON(filename, data)
    return true;
}


async function testDel() {
    // let deletethis = delById("hourglass", 1)
    let test = await delByKeyValue("./db.json", "hourglass", "id", 2)

}
// testDel()



module.exports = { delById, testDel, delByKeyValue };