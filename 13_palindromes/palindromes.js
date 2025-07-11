const palindromes = function (string) {
    const original = string.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const reversed = original.split("").reverse().join("");
    console.log(original, reversed)
    return original === reversed;
};

console.log(palindromes("racecar!"))
// Do not edit below this line
module.exports = palindromes;
