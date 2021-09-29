//_______1) Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10. 
// var arr1 = [3, 9, 15, 4, 10]
// I need to create a variable called multiplier that will itirate through my array of numbers.
//I need need this function the multiply every number in my array by 10 and return it into an array of the same length using the map function.
// const multiplier = (array) => {
//     return array.map(value => value * 10)
// }
// console.log(multiplier(arr1));

//_______2) Write a function that takes in an array of numbers and returns a new array with only odd numbers.
// var arr2 = [2, 7, 3, 5, 8, 10, 13]
// Psuedo Code:
// First I need to write a function that will return an array. 
// I need that function to return a smaller array with JUST the odd numbers.
// I'm going to attempt a filter function.

// const oddsOnly = (array) => {
//     return array.filter((_value, index) => {
//         return index % 2 !== 0
//     })
// }
// console.log(oddsOnly(arr2));

//______3) Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method
var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// --> "nicework"
// Psuedo Code
// I need to write a function that will take in array of numbers, true and false, and string and return just the string. 
// First I'm going to name my function
// Second, I'm going to use the filter function to itirate through my array
// Then I'm going to attempt to use typeOf to sort out the string.

// const stringSort = (array) => {
//     return array.map(value => typeof value === "string")
// }
// console.log(stringSort(comboArr));