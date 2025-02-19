const sumAll = function(lower, upper) {
    if (!Number.isInteger(lower) || !Number.isInteger(upper)
        || lower < 0 || upper < 0) {
        return 'ERROR';
    }
    if (upper < lower) {
        var temp = upper;
        upper = lower;
        lower = temp;
    }

    let ans = 0
    while (lower <= upper) {
        ans += lower;
        lower += 1
    }

    return ans;
};

// Do not edit below this line
module.exports = sumAll;
