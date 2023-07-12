// ///question no 1////////

// function power(a,b){
//   let result = 1;
//   if(b == undefined){
//   b = 2
// }
//   let i = 1
//   while( i <= b){
//   i++
//   result = result * a
//   }
//   return result
//   }
// console.log(power(2,4));


// //////question no 2//////
// let year = +prompt("enter a year")
// function leapyear(year){
//  if(year % 4){
//   return year
//   }
//   alert("leap year")
// }
//  alert("this is not a leap year")
// console.log(leapyear(year));


// ////question no 3/////
// function lenOftri(a,b,c){
//   let S = (a + b + c) /2
//   alert(" lenght of triangle is " + S)
// }

// function area(a,b,c){
//  S = (a + b + c) /2
//  let A = Math.sqrt(S*((S-a)*(S-b)*(S-c)))
//  alert("Area of a triangle is " + A )
 
// }

// lenOftri(2,3,4);
// area(2,3,4)


// ////question no 4//////
// function calcMarks(sub1,sub2,sub3){
//   let marks = sub1 + sub2 + sub3
//   return marks
// }
// function calcAverage(marks){
//   let average = marks * 100
//   return average
// }
// function calcPercentage(average,totalmarks){
  
//  let percentage =(average / totalmarks).toFixed(2)
//   return percentage
// } 
  
// alert(calcMarks(60,60,50))
// alert(calcAverage(170))
// alert(calcPercentage(17000,300));



// //////question no 5/////////
// let text =" The New Yorker magazine doesn't allow the phrase <b> World War II</b>"
// document.write(text + "<br>")
// function indexOf(){

//  firstChar = text.indexOf("World War II");
// if (firstChar !== -1){
//  text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);
//  return text
// }
// }

// indexOf();
// document.write("(After replacing)" + text)

// ///question no 6//////
// function removeVowels( input ){
//   return input.replace(/[aeiouAEIOU]/g, "");
// }
// alert(removeVowels(" i eat an apple" ));



// ////question no 7//////
// function findOccurrences() {
//   var str = "Pleases read this application and give me gratuity";
//   var res = str.match(/[aeiou]{2}/g);
//   return res ? res.length : 0;
// }

// var found = findOccurrences();

// console.log(found);



// /////question no 8///////////

// function calcMeter(km){
//   let distanceinM = km * 1000 
//   return distanceinM
// }
// function calcCentimeter(km){
//   let distanceinCM = km * 100
//   return distanceinCM
// }
// function calcInches(km){
//   cm = km * 100
//   let distanceinI = cm / 2.54
//   return  distanceinI 
// }
// function calcFeet(km){
//   inch = km * 100 / 2.54
//   let distanceinF = inch / 12
//   return distanceinF
// }
// document.write(" distance in meter  : " + calcMeter(5) + "<br>");
// document.write("distance in centimeter  : " +calcCentimeter(500)  + "<br>");
// document.write("distance in inches  :  " + calcInches(5000)  + "<br>");
// document.write("distance in feet  :  " + calcFeet(5000)  + "<br>");


//////question no 9/////////
// function calcovertime(){
//   for(i = 1; i <= 10 ; i++){
//    let hr = +prompt("enter working hour of employ")
//    if(hr > 40){
//     bonus = (hr - 40)*12
//     alert( bonus + " : RS is the bonus of employ" )
//    }
//    else{
//     alert("employ has not done overtime")
//    }
//   }
// }
// calcovertime();


// // /////question no 10////////
// function calculateCurrencyNotes(amountInHundreds) {
//   let notesOf100 =Math.floor(amountInHundreds / 100);
//   amountInHundreds %= 100;
   
//   let notesOf50 =Math.floor (amountInHundreds/ 50);
//   amountInHundreds %= 50;
 
//   let notesOf10 =Math.floor (amountInHundreds / 10); 
   
  
//   return {
//     100: notesOf100,
//     50: notesOf50,
//     10: notesOf10
//   };
// }


// let amountToWithdraw = prompt("Enter the amount to be withdrawn in hundreds: ");
// let result = calculateCurrencyNotes(amountToWithdraw);

// console.log("Number of 100 notes: " + result[100]);
// console.log("Number of 50 notes: " + result[50]);
// console.log("Number of 10 notes: " + result[10]);








