const names = ["brijesh", "allen", "curtis", "stephen", "ruben"];

// Print the length of the array
console.log(names.length);
// Print the 2nd name of the array
console.log(names[1]);
// Add new name and return new array
new_names = names.concat("nesho");
console.log(new_names);

//Create an array of all numbers from 1 to 10. Calculate the sum of all these numbers by looping through the array.
//You can use the method forEach to iterate over each element.

const numbers = [1, 2, 3, 4, 7, 6, 7, 8, 9, 10];
let sum = 0;
numbers.forEach((num) => {
  sum += num;
  console.log(sum);
});
