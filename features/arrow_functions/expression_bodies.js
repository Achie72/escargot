function assert (a){ if (a != true){ throw Error("Assert failed"); }}
var evens = [2,4,6,8,10]
var odds  = evens.map(v => v + 1)
var pairs = evens.map(v => ({ even: v, odd: v + 1 }))
var nums  = evens.map((v, i) => v + i)
for( var i = 0; i < evens.length; i++) {
  assert(pairs[i].odd == odds[i])
  assert(pairs[i].even == evens[i])
  assert(nums[i] == evens[i]+i)
}