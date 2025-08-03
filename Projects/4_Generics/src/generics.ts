let names: Array<string> = ['Arjun', 'Max'];

type DataStore<T> = {
    [prop: string]: T;
}

let data: DataStore<number | string | boolean> = {
    id: 12,
    name: 'Arjun',
    isAdmin: false
}

function merge<T, U>(a: T, b: U) {
    return [a, b];
}

let combined = merge(1, 'anma');

// Constraints for Generics...
function mergeObj<T extends object>(a: T, b: T) {
    return { ...a, ...b };
}

// console.log(mergeObj(1, 2)); // Returns {} due to number types cannot be spread, so we need to add constraint to mergeObj function
// to accept only data of type Object.
console.log(mergeObj({username: 'Arjun'}, {age: 25, username: 'Kavin'}));


// Generics in classes and Interfaces
class User<T> {
    constructor(public id: T) {}
}

const ramesh = new User(2);

interface Role<T> {
    roleId: T;
}

class Employee implements Role<string> {
    public roleId: string = 'Arjun';
}