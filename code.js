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


// function largestOfFour(arr) {
//     var largestArray = [];
//     for (var i = 0; i < arr.length; i++) {
//         console.log('the largest number in this array is: ' + Math.max(...arr[i]));
//         largestArray.push(Math.max(...arr[i]));
//     }
//     return largestArray;
//
// }
//
// console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

//1. in each nested array, find the largest number  - loop through each nested array and return the largest number (Math.max?)
//2. create a new array with largest number - push or splice
//3.return new array


// Confirm the Ending
// Check if a string (first argument, str) ends with the given target string (second argument, target).
//
// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
//

// function confirmEnding(str, target) {
//     if ((str.substring(str.length-1) === target)){
//         return "true";
//     } else{
//         return false;
//     }
// }
//
// console.log(confirmEnding("Bastian", "n"));
// console.log(confirmEnding("edward", "g"));
// console.log(confirmEnding("edward", "ward"));

//1. if the last character of the string is the same character as the target, return true. //
//2. if it does not end with the same character, end with false

// var string = "Nayoung";
// var lastCharacter = (string.substring(string.length-1)); // this will get you the last character in your string
// console.log(lastCharacter);

//
// function sumAll (numbers){
//     var sum =0;
//     for (var i =0; i <numbers.length; i++){
//         sum = sum + numbers[i];
//     }
//     return sum;
// }
//
//
// console.log(sumAll([1, 2, 3, 4]), 10, "Exercise 60");
// console.log(sumAll([3, 3, 3]), 9, "Exercise 60");
// console.log(sumAll([0, 5, 6]), 11, "Exercise 60");
//
// function mean(arr){
//     return sumAll(arr)/arr.length
// }
//
// console.log(mean([1, 2, 3, 4]), 2.5, "Exercise 61");
// console.log(mean([3, 3, 3]), 3, "Exercise 61");
// console.log(mean([1, 5, 6]), 4, "Exercise 61");
// //
// function median (seq) {
//     if (seq.length % 2 === 1) {
//         var middleNumber = seq[Math.round((seq.length - 1) / 2)];
//         return middleNumber;
//     } else {
//         return ((seq[0] + (seq[seq.length - 1])) / 2);
//     }
// }
//
// console.log(median([1, 2, 3, 4, 5]), 3.0, "Exercise 62");
// console.log(median([1, 2, 3]), 2.0, "Exercise 62");
// console.log(median([1, 5, 6]), 5.0, "Exercise 62");
// console.log(median([1, 2, 5, 6]), 3.5, "Exercise 62");
//


// function maxMinusMin(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (i === Math.max(arr[i]) && i === Math.max(arr[i])) {
//             return Math.max(arr[i])- Math.max(arr[i])
//         }
//     }
// }
//
// console.log(maxMinusMin([1, 2, 2, 8, 3, 4]));
//
// // console.log(maxMinusMin([1, 2, 2, 8, 3, 4]), 7, "Exercise 63");
// // console.log(maxMinusMin([1, 1, 2, 3, 9]), 8, "Exercise 63");
// // console.log(maxMinusMin([2, 2, 3, 3, 3, 7]), 5, "Exercise 63");
// // addToDone("Exercise 63 is correct.");

// Exercise 64
// Write a function definition named productOfAll that takes in sequence of numbers and returns the product of multiplying all the numbers together

// function productOfAll(seq){
//     var product = 1;
//     for (var i = 0; i < seq.length; i++){
//         product = product * seq[i];
//     }
//     return product;
// }
//
// console.log(productOfAll([1, 2, 3]), 6, "Exercise 64");
// console.log(productOfAll([3, 4, 5]), 60, "Exercise 64");
// console.log(productOfAll([2, 2, 3, 0]), 0, "Exercise 64");

// // Exercise 65
// // // // Write a function definition named getHighestNumber that takes in sequence of numbers and returns the largest number.
// // //
// // // function getHighestNumber(seq){
// // //    return Math.max(...seq);
// // // }
// // // console.log(getHighestNumber([1, 2, 3]), 3, "Exercise 65");
// // // console.log(getHighestNumber([1, 5, 2, 3, 4]), 5, "Exercise 65");
// // // console.log(getHighestNumber([5, 1, 2, 4, 9]), 9, "Exercise 65");


