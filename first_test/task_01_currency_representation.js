function currency_representation(string_array)
{
    const results = [];

    for (let i = 0; i < string_array.length; i++)
    {
        const item = string_array[i];

        try
        {
            if (typeof item !== 'string')
            {
                throw new Error(`data type ${typeof item} is invalid, string expected`);
            }

            if (item.trim() === "")
            {
                throw new Error("the string is empty or contains only spaces");
            }

            const num = Number(item);
            if (isNaN(num))
            {
                throw new Error(`value "${item}" is not a number`);
            }

            const rounded_num = (Math.floor(num * 100) / 100).toFixed(2);
            let [integer_part, decimal_part] = rounded_num.split('.');

            let reversed_integer = integer_part.split('').reverse().join('');
            let integer_parts = [];

            for (let j = 0; j < reversed_integer.length; j += 3)
            {
                integer_parts.push(reversed_integer.substring(j, j + 3));
            }

            let formatted_integer = integer_parts.join(' ').split('').reverse().join('');

            results.push(`"${item}" => $${formatted_integer}.${decimal_part}`);

        } 
        
        catch (error)
        {
            results.push(`"${item}" => error: ${error.message}`);
        }
    }
    return results;
}


const string_array = ["1234567.899", "1234", "0000.1", 500, "123.4", "0,5", "abc", " ", ""];
console.log(currency_representation(string_array).join('\n'));