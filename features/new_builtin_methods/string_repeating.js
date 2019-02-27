function assert (a){ if (a != true){ throw Error("Assert failed"); }}
var depth = 3
assert(" ".repeat(4 * depth) == "            ")
assert("foo".repeat(3) == "foofoofoo")