const _ = require("lodash")
const axios = require("axios")
const ccc = require("clear_concise_creative")
const fs = require("fs-extra")
const make_legit = require("make_legit")
const { userMerge, hourglassMerge, problemMerge, taskMerge, tag_snippetMerge, cheatsheetMerge, followMerge, deviceMerge, paymentMerge, userType, hourglassType, problemType, taskType, tag_snippetType, cheatsheetType, followType, deviceType, paymentType } = require("./data.js")
const { inputs } = require("./inputs.js")
const FILEPATH = "./db.json"
const arrz = require("array_helperz")
const { see } = require("code_clarity")

const { upset } = require("whats_wrong")

function formatToType(table, object) {
    let formatted;
    if (table === "problem") {
        formatted = make_legit.formatActualObject(object, problemType)

    } else if (table === "user") {
        formatted = make_legit.formatActualObject(object, userType)
        console.log("🚀 ~ file: query.js ~ line 18 ~ formatToType ~ formatted", formatted)
    } else if (table === "hourglass") {

        formatted = make_legit.formatActualObject(object, hourglassType)
    } else if (table === "task") {

        formatted = make_legit.formatActualObject(object, taskType)
    } else if (table === "tag_snippet") {

        formatted = make_legit.formatActualObject(object, tag_snippetType)
    } else if (table === "cheatsheet") {

        formatted = make_legit.formatActualObject(object, cheatsheetType)
    } else if (table === "follow") {

        formatted = make_legit.formatActualObject(object, followType)
    } else if (table === "device") {

        formatted = make_legit.formatActualObject(object, deviceType)
    } else if (table === "payment") {

        formatted = make_legit.formatActualObject(object, paymentType)
    } else {
        return upset("not actual object", "formatToType", "should be actual object or table")
    }
    return formatted;
}

function mergeWith(table, object) {
    let formatted;
    if (table === "problem") {
        formatted = _.extend(problemMerge, object)
    } else if (table === "user") {
        formatted = _.extend(userMerge, object)
        console.log("🚀 ~ file: query.js ~ line 18 ~ formatToMerge ~ formatted", formatted)
    } else if (table === "hourglass") {

        formatted = _.extend(hourglassMerge, object)
    } else if (table === "task") {

        formatted = _.extend(taskMerge, object)
    } else if (table === "tag_snippet") {

        formatted = _.extend(tag_snippetMerge, object)
    } else if (table === "cheatsheet") {

        formatted = _.extend(cheatsheetMerge, object)
    } else if (table === "follow") {

        formatted = _.extend(followMerge, object)
    } else if (table === "device") {

        formatted = _.extend(deviceMerge, object)
    } else if (table === "payment") {

        formatted = _.extend(paymentMerge, object)
    } else {
        return upset("not actual object", "formatToMerge", "should be actual object or table")
    }
    return formatted;
}

function directPost(filename, table, object) {
    let readFromFile = ccc.readJSON(filename)
    let getKey = readFromFile[table]
    let array;
    let getFormatted;
    if (getKey.length === 0) {
        array = []
        new_id = 1;
        object["id"] = new_id
        getFormatted = formatToType(table, object)
        array.push(getFormatted)
        readFromFile[table] = array
    } else {
        let lastOne = getKey[getKey.length - 1]
        new_id = lastOne.id + 1;
        object["id"] = new_id
        getFormatted = formatToType(table, object)
        getKey.push(getFormatted)
        readFromFile[table] = getKey
    }
    ccc.writeJSON(filename, readFromFile)
    return getFormatted;
}

function post(filename, table, object) {
    if (table === "user") {
        let post_user = directPost(filename, "user", object)
        return post_user
    } else {
        let post_hourglass_first = directPost(filename, "hourglass", object)
        let hourglass_id = post_hourglass_first["id"]
        object["hourglass_id"] = hourglass_id
        let second_post = directPost(filename, table, object)
        let merged = _.merge(post_hourglass_first, second_post)
        return merged;
    }
}


function testPost() {
    let post_task = post("./db.json", "task", inputs["task"])
    let post_tag_snippet = post("./db.json", "tag_snippet", inputs["tag_snippet"])
}
// testPost()

function replace(array, id, updatedObject) {
    for (let i = 0; i < array.length; i++) {
        if (array[i]["id"] === id) {
            array[i] = updatedObject;
        }
    }
    return array;
}



function directUpdate(table, id, object) {
    let readFromFile = fs.readJsonSync(FILEPATH)
        // returns array 
    let get_array = readFromFile[table]
    let original = _.filter(get_array, { id: id })
    let original_obj = make_legit.getObject(original)
    let getFormatted = formatToType(table, object)
    let update_with_keys = mergeWith(table, getFormatted)
    update_with_keys = make_legit.format(update_with_keys, "object")
    let extended = _.extend(original_obj, update_with_keys)
    see.should("have all the updates")
    see.is(extended)
    extended["id"] = id;
    get_array = replace(get_array, id, extended)
    readFromFile[table] = get_array
    fs.outputJsonSync(FILEPATH, readFromFile)
    let final_object = make_legit.getObject(extended);
    let cleaned = make_legit.format(final_object, "object")
    return cleaned;
}

function update(table, id, object) {
    let updateTable = directUpdate(table, id, object)
    if (table === "user") {
        return updateTable
    } else if (table === "device") {
        return updateTable;
    } {
        setTimeout(() => {
            let hourglass_id = updateTable["hourglass_id"]
            let updateHourglass = directUpdate("hourglass", hourglass_id, object)
            let merged = _.extend(updateTable, updateHourglass)
            return merged;
        }, 1000)
    }
}
// testUpdate()
async function updateOne(table, id, key, value) {
    let newObj = {}
    newObj[key] = value;
    let getUpdate = update(table, id, newObj)
    return getUpdate;
}

async function tableColValCount(table, col, val) {

}
async function getObjectCount(table, object) {

}

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
// testDel()