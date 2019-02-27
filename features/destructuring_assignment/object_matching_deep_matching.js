function assert (a){ if (a != true){ throw Error("Assert failed"); }}
function getASTNode(){
  var obj = {}
  obj.op = 1
  obj.lhs = {
    op : 2
  }
  obj.rhs = 3
  return obj
}



var { op: a, lhs: { op: b }, rhs: c } = getASTNode()
assert(a == 1)
assert(b == 2)
assert(c == 3)