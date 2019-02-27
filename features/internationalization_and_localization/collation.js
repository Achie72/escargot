function assert (a){ if (a != true){ throw Error("Assert failed"); }}
// in German,  "ä" sorts with "a"
// in Swedish, "ä" sorts after "z"
var list = [ "ä", "a", "z" ];
var l10nDE = new Intl.Collator("de");
var l10nSV = new Intl.Collator("sv");
l10nDE.compare("ä", "z") === -1;
l10nSV.compare("ä", "z") === +1;
assert(list.sort(l10nDE.compare) === "[a, ä, z]"); // [ "a", "ä", "z" ]
assert(list.sort(l10nSV.compare) === "[a, z, ä]"); // [ "a", "z", "ä" ]