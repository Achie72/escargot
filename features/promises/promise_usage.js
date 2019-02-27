function assert (a){ if (a != true){ throw Error("Assert failed"); }}
function msgAfterTimeout (msg, who) {
    return new Promise((resolve, reject) => {
        resolve(`${msg}Hello ${who}!`)
    })
}

msgAfterTimeout("", "Foo").then((msg) =>
    msgAfterTimeout(msg, "Bar")
).then((msg) => {
    assert(msg === "Hello Foo!Hello Bar!")
})