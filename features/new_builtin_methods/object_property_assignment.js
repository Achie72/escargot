function assert (a){ if (a != true){ throw Error("Assert failed"); }}
var dest = { quux: 0 }
var src1 = { foo: 1, bar: 2 }
var src2 = { foo: 3, baz: 4 }
Object.assign(dest, src1, src2)
assert(dest.quux === 0)
assert(dest.foo  === 3)
assert(dest.bar  === 2)
assert(dest.baz  === 4)