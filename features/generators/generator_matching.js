function assert (a){ if (a != true){ throw Error("Assert failed"); }}
var fibonacci = function* (numbers) {
    var pre = 0, cur = 1
    while (numbers-- > 0) {
        [ pre, cur ] = [ cur, pre + cur ]
        yield cur
    }
}

for (var n of fibonacci(1000))
    print(n)

var numbers = [ ...fibonacci(1000) ]

var [ n1, n2, n3, ...others ] = fibonacci(1000)