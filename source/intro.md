```js
async function post(fileName, table, object) {}
async function update(fileName, table, id, object) {}
async function updateOne(fileName, table, id, key, value) {}
function tableColValCount(fileName, table, col, val) {}
async function getObjectCount(fileName, table, object) {}
async function delById(fileName, table, id) {}
async function delByKeyValue(fileName, table, key, value) {}
async function del(fileName, table, id, arrOfOtherTables = undefined) {}
async function getOneById(fileName, table, id) { }
async function getOneByKeyAndValue(fileName, table, key, value) { }
async function getByKeyValue(fileName, table, key, value) {}
async function getByObject(fileName, table, object) {}
async function getAll(fileName, table) {}
```