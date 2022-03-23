const { checkPath } = require("./checkPath.js")
const { copy } = require("./copy.js")
const { deletePath } = require("./deletePath.js")
const { readJSON, writeJSON, appendToJSON, replaceJSON, mergeJSONObject, getJSONObject, addToNestedJSON } = require("./json.js")
const { listDir, readFile, writeFile, appendFile, getDirNames } = require("./readWrite.js")

function list() {
    let string = `
    const ccc = require("clear_concise_creative")
    ccc.checkPath("./docs") // returns boolean
    ccc.copy("./src/**.js", "./dist") 
    ccc.copy("./src/ ** / *", "dist", true)
    ccc.deletePath("./test/deleteThis2")
    ccc.deletePath("./test/deleteThis2/delete.js")
    ccc.writeJSON('./db.json', array)
    ccc.writeJSON('./db.json', object)
    ccc.readJSON("./db.json")
    ccc.appendToJSON(fileName, string, object)
    ccc.replaceJSON(stringFile, arrOfDescendingKeys, object)
    ccc.getJSONObject(stringFile, arrOfDescendingKeys)
    ccc.mergeJSONObject(stringFile, arrOfDescendingKeys, object)
    ccc.addToNestedJSON(stringFile, arrOfDescendingKeys, objectToAppend)
    ccc.listDir("./")
    ccc.getDirNames("./", ".html")
    ccc.writeFile(stringFile, string)
    ccc.readFile(stringFile)
    ccc.appendFile(stringFile, data)
    `
    console.log(string)
    return string;
}
module.exports = { list, listDir, checkPath, copy, readJSON, writeJSON, deletePath, readFile, writeFile, appendToJSON, replaceJSON, appendFile, mergeJSONObject, getJSONObject, addToNestedJSON, getDirNames }