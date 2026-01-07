const removeFromArray = function(arr, ...removed) {
    let newArr = [];
    for (let val of arr) {
        if (!removed.includes(val)) {
            newArr.push(val);
        };
    };
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
