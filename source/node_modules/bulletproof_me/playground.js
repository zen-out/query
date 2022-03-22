const S = require("string")
const { format } = require("make_legit")
const b = require("./index.js")

let isLessDates = b.ISLESS("1994-12-11", "1995-12-12", "date")
console.log("🚀 ~ file: playground.js ~ line 21 ~ trueStarts", isLessDates)