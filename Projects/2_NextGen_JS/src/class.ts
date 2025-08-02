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
    protected _firstname = '';
    private _lastname = '';
    protected _age = 0;

    constructor(public firstName: string, public lastName: string, private age: number) {
        this._firstname = firstName;
        this._lastname = lastName;
        this._age = age;
    }

    get profession() {
        return this._profession;
    }

    set profession(val: string) {
        this._profession = val;
    }

    get fullName() {
        return this._firstname + " " + this._lastname;
    }

    // static
    static eid = 'USER';
    static greet() {
        console.log("Hello");
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

// Inheritance
class Employee extends User {
    constructor(public jobTitle: string) {
        super("Employee", "1", 0);
    }

    work() {
        // accessing protected values
        console.log(this._firstname);
    }
}

abstract class UIElement {
    constructor(public identifier: string) {}

    clone(targetLocation: string) {
        // logic for duplicating UI element
        console.log(targetLocation);
    }
}

// const ui = new UIElement(); // cannot create instance of an abstract class
class SideDrawerElement extends UIElement {
    constructor(public identifier: string, public position: 'left | right') {
        super(identifier);
    }
}