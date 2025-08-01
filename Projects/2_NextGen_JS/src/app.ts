// Code goes here!
const userName = 'Arjun';

// let age = 30;

// userName = 'Max'; // will show error
// age = 27;

// let result = 0;

// function add(a:number, b:number): number {
//     result = a + b;
//     return result;
// }

const add = (a: number = 1, b: number = 1) => {
    return a + b;
}

const printOutput: (a: string | number) => void = output => console.log(output);

// const button = document.querySelector('button');

// if(button) {
//     button.addEventListener('click', event => console.log(event));
// }

// Default function values / parameters
printOutput(add(5));

// Spread Operator
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);
console.log(activeHobbies);

const person = {
    firstName: 'Arjun',
    age: 27
};

const copiedPerson = {...person, profession: 'Engineer'};
console.log(copiedPerson);

// Rest operator...
const multiplyNumbers = (...numbers: number[]) => {
    return numbers.reduce((currResult, currValue) => {
        return currResult + currValue;
    }, 0);
};

// Array and Object restructuring
const [ hobby1, hobby2, ...remainingHobbies ] = hobbies;
const { firstName, age } = person;