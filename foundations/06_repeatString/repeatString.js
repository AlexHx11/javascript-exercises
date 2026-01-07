const repeatString = function(val, num) {
    if (num < 0) {
        return "ERROR";
    }
    let str = "";
    for (let i = 0; i < num; i++) {
        str = str + val;
    }
    return str;
};

// Do not edit below this line
module.exports = repeatString;
