function assert (a){ if (a != true){ throw Error("Assert failed"); }}
//  ES6 class equivalent to the following C structure:
//  struct Example { unsigned long id; char username[16]; float amountDue }
var buffer = new ArrayBuffer(24)
var u32_typed_array = new Uint32Array (buffer,  0,  1);
var u8_typed_array = new Uint8Array  (buffer,  4, 16);
var f32_typed_array = new Float32Array(buffer, 20,  1);
