// we can have variable amount of args using ..args
// it is basically just an array containing all the arguements we want to pass
const removeFromArray = function(array, ...args) {
    const newArray = [];
    // for each goes through each element in an array
    // we then write an arrow function (lambda)
    // item is our arg, after the arrow is the procedure
    array.forEach(item => {
        if (!args.includes(item)) { // if item is not in args, we include it
            newArray.push(item);
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
