// function  sum(a,b){
//     return a+b
//     if(sum()>100){
//         console.log("limit exceeded")
//     }
   
// }
// console.log(sum(10,20))



// function equal(a,b){
//     if(a>b || b>a){
//         console.log("error")
//     }else{
//         console.log("a and b are equal")
//     }
// }
// console.log(equal(5,5))



// function swap(a,b){
//     a = a + b;
//     b = a - b;
//     a = a - b;

// console.log("a =", a); 
// console.log("b =", b); 
// }
// console.log(swap(5,7))



// function oddOrEven(n){
//     if((n & 1)!=1){
//         console.log("n is even")
//     }
//     else{
//         console.log("n is odd")
//     }
// }
// console.log(oddOrEven(3))



// function ternery(a){
//     a>0 ? console.log("a is postive") : console.log("a is negative")
// }
// console.log(ternery(-3))




// let a = 5;
// let b = 3; 
// console.log(a & b);




// function power(num){
//      return (num & -num) == num;
// }
// console.log(power(2))



// function mod(a,b){
//     if(a%b==0){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(mod(2,2))




// function array(){
//     let sum = 0; 
//     let arr=[1,2,3,4]
//     for(let i of arr){
//     sum += [...i];
//     }
// }
// console.log(array())



// function age(n){
//     if(n<13){
//         console.log("child")
//     }
//     else if(n<=19){
//         console.log("teenager")
//     }
//     else if(n<=64 ){
//         console.log("adult")
//     }
//     else if(n>=65){
//         console.log("senior")
//     }
//     else{
//         console.log("invalid")
//     }
// }
// console.log(age(19))




// function LeapYear(year) {
//      if (0 == year % 400) {
//         console.log(year + ' is a leap year');
//     } else {
//         console.log(year + ' is not a leap year');
//     }
// }
// console.log(LeapYear(2020));





// function largest(){
//     let a=12
//     let b=22
//     let c=32
//     let largest;
//     if(a >= b && a >= c) {
//         largest = a;
//     }
//     else if (b >= a && b >= c) {
//         largest = b;
//     }
//     else {
//         largest = c;
//     }
//     console.log("The largest number is " + largest);
// }
// console.log(largest())




// function grade(n){
//     if(n>=80){
//         console.log("A")
//     }
//     else if(n>=70){
//         console.log("B")
//     }
//     else if(n>=50){
//         console.log("C")
//     }
//     else if(n>=40){
//         console.log("D")
//     }
//     else if(n>39){
//         console.log("E")
//     }
//     else{
//         console.log("invalid")
//     }
// }
// console.log(grade(83))



// function triangle(a,  b,  c){
//     if (a + b + c == 180 && a != 0 && b != 0 && c != 0)
//         return 1;
//     else
//         return 0;
// }
// if (triangle(60, 40, 80)){
//     console.log("Valid");
// }
// else{
//    console.log("Invalid");
// }


// function isVowel(char) {
//     switch (char.toLowerCase()) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//             return true;
//         default:
//             return false;
//     }
// }
// console.log(isVowel('A')); 





// function daysInMonth(month, year) {
//     switch (month) {
//         case 1: 
//         case 3: 
//         case 5: 
//         case 7: 
//         case 8: 
//         case 10:
//         case 12: 
//             return 31;
//         case 4: 
//         case 6: 
//         case 9: 
//         case 11:
//             return 30;
//         case 2:
//             return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? 29 : 28;
//         default:
//             console.log("invalid"); 
//     }
// }
// let month = 2;
// let year = 2024;

// console.log("Number of days in " + month + "th month of the year " 
//     + year + " is " + daysInMonth(month, year));




// function checkPalindrome(string) {
//     let len = string.length;
//     for (let i = 0; i < len / 2; i++) {
//         if (string[i] !== string[len - 1 - i]) {
//             return 'It is not a palindrome';
//         }
//     }
//     return 'It is a palindrome';
// }
// console.log(checkPalindrome("amma"))




function FibonacciNumbers(n) {
    let f1 = 0, f2 = 1;

    if (n < 1) {
        return;
    }

    console.log(f1);

    for (let i = 1; i < n; i++) {
        console.log(f2);
        const nextfibonacci = f1 + f2;
        f1 = f2;
        f2 = nextfibonacci;
    }
}
FibonacciNumbers(10);