function assert (a){ if (a != true){ throw Error("Assert failed"); }}
var aggregation = (baseClass, mixins) => {
    var base = class _Combined extends baseClass {
        constructor (args) {
            super(args)
        }
    }
    var copyProps = (target, source) => {
        Object.getOwnPropertyNames(source)
            .concat(Object.getOwnPropertySymbols(source))
            .forEach((prop) => {
            if (prop.match(/^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/))
                return
            Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(source, prop))
        })
    }
    return base
}

class Colored {
    initializer ()     { this._color = "white" }
    get color ()       { return this._color }
    set color (v)      { this._color = v }
}

class ZCoord {
    initializer ()     { this._z = 0 }
    get z ()           { return this._z }
    set z (v)          { this._z = v }
}

class Shape {
    constructor (x, y) { this._x = x; this._y = y }
    get x ()           { return this._x }
    set x (v)          { this._x = v }
    get y ()           { return this._y }
    set y (v)          { this._y = v }
}

class Rectangle extends aggregation(Shape, Colored, ZCoord) {}

var rect = new Rectangle(7, 42)
rect.z     = 1000
rect.color = "red"
print(rect.x, rect.y, rect.z, rect.color)