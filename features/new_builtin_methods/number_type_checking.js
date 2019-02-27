function assert (a){ if (a != true){ throw Error("Assert failed"); }}
assert(Number.isNaN(42) === false)
assert(Number.isNaN(NaN) === true)

assert(Number.isFinite(Infinity) === false)
assert(Number.isFinite(-Infinity) === false)
assert(Number.isFinite(NaN) === false)
assert(Number.isFinite(123) === true)