const number = 13;
const string = "hello";
const boolean = true;

console.log ("\nData to be processed:");
console.log ("number =", number);
console.log ("string =", string);
console.log ("boolean =", boolean);
// i don't like output for 'console.log ({number});' cause of {}

// addition block
console.log ("\nAddition of different types:");
console.log ("string + boolean =", string + boolean, "| type:", typeof (string + boolean));
console.log ("string + number  =", string + number,  "| type:", typeof (string + number));
console.log ("number + boolean =", number + boolean, "| type:", typeof (number + boolean));

// multiplication block
console.log ("\nMultiplication of different types:");
console.log ("string * boolean =", string * boolean, "| type:", typeof (string * boolean));
console.log ("string * number  =", string * number,  "| type:", typeof (string * number));
console.log ("number * boolean =", number * boolean, "| type:", typeof (number * boolean));

// division block
console.log ("\nDivision of different types:");
console.log ("string / boolean =", string / boolean, "| type:", typeof (string / boolean));
console.log ("string / number  =", string / number,  "| type:", typeof (string / number));
console.log ("number / boolean =", number / boolean, "| type:", typeof (number / boolean));

// explicit data conversion block
console.log ("\nExplicit conversion of different types:");
console.log ("string to number:", Number(string), "| type:", typeof Number(string));
console.log ("string to boolean:", Boolean(string), "| type:", typeof Boolean(string));
console.log ("number to string:", String(number), "| type:", typeof String(number));
console.log ("number to boolean:", Boolean(number), "| type:", typeof Boolean(number));
console.log ("boolean to number:", Number(boolean), "| type:", typeof Number(boolean));
console.log ("boolean to string:", String(boolean), "| type:", typeof String(boolean));
console.log ();