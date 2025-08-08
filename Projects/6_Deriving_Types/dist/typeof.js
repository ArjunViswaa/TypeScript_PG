"use strict";
let userName = 'Arjun';
console.log(typeof userName);
const settings = {
    difficulty: 'easy',
    minLevel: 10,
    didStart: false,
    players: ['Arjun', 'Max']
};
function loadData(s) {
    console.log(s);
}
function sum(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function performMathAction(cb) {
    cb(10, 20);
}
//# sourceMappingURL=typeof.js.map