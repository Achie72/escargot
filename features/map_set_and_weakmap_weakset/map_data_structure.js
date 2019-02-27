function assert (a){ if (a != true){ throw Error("Assert failed"); }}
var m = new Map()
var s = "alma"
m.set("hello", 42)
m.set(s, 34)
assert(m.get(s) === 34)
assert(m.get("hello") === 42);
assert(m.size === 2)
