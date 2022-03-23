const arrz = require("./index.js")

let arr = [{
        title: 'I want to be free. Free to live,  and to find my own way,  to love,  or to be alone,  but at least it is my choice,  and I am so tired of not having choices,  so scared of the years rushing past beneath my feet. I do not want to die as I’ve lived,  which is no life at all.',
        status: 'to do',
        date: new Date(2020, 1, 1),
        id: 1
    },
    {
        title: 'Because we loved each other too much and found each other too interesting. And I love that about humanity,  and in fact it’s the very reason I root for us to survive—because we are so stupid about each other.',
        status: 'doing',
        date: new Date(2021, 1, 1),
        id: 2
    },
    {
        title: 'But a life without art,  without wonder,  without beautiful things—she would go mad. She has gone mad. What she needs are stories. Stories are a way to preserve one’s self. To be remembered. And to forget.',
        status: 'doing',
        date: new Date(2022, 1, 1),
        id: 3
    }
]

let arr2 = [{
    "user_id": 4,
    "task_id": 1,
    "tag": "quote",
    "snippet": "be more selfish with your time. this is your life. reach your own goals. be more confident in yourself, you got this. i want cyrus on my team",
    "hourglass_id": 4,
    "id": 1
}, {
    "user_id": 4,
    "task_id": 1,
    "tag": "quote",
    "snippet": "be more selfish with your time. this is your life. reach your own goals. be more confident in yourself, you got this. i want cyrus on my team",
    "hourglass_id": 4,
    "id": 2
}]

function removeObj(x) {
    if (x.id === 2) {
        return true;
    }
}

let stringValue = "free"
let stringKey = "title"
let arrOfKeys = ["title"]
let originalKey = "id"
let replaceKey = "user_id"

let filter = arrz.filterWithFuncObjectOrString(arr, { status: "to do" })
let trim = arrz.trimArr(arr) // trims if value is string
let count = arrz.countByCondition(arr, "id", 1) // returns number
let serach = arrz.search(arr, stringValue) // returns arr
let filter_values = arrz.filterValues(arr, stringValue, arrOfKeys)
let sortAsc = arrz.sortAsc(arr, stringKey)
let sortDesc = arrz.sortDesc(arr, stringKey)
let contains = arrz.contains(arr, stringKey, stringValue)
let doesNotContain = arrz.doesNotContain(arr, stringKey, stringValue)
let group = arrz.group(arr, stringKey)
let unique = arrz.getUnique(arr, stringKey)
let intersection = arrz.intersection(arr, arr2)
let merge = arrz.mergeByKeys({ data: arr, key: "id" }, { data: arr2, key: "id" })
let child = arrz.makeChildOfAnother({ data: arr, key: "id" }, { data: arr2, key: "id" })
let oneChild = arrz.getOneMakeChildOfAnother({ data: arr, key: "id", value: 2 }, { data: arr2, key: "id", value: 3 })
let remove = arrz.removeByFunction(arr, function removeObj(x) {
    if (x.id === 2) {
        return true;
    }
})
let replacedKey = arrz.replaceKey(arr, originalKey, replaceKey)

console.log("🚀 ~ file: playground.js ~ line 71 ~ replacedKey", replacedKey)