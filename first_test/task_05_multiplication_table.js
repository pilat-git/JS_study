const readline = require('readline');

const min_limit = 1;
const max_limit = 10; 

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// main function to calculate and print the table with aligned sums
function print_multiplication_table(number)
{
    const table_data = [];
    const row_sums = [];
    const column_sums = new Array(number).fill(0);
    let total_table_sum = 0;

    // data generation and simultaneous calculations
    for (let i = 1; i <= number; i++)
    {
        const current_row = [];
        let current_row_sum = 0;

        for (let j = 1; j <= number; j++)
        {
            const cell_value = i * j;
            current_row.push(cell_value);

            current_row_sum += cell_value;
            column_sums[j - 1] += cell_value;
            total_table_sum += cell_value;
        }

        table_data.push(current_row);
        row_sums.push(current_row_sum);
    }

    // formatting logic
    const cell_width = (number * number).toString().length + 2;
    const divider = "-".repeat((number + 1) * cell_width + 5);

    console.log(divider);

    // header row (aligned x)
    let header = "x".padStart(cell_width) + " |";
    for (let i = 1; i <= number; i++)
    {
        header += i.toString().padStart(cell_width);
    }
    console.log(header);
    console.log(divider);

    // table body
    for (let i = 0; i < number; i++)
    {
        let row_string = (i + 1).toString().padStart(cell_width) + " |";
        for (let j = 0; j < number; j++)
        {
            row_string += table_data[i][j].toString().padStart(cell_width);
        }
        console.log(row_string);
    }

    console.log(divider);

    const label_row = "sum of rows:";
    const label_col = "sum of columns:";
    const label_total = "total sum of the table:";

    const label_width = label_total.length + 2; 
    
    let row_sums_str = label_row.padEnd(label_width);
    let col_sums_str = label_col.padEnd(label_width);

    for (let i = 0; i < number; i++)
    {
        row_sums_str += row_sums[i].toString().padStart(cell_width);
        col_sums_str += column_sums[i].toString().padStart(cell_width);
    }

    console.log(row_sums_str);
    console.log(col_sums_str);
    console.log(label_total.padEnd(label_width) + total_table_sum.toString().padStart(cell_width));
}


// async function to get and validate user input
async function get_number_from_user()
{
    const invite_msg = `please enter an integer from ${min_limit} to ${max_limit}: `;

    while (true)
    {
        const user_input = await new Promise((resolve) => 
        {
            rl.question(invite_msg, resolve);
        });

        const converted_number = Number(user_input);

        if (isNaN(converted_number) || user_input.trim() === "")
        {
            console.log(`error: "${user_input}" is not a number.\n`);
            continue;
        }

        if (!Number.isInteger(converted_number))
        {
            console.log(`warning: "${converted_number}" is not an integer.\n`);
            continue;
        }

        if (converted_number < min_limit)
        {
            console.log(`error: number is below the allowed range (min ${min_limit}).\n`);
            continue;
        }

        if (converted_number > max_limit)
        {
            console.log(`error: number is above the allowed range (max ${max_limit}).\n`);
            continue;
        }

        rl.close();
        return converted_number;
    }
}



(async () => 
{    
    const number = await get_number_from_user();
    print_multiplication_table(number);
})();