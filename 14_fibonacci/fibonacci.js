const fibonacciSequence = function(n) {
    let fib = [1, 1];

    if (n <=2) {
        return fib.slice(0, n);
    }

    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }

    return fib;
    };

const fibNum = fibonacciSequence(30);

const fibonacci = function(n) {
    if (parseInt(n) < 0) {
        return "OOPS";
    } else if (parseInt(n) === 0) {
        return 0;
    } else {
        return fibNum[parseInt(n) - 1];
    }
};

fibonacci(4);

// Do not edit below this line
module.exports = fibonacci;
