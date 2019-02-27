function assert (a){ if (a != true){ throw Error("Assert failed"); }}
assert([ 1, 3, 4, 2 ].find(x => x > 3) === 4) // 4
assert([ 1, 3, 4, 2 ].findIndex(x => x > 3) === 2) // 2