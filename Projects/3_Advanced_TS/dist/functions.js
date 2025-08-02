"use strict";
function getLength(val) {
    if (typeof val === 'string') {
        const numberOfWords = val.split(' ').length;
        return `${numberOfWords} words`;
    }
    return val.length;
}
const numberOfWords = getLength('does this work?');
const numItems = getLength(['Sports', 'Driving']);
console.log(numberOfWords, numItems);
//# sourceMappingURL=functions.js.map