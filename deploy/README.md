# json_basic_query

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![NPM Downloads](https://img.shields.io/npm/dw/json_basic_query)
[Play with docs](https://zen-out.github.io/modules/json_basic_query.html)
## Instructions: 

```js
npm install json_basic_query
const json_basic_query =  require('json_basic_query')
```

## If utilizing in html...: 
```html
<script src="./node_modules/json_basic_query/index.js"></script>
<script> 
$(()=> { 
     const output =  json_basic_query.method(parameter)
 })
</script>
```
```js
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
```

## Functions

<dl>
<dt><a href="#formatToType">formatToType()</a> ⇒ <code>object</code></dt>
<dd></dd>
<dt><a href="#mergeWith">mergeWith()</a> ⇒ <code>object</code></dt>
<dd></dd>
<dt><a href="#getAll">getAll(table)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#getObjectCount">getObjectCount(table, object)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#tableColValCount">tableColValCount(table, key, value)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#getOneById">getOneById(table, id)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#getByObject">getByObject()</a> ⇒ <code>array</code></dt>
<dd><p>getByObject(filename, hourglass, )</p>
</dd>
<dt><a href="#directPost">directPost(filename, table, object)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#post">post(filename, table, object)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#directUpdate">directUpdate()</a></dt>
<dd></dd>
<dt><a href="#update">update()</a></dt>
<dd></dd>
</dl>

<a name="formatToType"></a>

## formatToType() ⇒ <code>object</code>
**Kind**: global function  
**Date**: 2022-03-22  
**Author**: zen-out  
**Example**  
```js
let object = formatToType("problem", object)
// ensures that the problem object matches 
```
<a name="mergeWith"></a>

## mergeWith() ⇒ <code>object</code>
**Kind**: global function  
**Date**: 2022-03-22  
**Author**: zen-out  
**Example**  
```js
mergeWith("problem", object)
// returns with undefined
```
<a name="getAll"></a>

## getAll(table) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-03-22  
**Author**: zen-out  

| Param | Type             |
|-------|------------------|
| table | <code>any</code> |

**Example**  
```js
getAll(filename, table)
```
<a name="getObjectCount"></a>

## getObjectCount(table, object) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-03-22  
**Author**: zen-out  

| Param  | Type             |
|--------|------------------|
| table  | <code>any</code> |
| object | <code>any</code> |

**Example**  
```js
getObjectCount(filename, table, object)
```
<a name="tableColValCount"></a>

## tableColValCount(table, key, value) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-03-22  
**Author**: zen-out  

| Param | Type             |
|-------|------------------|
| table | <code>any</code> |
| key   | <code>any</code> |
| value | <code>any</code> |

**Example**  
```js
tableCoLValCount(filename, table, key, value)
```
<a name="getOneById"></a>

## getOneById(table, id) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-03-22  
**Author**: zen-out  

| Param | Type             |
|-------|------------------|
| table | <code>any</code> |
| id    | <code>any</code> |

<a name="getByObject"></a>

## getByObject() ⇒ <code>array</code>
getByObject(filename, hourglass, )

**Kind**: global function  
**Date**: 2022-03-22  
**Author**: zen-out  
<a name="directPost"></a>

## directPost(filename, table, object) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-03-22  
**Author**: zen-out  

| Param    | Type             |
|----------|------------------|
| filename | <code>any</code> |
| table    | <code>any</code> |
| object   | <code>any</code> |

**Example**  
```js
let post_user = directPost(filename, "user", object)
```
<a name="post"></a>

## post(filename, table, object) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-03-22  
**Author**: zen-out  

| Param    | Type             |
|----------|------------------|
| filename | <code>any</code> |
| table    | <code>any</code> |
| object   | <code>any</code> |

**Example**  
```js
let post_task = post("./db.json", "task", inputs["task"])
```
<a name="directUpdate"></a>

## directUpdate()
**Kind**: global function  
**Author**: github.com/zen-out  
**Example**  
```js
directUpdate(filename, table, id, object) // does not add edit to the object - clean update. 
```
<a name="update"></a>

## update()
**Kind**: global function  
**Author**: github.com/zen-out  
**Example**  
```js
await update(filename, table, id, object)
```
