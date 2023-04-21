/**
 * 1. Create a map of Morse according to alphabet characters
 * 2. Converts all words to Worse {[word]: [worse]}
 * 3. Find uniq
 */

var getMorseMap = function() {
    const morseCodes = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    const charTableStart = 97;
    let map = {};

    for (let i = 0; i < morseCodes.length; i++) {
        const char = String.fromCharCode(i + charTableStart);
        map[char] = morseCodes[i];
    }
    return map;
};

/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    if (words.length <= 1) return 1;

    const morseMap = getMorseMap();

    let uniqMap = {};
    let count = 0;

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        let wordWorse = '';

        for (let j = 0; j < word.length; j++) {
            wordWorse += morseMap[word[j]];
        }
        if (!uniqMap[wordWorse]) {
            uniqMap[wordWorse] = true;
            count++;
        }
    }
    return count;
};

console.log(uniqueMorseRepresentations(["rwjje", "aittjje", "auyyn", "lqtktn", "lmjwn"]));
// console.log(uniqueMorseRepresentations(["rsda", "wsdf"]));
