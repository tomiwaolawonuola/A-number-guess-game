

const arr = [26, 86, 45, 69, 25, 45]; // Taking random array

// Map function
// Defination:- it returns the new array from the base array after implementing some logic on int.
// length of the new array is always equal to length of the base array
const mapArr = arr.map((value) => value * 2);
console.log(mapArr); // [ 52, 172, 90, 138, 50, 90 ]
console.log(arr.length === mapArr.length); // true


const pets = ["dog", "chicken", "cat", "dog", "chicken", "chicken", "rabbit"];
// lets count animals with reduce

const petCount = pets.reduce((obj, pet) => {
  obj[pet] ? obj[pet]++ : (obj[pet] = 1); // explenation:- if object has Dog in it than increase its count else add Dog and assign the value of 1
  return obj;
}, {});

console.log(petCount);



