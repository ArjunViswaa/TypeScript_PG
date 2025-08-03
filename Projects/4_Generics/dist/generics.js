"use strict";
let names = ['Arjun', 'Max'];
let data = {
    id: 12,
    name: 'Arjun',
    isAdmin: false
};
function merge(a, b) {
    return [a, b];
}
let combined = merge(1, 'anma');
function mergeObj(a, b) {
    return Object.assign(Object.assign({}, a), b);
}
console.log(mergeObj({ username: 'Arjun' }, { age: 25, username: 'Kavin' }));
//# sourceMappingURL=generics.js.map