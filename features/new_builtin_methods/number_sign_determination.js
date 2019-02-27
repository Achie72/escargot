function assert (a){ if (a != true){ throw Error("Assert failed"); }}
assert((Math.sign(7)) == 1)   // 1
assert((Math.sign(0)) == 0)   // 0
assert((Math.sign(-0)) == -0)  // -0
assert((Math.sign(-7)) == -1)  // -1
assert((Math.sign(NaN)) == NaN) // NaN