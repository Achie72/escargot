function assert (a){ if (a != true){ throw Error("Assert failed"); }}
var obj = {
    foo: "bar",
    [ "baz" + "quux" ]: 42
}
assert(Object.keys(obj) == "foo,bazquux")
assert(obj.foo == "bar")
assert(obj.bazquux == 42)
