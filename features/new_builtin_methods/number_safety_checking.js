function assert (a){ if (a != true){ throw Error("Assert failed"); }}
assert(Number.isSafeInteger(42))
assert(!Number.isSafeInteger(9007199254740992))