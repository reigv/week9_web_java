console.log("Hello World!");
console.log("Today is Tuesday!!");

let name = "John";
console.log("My name is " + name);
name = 123; //this is LOOSELY TYPED
console.log("My name is " + name);

const PI = 3.14;
console.log("The value of PI is " + PI);

console.log(typeof PI);
console.log(typeof name);

let x=parseInt(PI);
console.log("The value of x is " + x);
console.log(typeof x);

// array
console.log("This is an array:");
let arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(typeof arr); // type object
console.log(arr.length); // length of the array
console.log(arr[0]);    // accessing the first element of the array


const fruits = ["apple", "banana", "cherry"];
fruits.push("date"); // adding an element to the end of the array
console.log(fruits);
fruits.pop(); // removing the last element of the array
console.log(fruits);
fruits.unshift("avocado"); // adding an element to the beginning of the array
console.log(fruits);
fruits.shift();
console.log(fruits); // removing the first element of the array
fruits.splice(1, 2); // removing elements from index 1 to 2 /// splice not slice
console.log(fruits);

let arr2 = [1, 2, 3, 4, 5];
console.log(arr2[0]);
//print the last element of the array
console.log(arr2[arr2.length - 1]);
arr2.push(6);
console.log(arr2);
arr2.shift();
console.log(arr2);


//loop 
const countries = ["India", "USA", "UK", "Australia"];
for (let c of countries) {
    console.log(c);
}