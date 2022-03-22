# bulletproof_me
[bulletproof_me - start here](https://zen-out.github.io/packages/bulletproof_me)
[![here](https://github.com/zen-out/zen-out.github.io/blob/master/assets/images/bulletproof_me.png)](https://github.com/zen-out/zen-out.github.io/blob/master/assets/images/bulletproof_me.png)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![NPM Downloads](https://img.shields.io/npm/dw/bulletproof_me)
## Instructions: 
```npm install bulletproof_me ``` 
 ``` const bulletproof_me =  require('bulletproof_me')```

## If utilizing in html...: 
- install moment, when_you_free, make_legit, whats_wrong
```
    <script src="https://cdn.jsdelivr.net/npm/moment@2.29.1/moment.min.js"></script>
    <script src="./node_modules/when_you_free/index.js"></script>
    <script src="./node_modules/make_legit/index.js"></script>
    <script src="./node_modules/whats_wrong/index.js"></script>
    <script src="./node_modules/bulletproof_me/index.js"></script>
    <script>
        $(() => {
         let trueStarts = bulletproof_me.STARTSWITH("hi", "h")
            console.log("🚀 ~ file: index.html ~ line 37 ~ trueStarts", trueStarts)
                // let falseStarts = bulletproof_me.STARTSWITH("asdfasdf", "A")
                // let trueEnds = bulletproof_me.ENDSWITH('HELLO', "O")
                // let falseEnds = bulletproof_me.ENDSWITH("hello", "z")
                // let trueHas = bulletproof_me.HAS("asdf", "sd")
            let falseHas = bulletproof_me.HAS("asdf", "z")
            console.log(falseHas)
            let isLessDates = bulletproof_me.ISLESS("1994-12-11", "1995-12-12", "date")
            console.log("🚀 ~ file: index.html ~ line 45 ~ isLessDates", isLessDates)
                // let shouldBeTrue = bulletproof_me.COUNT("hello hellodi", "div", 2)
                // let test2 = bulletproof_me.ISLESS(1, 2, "number")
                // let atLeastTrue = bulletproof_me.ATLEAST("div div", "div", 1)
                // let getFalse = bulletproof_me.DOESNOTHAVE("{{>", ">")
        })
    </script>
```

## Functions

<dl>
<dt><a href="#HAS">HAS(one, two)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#STARTSWITH">STARTSWITH(string, substring)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#ENDSWITH">ENDSWITH(string, substring)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#COUNT">COUNT(type, item, amount)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#ATLEAST">ATLEAST(type, item, amount)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#ISLESS">ISLESS(first, second, type)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#DOESNOTHAVE">DOESNOTHAVE(string, item)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#ISTYPE">ISTYPE(data, type)</a> ⇒ <code>any</code></dt>
<dd><p>ISTYPEOFHELPER</p>
</dd>
</dl>

<a name="HAS"></a>

## HAS(one, two) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-02-09  
**Author**: zen-out  

| Param | Type             |
|-------|------------------|
| one   | <code>any</code> |
| two   | <code>any</code> |

**Example**  
```js
HAS("string", "st")
HAS(323, 2)
HAS({hi: "whatsup"}, "whatsup")
HAS([1, 2, 3], 1)
```
<a name="STARTSWITH"></a>

## STARTSWITH(string, substring) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-02-10  
**Author**: zen-out  

| Param     | Type             |
|-----------|------------------|
| string    | <code>any</code> |
| substring | <code>any</code> |

**Example**  
```js
it("starts with", () => {
        T(STARTSWITHHELPER("hello", "h"))
        F(STARTSWITHHELPER("hello", "b"))
    })
```
<a name="ENDSWITH"></a>

## ENDSWITH(string, substring) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-02-10  
**Author**: zen-out  

| Param     | Type             |
|-----------|------------------|
| string    | <code>any</code> |
| substring | <code>any</code> |

**Example**  
```js
it("ends with", () => {
        F(ENDSWITHHELPER("HELLO", "o"))
        T(ENDSWITHHELPER("<div></div>", "</div>"))
    })
```
<a name="COUNT"></a>

## COUNT(type, item, amount) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-03-10  
**Author**: zen-out  

| Param  | Type             |
|--------|------------------|
| type   | <code>any</code> |
| item   | <code>any</code> |
| amount | <code>any</code> |

**Example**  
```js
COUNT("hello hellodi", "div", 2)
COUNT("hello hellodi", "hello", 2) // true 
```
<a name="ATLEAST"></a>

## ATLEAST(type, item, amount) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-02-10  
**Author**: zen-out  

| Param  | Type             |
|--------|------------------|
| type   | <code>any</code> |
| item   | <code>any</code> |
| amount | <code>any</code> |

**Example**  
```js
ATLEAST("div div", "div", 1) //true 
   ATLEAST("div div", "div", 2) //true 
  ATLEAST("div div", "div", 3) //false 
```
<a name="ISLESS"></a>

## ISLESS(first, second, type) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-02-17  

| Param  | Type             |
|--------|------------------|
| first  | <code>any</code> |
| second | <code>any</code> |
| type   | <code>any</code> |

**Example**  
```js
T(ISLESS("a", "b", "string"))
        T(ISLESS(1, 2, "number"))
        T(ISLESS("Dec 11, 1993", "Dec 11, 1994", "date"))
        F(ISLESS("b", "a", "string"))
        F(ISLESS(2, 1, "number"))
        F(ISLESS("Dec 11, 1996", "Dec 11, 1995", "date"))
```
<a name="DOESNOTHAVE"></a>

## DOESNOTHAVE(string, item) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-02-10  
**Author**: zen-out  

| Param  | Type             |
|--------|------------------|
| string | <code>any</code> |
| item   | <code>any</code> |

**Example**  
```js
it('', () => {
        F(DOESNOTHAVEHELPER("{{>", ">")) // false (matches the full instance)
        T(DOESNOTHAVEHELPER("{{>", "asdf")) // true (matches the full instance)
    });
```
<a name="ISTYPE"></a>

## ISTYPE(data, type) ⇒ <code>any</code>
ISTYPEOFHELPER

**Kind**: global function  
**Date**: 2022-03-01  

| Param | Type             |
|-------|------------------|
| data  | <code>any</code> |
| type  | <code>any</code> |

