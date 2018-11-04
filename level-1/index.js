
/* 
For this test to pass, return value should be 
an object with an "array" key and each value in the "array" key 
should be incremented by one.'
e.g
input: Object = {
    array: [1, 2, 3]
}
output: Object = {
    array: [2, 3, 4]
}
*/
function incrementInObject(input) {

}


/* 
For this test to pass, return value should be a number 
and equal to quantity times the price in each JSON item.'
e.g 
input: Array = [
    { quantity: 1, price: 1 },
    { quantity: 2, price: 2 },
]
output: Number = 5
*/
function calculateTotalPrice(input) {

}


/* 
For this test to pass, return value should be an object 
with count of each character as a key value pair.'
e.g 
input: String = 'abbcccdddd'
output: Object = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}
*/
function numberOfCharactersInString(input) {

}

/* 
For this test to pass, return value should be a boolean (true or false) 
to indicate whether the input was a palindrome or not.'
More on Palidrome - https://en.wikipedia.org/wiki/Palindrome.
e.g 
input: String = 'abcd'
output: boolean = false

input: String = 'acbca'
output: boolean = true
*/
function isPalindrome(input) {

}


/* Exports */
module.exports.incrementInObject = incrementInObject;
module.exports.calculateTotalPrice = calculateTotalPrice;
module.exports.numberOfCharactersInString = numberOfCharactersInString;
module.exports.isPalindrome = isPalindrome;