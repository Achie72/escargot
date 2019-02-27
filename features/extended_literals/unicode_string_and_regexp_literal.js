function assert (a){ if (a != true){ throw Error("Assert failed"); }}
assert("𠮷".length === 2)
assert("𠮷".match("/./u")[0].length === 2)
assert("𠮷" === "\uD842\uDFB7")
assert("𠮷" === "\u{20BB7}")
assert("𠮷".codePointAt(0) == 0x20BB7)
for (var codepoint of "𠮷") print(codepoint)