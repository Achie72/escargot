function assert (a){ if (a != true){ throw Error("Assert failed"); }}
var fibonacci = {
    *[Symbol.iterator]() {
        var pre = 0, cur = 1
        for (;;) {
            [ pre, cur ] = [ cur, pre + cur ]
            yield cur
        }
    }
}

for (var n of fibonacci) {
    if (n > 1000)
        break
    print(n)
}