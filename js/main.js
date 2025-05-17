// 1-
// var num1 = Number(window.prompt("Enter a number"));
// console.log(num1)


// 2-
// var number = Number(window.prompt("Enter the number"));

// if (number % 4 == 0 && number % 3 == 0) {
//     console.log("YES!")
// } else {
//     console.log("NO!");
// }

// 3-
// var number1 = Number(window.prompt("Enter the number"));
// var number2 = Number(window.prompt("Enter the number"));


// if (number1 > number2) {
//     console.log(number1);
// } else if (number2 > number1) {
//     console.log(number2);
// } else {
//     console.log("Both are equal");

// }

// 4-
// var number = Number(window.prompt("Enter the number"));
// if (number >= 0) {
//     console.log("Positive");
// } else {
//     console.log("Negative");
// }

// 5-
// var number1 = Number(window.prompt("Enter number One"));
// var number2 = Number(window.prompt("Enter number Two"));
// var number3 = Number(window.prompt("Enter number Three"));


// if (number1 > number2 && number1 > number3) {
//     console.log(number1);
// } else if (number2 > number1 && number2 > number3) {
//     console.log(number2);
// } else {
//     console.log(number3);
// }

// 6-
// var number = Number(window.prompt("Enter number One"));
// if (number % 2 == 0) {
//     console.log("this number is Even");
// } else {
//     console.log("This number is Odd");
// }

// 7-
// (a,e,I,o,u)
// var character = window.prompt("Enter the Character");
// if (character == 'a' || character == 'e' || character == 'i' || character == 'o' || character == 'e' || character == 'A' || character == 'E' || character == 'I' || character == 'O' || character == 'E') {
//     console.log("Vowel");

// } else {
//     console.log("Consonant character");
// }

// 8-
// var number = Number(window.prompt("Enter The Number"));

// for (var i = 1; i <= number; i++) {
//     console.log(i);
// }

// 9-
// var number = Number(window.prompt("Enter The Number"));
// var temp = 0;

// // 5 => 5,10,15  => +5
// // 3 => 3,6,9    => +3
// for (var i = 1; i < 12; i++) {
//     // temp=number;
//     temp += number;
//     console.log(temp);
// }

// 10-
// var number = Number(window.prompt("Enter The Number")); //6

// for (var i = 2; i < number; i += 2) {
//     if (number % 2 == 0) {
//         console.log(i);

//     } else {
//         console.log(i);
//     }
// }


// 11-
// var number1 = Number(window.prompt("Enter First Number"));
// var number2 = Number(window.prompt("Enter Second Number"));

// console.log(number1 ** number2);


// 12-
// var mark1 = Number(window.prompt("Enter First Mark"));
// var mark2 = Number(window.prompt("Enter Second Mark"));
// var mark3 = Number(window.prompt("Enter Third Mark"));
// var mark4 = Number(window.prompt("Enter Fourth Mark"));
// var mark5 = Number(window.prompt("Enter Fifth Mark"));


// var total = mark1 + mark2 + mark3 + mark4 + mark5;
// var avg = total / 5;

// console.log(total);
// console.log(avg);
// console.log(avg + '%');

// another solution
// var numberOfExams = Number(window.prompt("How many exams?"));
// var mark = [];
// // mark.length = numberOfExams;
// var total = 0;

// for (var i = 0; i < numberOfExams; i++) {
//     mark[i] = Number(window.prompt("Enter Mark " + (i + 1)));
//     total += mark[i]
// }
// console.log("total is:");
// console.log(total);

// console.log("Average is:");
// console.log(total / mark.length);
// console.log("Percentage is: ");
// console.log(total / mark.length + "%");


// 13-
// var month = Number(window.prompt("Enter Month Number"));
// if (month >= 1 && month <= 12) {
//     if (month % 2 == 0 && month != 2 && month != 8) {
//         console.log("30 Days")
//     } else if (month % 2 == 1 && month != 11) {
//         console.log("31 Days");
//     }
//     if (month == 2) {
//         console.log("28 days or 29 days, check the year");
//     }
//     if (month == 8) {
//         console.log("31 Days");
//     }
//     if (month == 11) {
//         console.log("30 Days");

