# json_basic_query

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![NPM Downloads](https://img.shields.io/npm/dw/json_basic_query)
[Play with docs](https://zen-out.github.io/modules/json_basic_query.html)
## Instructions: 

```js
npm install json_basic_query
const json_basic_query =  require('json_basic_query')
```

```js

const filename = "./dist/db.json"

async function test() {

    let getAll = await query.getAll(filename, "hourglass")
    let getCount = await query.getObjectCount(filename, "hourglass", { difficulty: 2 })
    let getById = await query.getOneById(filename, "hourglass", 2)
    let getByObj = await query.getByObject(filename, "hourglass", { difficulty: 2 })
    let post = await query.post(filename, "problem", { problem: "Wahtsup", difficulty: 2 })
    console.log("🚀 ~ file: playground.js ~ line 18 ~ post", post)
    let update = await query.update(filename, "problem", 1, { whatshouldbe: "okay" })
    let updateOne = await query.updateOne(filename, "problem", 1, "whatactuallyis", "fuck")
}
test()
```

## Functions

<dl>
<dt><a href="#formatToType">formatToType(table, object)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#mergeWith">mergeWith(table, object)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#getAll">getAll(table)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#getObjectCount">getObjectCount(table, object)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#tableColValCount">tableColValCount(table, key, value)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#getOneById">getOneById(table, id)</a> ⇒ <code>any</code></dt>
<dd><p>描述</p>
</dd>
<dt><a href="#getByObject">getByObject(table, object)</a> ⇒ <code>any</code></dt>
<dd><p>getByObject(filename, hourglass, )</p>
</dd>
<dt><a href="#directPost">directPost(filename, table, object)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#post">post(filename, table, object)</a> ⇒ <code>any</code></dt>
<dd></dd>
</dl>

<a name="formatToType"></a>

## formatToType(table, object) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-03-22  
**Author**: zen-out  

| Param  | Type             |
|--------|------------------|
| table  | <code>any</code> |
| object | <code>any</code> |

**Example**  
```js
let object = formatToType("problem", object)
// ensures that the problem object matches 
```
<a name="mergeWith"></a>

## mergeWith(table, object) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-03-22  
**Author**: zen-out  

| Param  | Type             |
|--------|------------------|
| table  | <code>any</code> |
| object | <code>any</code> |

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
描述

**Kind**: global function  
**Date**: 2022-03-22  
**Author**: zen-out  

| Param | Type             |
|-------|------------------|
| table | <code>any</code> |
| id    | <code>any</code> |

<a name="getByObject"></a>

## getByObject(table, object) ⇒ <code>any</code>
getByObject(filename, hourglass, )

**Kind**: global function  
**Date**: 2022-03-22  
**Author**: zen-out  

| Param  | Type             |
|--------|------------------|
| table  | <code>any</code> |
| object | <code>any</code> |

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
