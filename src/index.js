const obj = {};
function returnObject(str) {
    let num = str;
    let result = 0;
    obj['steps'] = str;
    for (let i = 0; ; i++) {
        result = String(Number(num) + Number(num.split('').reverse().join('')));
        if (result === result.split('').reverse().join('')) {
            obj['result'] = result;
            return result;
        } else {
            obj['steps'] += ' ' + result;
            num = result;
        }
    }
}
returnObject('96');