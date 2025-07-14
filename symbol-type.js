// Symbols unlock powerful patterns for unique keys, metadata, and meta-programming. 
// They are immutable, unique, and can be used to create private properties in objects.
// Symbols are a primitive data type introduced in ES6 (ECMAScript 2015).
// They are used to create unique identifiers for object properties, which can help avoid name collisions in large applications or libraries.
// Symbols are not enumerable, meaning they do not show up in for...in loops or Object.keys().
// They can be used as keys for object properties, allowing for private or hidden properties.
// Symbols can be created using the Symbol() function, and they can also be registered in a global symbol registry using Symbol.for().
// The Symbol.for() method allows you to create or retrieve a symbol from a global registry,
// which can be useful for sharing symbols across different parts of an application or even across different modules.
// Symbols can also be used to define well-known symbols, which are built-in symbols that provide custom behavior for certain operations in JavaScript, such as iteration, property access, and object conversion.
// They are particularly useful for creating unique keys in objects, avoiding name collisions, and implementing private properties or methods in classes.

// Symbols in JavaScript

const sym = Symbol("id");
console.log('Type of sym: ', typeof sym); // "symbol"
console.log(sym.description); // "id"
console.log(sym.toString()); // "Symbol(id)"

const sym2 = Symbol("id");
console.log(sym === sym2); // false, each Symbol is unique

const ID = Symbol("id");
const user = {
  name: "Alice",
  [ID]: 42
};

console.log(user[ID]); // 42

for (let key in user) {
  console.log(key); // only "name", symbol keys skipped
}

console.log(Object.getOwnPropertySymbols(user));  
// [ Symbol(id) ]

const symGlobal1 = Symbol.for("app.id");
const symGlobal2 = Symbol.for("app.id");
console.log(symGlobal1 === symGlobal2);  // true
console.log(Symbol.keyFor(symGlobal1));  // "app.id"

/*
Well-Known Symbols
JavaScript provides built-in symbols—so-called well-known symbols—that customize language behavior. A few examples:
| Symbol                    | Purpose                                  | 
| Symbol.iterator           | Default iterator for for…of loops        | 
| Symbol.toPrimitive        | Customizes object → primitive conversion | 
| Symbol.isConcatSpreadable | Controls spreading in Array.concat()     | 
*/

const iterable = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  }
};

for (const value of iterable) {
  console.log(value); // 1, 2, 3
}

const primitive = {
    [Symbol.toPrimitive](hint) {
        if (hint === "string") return "Custom String";
        if (hint === "number") return 42;
        return true;
    }
};
console.log(String(primitive)); // "Custom String" 
console.log(Number(primitive)); // 42
console.log(primitive + 1); // 43 (default conversion to number)

const concatSpreadable = {
  [Symbol.isConcatSpreadable]: true,
  length: 2,
  0: "a",
  1: "b"
};
const arr = ["x", "y"].concat(concatSpreadable);
console.log(arr); // ["x", "y", "a", "b"]

const nonConcatSpreadable = {
  length: 2,
  0: "c",
  1: "d"
};
const arr2 = ["x", "y"].concat(nonConcatSpreadable);
console.log(arr2); // ["x", "y", { length: 2, 0: "c", 1: "d" }]

class Range {
  constructor(from, to) { 
    this.from = from; 
    this.to = to; 
}
  *[Symbol.iterator]() {
    for (let v = this.from; v <= this.to; v++) yield v;
  }
}

for (let n of new Range(1, 3)) {
  console.log(n);  // 1, 2, 3
}
