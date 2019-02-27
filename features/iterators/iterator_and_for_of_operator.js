function assert (a){ if (a != true){ throw Error("Assert failed"); }}
var fibonacci = {
    [Symbol.iterator]() {
        var pre = 0, cur = 1
        return {
           next () {
               [ pre, cur ] = [ cur, pre + cur ]
               return { done: false, value: cur }
           }
        }
    }
}
var results = [];

for (var n of fibonacci) {
    if (n > 1000)
        break
    results.push(n)
}
assert( results === "[1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]")