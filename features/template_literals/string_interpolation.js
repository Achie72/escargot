function assert (a){ if (a != true){ throw Error("Assert failed"); }}
var customer = { name: "Foo" }
var card = { amount: 7, product: "Bar", unitprice: 42 }
var message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`
assert(message === "Hello Foo,\nwant to buy 7 Bar for\na total of 294 bucks?")
