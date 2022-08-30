const removeFromArray = function(arr, toRemove, ...remainderToRemove) {
    const toRemoveSet = new Set();
    toRemoveSet.add(toRemove);
    for (let i = 0; i < remainderToRemove.length; i++) {
        toRemoveSet.add(remainderToRemove[i]);
    }
    result = [];
    let j = 0; 
    for (let i = 0; i < arr.length; i++) {
        if (!(toRemoveSet.has(arr[i]))) {
            result[j] = arr[i];
            j++;
        }
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
