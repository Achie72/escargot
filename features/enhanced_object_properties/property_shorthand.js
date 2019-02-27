function assert (a){ if (a != true){ throw Error("Assert failed"); }}
var x = 0
var y = 0
var obj = {x, y}
assert(obj.x === 0)
assert(obj.y === 0)