const _ = require("lodash")
const ccc = require("clear_concise_creative")
const make_legit = require("make_legit")
const { formatToType, mergeWith } = require("./formatData")
const { getOneById } = require("./get")

function replace(array, id, updatedObject) {
    for (let i = 0; i < array.length; i++) {
        if (array[i]["id"] === id) {
            array[i] = updatedObject;
        }
    }
    return array;
}


/**
 * @example
 * directUpdate(filename, table, id, object) // does not add edit to the object - clean update. 
 * @author github.com/zen-out
 */
async function directUpdate(filename, table, id, object) {
    let readFromFile = await ccc.readJSON(filename)
    let get_array = readFromFile[table]
    let original = _.filter(get_array, { id: id })
    let original_obj = make_legit.getObject(original)
    let getFormatted = formatToType(table, object)
    let update_with_keys = mergeWith(table, getFormatted)
    update_with_keys = make_legit.format(update_with_keys, "object")
    let extended = _.extend(original_obj, update_with_keys)
    extended["id"] = id;
    get_array = replace(get_array, id, extended)
    readFromFile[table] = get_array
    await ccc.writeJSON(filename, readFromFile)
    let final_object = make_legit.getObject(extended);
    return final_object;
}

/**
 * @example
 * await update(filename, table, id, object)
 * @author github.com/zen-out
 */
async function update(filename, table, id, object) {
    object["edit"] = new Date()
    let updateTable = await directUpdate(filename, table, id, object)
    let getObject = await getOneById(filename, table, id)
    if (table === "problem" || table === "tag_snippet" || table === "device" || table === "cheatsheet" || table === "task") {
        let hourglass_id = getObject["hourglass_id"]
        let updateHourglass = await directUpdate(filename, "hourglass", hourglass_id, object)
        let getHourglass = await getOneById(filename, "hourglass", hourglass_id)
        let merged = _.merge(getHourglass, getObject)
        merged = make_legit.getObject(merged)
        return merged
    } else {
        return getObject;
    }
}
// testUpdate()
async function updateOne(filename, table, id, key, value) {
    let newObj = {}
    newObj[key] = value;
    let getUpdate = await update(filename, table, id, newObj)
    let getObject = await getOneById(filename, table, id)
    return getObject;
}

function testUpdate() {
    let problem = updateOne("./db.json", "problem", 1, "difficulty", 5)
}
// testUpdate()

module.exports = { replace, directUpdate, update, updateOne, testUpdate };