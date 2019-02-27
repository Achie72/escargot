function assert (a){ if (a != true){ throw Error("Assert failed"); }}
var glob_a = 0
var glob_b = 0
obj = {
    foo (a, b) {
      glob_a = a
      glob_b = b
    }
}
obj.foo(2,3)
assert(glob_a === 2)
assert(glob_b === 3)