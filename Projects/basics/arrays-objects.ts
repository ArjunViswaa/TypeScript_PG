// let hobbies: (string | number)[] = ['Sports', 'Cooking']; // Method 1
let hobbies: Array<string | number> = ['Sports', 'Cooking']; // Method 2

hobbies.push(10);

let users: Array<string | number>;

users = [1, 'Max'];
users = [5, 1];
users = ['Max', 'Ana'];

// let possibleResults: number[];
let possibleResults: [number, number];
possibleResults = [1, -1];
// possibleResults = [5, 12, 13, 15];


let user: {
    name: string,
    age: number | string,
    hobbies: string[],
    role: {
        description: string,
        id: number,
    }
} = {
    name: 'Arjun',
    age: 27,
    hobbies: ["Kayaking", "Badminton"],
    role: {
        description: "Admin",
        id: 5
    }
};

let val: {} = 'some text'; // -> This means any value which is not null or undefined.
const someObj = {};

let data: Record<string, string | number>;
data = {
    entry1: 1,
    entry2: "String one"
};