const user = {
    name: 'Alex',
    age: 23,
    city: 'Odessa',
};
const userNew = {};
const one = -1;
const zero = 0;
//Copy an object to another object
function cloneObj(obj) {
    for (const key in obj) {
        userNew[key] = obj[key];
    }
    return userNew;
}
cloneObj(user);

//Return a string of values
function getValues(obj, seperator) {
    let stringValues = '';
    for (const key in obj) {
        stringValues += obj[key] + seperator;
    }
    //Remoted the last seperator
    stringValues = stringValues.slice(zero, one);
    return stringValues;
}
getValues(user, '_');

//Return a string of keys
let stringKeys = '';
function getKeys(obj, seperator) {
    for (const key in obj) {
        stringKeys += key + seperator;
    }
    //Remoted the last seperator
    stringKeys = stringKeys.slice(zero, one);
    return stringKeys;
}
getKeys(user, '_');

//Return a string of objects
let stringObjects = '';
function getEntries(obj) {
    for (const key in obj) {
        stringObjects += key + ': ' + obj[key] + '\n';
    }
    return stringObjects;
}
getEntries(user);

