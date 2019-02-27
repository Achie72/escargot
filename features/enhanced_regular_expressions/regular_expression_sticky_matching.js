function assert (a){ if (a != true){ throw Error("Assert failed"); }}
var result = []
var parser = (input, match) => {
    for (var pos = 0, lastPos = input.length; pos < lastPos; ) {
        for (var i = 0; i < match.length; i++) {
            match[i].pattern.lastIndex = pos
            var found
            if ((found = match[i].pattern.exec(input)) !== null) {
                match[i].action(found)
                pos = match[i].pattern.lastIndex
                break
            }
        }
    }
}

var report = (match) => {
    result.push(JSON.stringify(match))
}

parser("Foo 1 Bar 7 Baz 42", [
    { pattern: "/Foo\s+(\d+)/y", action: (match) => report(match) },
    { pattern: "/Bar\s+(\d+)/y", action: (match) => report(match) },
    { pattern: "/Baz\s+(\d+)/y", action: (match) => report(match) },
    { pattern: "/\s*/y",         action: (match) => {}            }
])
assert(result[0] === '["Foo 1","1"]');
assert(result[1] === '["Bar 7","7"]');
assert(result[2] === '["Baz 42","42"]');
