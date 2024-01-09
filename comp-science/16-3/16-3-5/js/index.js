function fibonacciUpperLimit(limit) {
    let fib = [0, 1];
    let i = 2;
    while (true) {
        fib[i] = fib[i - 1] + fib[i - 2];
        if (fib[i] > limit) {
            break;
    }
    i++;
}
return fib.slice(0, -1);
}

function logFibonacciUpperLimit(limit) {
    const sequence = fibonacciUpperLimit(limit);
    console.log("Fibonacci sequence up to " + limit + ":");
    sequence.forEach(number => console.log(number));
    console.log("Done!");
}

logFibonacciUpperLimit(10000000000000000000);