// Exercise 71
// Write a function definition named hasEvens that takes in sequence of numbers and returns true if there are any even numbers in the sequence
// function hasEvens (input) {
//     if (input.every(function(number) {
//         return number % 2 != 0;
//     })) { return false
//
//     } else {
//         return true
//     }
//
// }
// console.log(hasEvens([1, 2, 3]), true, "Exercise 71");
// console.log(hasEvens([2, 5, 6]), true, "Exercise 71");
// console.log(hasEvens([3, 3, 3]), false, "Exercise 71");
// console.log(hasEvens([]), false, "Exercise 71");


// Exercise 72
// Write a function definition named countEvens that takes in sequence of numbers and returns the number of even numbers
//
// function countEvens(seq) {
//     var counter = [];
//     for (var i = 0; i < seq.length; i++) {
//         if (seq[i] % 2 === 0) {
//            counter.push(seq[i]);
//         }
//     }
//     return counter.length;
// }
//
// console.log(countEvens([1, 2, 3]), 1, "Exercise 72");
// console.log(countEvens([2, 5, 6]), 2, "Exercise 72");
// console.log(countEvens([3, 3, 3]), 0, "Exercise 72");
// console.log(countEvens([5, 6, 7, 8]), 2, "Exercise 72");

// function countOdds(seq){
//     var oddNumbers = [];
//     for (var i = 0; i < seq.length; i++){
//         if (seq[i] % 2 === 1){
//             oddNumbers.push(seq[i]);
//         }
//     }
//     return oddNumbers.length;
// }
//
// console.log(countOdds([1, 2, 3]), 2, "Exercise 74");
// console.log(countOdds([2, 5, 6]), 1, "Exercise 74");
// console.log(countOdds([3, 3, 3]), 3, "Exercise 74");
// console.log(countOdds([2, 4, 6]), 0, "Exercise 74");

// Exercise 81
// Write a function definition named shortestString that takes in an array of strings and returns the shortest string in the array.

