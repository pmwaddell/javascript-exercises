const repeatString = function(s, timesToRepeat) {
    result = "";
    if (timesToRepeat < 0) {
        return 'ERROR';
    }

    for (let i = 0; i < timesToRepeat; i++) {
        result = result + s;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
