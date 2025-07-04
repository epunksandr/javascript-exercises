const removeFromArray = function(array, ...elements) {
    return array.filter(value => !elements.includes(value));
};

console.log(removeFromArray([1, 2, 3, 4], 3));

// Do not edit below this line
module.exports = removeFromArray;
