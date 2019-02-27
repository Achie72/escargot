function assert (a){ if (a != true){ throw Error("Assert failed"); }}
assert(Math.trunc(42.7) == 42) // 42
assert(Math.trunc( 0.1) == 0) // 0
assert(Math.trunc(-0.1) == -0) // -0  