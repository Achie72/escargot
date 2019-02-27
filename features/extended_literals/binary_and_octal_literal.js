function assert (a){ if (a != true){ throw Error("Assert failed"); }}
assert(0b111110111 === 503)
assert(0o767 === 503)