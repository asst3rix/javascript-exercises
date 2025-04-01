const fibonacci = function (number) {
    if (number === 0 || number === "0") {
        return 0;
    } else if (number < 0) {
        return "OOPS";
    } else {
        const fibo = [1, 1];
        for (let i = 2; i < number; i++) {
            fibo[i] = fibo[i - 1] + fibo[i - 2];
        }
        return fibo[number - 1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
