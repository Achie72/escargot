function assert (a){ if (a != true){ throw Error("Assert failed"); }}
import { sum, pi } from "../../feature-lib/maths";
assert("2π = " + sum(pi, pi) == "2π = 6.283186");