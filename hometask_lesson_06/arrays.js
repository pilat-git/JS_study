// 1st. reverse the array
console.log ("### 1st task");

const array1 = [1, 2, 3, 4, 5, 6];
console.log ("array_1:",array1);

const reversed = [...array1].reverse();
console.log ("reversed array_1:", reversed);
console.log ();


// 2nd. maximum value of a number in an array
console.log ("### 2nd task");

const rnd_array = [3, 67, 15, 82, 13, 44];
console.log ("random array:", rnd_array);

const max_value_1 = Math.max(...rnd_array);
console.log ("maximum value of a number in the rnd_array (via Math):", max_value_1);

let max_value_2 = rnd_array[0];
for (let i = 1; i < rnd_array.length; i++)
{
    if (rnd_array[i] > max_value_2)
    {
        max_value_2 = rnd_array[i];
    }
}
console.log ("maximum value of a number in the rnd_array (via for cycle):", max_value_2);
console.log ();


// 3rd. Fibonacci series
console.log ("### 3rd task");

const n = 7; // starting position in the Fibonacci series
const m = 4; // length of the array

const fib_array = [];

let a = 0;
let b = 1;

for (let i = 0; i < n + m; i++)
{
    if (i >= n)
    {
        fib_array[i - n] = a; 
    }
    
    let next = a + b;
    a = b;
    b = next;
}

console.log (`Fibonacci series from ${n} element with ${m} numbers:`, fib_array);
console.log ();


// 4th. comparison of digits in numbers
console.log ("### 4th task");

const num_1 = 3487;
const num_2 = 3794;
console.log (`numbers to compare digits: ${num_1} and ${num_2}`);

const array_1 = String(num_1).split('');
const array_2 = String(num_2).split('');

let exact_match = 0;
let match = 0;

for (let i = 0; i < array_1.length; i++)
{
    if (array_1[i] === array_2[i])
    {
        exact_match++;
    }
    else if (array_2.includes(array_1[i]))
    {
        match++;
    }
}

console.log (`exact digits matches: ${exact_match}`);
console.log (`matches without exact position: ${match}`);
console.log ();


// 5th. sorting an array in ascending/descending order
// this type of sorting is only applicable to numbers
console.log ("### 5th task");

// const rnd_array = [3, 67, 15, 82, 13, 44];
console.log ("random array to be sorted:", rnd_array);

// ascending sorting
const asc_array = [...rnd_array].sort((a, b) => a - b);
console.log("ascending sorting:", asc_array);

// descending sorting
const desc_array = [...rnd_array].sort((a, b) => b - a);
console.log("descending sorting:", desc_array);
console.log ();


// 6th. removing duplicate elements from an array
console.log ("### 6th task");

const duplicate_array = [42, 3, 15, 42, 7, 99, 3, 13, 8, 21, 1, 13, 50];
console.log ("array with duplicate numbers:", duplicate_array);

const cleared_array = [];

for (let i = 0; i < duplicate_array.length; i++)
{
    if (cleared_array.includes(duplicate_array[i]))
        continue;
    cleared_array.push(duplicate_array[i]);
}

console.log ("array without duplicates:", cleared_array);