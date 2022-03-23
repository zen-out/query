# clear_concise_creative

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![NPM Downloads](https://img.shields.io/npm/dw/clear_concise_creative)
[Play with docs](https://zen-out.github.io/modules/clear_concise_creative.html)
## Instructions: 

```js
npm install clear_concise_creative
const clear_concise_creative =  require('clear_concise_creative')
```



## Functions

<dl>
<dt><a href="#checkPath">checkPath(path)</a> ⇒ <code>boolean</code></dt>
<dd><p>checkPath(path)</p>
</dd>
<dt><a href="#copy">copy(toCopy, copyTo, copy)</a></dt>
<dd></dd>
<dt><a href="#deletePath">deletePath(path)</a></dt>
<dd><p>ccc.deletePath(&quot;./test/deleteThis2&quot;)
ccc.deletePath(&quot;./test/deleteThis2/delete.js&quot;)</p>
</dd>
<dt><a href="#writeJSON">writeJSON(filePath, object)</a></dt>
<dd><p>ccc.writeJSON(&#39;./db.json&#39;, array)
ccc.writeJSON(&#39;./db.json&#39;, object)</p>
</dd>
<dt><a href="#readJSON">readJSON(filePath)</a> ⇒ <code>object</code></dt>
<dd><p>let getJSON = ccc.readJSON(&quot;./db.json&quot;)</p>
</dd>
<dt><a href="#appendToJSON">appendToJSON(filePath, key, data)</a></dt>
<dd><ol>
<li>Grabs JSON from json file</li>
<li>If the key does not exist, then it will create a new key and assign the object </li>
<li>If the key does exist, and it is not an array </li>
<li>It will create an array and it will push the object into the array</li>
</ol>
</dd>
<dt><a href="#replaceJSON">replaceJSON(filePath, filePath, object)</a></dt>
<dd><ol>
<li>Reads from json file </li>
<li>Replaces object depeneding on array passed in</li>
</ol>
</dd>
<dt><a href="#getJSONObject">getJSONObject(filePath, arrDir)</a> ⇒ <code>object</code></dt>
<dd></dd>
<dt><a href="#mergeJSONObject">mergeJSONObject(filePath, arrDir, updateObj)</a></dt>
<dd></dd>
<dt><a href="#addToNestedJSON">addToNestedJSON(filePath, arrDir, addObj)</a></dt>
<dd></dd>
<dt><a href="#getDirNames">getDirNames(folder, ext)</a> ⇒ <code>array</code></dt>
<dd><p>only return file names that include the extension</p>
</dd>
<dt><a href="#listDir">listDir(folder)</a> ⇒ <code>array</code></dt>
<dd></dd>
<dt><a href="#writeFile">writeFile(type, &quot;string&quot;)</a></dt>
<dd><ol>
<li>Will format the type of data you have and then write to the file accordingly</li>
</ol>
</dd>
<dt><a href="#appendFile">appendFile(type, &quot;string&quot;)</a></dt>
<dd><ol>
<li>Formats data</li>
<li>Appends to file</li>
</ol>
</dd>
</dl>

<a name="checkPath"></a>

## checkPath(path) ⇒ <code>boolean</code>
checkPath(path)

**Kind**: global function  
**Date**: 2022-03-10  
**Author**: zen-out  

| Param | Type                |
|-------|---------------------|
| path  | <code>string</code> |

<a name="copy"></a>

## copy(toCopy, copyTo, copy)
**Kind**: global function  
**Date**: 2022-03-07  
**Author**: zen-out  

| Param  | Type                 | Description |
|--------|----------------------|-------------|
| toCopy | <code>string</code>  |             |
| copyTo | <code>string</code>  |             |
| copy   | <code>boolean</code> | all         |

**Example**  
```js
ccc.copy("./src/**.js", "./dist") 
ccc.copy("./src/ ** / *", "dist", true)
```
<a name="deletePath"></a>

## deletePath(path)
ccc.deletePath("./test/deleteThis2")
ccc.deletePath("./test/deleteThis2/delete.js")

**Kind**: global function  
**Date**: 2022-03-04  
**Author**: zen-out  

| Param | Type                |
|-------|---------------------|
| path  | <code>string</code> |

<a name="writeJSON"></a>

## writeJSON(filePath, object)
ccc.writeJSON('./db.json', array)
ccc.writeJSON('./db.json', object)

**Kind**: global function  
**Date**: 2022-03-04  
**Author**: zen-out  

| Param    | Type                |
|----------|---------------------|
| filePath | <code>string</code> |
| object   | <code>object</code> |

<a name="readJSON"></a>

## readJSON(filePath) ⇒ <code>object</code>
let getJSON = ccc.readJSON("./db.json")

**Kind**: global function  
**Date**: 2022-03-04  
**Author**: zen-out  

| Param    | Type                |
|----------|---------------------|
| filePath | <code>string</code> |

<a name="appendToJSON"></a>

## appendToJSON(filePath, key, data)
1. Grabs JSON from json file
2. If the key does not exist, then it will create a new key and assign the object 
3. If the key does exist, and it is not an array 
4. It will create an array and it will push the object into the array

**Kind**: global function  
**Date**: 2022-03-04  
**Author**: zen-out  

| Param    | Type                |
|----------|---------------------|
| filePath | <code>string</code> |
| key      | <code>string</code> |
| data     | <code>object</code> |

**Example**  
```js
ccc.appendToJSON("./data/appendToMe.json", "test", { id: "lesley" })
```
<a name="replaceJSON"></a>

## replaceJSON(filePath, filePath, object)
1. Reads from json file 
2. Replaces object depeneding on array passed in

**Kind**: global function  
**Date**: 2022-03-05  
**Author**: zen-out  

| Param    | Type                | Description |
|----------|---------------------|-------------|
| filePath | <code>string</code> |             |
| filePath | <code>string</code> |             |
| object   | <code>object</code> | to replace  |

**Example**  
```js
let objectDir = ["opts", "theme_opts", "codepen"]
ccc.replaceJSON("./data/appendToMe.json", objectDir, { "sexylink": "link" })
```
<a name="getJSONObject"></a>

## getJSONObject(filePath, arrDir) ⇒ <code>object</code>
**Kind**: global function  
**Returns**: <code>object</code> - JSON object  
**Date**: 2022-03-06  
**Author**: zen-out  

| Param    | Type                |
|----------|---------------------|
| filePath | <code>string</code> |
| arrDir   | <code>array</code>  |

**Example**  
```js
let scripts = ccc.getJSONObject("../package.json", ["scripts"])
```
<a name="mergeJSONObject"></a>

## mergeJSONObject(filePath, arrDir, updateObj)
**Kind**: global function  
**Date**: 2022-03-06  
**Author**: zen-out  

| Param     | Type                |
|-----------|---------------------|
| filePath  | <code>string</code> |
| arrDir    | <code>array</code>  |
| updateObj | <code>object</code> |

**Example**  
```js
let addedCommands = ccc.mergeJSONObject("../package.json", ["scripts"], {
    "play": "node playground.js",
    "deploy": "git add . && git commit -m 'updated' && git push && npm version patch && npm publish",
})
```
<a name="addToNestedJSON"></a>

## addToNestedJSON(filePath, arrDir, addObj)
**Kind**: global function  
**Date**: 2022-03-06  
**Author**: zen-out  

| Param    | Type                |
|----------|---------------------|
| filePath | <code>string</code> |
| arrDir   | <code>array</code>  |
| addObj   | <code>object</code> |

**Example**  
```js
ccc.addToNestedJSON("../sample.json", ["opts", "theme_opts", "menu"], {
    "title": "visual instructions",
    "link": "hi",
    "target": "_blank"
})
```
<a name="getDirNames"></a>

## getDirNames(folder, ext) ⇒ <code>array</code>
only return file names that include the extension

**Kind**: global function  
**Date**: 2022-03-08  
**Author**: zen-out  

| Param  | Type                |
|--------|---------------------|
| folder | <code>string</code> |
| ext    | <code>string</code> |

**Example**  
```js
let dirNames = ccc.getDirNames("./src", ".js")
console.log(dirNames)
let jsOnly = getDirNames("./", ".html")
console.log("🚀 ~ file: readWrite.js ~ line 33 ~ jsOnly", jsOnly)
```
<a name="listDir"></a>

## listDir(folder) ⇒ <code>array</code>
**Kind**: global function  
**Examplel**: listDir("./")  
**Date**: 2022-03-22  
**Author**: zen-out  

| Param  | Type                |
|--------|---------------------|
| folder | <code>string</code> |

<a name="writeFile"></a>

## writeFile(type, &quot;string&quot;)
1. Will format the type of data you have and then write to the file accordingly

**Kind**: global function  
**Date**: 2022-03-05  
**Author**: zen-out  

| Param    | Type                |
|----------|---------------------|
| type     | <code>string</code> |
| "string" | <code>string</code> |

**Example**  
```js
let writeThis = ccc.writeFile("./data/writeToMe.txt", [1, 2, 3])
let writeObject = ccc.writeFile("./data/writeToMe.txt", { id: 1, name: "lesley" })
```
<a name="appendFile"></a>

## appendFile(type, &quot;string&quot;)
1. Formats data
2. Appends to file

**Kind**: global function  
**Date**: 2022-03-06  
**Author**: zen-out  

| Param    | Type                |
|----------|---------------------|
| type     | <code>string</code> |
| "string" | <code>string</code> |

**Example**  
```js
ccc.appendFile("./readMe.txt", { yo: "whatsup" })
```
