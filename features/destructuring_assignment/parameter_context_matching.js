function assert (a){ if (a != true){ throw Error("Assert failed"); }}
var glob_name
var glob_val

function f ([ name, val ]) {
  glob_name = name
  glob_val = val
}
function g ({ name: n, val: v }) {
  glob_name = n
  glob_val = v
}
function h ({ name, val }) {
  glob_name = name
  glob_val = val
}
f([ "bar", 42 ])
assert(glob_name == "bar")
assert(glob_val == 42)

g({ name: "foo", val:  7 })
assert(glob_name == "foo")
assert(glob_val == 7)

h({ name: "bar", val: 42 })
assert(glob_name == "bar")
assert(glob_val == 42)
