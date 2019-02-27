function assert (a){ if (a != true){ throw Error("Assert failed"); }}
//  generic asynchronous control-flow driver
function async (proc, ...params) {
    var iterator = proc(...params)
    return new Promise((resolve, reject) => {
        var loop = (value) => {
            var result
            try {
                result = iterator.next(value)
            }
            catch (err) {
                reject(err)
            }
            if (result.done)
                resolve(result.value)
            else if (   typeof result.value      === "object"
                     && typeof result.value.then === "function")
                result.value.then((value) => {
                    loop(value)
                }, (err) => {
                    reject(err)
                })
            else
                loop(result.value)
        }
        loop()
    })
}

//  application-specific asynchronous builder
function makeAsync (text, after) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(text), after)
    })
}

//  application-specific asynchronous procedure
async(function* (greeting) {
    var foo = yield makeAsync("foo", 300)
    var bar = yield makeAsync("bar", 200)
    var baz = yield makeAsync("baz", 100)
    return `${greeting} ${foo} ${bar} ${baz}`
}, "Hello").then((msg) => {
    print("RESULT:", msg) // "Hello foo bar baz"
})