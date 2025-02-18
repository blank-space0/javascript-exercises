const reverseString = function(line) {
    const check = line.split('')
    let l = 0, r = line.length - 1;
    while (l < r) {
        [check[l], check[r]] = [check[r], check[l]];
        l += 1, r -= 1;
    }
    return check.join('')
};

// Do not edit below this line
module.exports = reverseString;
