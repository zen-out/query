function list() {
    const string = `
await delById(filename, table, id) // returns true
await delByKeyValue(filename, table, key, value) // returns true 
await getByObject(filename, table, object) // returns array 
await getAll(filename, table)
await getObjectCount(filename, table,object)
await tableColValCount(filename, table, key, value)
await getOneById(filename, table, id)
await getByObject(filename, table, object)
await directPost(filename, table, object) // incremenets id
await post(filename, table, object)  // returns object;  - if problem, tagsnippet, device, cheatsheet or task, will also add to hourglass. 
await update(filename, table, id, object) // checks for cheatsheet, tag_snippet, problem, tag_snippet, appends [edit] 
await directUpdate(filename, table, id, object)

  `
    console.log(string)
    return string;
}


module.exports = { list };