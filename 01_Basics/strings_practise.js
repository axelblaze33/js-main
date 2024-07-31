//string functions.

const name1 = "Pranav"

const name = new String('Hello-World')
const str = "!"
console.log(name);
console.log(name.valueOf())

// console.log(name.anchor());
// console.log(name.at(-2));
// console.log(name.big());

// console.log(name.charAt(2));
// console.log(name.charCodeAt(2));

// console.log(name.codePointAt(4));
// console.log(name.concat(str));
// console.log(name.concat(" Hello", " People"));
// console.log(name.concat(" Hello"))

// console.log(name.endsWith("World"))

// console.log(name.includes("Hello"))

// "To Whale".toLowerCase().includes("TO")

// console.log(name.indexOf("World"))

// console.log(name.isWellFromed())

const paragraph = "I think Ruth's dog is cuter than your dog!";

const searchTerm = 'dog';

console.log(
  `Index of the last ${searchTerm} is ${paragraph.lastIndexOf(searchTerm)}`,
);
const Pq = "123"
const newName = Boolean(Pq)

console.log(typeof Pq)

const newVariable = new String('    Hello      ')
console.log(newVariable.trimStart());
console.log(newVariable.trimEnd());   