const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    function calculateAge(person) {
        if (person.yearOfBirth && person.yearOfDeath) {
            return person.yearOfDeath - person.yearOfBirth;
        } else {
            return currentYear - person.yearOfBirth;
        }
    }
    const peopleWithAge = people.map(person => {
        const age = calculateAge(person);
        return {
            ...person,
            currentAge: age
        };
    });

    function getOldestPerson(peopleWithAge) {
        return peopleWithAge.reduce((oldestPerson, currentPerson) => {
            return (currentPerson.currentAge > oldestPerson.currentAge) ? currentPerson : oldestPerson;
        });
    }
    const oldest = getOldestPerson(peopleWithAge);

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
