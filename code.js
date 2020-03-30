// "use strict";


// // Basic Algorithm Scripting: Reverse a StringPassed
// // Reverse the provided string.
// //
// //     You may need to turn the string into an array before you can reverse it.
// //
// //     Your result must be a string.
//
// function reverse (input){
//     var intoArray = input.split("");
//     var reverse = intoArray.reverse();
//     var joinBack = reverse.join("");
//     return joinBack;
// }
// console.log(reverse("hello"));
//
//
// // Basic Algorithm Scripting: Factorialize a NumberPassed
// // Return the factorial of the provided integer.
// //
// // If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
// //
// // Factorials are often represented with the shorthand notation n!
// //
// // For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
// //
// // Only integers greater than or equal to zero will be supplied to the function.
//
// function factorialize(num){
//     //1. where to start?
//     for (var product = 1; num > 0; num-- ){
//         product = product * num;
//     }
//     return product;
// }
// console.log(factorialize((5)));
//
// // Basic Algorithm Scripting: Find the Longest Word in a StringPassed
// // Return the length of the longest word in the provided sentence.
// //
// //     Your response should be a number.
//
// var arr = [10, 9, 8, 7, 6];
// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
//
// var myArr = [ 2, 3, 4, 5, 6];
//
// // Only change code below this line
// var total = 0;
// for (var i =0; i < myArr.length; i++) {
//     total += myArr[i];
//     console.log(total);
// }
//
// var arr = [
//     [1,2], [3,4], [5,6]
// ];
// for (var i=0; i < arr.length; i++) {
//     for (var j=0; j < arr[i].length; j++) {
//         console.log(arr[i][j]);
//     }
// }
//
// function multiplyAll(arr) {
//     var product = 1;
//     // Only change code below this line
//     for (var i = 0; i < arr.length; i++){
//         for (var j = 0; j <arr[i].length; j++){
//             // product *= (arr[i][j]);
//             product = product * (arr [i][j]);
//             console.log(product);
//         }
//     }
//     // Only change code above this line
//     return product;
// }
// console.log(multiplyAll([[1],[2],[3]]));

//
//

// function factorialize(num) {
//     var product = 0;
//     for (var product = 1; num > 0; num--){
//         product = product * num;
//     }
//     return product;
// }
//
// console.log(factorialize(10));

//product = product * number
// product = 1 * 5 = 5
// product = 5 *
// console.log(arraySeparated);
// console.log(arraySeparated.length);


//Find the Longest Word in a StringPassed - return the length of the longest word in the provided sentence.
// Your response should be a number.
// function findLongestWordLength(str) {
//     var arraySeparated = str.split(' ');
//     var length = 0;
//     console.log("word at position 0: " + arraySeparated[0] + "// " + 'length at index 0: ' + arraySeparated[0].length);
//     console.log("word at position 1: " + arraySeparated[1] + "// " + 'length at index 1: ' + arraySeparated[1].length);
//     console.log("word at position 2: " + arraySeparated[2] + "// " + 'length at index 2: ' + arraySeparated[2].length);
//     console.log("word at position 3: " + arraySeparated[3] + "// " + 'length at index 3: ' + arraySeparated[3].length);
//     console.log("word at position 4: " + arraySeparated[4] + "// " + 'length at index 4: ' + arraySeparated[4].length);
//     // console.log("word at position 5: " + arraySeparated[5] + "// " + 'length at index 5: ' + arraySeparated[5].length);
//     // console.log("word at position 6: " + arraySeparated[6] + "// " + 'length at index 6: ' + arraySeparated[6].length);
//     // console.log("word at position 7: " + arraySeparated[7] + "// " + 'length at index 7: ' + arraySeparated[7].length);
//     // console.log("word at position 8: " + arraySeparated[8] + "// " + 'length at index 8: ' + arraySeparated[8].length);
//     for (var indexPosition = 0; indexPosition < arraySeparated.length; indexPosition++) {
//         console.log('before comparsion, the length is: ' + arraySeparated[indexPosition].length);
//         if (arraySeparated[indexPosition].length > length) {
//             length = arraySeparated[indexPosition].length;
//             console.log("the new longest length is: " + length);
//         }
//     }
//     return length;
// }
//
// console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWordLength("May the force be with you"));

//Basic Algorithm Scripting: Return Largest Numbers in ArraysPassed
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].


function largestOfFour(arr) {
    var largestArray =[];
    for (var i = 0; i < arr.length; i++){
            console.log('the largest number in this array is: ' + Math.max(...arr[i]));
            largestArray.push(Math.max(...arr[i]));
    }
    return largestArray;

}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

//1. in each nested array, find the largest number  - loop through each nested array and return the largest number (Math.max?)
//2. create a new array with largest number - push or splice
//3.return new array












