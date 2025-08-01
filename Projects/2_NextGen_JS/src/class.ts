// class User {
//     name: string;
//     age: number;

//     constructor(n: string, a: number) {
//         this.name = n;
//         this.age = a;
//     }
// }

// Typescript alternative : 
class User {
    public readonly hobbies: string[] = [];
    private _profession: string = '';

    constructor(public firstName: string, public lastName: string, private age: number) {

    }

    get profession() {
        return this._profession;
    }

    set profession(val: string) {
        this._profession = val;
    }

    get fullName() {
        return this.firstName + " " + this.lastName;
    }

    printAge() {
        console.log('My age : ' + this.age);
    }
}

const arjun = new User('Arjun', 'Viswaa', 27);
const max = new User('Max', 'Sharmer', 36);
// console.log(arjun);
// console.log(max);

// arjun.hobbies = ['Sports']; // Wont work due to readonly keyword
arjun.hobbies.push('Sports');

console.log(arjun.fullName);

// Getters and Setters
arjun.profession = 'Software Developer';
console.log(arjun.profession);