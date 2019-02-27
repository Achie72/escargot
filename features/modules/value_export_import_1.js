function assert (a){ if (a != true){ throw Error("Assert failed"); }}
import * as math from "../../feature-lib/maths";
assert("2π = " + math.sum(math.pi, math.pi) == "2π = 6.283186");

