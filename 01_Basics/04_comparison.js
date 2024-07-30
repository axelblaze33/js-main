// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0); //(1)
console.log(null == 0); //(2)
console.log(null >= 0);  //(3) null is converted to zero because of comparison operation

/*The reason is that an equality check == and comparison > < >= <= works differently
Comparisons convert null to a number,treating it to a 0
Thats why (3) null >=0 is true and (1) null > 0 is false
*/

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === 

console.log("2" === 2); 