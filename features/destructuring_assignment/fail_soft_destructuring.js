function assert (a){ if (a != true){ throw Error("Assert failed"); }}
var list = [ 7, 42 ]
var [ a = 1, b = 2, c = 3, d ] = list
assert(a === 7)
assert(b === 42)
assert(c === 3)
assert(d === undefined)