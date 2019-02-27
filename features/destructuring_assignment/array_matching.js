function assert (a){ if (a != true){ throw Error("Assert failed"); }}
var list = [ 1, 2, 3 ]
var [ a, , b ] = list
assert(a == 1)
assert(b == 3)