function get_square(number)
{
    return new Promise((resolve, reject) =>
    {
        if (typeof number !== 'number')
        {
            reject(new Error(`value "${number}" is not a valid number for squaring`));
        }

        setTimeout(() =>
        {
            const result = number * number;
            resolve(result);
        }, 3000);
    });
}


new Promise((resolve) => 
{
    const initial_number = Math.floor(Math.random() * 4) + 2;
    console.log(`first promise generated number: ${initial_number}`);
    resolve(initial_number);
})
    .then((first_square_value) =>
    {
        return get_square(first_square_value);
    })
    .then((second_square_value) =>
    {
        return get_square(second_square_value);
    })
    .then((final_result) =>
    {
        console.log(`\nfinal result after all manipulations: ${final_result}`);
    })
    .catch((error) =>
    {
        console.error(`an error occurred: ${error.message}`);
    });