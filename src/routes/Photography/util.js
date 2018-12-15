function ensureDoubleDigit(num) {
    if (num > 9) {
        return num;
    } else {
        return '0'.concat(num);
    }
}

module.exports = {
    ensureDoubleDigit
};
