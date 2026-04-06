console.log("Hello EHEI");

function sum(a, b) {
    return a + b;
}

const sub = (a, b) => a - b;

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

function pow(a, b) {
    return Math.pow(a, b);
}

function mod(a, b) {
    return a % b;
}

function fact(a) {
    return a * fact(a - 1);
}

console.log(sum(1, 2));
console.log(sub(1, 2));
console.log(mul(1, 2));
console.log(div(1, 2));
console.log(pow(1, 2));
console.log(mod(1, 2));
console.log(fact(1));
