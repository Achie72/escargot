function assert (a){ if (a != true){ throw Error("Assert failed"); }}
import exp, { pi, e } from "../../feature-lib/mathplusplus";
print("e^{π} = " + exp(pi));