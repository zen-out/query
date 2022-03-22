const { userMerge, hourglassMerge, problemMerge, taskMerge, tag_snippetMerge, cheatsheetMerge, followMerge, deviceMerge, paymentMerge, userType, hourglassType, problemType, taskType, tag_snippetType, cheatsheetType, followType, deviceType, paymentType } = require("./data.js")
const make_legit = require("make_legit")
const _ = require("lodash")
const { upset } = require("whats_wrong")

/**
 * @example
 * let object = formatToType("problem", object)
 * // ensures that the problem object matches 
 * @author zen-out
 * @date 2022-03-22
 * @param {any} table
 * @param {any}  object
 * @returns {any}
 */
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

/**
 * @example
 * mergeWith("problem", object)
 * // returns with undefined
 * @author zen-out
 * @date 2022-03-22
 * @param {any} table
 * @param {any}  object
 * @returns {any}
 */
function mergeWith(table, object) {
    let formatted;
    if (table === "problem") {
        formatted = _.extend(problemMerge, object)
    } else if (table === "user") {
        formatted = _.extend(userMerge, object)
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

module.exports = { formatToType, mergeWith };