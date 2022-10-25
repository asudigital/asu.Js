
// function isEven(element){
//     if(element % 2 === 0){
//         return true;
//     }
//     return false;
// }

// console.log(isEven(2));

// var isEven= function(element){
//     if(element % 2 === 0){
//         return true; 
// }
// }
// arrow function

// var isEven = (element) => {

//     return element % 2 === 0;
// };
// console.log (isEven(9));

// callback function
// Fuction don't have any name but they are super helpful

// var result = [2 , 4 , 6 , 8].every(isEven);
// console.log(result);

// Syntax of callback
// var result = [2,3,6 ,8].every(() => {})
// console.log(result);


// use REACT and ANGULAR
var result = [2,4,6 ,8].every((e) => {
    return e % 2 === 0;
})
console.log(result);

// don't want use the curly braces
var result = [2 ,4 ,6 ,8].every((e) => e % 2 === 0);
console.log(result);

// SYNTAX of basic call back function: var result = [2 , 4 ,6 , 8].every(() => {});
// console.log(result);
// In case of curly , you have to maintain the return type

// if don't want to use the curly don't need to write the return statement
// var result = [2 , 4 ,6 , 8].every(() => ());
