/*
Bessere Art Von
Erstelle eine Funktion namens betterTypeOf, die einen einzelnen Parameter namens value akzeptiert und den Typ dieses Wertes zurückgibt.
Zum Beispiel:
betterTypeOf(1); // 'number'
betterTypeOf("hello"); // 'string'
betterTypeOf(true); // 'boolean'
betterTypeOf(""); // 'string'
betterTypeOf([1, 2, 3]); // 'array'
betterTypeOf(["a", "b", "c"]); // 'array'
const person = {
    fullName: "Sandy Smith",
    age: 28
};
betterTypeOf(person); // "object"
Achte besonders auf die Fälle, in denen der Wert ein Array ist.
*/

function betterTypeOf(value) {
  if (typeof value === "string") {
    return "string";
  } else if (typeof value === "number") {
    return "number";
  } else if (typeof value === "boolean") {
    return "boolean";
  } else if (Array.isArray(value)) {
    return "array";
  } else if (typeof value === "object") {
    return "object";
  } else {
    return "undefined";
  }
}
console.log(betterTypeOf(1)); // 'number'
console.log(betterTypeOf("hello")); // 'string'
console.log(betterTypeOf(true)); // 'boolean'
console.log(betterTypeOf("")); // 'string'
console.log(betterTypeOf([1, 2, 3])); // 'array'
console.log(betterTypeOf(["a", "b", "c"])); // 'array'
const person = {
  fullName: "Sandy Smith",
  age: 28,
};
console.log(betterTypeOf(person)); // "object"

// andere Lösung-1

function betterTypeOf1(value) {
  switch (typeof value) {
    case "string":
      return "string";
    case "number":
      return "number";
    case "boolean":
      return "boolean";
    case "object":
      if (Array.isArray(value)) {
        return "array";
      } else {
        return "object";
      }
    default:
      return "undefined";
  }
}

console.log(betterTypeOf1(1)); // 'number'
console.log(betterTypeOf1("hello")); // 'string'
console.log(betterTypeOf1(true)); // 'boolean'
console.log(betterTypeOf1("")); // 'string'
console.log(betterTypeOf1([1, 2, 3])); // 'array'
console.log(betterTypeOf1(["a", "b", "c"])); // 'array'
const person1 = {
  fullName: "Sandy Smith",
  age: 28,
};
console.log(betterTypeOf1(person1)); // "object"

// andere Lösung-2

function betterTypeOf2(value) {
  return typeof value === "string"
    ? "string"
    : typeof value === "number"
    ? "number"
    : typeof value === "boolean"
    ? "boolean"
    : Array.isArray(value)
    ? "array"
    : typeof value === "object"
    ? "object"
    : "undefined";
}
console.log(betterTypeOf2(1)); // 'number'
console.log(betterTypeOf2("hello")); // 'string'
console.log(betterTypeOf2(true)); // 'boolean'
console.log(betterTypeOf2("")); // 'string'
console.log(betterTypeOf2([1, 2, 3])); // 'array'
console.log(betterTypeOf2(["a", "b", "c"])); // 'array'
const person2 = {
  fullName: "Sandy Smith",
  age: 28,
};
console.log(betterTypeOf2(person2)); // "object"


