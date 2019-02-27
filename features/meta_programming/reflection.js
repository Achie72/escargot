function assert (a){ if (a != true){ throw Error("Assert failed"); }}
var obj = { a: 1 };
Object.defineProperty(obj, "b", { value: 2 });
obj[Symbol("c")] = 3;
assert(Reflect.ownKeys(obj) === ["a","b",Symbol(c)]); // [ "a", "b", Symbol(c) ]