//     }
// } else {
//     window.alert("Please Enter a valid range from 1 to 12")
// }


// 14-
// 60 70 68 76 92
// var numberOfExams = Number(window.prompt("How many exams?"));
// var mark = [];

// var total = 0;
// var avg = 0;
// for (var i = 0; i < numberOfExams; i++) {
//     mark[i] = Number(window.prompt("Enter Mark " + (i + 1)));
//     total += mark[i]
//     console.log(total / (numberOfExams));

// }
// avg = total / numberOfExams;

// console.log(avg);

// switch (true) {
//     case avg > 100:
//         console.log("Enter a valid stats");
//         break;

//     case avg >= 90:
//         console.log("A");
//         break;

//     case avg >= 80:
//         console.log("B");
//         break;

//     case avg >= 70:
//         console.log("C");
//         break;

//     case avg >= 60:
//         console.log("C");
//         break;

//     case avg >= 50:
//         console.log("D");
//         break;

//     default: console.log("Big Fail");
// }


// 15-
// var month = Number(window.prompt("Enter Month Number"))

// switch (month) {
//     case 1:
//         console.log("31 Days");
//         break;
//     case 2:
//         console.log("28 Days");
//         break;
//     case 3:
//         console.log("31 Days");
//         break;
//     case 4:
//         console.log("30 Days");
//         break;
//     case 5:
//         console.log("31 Days");
//         break;
//     case 6:
//         console.log("30 Days");
//         break;
//     case 7:
//         console.log("31 Days");
//         break;
//     case 8:
//         console.log("31 Days");
//         break;
//     case 9:
//         console.log("30 Days");
//         break;
//     case 10:
//         console.log("31 Days");
//         break;
//     case 11:
//         console.log("30 Days");
//         break;
//     case 12:
//         console.log("31 Days");
//         break;
//     default: window.alert("Enter Number from 1 to 12");

// }


// 16-
// (a,e,I,o,u)
// var character = window.prompt("Enter a Character.");

// switch (true) {
//     case character == "a" || character == "A": console.log("Vowel");
//         break;
//     case character == 'e' || character == 'E': console.log("Vowel");
//         break;
//     case character == 'i' || character == 'I': console.log("Vowel");
//         break;
//     case character == 'o' || character == 'O': console.log("Vowel");
//         break;
//     case character == 'u' || character == 'U': console.log("Vowel");
//         break;
//     default: console.log("Constant");
// }

// 17-
// var number1 = Number(window.prompt("Enter First Number"))
// var number2 = Number(window.prompt("Enter Second Number"))

// switch (true) {
//     case number1 > number2: console.log(number1);
//         break;
//     case number1 < number2: console.log(number2);
//         break;
//     case number1 == number2: console.log("Both are equals");
//         break;
//     default: console.log("Must enter a valid nubmer");
// }

// 18-

// var number = Number(window.prompt("Enter First Number"));

// switch (true) {
//     case number % 2 == 0: console.log("Even Number");
//         break;
//     case number % 2 == 1: console.log("Odd Number");
//         break;

//     default: console.log("Enter a valid number");
// }

// 19-
// var number = Number(window.prompt("Enter First Number"))

// switch (true) {
//     case number >= 0: console.log("Positive Number");
//         break;
//     case number < 0: console.log("Negative number");
//         break;
//     default: console.log("Please enter a valid number");
// }


// 20- Simple Calculator

// var number1 = Number(window.prompt("Enter First Number"));
// var number2 = Number(window.prompt("Enter Second Number"));

// var sign = window.prompt("Enter the sign please");
// var result = 0;
// switch (sign) {
//     case '+': result = number1 + number2;
//         console.log(result);
//         break;
//     case '-': result = number1 - number2;
//         console.log(result);
//         break;
//     case '/': result = number1 / number2;
//         console.log(result);
//         break;
//     case '*': result = number1 * number2;
//         console.log(result);
//         break;
// }