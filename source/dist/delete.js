const ccc = require("clear_concise_creative")
const arrz = require("array_helperz")

function delById(table, id) {
    let data = ccc.readJSON(FILEPATH)
    let getArray = data[table]

    function deleteById(object) {
        if (object.id !== id) {
            return true;
        }
    }
    let filtered = arrz.removeByFunction(getArray, deleteById)
    data[table] = filtered;
    ccc.writeJSON(FILEPATH, data)
}


function testDel() {
    let deletethis = delById("hourglass", 1)
}



module.exports = { delById, testDel };