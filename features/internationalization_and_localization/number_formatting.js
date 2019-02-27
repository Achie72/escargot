function assert (a){ if (a != true){ throw Error("Assert failed"); }}
var l10nEN = new Intl.NumberFormat("en-US");
var l10nDE = new Intl.NumberFormat("de-DE");
assert(l10nEN.format(1234567.89) === "1,234,567.89");
assert(l10nDE.format(1234567.89) === "1.234.567,89");