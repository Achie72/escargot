function assert (a){ if (a != true){ throw Error("Assert failed"); }}
assert(Symbol("foo") !== Symbol("foo"))
var foo = Symbol()
var bar = Symbol()
assert(typeof foo === "symbol")
assert(typeof bar === "symbol")
var obj = {}
obj[foo] = "foo"
obj[bar] = "bar"
assert(JSON.stringify(obj)== "{}") // {}
assert(Object.keys(obj)== "[]") // []
assert(Object.getOwnPropertyNames(obj)== "[]") // []
assert(Object.getOwnPropertySymbols(obj)== "[]") // [ foo, bar ]