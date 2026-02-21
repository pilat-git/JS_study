// function for the 2nd and 3rd tasks that gets a random number from a range with a delay
// for using default parameters this will work for the 2nd task, and with the specified parameters - for the 3rd task
function getNum(min = 1, max = 5, delay = 3000)
{
    return new Promise(resolve =>
    {
        setTimeout(() =>
        {
            const random = Math.floor(Math.random() * (max - min + 1)) + min;
            resolve(random);
        }, delay);
    });
}

// 2nd. random number and its square
// the main function for the 2nd task to get a number using the getNum function and square it 
async function work_with_num()
{
    console.log ("here is the 2nd task: get random number and its square");
    console.log ("3 seconds await to get random number");

    const number = await getNum();

    console.log (`so we get the number ${number} and its square is ${number * number}\n\n`);
}


// 3rd. two random numbers and their sum
// the main function for the 3rd task to get numbers using the getNum_2 function and sum them
async function sum_for_nums()
{
    console.log ("here is the 3rd task: get two random numbers and their sum");
    
    console.log ("delay to get first number is 3 seconds");
    const number_1 = await getNum(1, 5, 3000);
    console.log (`first number is ${number_1}`);
    
    console.log ("delay to get second number is 5 seconds");
    const number_2 = await getNum(6, 10, 5000);
    console.log (`second number is ${number_2}`);
    
    console.log (`and their sum is equal to ${number_1 + number_2}`);
}


(async () =>
{
    // 1st. promises race
    console.log ("here is the 1st task: promises race (random delay will be added, please keep calm and wait)");

    const promise_1 = new Promise (resolve => setTimeout(() => resolve(1), (Math.random() * 4000) + 1000));
    const promise_2 = new Promise (resolve => setTimeout(() => resolve(2), (Math.random() * 4000) + 1000));
    const promise_3 = new Promise (resolve => setTimeout(() => resolve(3), (Math.random() * 4000) + 1000));

    const winner = await Promise.race([promise_1, promise_2, promise_3]);
    
    console.log ("the promises race ended with the winner under number:", winner, "\n\n");

    // call for 2nd and 3rd tasks functions
    await work_with_num();
    await sum_for_nums();

})();