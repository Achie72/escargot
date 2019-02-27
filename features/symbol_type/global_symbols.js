function assert (a){ if (a != true){ throw Error("Assert failed"); }}
assert(Symbol.for("app.foo") === Symbol.for("app.foo"))
var foo = Symbol.for("app.foo")
var bar = Symbol.for("app.bar")
assert(Symbol.keyFor(foo) === "app.foo")
assert(Symbol.keyFor(bar) === "app.bar")
assert(typeof foo === "symbol")
assert(typeof bar === "symbol")
var obj = {}
obj[foo] = "foo"
obj[bar] = "bar"
assert(JSON.stringify(obj) === "{}") // {}
assert(Object.keys(obj) === "[]")// []
assert(Object.getOwnPropertyNames(obj) === "[]") // []
assert(Object.getOwnPropertySymbols(obj) === "[foo, bar]") // [ foo, bar ]