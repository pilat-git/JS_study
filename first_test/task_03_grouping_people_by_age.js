function group_people_by_age(people_array)
{
    const grouped_by_age = {};

    for (const person of people_array)
    {
        const age = person.age;
        const name = person.name;

        if (!grouped_by_age[age])
        {
            grouped_by_age[age] = [];
        }

        grouped_by_age[age].push(name);
    }

    return grouped_by_age;
}


const people_array = [
    { name: "Alex", age: 25 },
    { name: "Serg", age: 30 },
    { name: "Nick", age: 25 },
    { name: "Alena", age: 30 },
    { name: "Peter", age: 35 },
    { name: "Olga", age: 18 },
    { name: "Egor", age: 25 },
    { name: "Peter", age: 18 }
];

console.log(group_people_by_age(people_array));
