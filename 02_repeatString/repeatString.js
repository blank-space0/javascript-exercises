const repeatString = function(word, amt) {
    if (amt < 0) {
        return 'ERROR';
    }
    let ans = '';
    for (let i = 0; i < amt; i++){
        ans += word;
    }
    return ans;
};

// Do not edit below this line
module.exports = repeatString;
