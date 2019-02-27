function assert (a){ if (a != true){ throw Error("Assert failed"); }}
assert("hello".startsWith("ello", 1) == true) // true
assert("hello".endsWith("hell", 4) == true) // true
assert("hello".includes("ell") == true) // true
assert("hello".includes("ell", 1) == true) // true
assert("hello".includes("ell", 2) == false) // false