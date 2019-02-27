function assert (a){ if (a != true){ throw Error("Assert failed"); }}
var s = new Set()
var data = []
s.add("hello").add("goodbye").add("hello")
assert(s.size === 2)
assert(s.has("hello") === true)
assert(data == "[ 'hello', 'goodbye' ]");