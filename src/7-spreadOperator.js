// spreading the array out into individuals elements!!!

console.log([1,2,3]); //[1,2,3]
console.log(...[1,2,3]); // 1 2 3


let first = [1,2,3];
let second = [4,5,6];

// first.push(second)
// console.log(first); //[1,2,3,[4,5,6]]

// first.push(...second);
// console.log(first); //[1,2,3,4,5,6]

function addTree(a,b,c) {
    let result = a + b + c;
    console.log(result);   
}

addTree(...first); //6
addTree(...second); //15