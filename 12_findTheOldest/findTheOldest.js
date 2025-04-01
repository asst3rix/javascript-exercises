const findTheOldest = function (array) {
    const oldest = array.sort(function (a, b) {
        if (a.yearOfDeath === undefined) { a.yearOfDeath = new Date().getFullYear(); }
        if (b.yearOfDeath === undefined) { b.yearOfDeath = new Date().getFullYear(); }

        const lastPerson = a.yearOfDeath - a.yearOfBirth;
        const nextPerson = b.yearOfDeath - b.yearOfBirth;
        return lastPerson > nextPerson ? -1 : 1;
    });

    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
