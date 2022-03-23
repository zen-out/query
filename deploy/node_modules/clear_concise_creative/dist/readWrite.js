const fs = require("fs-extra")
const { checkPath } = require("./checkPath")

function readFile(fileLocation) {

    if (checkPath(fileLocation)) {
        let string = fs.readFileSync(fileLocation, 'utf8')

        return string;
    }
}

/**
 * @description 
 * only return file names that include the extension
 * @example
 * let dirNames = ccc.getDirNames("./src", ".js")
console.log(dirNames)
let jsOnly = getDirNames("./", ".html")
console.log("🚀 ~ file: readWrite.js ~ line 33 ~ jsOnly", jsOnly)
 * @author zen-out
 * @date 2022-03-08
 * @param {string} folder
 * @param {string}  ext
 * @returns {array}
 */
function getDirNames(folder, ext) {
    let arr = []
    let files = fs.readdirSync(folder)
    files.forEach(file => {
        if (file.includes(ext)) {
            let name = file.split(ext)[0].trim();
            arr.push(name)
        }
    })
    return arr;
}


/**
 * @examplel
 * listDir("./")
 * @author zen-out
 * @date 2022-03-22
 * @param {string} folder
 * @returns {array}
 */
function listDir(folder) {
    let arr = []
    let files = fs.readdirSync(folder)
    files.forEach(file => {
        let name = file.split(ext)[0].trim();
        arr.push(name)
    })
    return arr;
}

/**
     * @Description 
     * 1. Will format the type of data you have and then write to the file accordingly
     * @example
     * let writeThis = ccc.writeFile("./data/writeToMe.txt", [1, 2, 3])
let writeObject = ccc.writeFile("./data/writeToMe.txt", { id: 1, name: "lesley" })
     * @author zen-out
     * @date 2022-03-05
     * @param {string} type
     * @param {string} "string"
     */
function writeFile(fileLocation, type) {
    fs.writeFileSync(fileLocation, type)
}

/**
 * @Description 
 * 1. Formats data
 * 2. Appends to file 
 * @example
 * ccc.appendFile("./readMe.txt", { yo: "whatsup" })
 * @author zen-out
 * @date 2022-03-06
 * @param {string} type
 * @param {string} "string"
 */
function appendFile(fileLocation, type) {
    fs.appendFileSync(fileLocation, type)

}
module.exports = { listDir, readFile, writeFile, appendFile, getDirNames }