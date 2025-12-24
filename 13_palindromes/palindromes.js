const palindromes = function (string) {
    let lowercasedString = string.toLowerCase();
    let cleaned = lowercasedString.replace(/[^a-z0-9]/g, ''); //removes any characters that aren't nums or letters
    let splitStringArray = cleaned.split("");
    let reversedStringArray = splitStringArray.toReversed();
    let reversedString = reversedStringArray.join("");

    if (cleaned === reversedString) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
