const sumAll = function(a, b) {
    if (typeof(a) != "number" || typeof(b) != "number" || a < 0 || b < 0 || a % 1 != 0 || b % 1 != 0) {
        return "ERROR";
    }
    
    let start, stop;
    if (a > b) {
        stop = a;
        start = b;
    } else {
        stop = b;
        start = a;
    }

    return Array
        .from({length: (stop-start)+1}, (val, i) => start + i)
        .reduce((sum, curr) => sum + curr, 0);
};

// Do not edit below this line
module.exports = sumAll;
