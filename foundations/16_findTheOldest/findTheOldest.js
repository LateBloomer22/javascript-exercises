const findTheOldest = function(people) {
    let year = new Date().getFullYear();
    people.forEach(obj => {
        if (Object.hasOwn(obj, "yearOfDeath")){
            obj.age = obj.yearOfDeath - obj.yearOfBirth;
        } else {
            obj.age = year - obj.yearOfBirth;
        }
    });
    people.sort((a,b) => b.age - a.age);
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
