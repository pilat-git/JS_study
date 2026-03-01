function descending_falsy_filtration(random_data_array)
{
    const filtered_array = random_data_array.filter(item =>
    {
        if (typeof item === 'string')
        {
            return item.trim() !== "";
        }
        return Boolean(item);
    });

    return filtered_array.sort((a, b) =>
    {
        const get_value = (x) => (typeof x === 'boolean' ? Number(x) : parseFloat(x));
        
        const value_1 = get_value(a);
        const value_2 = get_value(b);

        const is_number_1 = !isNaN(value_1);
        const is_number_2 = !isNaN(value_2);

        if (is_number_1 && is_number_2)
        {
            return value_2 - value_1;
        }
        if (is_number_1 && !is_number_2)
        {
            return -1;
        }
        if (!is_number_1 && is_number_2)
        {
            return 1;
        }
        
        const string_1 = String(a);
        const string_2 = String(b);

        if (string_1 < string_2)
        {
            return 1;
        }
        if (string_1 > string_2)
        {
            return -1;
        }
        return 0;
    });
}


const random_data_array = [0, "100", true, "9", "true", 50, "20abc", "   ", "abc123", false, "9", 13, null, "banana", "false", undefined, NaN, "000"];
console.log(descending_falsy_filtration(random_data_array));