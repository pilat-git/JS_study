// function to generate an array of functions returning promises
function generate_functions_array(count)
{
    const functions_array = [];

    for (let i = 0; i < count; i++)
    {
        functions_array.push(() => new Promise((resolve, reject) => 
        {
            const delay = Math.floor(Math.random() * 4000) + 1000;
            
            setTimeout(() => 
            {
                try 
                {
                    resolve(`result of task ${i + 1} completed in ${delay}ms`);
                } 
                catch (error) 
                {
                    reject(new Error(`task ${i + 1} failed unexpectedly`));
                }
            }, delay);
        }));
    }

    return functions_array;
}

// main async function to execute functions in parallel
async function functions_run(functions_array)
{
    try 
    {
        const final_results = [];
        const initiated_functions = functions_array.map(func => func());

        for (const function_promise of initiated_functions)
        {
            final_results.push(await function_promise);
        }

        return final_results;
    } 
    catch (error) 
    {
        throw new Error(`the parallel execution was interrupted: ${error.message}`);
    }
}


// Final execution block
const my_functions_list = generate_functions_array(5);

(async () => 
{    
    try 
    {
        const results = await functions_run(my_functions_list);
        
        console.log("array of results:");
        console.log(results);
    } 
    catch (error) 
    {
        console.error(`execution error: ${error.message}`);
    }
})();