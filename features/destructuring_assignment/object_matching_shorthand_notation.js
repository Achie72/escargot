function assert (a){ if (a != true){ throw Error("Assert failed"); }}
function getASTNode(){
  var obj = {};
  obj.op = 1;
  obj.lhs = 2;
  obj.rhs = 3;

  return obj
}

var { op, lhs, rhs } = getASTNode()
assert(a == 1)
assert(b == 2)
assert(c == 3)