//  var fruits = ["kiwi", "mango", "strawberry"];
//
// console.log (fruits[0].length);
// console.log (fruits[1].length);
// console.log (fruits[2].length);
// function shortestString(arr) {
//     var wordLength = arr[0];
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i].length < wordLength.length) {
//             wordLength = (arr[i]);
//         }
//     }
//     return wordLength;
// }
//
// console.log(shortestString(["kiwi", "mango", "strawberry"]), "kiwi", "Exercise 81");
// console.log(shortestString(["hello", "everybody"]), "hello", "Exercise 81");
// console.log(shortestString(["mary", "had", "a", "little", "lamb"]), "a", "Exercise 81");
//
// function longestString (arr){
//     var wordLength = arr[0];
//     for (var i = 0; i < arr.length; i++){
//         if (arr[i].length > wordLength.length){
//             wordLength = arr[i];
//         }
//     }
//     return wordLength;
// }
// console.log(
//     longestString(["kiwi", "mango", "strawberry"]),
//     "strawberry",
//     "Exercise 82"
// );
// console.log(longestString(["hello", "everybody"]), "everybody", "Exercise 82");
// console.log(
//     longestString(["mary", "had", "a", "little", "lamb"]),
//     "little",
//     "Exercise 82"
// );

//Exercise 83
// Write a function definition named getUniqueValues that takes in an array and returns an with only the unique values from that array.

//     function getUniqueValues(stringArray) {
//         let result = [stringArray[0]];
//
//         for (let i = 1; i < stringArray.length; i++) {
//             if (!result.includes(stringArray[i])) {
//                 result.push(stringArray[i]);
//             }
//         }
//         return result;
//     }
//
//
// //1. look for any repeat values
// //2. remove repeat values
// //3. return an array with just the unique values
//
// console.log(
//     getUniqueValues(["ant", "ant", "mosquito", "mosquito", "ladybug"]),
//     ["ant", "mosquito", "ladybug"],
//     "Exercise 83"
// );
// console.log(
//     getUniqueValues(["b", "a", "n", "a", "n", "a", "s"]),
//     ["b", "a", "n", "s"],
//     "Exercise 83"
// );
// console.log(
//     getUniqueValues([
//         "mary",
//         "had",
//         "a",
//         "little",
//         "lamb",
//         "little",
//         "lamb",
//         "little",
//         "lamb"
//     ]),
//     ["mary", "had", "a", "little", "lamb"],
//     "Exercise 83"
// );

// const books = [
//     {
//         title: "Genetic Algorithms and Machine Learning for Programmers",
//         price: 36.99,
//         author: "Frances Buontempo"
//     },
//     {
//         title: "The Visual Display of Quantitative Information",
//         price: 38.0,
//         author: "Edward Tufte"
//     },
//     {
//         title: "Practical Object-Oriented Design",
//         author: "Sandi Metz",
//         price: 30.47
//     },
//     {
//         title: "Weapons of Math Destruction",
//         author: "Cathy O'Neil",
//         price: 17.44
//     }
// ];

// Exercise 94
// Write a function called highestPriceBook that takes in the above defined array of objects "books" and returns the object containing the title, price, and author of the book with the highest priced book.
// Hint: Much like sometimes start functions with a variable set to zero, you may want to create a object with the price set to zero to compare to each object's price in the array

// function highestPriceBook(objects){
//     var highestPrice = {
//         title: " ",
//         author: " ",
//         price: 0
//     };
//
//     for (var i = 0; i < objects.length; i++){
//         if (books[i].price > highestPrice.price){
//             highestPrice = books[i];
//         }
//     }
//     return highestPrice;
// }
//
// console.log(highestPriceBook(books));
//
// function lowestPriceBook (object){
//     var lowestPrice = {
//         title: " ",
//         author: " ",
//         price: 100
//     };
//     for (var i = 0; i < object.length; i++){
//         if (books[i].price < lowestPrice.price){
//             lowestPrice = books[i];
//         }
//     }
//     return lowestPrice;
// }
//
// console.log(
//     lowestPriceBook(books),
//     {
//         title: "Weapons of Math Destruction",
//         author: "Cathy O'Neil",
//         price: 17.44
//     });

// const shoppingCart = {
//     tax: 0.08,
//     items: [
//         {
//             title: "orange juice",
//             price: 3.99,
//             quantity: 1
//         },
//         {
//             title: "rice",
//             price: 1.99,
//             quantity: 3
//         },
//         {
//             title: "beans",
//             price: 0.99,
//             quantity: 3
//         },
//         {
//             title: "chili sauce",
//             price: 2.99,
//             quantity: 1
//         },
//         {
//             title: "chocolate",
//             price: 0.75,
//             quantity: 9
//         }
//     ]
// };
// console.log(shoppingCart.items[0].quantity);
// console.log(shoppingCart.items[1].quantity);
// console.log(shoppingCart.items[2].quantity);
// console.log(shoppingCart.items[3].quantity);
// console.log(shoppingCart.items[4].quantity);


// Exercise 97
// Write a function named numberOfItemTypes that takes in the shopping cart as input and returns the number of unique item types in the shopping cart.
// We're not yet using the quantity of each item, but rather focusing on determining how many different types of items are in the cart.

// function numberOfItemTypes(input){
//     return input.items.length;
// }
//
// console.log(numberOfItemTypes(shoppingCart), 5, "Exercise 97");

// Exercise 98
// Write a function named totalNumberOfItems that takes in the shopping cart as input and returns the total number all item quantities.
// This should return the sum of all of the quantities from each item type

//
// function totalNumberOfItems(input) {
//     var totalCartQuantity = 0;
//     for (var i = 0; i < input.items.length; i++) {
//         totalCartQuantity += input.items[i].quantity;
//     }
//     return totalCartQuantity
// }

//
// console.log(totalNumberOfItems(shoppingCart));

// console.log(totalNumberOfItems(shoppingCart), 17, "Exercise 98");

// Exercise 99
// Write a function named getAverageItemPrice that takes in the shopping cart as an input and returns the average of all the item prices.
// Hint - This should determine the total price divided by the number of types of items. This does not account for each item type's quantity.\

// function getAverageItemPrice(input) {
//     var totalPrice = 0;
//     for (var i = 0; i < input.items.length; i++) {
//         totalPrice += input.items[i].price
//     }
//     return (totalPrice / input.items.length)
// }
//
// console.log(getAverageItemPrice(shoppingCart), 2.1420000000000003, "Exercise 99");
//
//
// // Exercise 100
// // Write a function named getAverageSpentPerItem that takes in the shopping cart and returns the average of summing each item's quanties times that item's price.
// // Hint: You may need to set an initial total price and total total quantity to zero, then sum up and divide that total price by the total quantity
//
//
// function getAverageSpentPerItem(input) {
//     //1. total number of items   - totalNumberOfItems(input)
//     //2. total price of the item
//     //3. total average (total price / total number)
//
//     // no loops
//     // var totalPriceOrangeJuice = shoppingCart.items[0].quantity * shoppingCart.items[0].price;
//     // console.log("Orange Juice total: " + totalPriceOrangeJuice);
//     // var totalPriceRice = shoppingCart.items[1].quantity * shoppingCart.items[1].price;
//     // console.log("Rice total: " + totalPriceRice);
//     // var totalPriceBeans = shoppingCart.items[2].quantity * shoppingCart.items[2].price;
//     // console.log("Bean total: " + totalPriceBeans);
//     // var totalPriceChiliSauce =shoppingCart.items[3].quantity * shoppingCart.items[3].price;
//     // console.log("chili sauce total: " + totalPriceChiliSauce);
//     // var totalPriceChocolate =shoppingCart.items[4].quantity * shoppingCart.items[4].price;
//     // console.log("chocolate total: " + totalPriceChocolate);
//     //
//     // var subTotal= (totalPriceChiliSauce + totalPriceRice + totalPriceOrangeJuice + totalPriceBeans + totalPriceChocolate);
//     // console.log(subTotal/17);
//
//     var totalPrice = 0;
//     for (var i = 0; i < input.items.length; i++) {
//         totalPrice += (input.items[i].price) * (input.items[i].quantity);
//     }
//     return (totalPrice / totalNumberOfItems(input));
// }
//
// console.log(getAverageSpentPerItem(shoppingCart), 1.333529411764706, "Exercise 100");
//
//
// // Exercise 101
// // Write a function named mostSpentOnItem that takes in the shopping cart as input and returns the object associated with the item that has the highest price*quantity.
// // Be sure to do this as programmatically as possible.
// // Hint: Similarly to how we sometimes begin a function with setting a variable to zero, we need a starting place:
// // Hint: Consider creating a variable that is a object with the keys "price" and "quantity" both set to 0. You can then compare each item's price and quantity total to the one from "most"
// function mostSpentOnItem(input){
//     var mostExpensiveItem ={
//         title: " ",
//         price: 0,
//         quantity: 0
//     };
//     for (var i = 0; i < input.items.length; i++){
//         if (((input.items[i].price) * (input.items[i].quantity)) > ((mostExpensiveItem.price) * (mostExpensiveItem.quantity))){
//             mostExpensiveItem = input.items[i];
//         }
//     }
//     return mostExpensiveItem;
//
// }
// console.log(
//     mostSpentOnItem(shoppingCart),
//     {
//         title: "chocolate",
//         price: 0.75,
//         quantity: 9
//     },
//     "Exercise 101"
// );

// function countVowels(str) {
// //     var vowelList = 'aeiouAEIOU';
// //     var vowelCount = 0;
// //     for (var i = 0; i < str.length; i++) {
// //         if (vowelList.indexOf(str[i]) !== -1) {
// //             vowelCount++;
// //         }
// //     }
// //     return vowelCount;
// // }
// //
// // function convertNameToObject(str) {
// //     var stringSplit = str.split(' ');
// //     var arrayToObject = {firstName: stringSplit[0], lastName: stringSplit[1]};
// //     return arrayToObject;
// // }
// // console.log(convertNameToObject("Harry Potter"));
// //
// // function analyzeWord(input) {
// //
// //     var arrayToObject = {
// //         word: input,
// //         numberOfLetters: input.length,
// //         numberOfVowels:countVowels(input)
// //     };
// //     return arrayToObject;
// //
// // }
// //
// //     console.log(analyzeWord('codeup'));


// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
//
// function repeatStringNumTimes(str,num){
//
//     let repeatedString = "";
//     while (num > 0){
//         repeatedString += str;
//         num --
//     }
//     return repeatedString;
// }
//
// console.log(repeatStringNumTimes("abc", 3));
// repeatStringNumTimes("*", 3); //***abcabcabcabc
// repeatStringNumTimes("abc", 4);//

function vowelsAndConsonants(s) {

    /*First, print each vowel in  on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in .
    Second, print each consonant (i.e., non-vowel) in  on a new line in the same order as it appeared in .
    */

    let vowels = 'aeiou';
    let consonants = '';

    for (var i = 0 ; i < s.length; i++){
        if (vowels.includes(s[i])){
            console.log(s[i]);
        }else{
            consonants += s[i] + '\n';
        }
    }
    return (consonants.trim());
}

console.log(vowelsAndConsonants("Nayoung"));