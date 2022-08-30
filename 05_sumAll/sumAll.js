const sumAll = function(x, y) {
    if (x < 0 || 
        y < 0 ||
        !Number.isInteger(x) || 
        !Number.isInteger(y)) {
        return 'ERROR';
    }    
    if (x < y) {
        start = x;
        end = y;
    } else {
        start = y;
        end = x;
    }
    let result = 0;
    for (let i = start; i < end + 1; i++) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
