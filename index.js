function padString(target, char, length, fromStart) {
    let strLength = target.length;
    if (fromStart) {
        while (strLength < length) {
            target = char + target;
            strLength++;
        }
    } else {
        while (strLength < length) {
            target += char;
            strLength++;
        }
    }
    return target;
}
console.log(padString('hello', '*', 10, false));