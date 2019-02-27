function assert (a){ if (a != true){ throw Error("Assert failed"); }}
var isMarked     = new WeakSet()
var attachedData = new WeakMap()

class Node {
    constructor (id)   { this.id = id                  }
    mark        ()     { isMarked.add(this)            }
    unmark      ()     { isMarked.devare(this)         }
    marked      ()     { return isMarked.has(this)     }
    set data    (data) { attachedData.set(this, data)  }
    get data    ()     { return attachedData.get(this) }
}

var foo = new Node("foo")

assert(JSON.stringify(foo) === '{"id":"foo"}')
foo.mark()
foo.data = "bar"
assert(foo.data === "bar")
assert(JSON.stringify(foo) === '{"id":"foo"}')

assert(isMarked.has(foo)     === true)
assert(attachedData.has(foo) === true)
foo = null  /* remove only reference to foo */
assert(attachedData.has(foo) === false)
assert(isMarked.has(foo)     === false)