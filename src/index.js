//function get variables and sum them
const five = 5;
const ten = 10;
function sum() {
    let sumVariables = 0;
    return function (value) {
        const result = value + sumVariables;
        sumVariables += value;
        return result;
    };
}
const link = sum();
link(five);
//Obj that can sum variables with step and method that can reset variable
function counter(start, step) {
    const count = start;
    let sumStep = 0;
    return {
        get count() {
            const result = count + sumStep;
            sumStep += step;
            return result;
        },
        set count(reset) {
            sumStep = reset;
        },
    };
}
const fit = counter(ten, five);
fit.count();