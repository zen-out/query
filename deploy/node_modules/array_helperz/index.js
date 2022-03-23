! function(e, t) { "object" == typeof exports && "object" == typeof module ? module.exports = t(require("lodash")) : "function" == typeof define && define.amd ? define(["lodash"], t) : "object" == typeof exports ? exports.node_basetest = t(require("lodash")) : e.node_basetest = t(e.lodash) }(this, (function(e) { return (() => { var t = { 826: e => { var t = { À: "A", Á: "A", Â: "A", Ã: "A", Ä: "A", Å: "A", Ấ: "A", Ắ: "A", Ẳ: "A", Ẵ: "A", Ặ: "A", Æ: "AE", Ầ: "A", Ằ: "A", Ȃ: "A", Ç: "C", Ḉ: "C", È: "E", É: "E", Ê: "E", Ë: "E", Ế: "E", Ḗ: "E", Ề: "E", Ḕ: "E", Ḝ: "E", Ȇ: "E", Ì: "I", Í: "I", Î: "I", Ï: "I", Ḯ: "I", Ȋ: "I", Ð: "D", Ñ: "N", Ò: "O", Ó: "O", Ô: "O", Õ: "O", Ö: "O", Ø: "O", Ố: "O", Ṍ: "O", Ṓ: "O", Ȏ: "O", Ù: "U", Ú: "U", Û: "U", Ü: "U", Ý: "Y", à: "a", á: "a", â: "a", ã: "a", ä: "a", å: "a", ấ: "a", ắ: "a", ẳ: "a", ẵ: "a", ặ: "a", æ: "ae", ầ: "a", ằ: "a", ȃ: "a", ç: "c", ḉ: "c", è: "e", é: "e", ê: "e", ë: "e", ế: "e", ḗ: "e", ề: "e", ḕ: "e", ḝ: "e", ȇ: "e", ì: "i", í: "i", î: "i", ï: "i", ḯ: "i", ȋ: "i", ð: "d", ñ: "n", ò: "o", ó: "o", ô: "o", õ: "o", ö: "o", ø: "o", ố: "o", ṍ: "o", ṓ: "o", ȏ: "o", ù: "u", ú: "u", û: "u", ü: "u", ý: "y", ÿ: "y", Ā: "A", ā: "a", Ă: "A", ă: "a", Ą: "A", ą: "a", Ć: "C", ć: "c", Ĉ: "C", ĉ: "c", Ċ: "C", ċ: "c", Č: "C", č: "c", C̆: "C", c̆: "c", Ď: "D", ď: "d", Đ: "D", đ: "d", Ē: "E", ē: "e", Ĕ: "E", ĕ: "e", Ė: "E", ė: "e", Ę: "E", ę: "e", Ě: "E", ě: "e", Ĝ: "G", Ǵ: "G", ĝ: "g", ǵ: "g", Ğ: "G", ğ: "g", Ġ: "G", ġ: "g", Ģ: "G", ģ: "g", Ĥ: "H", ĥ: "h", Ħ: "H", ħ: "h", Ḫ: "H", ḫ: "h", Ĩ: "I", ĩ: "i", Ī: "I", ī: "i", Ĭ: "I", ĭ: "i", Į: "I", į: "i", İ: "I", ı: "i", Ĳ: "IJ", ĳ: "ij", Ĵ: "J", ĵ: "j", Ķ: "K", ķ: "k", Ḱ: "K", ḱ: "k", K̆: "K", k̆: "k", Ĺ: "L", ĺ: "l", Ļ: "L", ļ: "l", Ľ: "L", ľ: "l", Ŀ: "L", ŀ: "l", Ł: "l", ł: "l", Ḿ: "M", ḿ: "m", M̆: "M", m̆: "m", Ń: "N", ń: "n", Ņ: "N", ņ: "n", Ň: "N", ň: "n", ŉ: "n", N̆: "N", n̆: "n", Ō: "O", ō: "o", Ŏ: "O", ŏ: "o", Ő: "O", ő: "o", Œ: "OE", œ: "oe", P̆: "P", p̆: "p", Ŕ: "R", ŕ: "r", Ŗ: "R", ŗ: "r", Ř: "R", ř: "r", R̆: "R", r̆: "r", Ȓ: "R", ȓ: "r", Ś: "S", ś: "s", Ŝ: "S", ŝ: "s", Ş: "S", Ș: "S", ș: "s", ş: "s", Š: "S", š: "s", Ţ: "T", ţ: "t", ț: "t", Ț: "T", Ť: "T", ť: "t", Ŧ: "T", ŧ: "t", T̆: "T", t̆: "t", Ũ: "U", ũ: "u", Ū: "U", ū: "u", Ŭ: "U", ŭ: "u", Ů: "U", ů: "u", Ű: "U", ű: "u", Ų: "U", ų: "u", Ȗ: "U", ȗ: "u", V̆: "V", v̆: "v", Ŵ: "W", ŵ: "w", Ẃ: "W", ẃ: "w", X̆: "X", x̆: "x", Ŷ: "Y", ŷ: "y", Ÿ: "Y", Y̆: "Y", y̆: "y", Ź: "Z", ź: "z", Ż: "Z", ż: "z", Ž: "Z", ž: "z", ſ: "s", ƒ: "f", Ơ: "O", ơ: "o", Ư: "U", ư: "u", Ǎ: "A", ǎ: "a", Ǐ: "I", ǐ: "i", Ǒ: "O", ǒ: "o", Ǔ: "U", ǔ: "u", Ǖ: "U", ǖ: "u", Ǘ: "U", ǘ: "u", Ǚ: "U", ǚ: "u", Ǜ: "U", ǜ: "u", Ứ: "U", ứ: "u", Ṹ: "U", ṹ: "u", Ǻ: "A", ǻ: "a", Ǽ: "AE", ǽ: "ae", Ǿ: "O", ǿ: "o", Þ: "TH", þ: "th", Ṕ: "P", ṕ: "p", Ṥ: "S", ṥ: "s", X́: "X", x́: "x", Ѓ: "Г", ѓ: "г", Ќ: "К", ќ: "к", A̋: "A", a̋: "a", E̋: "E", e̋: "e", I̋: "I", i̋: "i", Ǹ: "N", ǹ: "n", Ồ: "O", ồ: "o", Ṑ: "O", ṑ: "o", Ừ: "U", ừ: "u", Ẁ: "W", ẁ: "w", Ỳ: "Y", ỳ: "y", Ȁ: "A", ȁ: "a", Ȅ: "E", ȅ: "e", Ȉ: "I", ȉ: "i", Ȍ: "O", ȍ: "o", Ȑ: "R", ȑ: "r", Ȕ: "U", ȕ: "u", B̌: "B", b̌: "b", Č̣: "C", č̣: "c", Ê̌: "E", ê̌: "e", F̌: "F", f̌: "f", Ǧ: "G", ǧ: "g", Ȟ: "H", ȟ: "h", J̌: "J", ǰ: "j", Ǩ: "K", ǩ: "k", M̌: "M", m̌: "m", P̌: "P", p̌: "p", Q̌: "Q", q̌: "q", Ř̩: "R", ř̩: "r", Ṧ: "S", ṧ: "s", V̌: "V", v̌: "v", W̌: "W", w̌: "w", X̌: "X", x̌: "x", Y̌: "Y", y̌: "y", A̧: "A", a̧: "a", B̧: "B", b̧: "b", Ḑ: "D", ḑ: "d", Ȩ: "E", ȩ: "e", Ɛ̧: "E", ɛ̧: "e", Ḩ: "H", ḩ: "h", I̧: "I", i̧: "i", Ɨ̧: "I", ɨ̧: "i", M̧: "M", m̧: "m", O̧: "O", o̧: "o", Q̧: "Q", q̧: "q", U̧: "U", u̧: "u", X̧: "X", x̧: "x", Z̧: "Z", z̧: "z" },
                        r = Object.keys(t).join("|"),
                        n = new RegExp(r, "g"),
                        o = new RegExp(r, ""),
                        a = function(e) { return e.replace(n, (function(e) { return t[e] })) };
                    e.exports = a, e.exports.has = function(e) { return !!e.match(o) }, e.exports.remove = a }, 356: t => { "use strict";
                    t.exports = e } },
            r = {};

        function n(e) { var o = r[e]; if (void 0 !== o) return o.exports; var a = r[e] = { exports: {} }; return t[e](a, a.exports, n), a.exports }
        n.n = e => { var t = e && e.__esModule ? () => e.default : () => e; return n.d(t, { a: t }), t }, n.d = (e, t) => { for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] }) }, n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n.r = e => { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }; var o = {}; return (() => { "use strict";
            n.r(o), n.d(o, { contains: () => v, countByCondition: () => f, doesNotContain: () => b, filterAndSort: () => e.filterAndSort, filterItems: () => t.filterItems, filterValues: () => h, filterWithFuncObjectOrString: () => x, getOneMakeChildOfAnother: () => E, getUnique: () => T, group: () => g, intersection: () => P, list: () => F, makeChildOfAnother: () => j, makeChildOfAnotherTest: () => k, mergeByKeys: () => S, removeByFunction: () => K, replaceKey: () => z, search: () => d, sortAsc: () => m, sortDesc: () => p, testFilterWithFuncStringObject: () => C, testMergeByKeys: () => I, testUnique: () => q, trimArr: () => c }); var e = {};
            n.r(e), n.d(e, { r3: () => v, QH: () => f, YQ: () => b, m_: () => h, ru: () => g, yC: () => d, nO: () => m, Rm: () => p, FE: () => c }); var t = {};
            n.r(t), n.d(t, { ew: () => E, At: () => j, dz: () => k, eW: () => S, EA: () => I }); var r = n(356);
            n(826);

            function a(e) { return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e }, a(e) }

            function i(e) { return function(e) { if (Array.isArray(e)) return l(e) }(e) || function(e) { if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e) }(e) || s(e) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

            function u(e, t) { return function(e) { if (Array.isArray(e)) return e }(e) || function(e, t) { var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]; if (null != r) { var n, o, a = [],
                            i = !0,
                            u = !1; try { for (r = r.call(e); !(i = (n = r.next()).done) && (a.push(n.value), !t || a.length !== t); i = !0); } catch (e) { u = !0, o = e } finally { try { i || null == r.return || r.return() } finally { if (u) throw o } } return a } }(e, t) || s(e, t) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

            function s(e, t) { if (e) { if ("string" == typeof e) return l(e, t); var r = Object.prototype.toString.call(e).slice(8, -1); return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? l(e, t) : void 0 } }

            function l(e, t) {
                (null == t || t > e.length) && (t = e.length); for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r]; return n }

            function c(e) { for (var t = 0; t < e.length; t++)
                    for (var r = 0, n = Object.entries(e[t]); r < n.length; r++) { var o = u(n[r], 2),
                            a = o[0],
                            i = o[1]; if ("string" == typeof i) { var s = i.trim();
                            e[t][a] = s } }
                return e }

            function f(e, t, r) { for (var n = 0, o = 0; o < e.length; o++) e[o][t] === r && n++; return n }

            function d(e, t) { var r = []; return e || (e = {}), t || (t = ""), e.forEach((function(e, n) { for (var o in e) e.hasOwnProperty(o) && e[o] && -1 !== e[o].toString().indexOf(t) && r.push(e) })), r }

            function y(e, t, r) { return e.filter((function(e) { if ("string" == typeof e[t] && -1 !== e[t].toLowerCase().indexOf(r.toLowerCase())) return e })) }

            function h(e, t, n) { for (var o = [], a = d(e, t), u = 0; u < n.length; u++) { var s = y(a, n[u], t);
                    o = [].concat(i(o), i(s)) } return c(o = (0, r.uniqWith)(o, r.isEqual)) }

            function m(e, t) { for (var n = 0; n < e.length; n++)
                    if ("object" === a(e[n])) { Object.keys(e[n]); for (var o = 0, i = Object.entries(e[n]); o < i.length; o++) { var s = u(i[o], 2),
                                l = s[0],
                                f = s[1];
                            Array.isArray(f) && (e[n][l] = (0, r.sortBy)(f, [t])) } }
                return c((0, r.sortBy)(e, [t])) }

            function p(e, t) { for (var n = 0; n < e.length; n++)
                    if ("object" === a(e[n])) { Object.keys(e[n]); for (var o = 0, i = Object.entries(e[n]); o < i.length; o++) { var s = u(i[o], 2),
                                l = s[0],
                                f = s[1];
                            Array.isArray(f) && (e[n][l] = (0, r.sortBy)(f, [t]).reverse()) } }
                return c((0, r.sortBy)(e, [t]).reverse()) }

            function v(e, t, r) { for (var n = [], o = 0; o < e.length; o++) e[o][t] === r && n.push(e[o]); return c(n) }

            function b(e, t, r) { for (var n = [], o = 0; o < e.length; o++) e[o][t] !== r && n.push(e[o]); return c(n) }

            function g(e, t) { return c((0, r.groupBy)(e, t)) }

            function w(e, t) { var r = Object.keys(e); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), r.push.apply(r, n) } return r }

            function O(e) { for (var t = 1; t < arguments.length; t++) { var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? w(Object(r), !0).forEach((function(t) { A(e, t, r[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : w(Object(r)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)) })) } return e }

            function A(e, t, r) { return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e }

            function S(e, t) { var n = (0, r.merge)((0, r.keyBy)(e.data, e.key), (0, r.keyBy)(t.data, t.key)); return (0, r.values)(n) }

            function I() { var e = S([{ title: "I want to be free. Free to live,  and to find my own way,  to love,  or to be alone,  but at least it is my choice,  and I am so tired of not having choices,  so scared of the years rushing past beneath my feet. I do not want to die as I’ve lived,  which is no life at all.", status: "to do", id: 1 }, { title: "Because we loved each other too much and found each other too interesting. And I love that about humanity,  and in fact it’s the very reason I root for us to survive—because we are so stupid about each other.", status: "doing", id: 2 }, { title: "But a life without art,  without wonder,  without beautiful things—she would go mad. She has gone mad. What she needs are stories. Stories are a way to preserve one’s self. To be remembered. And to forget.", status: "doing", id: 3 }], { data: [{ name: "Whatever", status: "doing", problem_id: 2, id: 1 }, { name: "is", status: "doing", problem_id: 2, id: 2 }, { name: "people", status: "to do", problem_id: 2, id: 3 }], key: "problem_id", value: 2 });
                console.log(e) }

            function j(e, t) { return e.data.map((function(r) { return O(O({}, r), {}, { child: t.data.filter((function(n) { return r[e.key] === n[t.key] })).map((function(e) { return e })) }) })) }

            function E(e, t) { var n = {};
                n[t.key] = t.value; var o = e.data.map((function(r) { return O(O({}, r), {}, { child: t.data.filter((function(n) { return r[e.key] === n[t.key] })).map((function(e) { return e })) }) })),
                    a = (o.filter((function(e) { return n })), {}); return a[e.key] = e.value, (0, r.filter)(o, a) }

            function k() { var e = [{ title: "I want to be free. Free to live,  and to find my own way,  to love,  or to be alone,  but at least it is my choice,  and I am so tired of not having choices,  so scared of the years rushing past beneath my feet. I do not want to die as I’ve lived,  which is no life at all.", status: "to do", id: 1 }, { title: "Because we loved each other too much and found each other too interesting. And I love that about humanity,  and in fact it’s the very reason I root for us to survive—because we are so stupid about each other.", status: "doing", id: 2 }, { title: "But a life without art,  without wonder,  without beautiful things—she would go mad. She has gone mad. What she needs are stories. Stories are a way to preserve one’s self. To be remembered. And to forget.", status: "doing", id: 3 }],
                    t = [{ name: "Whatever", status: "doing", problem_id: 2, id: 1 }, { name: "is", status: "doing", problem_id: 2, id: 2 }, { name: "people", status: "to do", problem_id: 2, id: 3 }],
                    r = E({ data: e, key: "id", value: 2 }, { data: t, key: "problem_id", value: 2 });
                console.log(r); var n = j({ data: e, key: "id" }, { data: t, key: "problem_id" });
                console.log(n) }

            function U(e) { return U = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e }, U(e) }

            function x(e, t) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0; if (!(e.length > 0)) return []; if ("function" == typeof t) e.filter(t);
                else { if ("string" == typeof t && void 0 !== n) { var o = v(e, t, n); return o } if ("object" === U(t)) return (0, r.filter)(e, t) } var a = (0, r.filter)(e, t); return a }

            function C() { var e = [{ name: "Because we loved each other too much and found each other too interesting. And I love that about humanity,  and in fact it’s the very reason I root for us to survive—because we are so stupid about each other.", status: "doing", problem_id: 2, id: 1 }, { name: "I want to be free. Free to live,  and to find my own way,  to love,  or to be alone,  but at least it is my choice,  and I am so tired of not having choices,  so scared of the years rushing past beneath my feet. I do not want to die as I’ve lived,  which is no life at all.", status: "doing", problem_id: 2, id: 2 }, { name: "But a life without art,  without wonder,  without beautiful things—she would go mad. She has gone mad. What she needs are stories. Stories are a way to preserve one’s self. To be remembered. And to forget.", status: "to do", problem_id: 2, id: 3 }],
                    t = x(e, (function(e) { if ("to do" === e.status) return e })),
                    r = x(e, { status: "to do" }),
                    n = x(e, "status", "to do"),
                    o = x(e, "status");
                console.log(t), console.log(r), console.log(n), console.log(o) }

            function z(e, t, n) { var o = []; return e.map((function(e) { o.push((0, r.mapKeys)(e, (function(e, r) { var o = r; return r === t && (o = n), o }))) })), o } var B = n(356).remove;

            function K(e, t) { return B(e, t) }

            function _(e, t) {
                (null == t || t > e.length) && (t = e.length); for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r]; return n }

            function P(e, t) { var r, n, o = new Set(e),
                    a = new Set(t),
                    i = [];
                o.size > a.size ? (r = o, n = a) : (r = a, n = o); var u, s = function(e, t) { var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]; if (!r) { if (Array.isArray(e) || (r = function(e, t) { if (e) { if ("string" == typeof e) return _(e, t); var r = Object.prototype.toString.call(e).slice(8, -1); return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? _(e, t) : void 0 } }(e)) || t && e && "number" == typeof e.length) { r && (e = r); var n = 0,
                                o = function() {}; return { s: o, n: function() { return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] } }, e: function(e) { throw e }, f: o } } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") } var a, i = !0,
                        u = !1; return { s: function() { r = r.call(e) }, n: function() { var e = r.next(); return i = e.done, e }, e: function(e) { u = !0, a = e }, f: function() { try { i || null == r.return || r.return() } finally { if (u) throw a } } } }(r); try { for (s.s(); !(u = s.n()).done;) { var l = u.value;
                        n.has(l) && i.push(l) } } catch (e) { s.e(e) } finally { s.f() } return i }

            function M(e, t) {
                (null == t || t > e.length) && (t = e.length); for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r]; return n }

            function T(e, t) { return function(e) { return function(e) { if (Array.isArray(e)) return M(e) }(e) || function(e) { if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e) }(e) || function(e, t) { if (e) { if ("string" == typeof e) return M(e, t); var r = Object.prototype.toString.call(e).slice(8, -1); return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? M(e, t) : void 0 } }(e) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }(new Map(e.map((function(e) { return [e[t], e] }))).values()) } var W = [{ id: 1, hello: "whatsup" }, { id: 2, hello: "whatsup" }, { id: 1, hello: "whatsup" }];

            function q() { var e = T(W, "id");
                console.log(e) }

            function F() { var e = '\n    let filter = arrz.filterWithFuncObjectOrString(arr, { status: "to do" })\n    let trim = arrz.trimArr(arr) // trims if value is string\n    let count = arrz.countByCondition(arr, "id", 1) // returns number\n    let serach = arrz.search(arr, stringValue) // returns arr\n    let filter_values = arrz.filterValues(arr, stringValue, arrOfKeys)\n    let sortAsc = arrz.sortAsc(arr, stringKey)\n    let sortDesc = arrz.sortDesc(arr, stringKey)\n    let contains = arrz.contains(arr, stringKey, stringValue)\n    let doesNotContain = arrz.doesNotContain(arr, stringKey, stringValue)\n    let group = arrz.group(arr, stringKey)\n    let unique = arrz.getUnique(arr, stringKey)\n    let intersection = arrz.intersection(arr, arr2)\n    let merge = arrz.mergeByKeys({ data: arr, key: "id" }, { data: arr2, key: "id" })\n    let child = arrz.makeChildOfAnother({ data: arr, key: "id" }, { data: arr2, key: "id" })\n    let oneChild = arrz.getOneMakeChildOfAnother({ data: arr, key: "id", value: 2 }, { data: arr2, key: "id", value: 3 })\n    let remove = arrz.removeByFunction(arr, function removeObj(x) {\n        if (x.id === 2) {\n            return true;\n        }\n    })\n    let replacedKey = arrz.replaceKey(arr, originalKey, replaceKey)\n  '; return console.log(e), e } })(), o })() }));