const _ = require("lodash")
const axios = require("axios")
const fs = require("fs-extra")
const make_legit = require("make_legit")
const { userMerge, hourglassMerge, problemMerge, taskMerge, tag_snippetMerge, cheatsheetMerge, followMerge, deviceMerge, paymentMerge, userType, hourglassType, problemType, taskType, tag_snippetType, cheatsheetType, followType, deviceType, paymentType } = require("./data.js")
const { inputs } = require("./inputs.js")
const FILEPATH = "./db.json"
const arrz = require("array_helperz")
const { see } = require("code_clarity")
const { array } = require("handlebars-helpers/lib")
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
    see.should("format object to appropriate types")
    see.is(formatted)
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
    see.should("format object to appropriate Merges")
    see.is(formatted)
    return formatted;
}
async function post(table, object) {
    let readFromFile = fs.readJsonSync(FILEPATH)
    let getKey = readFromFile[table]
    let new_id;
    if (getKey.length < 1) {
        new_id = 1;
    } else {
        let lastOne = getKey[getKey.length - 1]
        new_id = lastOne.id + 1;
    }
    object["id"] = new_id
    let getFormatted = format(table, object)
    getKey = getKey.push(getFormatted)
    readFromFile[getKey] = getKey
    fs.outputJsonSync(FILEPATH, readFromFile)
    return getFormatted;
}
async function testPost() {
    let post_hourglass = await post("hourglass", inputs["one"])
    console.log("🚀 ~ file: query.js ~ line 51 ~ testEverything ~ post_hourglass", post_hourglass)
    let post_problem = await post("problem", inputs["nine"])
    console.log("🚀 ~ file: query.js ~ line 53 ~ testEverything ~ post_problem", post_problem)
    let post_cheatsheet = await post("cheatsheet", inputs["ten"])
    console.log("🚀 ~ file: query.js ~ line 55 ~ testEverything ~ post_cheatsheet", post_cheatsheet)
    let post_task = await post("task", inputs["four"])
    console.log("🚀 ~ file: query.js ~ line 57 ~ testEverything ~ post_task", post_task)
    let post_tag_snippet = await post("tag_snippet", inputs["thirteen"])
    console.log("🚀 ~ file: query.js ~ line 58 ~ testEverything ~ post_tag_snippet", post_tag_snippet)
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

function update(table, id, object) {
    let readFromFile = fs.readJsonSync(FILEPATH)
        // returns array 
    let get_array = readFromFile[table]
    let original = _.filter(get_array, { id: id })
    let original_obj = make_legit.getObject(original)
    let getFormatted = formatToType(table, object)
    let update_with_keys = mergeWith(table, getFormatted)
    let extended = _.extend(update_with_keys, original_obj)
    extended["id"] = id;
    get_array = replace(get_array, id, extended)
    readFromFile[table] = get_array
    fs.outputJsonSync(FILEPATH, readFromFile)
    let final_object = make_legit.getObject(extended);
    let cleaned = make_legit.format(final_object, "object")
    return cleaned;
}

function updateTable(table, id, object) {
    let updateTable = update(table, id, object)
    console.log(updateTable)

    let hourglass_id = updateTable["hourglass_id"]
    console.log("🚀 ~ file: query.js ~ line 112 ~ updateTable ~ hourglass_id", hourglass_id)
    let updateHourglass = update("hourglass", hourglass_id, object)
    delete updateHourglass["id"]
    let merged = _.extend(updateTable, updateHourglass)
    return merged;
}
async function testUpdate() {
    let problem = updateTable("problem", 1, { difficulty: 2, usefulness: 2, plan: "asdf less shits about boys" })
    console.log("🚀 ~ file: query.js ~ line 157 ~ testUpdate ~ problem", problem)

    // let hourglass = updateTable("hourglass", 1, inputs["hourglass"])

    // let cheatsheet = updateTable("cheatsheet", 1, { importance: 2, structure: "think less" })

    // let task = updateTable("task", 1, { difficulty: 1, name: "keep going" })
    // let tag_snippet = updateTable("tag_snippet", 1, { usefulness: 2, tag: "give less shits about boys" })
    // let user = updateTable("user", 4, { gmail_id: "give less shits about boys" })
}
testUpdate()
async function updateOne(table, id, key, value) {

}

async function tableColValCount(table, col, val) {

}
async function getObjectCount(table, object) {

}
async function delById(table, id) {

}
async function getOneById(table, id) {

}

async function getByObject(table, object) {

}
async function getAll() {

}