let valueFun = 0;
function TakeValue(value) {
    return valueFun += value;
}
TakeValue(1);
function createCounter(start, step) {
    let counter = start;
    return function () {
        counter += step;
        return counter;
    };
}
const goo = createCounter(1, 3);
goo();