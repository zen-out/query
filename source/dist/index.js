const { directPost, post } = require("./post.js")
const { replace, directUpdate, update, updateOne } = require("./update.js")
const { delById } = require("./delete.js")
const { getAll, getObjectCount, tableColValCount, getOneById, getByObject } = require("./get.js")
module.exports = { directPost, post, replace, directUpdate, update, updateOne, delById, getAll, getObjectCount, tableColValCount, getOneById, getByObject, }