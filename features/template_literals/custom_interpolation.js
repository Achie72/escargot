function assert (a){ if (a != true){ throw Error("Assert failed"); }}
get `http://example.com/foo?bar=${bar + baz}&quux=${quux}`