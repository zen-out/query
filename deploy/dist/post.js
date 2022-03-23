const _ = require("lodash")
const ccc = require("clear_concise_creative")
const { formatToType, mergeWith } = require("./formatData")
const { inputs } = require("./inputs.js")

/**
 * @example
 *
        let post_user = directPost(filename, "user", object)
 * @author zen-out
 * @date 2022-03-22
 * @param {any} filename
 * @param {any}  table
 * @param {any}  object
 * @returns {any}
 */
async function directPost(filename, table, object) {
    object["created"] = new Date()
    let readFromFile = await ccc.readJSON(filename)
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
    await ccc.writeJSON(filename, readFromFile)
    return getFormatted;
}


/**
 * @example
 *
    let post_task = post("./db.json", "task", inputs["task"])
 * @author zen-out
 * @date 2022-03-22
 * @param {any} filename
 * @param {any}  table
 * @param {any}  object
 * @returns {any}
 */
async function post(filename, table, object) {

    if (table === "problem" || table === "tag_snippet" || table === "device" || table === "cheatsheet" || table === "task") {
        let post_hourglass_first = await directPost(filename, "hourglass", object)
        let hourglass_id = post_hourglass_first["id"]
        object["hourglass_id"] = hourglass_id
        let second_post = await directPost(filename, table, object)
        let merged = _.merge(post_hourglass_first, second_post)
        return merged;
    } else {
        let post_user = await directPost(filename, table, object)
        return post_user
    }
}


function testPost() {
    let post_task = post("./db.json", "task", inputs["task"])
    let post_tag_snippet = post("./db.json", "tag_snippet", inputs["tag_snippet"])
}
// testPost()



module.exports = { directPost, post, testPost };