const foo = (fn, context) => () =>
    fn.apply(context);
function goo() {
    return `Hello, ${this.name} ${this.surname}`;
}
const lo = {
    name: 'alex',
    surname: 'Mnogitskiy',
};
const ho = foo(goo, lo);
ho();

