// //////question no 1///////
//  function tellTime() {
//    let now = new Date();
//    let theHr = now.getHours();
//    let theMin = now.getMinutes();
//    alert(now + theHr + theMin);
//  }
//    tellTime();
  

// /////question no 2///////
// function greetUser(greeting) {
//   let Fullname = prompt("Enter your full name")
//    alert(greeting + Fullname);
// } 
// greetUser(" Hello  \n" );


// /////question no 3//////
// let Input1 = +prompt("Enter a number")
// let Input2 = +prompt("Enter a number")
//  function addNumbers(Input1, Input2) {
  
//   let x = Input1 + Input2 
//   return x; 
//   }
//  let y = addNumbers(Input1, Input2);
//  alert(y)


//////question no 4////////
// function calc(num1,num2){
//   let a = num1 * num2;
//   return a;
// }
// let b = calc(12,5,"*")
// document.write(b)


// /////question no 5//////
// function Squares(num) {
//   let a = num * num;
//   return a;
// }

// let num = parseInt(prompt("Enter a number:"));
// let b = Squares(num, num )
// alert(b );


// /////question no 6//////////////
// program to find the factorial of a number

// take input from the user
// let number = parseInt(prompt("Enter a positive integer: "));

// // checking if number is negative
// if (number < 0) {
//     document.write('Error! Factorial for negative number does not exist.');
// }

// // if number is 0
// else if (number === 0) {
//   document.write(" The factorial of " + number + "is 1.");
// }

// // if number is positive
// else {
//     let fact = 1;
//     for (i = 1; i <= number; i++) {
//         fact *= i;
//     }
//     document.write(" The factorial of " +   number +  " is  " +fact);
// }



// //////question no 7////////
// let firstNum = parseInt(prompt("enter a number"))
// let lastNum = parseInt(prompt("enter a number"))

// function counting(){
//  for( var i=firstNum; i<=lastNum; i++ ){
//   document.write( i + "<br>" );
// } 
// }


// counting();


// /////question no 8///////

// function calculateHypotenuse(base, perp) {
//   function calculateSquare(num) {
//     return num * num;
//   }

//   var baseSquare = calculateSquare(base);
//   var perpSquare = calculateSquare(perp);

//   var hypotenuseSquare = baseSquare + perpSquare;
//   var hypotenuse = Math.sqrt(hypotenuseSquare);

//   return hypotenuse;
// }
// let base =  parseInt(prompt("enter a number"))
// let perp =  parseInt(prompt("enter a number"))
// var result = Math.round(calculateHypotenuse(base, perp));
// document.write('Hypotenuse:', result);

// ////question no 9///////
// // argument as a value////
// function calcarea(width,height){
//   return width * height
// }
// let A = calcarea(15,26)
// alert(A)

// argument as a variable////
// let width = 20;
// let height = 10;
// let result = 20 * 10
// function calcarea(){
  
//   alert(result)
// }
// calcarea()


// /////question no 10//////
// function isPalindrome(str) {
//   let len = str.length;
//   for (let i = 0; i < len / 2; i++) {
//     if (str[i] !== str[len - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// }
// let str1 = 'madam';
// let str2 = 'level';
// let str3 = 'script';
// console.log(isPalindrome(str1)); 
// console.log(isPalindrome(str2)); 
// console.log(isPalindrome(str3));


// ////question no 11///////
// let str = "the quick brown fox"
// function uppercaseStr(str){
//   return str
// }
// let changeCase =uppercaseStr(str.toUpperCase)
// document.write( changeCase)

// /////question no 12///////
	// function longest(str){
	// // Split the string into array
	// str = str.split(" ");
		
	// // Get the index of largest item of the array
	// let index = str.reduce((acc, curr, i)=>{
	// 	if(curr.length > str[acc].length){
	// 	return i
	// 	}
	// 	return acc;
	// }, 0)
		
	// return str[index];
	// }
	
	
	// alert(longest("Web Development Tutorial"))


  // /////question no 13/////
  // function parameter(str,letter){
  //   let letter_Count = 0
  //   for (let i = 0; i < str.length; i++) {
  //     if (str.charAt(i) == letter) 
  //     {
  //     letter_Count += 1;
  //     }
  //   }
  //   return letter_Count;
  // }
  
  // alert(parameter('JSResourceS.com', 'o'));


  // /////question no 14 //////
  // function calcCircumfrence(radius) {
  //  let y = (Math.PI * radius) * 2;
  // alert("The circumfrence is " + y + ".");
  // }
  // function calcArea(radius) {
  //  let x = (Math.PI * radius) * radius;
  // alert("The area is " + x + ".");
  // }
  
  // calcCircumfrence(30);
  // calcArea(10);
  