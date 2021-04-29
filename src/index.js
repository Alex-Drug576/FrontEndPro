const foo = (fn, context, ...reset) => (...args) =>
    fn.apply(context, [...reset, ...args]);
function goo(context) {
    return `Hello, ${this.name} ${this.surname} ${context}`;
}
const lo = {
    name: 'alex',
    surname: 'Mnogitskiy',
};
const ho = foo(goo, lo);
ho('!');

