const ccc = require("clear_concise_creative")
const arrz = require("array_helperz")
const { see } = require("code_clarity")
const make_legit = require("make_legit")
const { upset } = require("whats_wrong")
    /**
     * @example
     * getAll(filename, table)
     * @author zen-out
     * @date 2022-03-22
     * @param {any} table
     * @returns {any}
     */
async function getAll(filename, table) {
    let getAll = await ccc.readJSON(filename)
    let data = getAll[table]
    return data;
}

/**
 * @example
 * getObjectCount(filename, table, object)
 * @author zen-out
 * @date 2022-03-22
 * @param {any} table
 * @param {any}  object
 * @returns {any}
 */
async function getObjectCount(filename, table, object) {
    let data = await getAll(filename, table)
    let counts = arrz.filterWithFuncObjectOrString(data, object)
    return counts.length;
}


/**
 * @example
 * tableCoLValCount(filename, table, key, value)
 * @author zen-out
 * @date 2022-03-22
 * @param {any} table
 * @param {any}  key
 * @param {any}  value
 * @returns {any}
 */
async function tableColValCount(filename, table, key, value) {
    let data = await getAll(filename, table)
    let obj = {}
    obj[key] = value
    let counts = arrz.filterWithFuncObjectOrString(data, obj)
    return counts.length;
}
/**
 * 描述
 * @author zen-out
 * @date 2022-03-22
 * @param {any} table
 * @param {any}  id
 * @returns {any}
 */
async function getOneById(filename, table, id) {
    let data = await getAll(filename, table)
    let obj = {}
    obj["id"] = id
    let counts = arrz.filterWithFuncObjectOrString(data, obj)
    return make_legit.getObject(counts)
}

/**
 * getByObject(filename, hourglass, )
 * @author zen-out
 * @date 2022-03-22
 * @param {any} table
 * @param {any}  object
 * @returns {any}
 */
async function getByObject(filename, table, object) {
    let data = await getAll(filename, table)
    let counts = arrz.filterWithFuncObjectOrString(data, object)
    return counts
}


module.exports = { getAll, getObjectCount, tableColValCount, getOneById, getByObject };