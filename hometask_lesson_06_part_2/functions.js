// 1st. dice game
function dices (players, throws)
{
    console.log ("#######################################################");
    console.log (`dice game begins for ${players} players with ${throws} throws for each`);
    console.log();

    const game_results = [];

    for (let i = 1; i <= players; i++)
    {
        let score = 0;
        for (let j = 0; j < throws; j++)
        {
            score += Math.floor (Math.random() * 6) + 1;
        }
        game_results.push ({ id: i, score: score });
    }

    game_results.forEach (player => console.log (`player ${player.id}: ${player.score} points`));
    console.log();

    const max_score = Math.max (...game_results.map(player => player.score));

    const winners_count = game_results.filter (player => player.score === max_score).length;

    if (winners_count === 1)
    {
        console.log (`the winner is:`);
    } 
    else 
    {
        console.log (`the victory was shared between ${winners_count} players:`);
    }

    for (let i = 0; i < players; i++)
    {
        if (game_results[i].score === max_score)
        {
            console.log (`player ${game_results[i].id}: ${game_results[i].score} points`);
        }
    }

    console.log();
}


// 2nd. splitting a number into a given number of random numbers, the sum of which will be equal to the original number
function splitter (number, parts_count)
{
    console.log ("#######################################################");
    console.log (`splitting ${number} into ${parts_count} components`);
    console.log();

    if (number < parts_count)
    {
        console.log ("error: the number is less than the number of parts => cannot be split into positive components");
        console.log();
        return;
    }

    const parts = [];
    let remaining = number;

    for (let i = 1; i < parts_count; i++)
    {
        const maxForCurrentPart = remaining - (parts_count - i);
        const part = Math.floor(Math.random() * maxForCurrentPart) + 1;
        parts.push(part);
        remaining -= part;
    }
    parts.push(remaining);

    console.log (`the number ${number} is splitted into ${parts_count} of the following parts: ${parts.join(', ')}`);
    console.log();
}


// 3rd. friday the 13th
function fridays (start_date, end_date)
{
    console.log ("#######################################################");
    console.log (`search for all friday the 13th for the selected period from ${start_date} to ${end_date}`);
    console.log();

    const start = new Date(start_date);
    const end = new Date(end_date);
    const fridays = [];

    let current = new Date(start);
    
    current.setDate(13);
    if (current < start)
    {
        current.setMonth(current.getMonth() + 1);
    }

    while (current <= end)
    {
        if (current.getDay() === 5)
        {
            fridays.push(current.toDateString());
        }
        current.setMonth(current.getMonth() + 1);
    }

    console.log (`total friday the 13th found: ${fridays.length}`);
    console.log ("found dates:", fridays);
}


// call from the deep

dices (5, 7);

splitter (16, 4);

fridays ("2011-10-10", "2023-05-23");